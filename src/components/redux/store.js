import { configureStore } from "@reduxjs/toolkit";
import {
  optionsReducer, questionReducer, answersArrReducer, questionToEditReducer, singleCorrectReducer,
  multipleCorrectReducer, warnReducer, selectedFileReducer, answerTypeReducer, questionAnswerArrReducer, isFavoriteReducer,
} from "./quizQuestions";

export default configureStore({
  reducer: {
    options: optionsReducer,
    question: questionReducer,
    answersArr: answersArrReducer,
    questionToEdit: questionToEditReducer,
    singleCorrect: singleCorrectReducer,
    multipleCorrect: multipleCorrectReducer,
    warn: warnReducer,
    selectedFile: selectedFileReducer,
    answerType: answerTypeReducer,
    isFavorite: isFavoriteReducer,

    questionAnswerArr: questionAnswerArrReducer,
  }
});