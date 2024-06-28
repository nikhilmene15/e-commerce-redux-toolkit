import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: [],
    gridView: true,
    listView: false,
    sort: "lowest",
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
      if (state.sort) {
        state.allProducts.sort((a, b) => a.price - b.price);
      }
    },
    setGridView: (state) => {
      state.gridView = true;
      state.listView = false;
    },
    setListView: (state, action) => {
      state.listView = true;
      state.gridView = false;
    },
    sortProduct: (state, action) => {
      const sortedProducts = [...state.allProducts];
      switch (action.payload) {
        case "lowest":
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case "highest":
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case "a-z":
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "z-a":
          sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          break;
      }
      state.allProducts = sortedProducts;
      state.sort = action.payload; // Update the sort state
    },
  },
});
export const { setAllProducts, setGridView, setListView, sortProduct } =
  productSlice.actions;
export default productSlice.reducer;
