import { configureStore } from "@reduxjs/toolkit";
import ParamsSlicer from "../slicers/ParamsSlicer";

const Store = configureStore({
  reducer: {
    perameter: ParamsSlicer,
  },
});

export default Store;
