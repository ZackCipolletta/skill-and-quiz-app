import { configureStore } from "@reduxjs/toolkit";
import {
  optionsReducer, questionReducer, answersArrReducer, questionToEditReducer, singleCorrectReducer,
  multipleCorrectReducer, warnReducer, selectedFileReducer, answerTypeReducer, questionAnswerArrReducer, isFavoriteReducer,
} from "./quizQuestions";
import { quizNameReducer, quizColorReducer, quizTagsReducer, newTagReducer, imageUrlReducer } from "./quizDetails";
import { userInfoReducer } from "./User";
import { categoriesArrayReducer } from "./Categories";
import { quizzesArrayReducer } from "./quizzes";

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

    quizName: quizNameReducer,
    quizColor: quizColorReducer,
    quizTags: quizTagsReducer,
    newTag: newTagReducer,
    imageUrl: imageUrlReducer,

    userInfo: userInfoReducer,

    categoriesArray: categoriesArrayReducer,

    quizzesArray: quizzesArrayReducer,
  }
});