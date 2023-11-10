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




// quizTags Slice
export const quizTagsSlice = createSlice({
  name: 'quizTags',
  initialState: {
    quizTags: [],
  },
  reducers: {
    addQuizTag: (state, action) => {
      state.quizTags.push(action.payload);
    },
    removeQuizTag: (state, action) => {
      state.quizTags = state.quizTags.filter(tag => tag !== action.payload);
    },
    setQuizTags: (state, action) => {
      state.quizTags = action.payload;
    },
  },
});

// Export action creators for the options slice
export const { addQuizTag, removeQuizTag, setQuizTags } = quizTagsSlice.actions;

// Export the options reducer
export const quizTagsReducer = quizTagsSlice.reducer;




// newTag Slice
export const newTagSlice = createSlice({
  name: 'newTag',
  initialState: {
    newTag: null,
  },
  reducers: {
    setNewTag: (state, action) => {
      state.newTag = action.payload;
    },
  },
});

// Export action creators for the options slice
export const { setNewTag } = newTagSlice.actions;

// Export the options reducer
export const newTagReducer = newTagSlice.reducer;
