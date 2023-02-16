import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import dataReducer from "./slices/urlDataSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    urlData: dataReducer,
  },
});
