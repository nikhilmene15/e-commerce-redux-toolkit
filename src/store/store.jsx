import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import productSlice from "./productSlice";
export const store = configureStore({
  reducer: {
    home: homeSlice,
    product: productSlice,
  },
});
