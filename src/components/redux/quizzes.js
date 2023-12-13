import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';


// quizzes array Slice
export const quizzesArraySlice = createSlice({

  name: 'quizzesArray',
  initialState: [],
  reducers: {
    setQuizzesArray: (state, action) => {
      return action.payload;
    },
    addQuiz: (state, action) => {
      state.push(action.payload[0]);
    },
    favoriteQuiz: (state, action) => {
      // here we pass in an id of a selected quiz and then find that quiz in the array 
      // of all quizzes and assign it to the variable 'quizFavToggle'
      const quizFavToggle = state.find(quiz => quiz.id === action.payload);
      if (quizFavToggle) {
        // we then toggle the 'Favorite' attribute to the opposite of whatever value it was assigned (true or false);
        quizFavToggle.Favorite = !quizFavToggle.Favorite;
      }
    },
    deleteQuiz: (state, action) => {
      return state.filter(quiz => quiz.id !== action.payload);
    },
    searchQuizzes: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      return state.filter(quiz => quiz.Name.toLowerCase().includes(searchTerm));
    },
  },
});

// Export action creators for the quizzesArray slice
export const { setQuizzesArray, addQuiz, favoriteQuiz, deleteQuiz, searchQuizzes, resetQuizzes } = quizzesArraySlice.actions;

// Export the quizzesArray reducer
export const quizzesArrayReducer = quizzesArraySlice.reducer;