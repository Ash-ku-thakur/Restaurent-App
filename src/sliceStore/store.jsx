import { configureStore } from "@reduxjs/toolkit";
import ParamsSlicer from "../Slicers/ParamsSlicer";

const Store = configureStore({
  reducer: {
    perameter: ParamsSlicer,
  },
});

export default Store;
