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

    deleteLesson: (state, action) => {
      state.lessons = state.lessons.filter(
        ({ id }) => id !== action.payload.id
      );
    },


  },
});

export const { addLesson, deleteLesson } = lessonSlice.actions;
export default lessonSlice.reducer;
