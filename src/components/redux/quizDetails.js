import { createSlice } from '@reduxjs/toolkit';

// quizName Slice
export const quizNameSlice = createSlice({
  name: 'quizName',
  initialState: {
    quizName: null,
  },
  reducers: {
    setQuizName: (state, action) => {
      state.quizName = action.payload;
    },
  },
});

// Export action creators for the quizName slice
export const { setQuizName } = quizNameSlice.actions;

// Export the quizName reducer
export const quizNameReducer = quizNameSlice.reducer;




// quizColor Slice
export const quizColorSlice = createSlice({
  name: 'quizColor',
  initialState: {
    quizColor: null,
  },
  reducers: {
    setQuizColor: (state, action) => {
      state.quizColor = action.payload;
    },
  },
});

// Export action creators for the options slice
export const { setQuizColor } = quizColorSlice.actions;

// Export the options reducer
export const quizColorReducer = quizColorSlice.reducer;
