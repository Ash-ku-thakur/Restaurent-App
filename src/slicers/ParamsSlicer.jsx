import { createSlice } from "@reduxjs/toolkit";

let ParamsSlicer = createSlice({
  name: "perameter",
  initialState: {
    menuId: '',
  },
  reducers: {
    insertParams: (state, action) => {
      state.menuId = (action.payload);
    },
  },
});

export default ParamsSlicer.reducer;
export let { insertParams } = ParamsSlicer.actions;
