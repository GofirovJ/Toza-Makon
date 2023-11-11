import { configureStore } from "@reduxjs/toolkit";
import getDatas from "./storeSlice";
export const store = configureStore({
  reducer: {
    data: getDatas,
  },
});
