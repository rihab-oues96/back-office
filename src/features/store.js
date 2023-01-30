import { configureStore } from "@reduxjs/toolkit";
import addChapterReduder from "./chapter/chapterSlice";
import addLessonReducer from "./lesson/LessonSlice";
import modalReducer from "./modal/ModalSlice";
import SelectExerciceReducer from "./selectExercice/SelectExerciceSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    selectExercice: SelectExerciceReducer,
    chapter: addChapterReduder,
    lesson: addLessonReducer,
  },
});
