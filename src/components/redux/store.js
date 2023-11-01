import { configureStore } from "@reduxjs/toolkit";
import { optionsReducer } from './quizQuestions';

export default configureStore({
  reducer: {
    options: optionsReducer,
  }
});