import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: [],
  reducers: {
    featureProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { featureProducts } = homeSlice.actions;

export default homeSlice.reducer;
