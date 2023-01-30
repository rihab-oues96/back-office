import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal/ModalSlice";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
      },
});
