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
    setOptions: (state, action) => {
      state.options = action.payload;
    },
  },
});

// Export action creators for the options slice
export const { increaseOptions, decreaseOptions, setOptions } = optionsSlice.actions;

// Export the options reducer
export const optionsReducer = optionsSlice.reducer;




// Question Slice
export const questionSlice = createSlice({
  name: 'question',
  initialState: {
    question: '',
  },
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
  },
});

// Export action creators for the question slice
export const { setQuestion } = questionSlice.actions;

// Export the question reducer
export const questionReducer = questionSlice.reducer;




// answers Array Slice
export const answersArrSlice = createSlice({
  name: 'answersArr',
  initialState: {
    answersArr: [],
  },
  reducers: {
    setAnswersArr: (state, action) => {
      state.answersArr = action.payload;
    },
  },
});

// Export action creators for the answersArr slice
export const { setAnswersArr } = answersArrSlice.actions;

// Export the answersArr reducer
export const answersArrReducer = answersArrSlice.reducer;




// question to edit Slice
export const questionToEditSlice = createSlice({
  name: 'questionToEdit',
  initialState: {
    questionToEdit: null,
  },
  reducers: {
    setQuestionToEdit: (state, action) => {
      state.questionToEdit = action.payload;
    },
  },
});

// Export action creators for the questionToEdit slice
export const { setQuestionToEdit } = questionToEditSlice.actions;

// Export the questionToEdit reducer
export const questionToEditReducer = questionToEditSlice.reducer;




// single correct answer Slice
export const singleCorrectSlice = createSlice({
  name: 'singleCorrect',
  initialState: {
    singleCorrect: null,
  },
  reducers: {
    setSingleCorrect: (state, action) => {
      state.singleCorrect = action.payload;
    },
  },
});

// Export action creators for the singleCorrect slice
export const { setSingleCorrect } = singleCorrectSlice.actions;

// Export the singleCorrect reducer
export const singleCorrectReducer = singleCorrectSlice.reducer;




// multiple correct answer Slice
export const multipleCorrectSlice = createSlice({
  name: 'multipleCorrect',
  initialState: {
    multipleCorrect: [],
  },
  reducers: {
    setMultipleCorrect: (state, action) => {
      state.multipleCorrect = action.payload;
    },
  },
});

// Export action creators for the multipleCorrect slice
export const { setMultipleCorrect } = multipleCorrectSlice.actions;

// Export the multipleCorrect reducer
export const multipleCorrectReducer = multipleCorrectSlice.reducer;




// warn Slice
export const warnSlice = createSlice({
  name: 'warn',
  initialState: {
    warn: false,
  },
  reducers: {
    setWarn: (state, action) => {
      state.warn = action.payload;
    },
  },
});

// Export action creators for the warn slice
export const { setWarn } = warnSlice.actions;

// Export the warn reducer
export const warnReducer = warnSlice.reducer;




// selected File Slice
export const selectedFileSlice = createSlice({
  name: 'selectedFile',
  initialState: {
    selectedFile: null,
  },
  reducers: {
    setSelectedFile: (state, action) => {
      state.selectedFile = action.payload;
    },
  },
});

// Export action creators for the selectedFile slice
export const { setSelectedFile } = selectedFileSlice.actions;

// Export the selectedFile reducer
export const selectedFileReducer = selectedFileSlice.reducer;




// answer type Slice
export const answerTypeSlice = createSlice({
  name: 'answerType',
  initialState: {
    answerType: 'Multiple',
  },
  reducers: {
    setAnswerType: (state, action) => {
      state.answerType = action.payload;
    },
  },
});

// Export action creators for the answerType slice
export const { setAnswerType } = answerTypeSlice.actions;

// Export the answerType reducer
export const answerTypeReducer = answerTypeSlice.reducer;




// is favorite Slice
export const isFavoriteSlice = createSlice({
  name: 'isFavorite',
  initialState: {
    isFavorite: false,
  },
  reducers: {
    setIsFavorite: (state, action) => {
      state.isFavorite = action.payload;
    },
  },
});

// Export action creators for the isFavorite slice
export const { setIsFavorite } = isFavoriteSlice.actions;

// Export the isFavorite reducer
export const isFavoriteReducer = isFavoriteSlice.reducer;




// question answer array Slice
export const questionAnswerArrSlice = createSlice({
  name: 'questionAnswerArr',
  initialState: {
    questionAnswerArr: {
      questions: []
    }
  },
  reducers: {
    setQuestionAnswerArr: (state, action) => {
      state.questionAnswerArr = action.payload;
    },
  },
});

// Export action creators for the questionAnswerArr slice
export const { setQuestionAnswerArr } = questionAnswerArrSlice.actions;

// Export the questionAnswerArr reducer
export const questionAnswerArrReducer = questionAnswerArrSlice.reducer;