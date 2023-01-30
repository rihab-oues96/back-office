import { createSlice } from "@reduxjs/toolkit";
import { lessons } from "../../data";

const initialState = {
  lessons,
};

const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    addLesson: (state, action) => {
      state.lessons = [...state.lessons, action.payload];
    },
  },
});

export const { addLesson } = lessonSlice.actions;
export default lessonSlice.reducer;
