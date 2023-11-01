import { createSlice } from '@reduxjs/toolkit';

// Options Slice
export const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    options: 0,
  },
  reducers: {
    increaseOptions: (state) => {
      state.options += 1;
    },
    decreaseOptions: (state) => {
      state.options -= 1;
    },
    setOptionsTo: (state, action) => {
      state.options = action.payload;
    },
  },
});

// Export action creators for the options slice
export const { increaseOptions, decreaseOptions, setOptionsTo } = optionsSlice.actions;

// Export the options reducer
export const optionsReducer = optionsSlice.reducer;

// Question Slice
export const questionSlice = createSlice({
  name: 'question',
  initialState: {
    question: '',
  },
  reducers: {
    setQuestionTo: (state, action) => {
      state.question = action.payload;
    },
  },
});

// Export action creators for the question slice
export const { setQuestionTo } = questionSlice.actions;

// Export the question reducer
export const questionReducer = questionSlice.reducer;
