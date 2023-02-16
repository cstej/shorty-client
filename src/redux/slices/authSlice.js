import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import axiosConfig from "../../api/apiConfig";

export const loginSubmit = createAsyncThunk("auth/login", async (payload) => {
  const response = await axiosConfig.post("api/auth/login", payload);
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await axiosConfig.get("api/auth/logout");
  Cookies.remove("user");
  return response.data;
});

export const signupSubmit = createAsyncThunk("auth/signup", async (payload) => {
  const response = await axiosConfig.post("api/auth/signup", payload);
  return response.data;
});

export const getUser = createAsyncThunk("auth/profile", async () => {
  const response = await axiosConfig.get("api/auth/profile");
  return response.data;
});

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const userCookie = Cookies.get("user");

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    user: userCookie ? JSON.parse(userCookie) : null,
    token: null,
    status: STATUSES.IDLE,
  },

  reducers: {
    login: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginSubmit.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.status = STATUSES.IDLE;
        const user = JSON.stringify(payload.user);
        Cookies.set("user", user);
        toast.dismiss();
        toast.success("Login Successful");
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.status = STATUSES.IDLE;
        state.user = null;

        toast.success("Logout Successful");
      })
      .addCase(signupSubmit.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.status = STATUSES.IDLE;
        const user = JSON.stringify(payload.user);
        Cookies.set("user", user);
        toast.dismiss();
        toast.success("Signup Successful");
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      });
  },
});
//   builder
//     .addCase(loginSubmit.pending, (state, { payload }) => {
//       state.status = STATUSES.LOADING;
//       toast.loading("Loading...");
//     })
//     .addCase(loginSubmit.fulfilled, (state, { payload }) => {
//       state.token = payload.token;
//       state.user = payload.user;
//       state.status = STATUSES.IDLE;
//       const user = JSON.stringify(payload.user);
//       Cookies.set("user", user);
//       toast.dismiss();
//       toast.success("Login Successful");
//     })
//     .addCase(loginSubmit.rejected, (state, { payload }) => {
//       state.status = STATUSES.ERROR;
//     })
//     .addCase(logout.fulfilled, (state, { payload }) => {
//       state.status = STATUSES.IDLE;
//       state.user = null;
//       Cookies.remove("user");
//       toast.success("Logout Successful");
//     })
//     .addCase(logout.rejected, (state, { payload }) => {
//       state.status = STATUSES.LOADING;
//       toast.error(payload.message);
//     });
// },

export const { login } = authSlice.actions;

export default authSlice.reducer;
