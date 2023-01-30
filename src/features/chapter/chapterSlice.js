import { createSlice } from "@reduxjs/toolkit";
import { chapters } from "../../data";

const initialState = {
  chapters,
};

const chapterSlice = createSlice({
  name: "chapter",
  initialState,
  reducers: {
    addChapter: (state, action) => {
      state.chapters = [...state.chapters, action.payload];

      // state.id = action.payload.id;
      // state.image = action.payload.image;
      // state.title = action.payload.title;
      // state.description = action.payload.description;
    },

    editChapter: (state, action) => {
      const { id, image, title, description } = action.payload;
      const existingChapter = state.find((chapter) => chapter.id === id);
      if (existingChapter) {
        existingChapter.id = id;
        existingChapter.image = image;
        existingChapter.title = title;
        existingChapter.description = description;
      }
    },
  },
});

export const { addChapter } = chapterSlice.actions;
export default chapterSlice.reducer;
