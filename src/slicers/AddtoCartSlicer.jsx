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
  },
});

export default AddtoCartSlicer.reducer;
export let { addToCartData } = AddtoCartSlicer.actions;
