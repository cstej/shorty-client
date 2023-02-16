import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../../api/apiConfig";

export const fetchAllUrls = createAsyncThunk("/api/urls", async () => {
  const response = await axiosConfig.get("/api/urls");
  return response.data;
});

export const deleteUrl = createAsyncThunk(
  "/api/url/:shortId",
  async (payload) => {
    const response = await axiosConfig.delete(`/api/url/${payload}`);
    return response.data;
  }
);

export const createUrl = createAsyncThunk("/api/url", async (payload) => {
  const response = await axiosConfig.post("/api/url", payload);
  return response.data;
});

export const STATUS = Object.freeze({
  idle: "idle",
  loading: "loading",
  error: "error",
});

const urlData = createSlice({
  name: "urlData",
  initialState: {
    data: [],
    status: STATUS.idle,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUrls.fulfilled, (state, { payload }) => {
        state.data.push(...payload);
      })
      .addCase(deleteUrl.fulfilled, (state, { payload }) => {
        state.data = state.data.filter(
          (url) => url.shortId !== payload.url.shortId
        );
      })
      .addCase(createUrl.fulfilled, (state, { payload }) => {
        state.data.push(payload.url);
      });
  },
});

// export const {} = urlData.actions;

export default urlData.reducer;
