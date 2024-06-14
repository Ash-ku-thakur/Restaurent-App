import { configureStore } from "@reduxjs/toolkit";
import AddtoCartSlicer from "../slicers/AddtoCartSlicer";

const Store = configureStore({
  reducer: {
    AddToCart: AddtoCartSlicer
  },
});

export default Store;
