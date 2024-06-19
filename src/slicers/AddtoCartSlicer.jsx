import { createSlice } from "@reduxjs/toolkit";

let AddtoCartSlicer = createSlice({
  name: "AddToCart",
  initialState: {
    cartList: [],
  },
  reducers: {
    addToCartData: (state, action) => {
      state.cartList.push(action.payload);
    },
    deleteToCart: (state, action) => {
      let index = state.cartList.findIndex((p) => p?.info?.id == action?.payload?.info?.id)
      state.cartList.splice(index, 1);
    },
    deleteAllCart: (state) => {
      state.cartList = []
    },
  },
});

export default AddtoCartSlicer.reducer;
export let { addToCartData, deleteToCart, deleteAllCart } = AddtoCartSlicer.actions;
