import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  optionsReducer, questionReducer, answersArrReducer, questionToEditReducer, singleCorrectReducer,
  multipleCorrectReducer, warnReducer, selectedFileReducer, answerTypeReducer, questionAnswerArrReducer, isFavoriteReducer,
} from "./quizQuestions";
import { quizNameReducer, quizColorReducer, quizTagsReducer, newTagReducer, imageUrlReducer, quizIDReducer } from "./quizDetails";
import { userInfoReducer, loggedInUserEmailReducer, loggedInUserIDReducer, loggedInUserFavCatsReducer, loggedInUserIDSlice } from "./User";
import { categoriesArrayReducer, quizCategoryReducer } from "./Categories";
import { quizzesArrayReducer } from "./quizzes";


// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["loggedInUserID", "loggedInUserFavCats"],
//   transforms: [loggedInUserIDSlice.transforms],
// };

// const persistedReducer = persistReducer(persistConfig, loggedInUserIDSlice.reducer);

// const persistedUserInfoReducer = persistReducer(persistConfig, userInfoReducer);
// const persistedLoggedInUserEmailReducer = persistReducer(persistConfig, loggedInUserEmailReducer);
// const persistedLoggedInUserIDReducer = persistReducer(persistConfig, loggedInUserIDReducer);
// const persistedLoggedInUserFavCatsReducer = persistReducer(persistConfig, loggedInUserFavCatsReducer);




const store = configureStore({
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
    quizCategory: quizCategoryReducer,
    quizID: quizIDReducer,

    // userInfo: persistedUserInfoReducer,
    // loggedInUserEmail: persistedLoggedInUserEmailReducer,
    // loggedInUserID: persistedLoggedInUserIDReducer,
    // loggedInUserFavCats: persistedLoggedInUserFavCatsReducer,


    userInfo: userInfoReducer,
    loggedInUserEmail: loggedInUserEmailReducer,
    loggedInUserID: loggedInUserIDReducer,
    loggedInUserFavCats: loggedInUserFavCatsReducer,


    categoriesArray: categoriesArrayReducer,

    quizzesArray: quizzesArrayReducer,
  }
});

const persistor = persistStore(store);

export { store, persistor };