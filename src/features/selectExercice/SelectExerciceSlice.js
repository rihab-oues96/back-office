import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSelected: false,
  name: "",
};

const SelectSlice = createSlice({
  name: "selectExercice",
  initialState,
  reducers: {
    selectExercice: (state, action) => {
      state.isSelected = true;
      state.name = action.payload.name;
    },
  },
});

export const { selectExercice } = SelectSlice.actions;
export default SelectSlice.reducer;
