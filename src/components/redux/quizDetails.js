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
    resetQuizName: (state) => {
      console.log('Resetting quiz name state');
      state.quizName = null;
    },
  },
});

// Export action creators for the quizName slice
export const { setQuizName, resetQuizName } = quizNameSlice.actions;

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
    resetQuizColor: (state) => {
      console.log('Resetting quiz color state');
      state.quizColor = null;
    },
  },
});

// Export action creators for the quizColor slice
export const { setQuizColor, resetQuizColor } = quizColorSlice.actions;

// Export the quizColor reducer
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
    resetQuizTags: (state) => {
      console.log('Resetting quiz tags state');
      state.quizTags= [];
    },
  },
});

// Export action creators for the quizTags slice
export const { addQuizTag, removeQuizTag, setQuizTags, resetQuizTags } = quizTagsSlice.actions;

// Export the quizTags reducer
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
    resetNewTag: (state) => {
      console.log('Resetting new tag state');
      state.newTag = null;
    },
  },
});

// Export action creators for the newTag slice
export const { setNewTag, resetNewTag } = newTagSlice.actions;

// Export the newTag reducer
export const newTagReducer = newTagSlice.reducer;



// imageUrl Slice
export const imageUrlSlice = createSlice({
  name: 'imageUrl',
  initialState: {
    imageUrl: null,
  },
  reducers: {
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
    resetImageUrl: (state) => {
      console.log('Resetting imageURL state');
      state.imageUrl = null;
    },
  },
});

// Export action creators for the imageUrl slice
export const { setImageUrl, resetImageUrl } = imageUrlSlice.actions;

// Export the imageUrl reducer
export const imageUrlReducer = imageUrlSlice.reducer;
