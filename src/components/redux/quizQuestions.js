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
    resetOptions: (state) => {
      console.log('Resetting options state');
      state.options = 0;
    },
  },
});

// Export action creators for the options slice
export const { increaseOptions, decreaseOptions, setOptions, resetOptions } = optionsSlice.actions;

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
    resetQuestion: (state) => {
      console.log('Resetting question state');
      state.question = '';
    },
  },
});

// Export action creators for the question slice
export const { setQuestion, resetQuestion } = questionSlice.actions;

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
    resetAnswersArr: (state) => {
      console.log('Resetting answersArr state');
      state.answersArr = [];
    },
  },
});

// Export action creators for the answersArr slice
export const { setAnswersArr, resetAnswersArr } = answersArrSlice.actions;

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
    resetQuestionToEdit: (state) => {
      console.log('Resetting questionToEdit state');
      state.questionToEdit = null;
    },
  },
});

// Export action creators for the questionToEdit slice
export const { setQuestionToEdit, resetQuestionToEdit } = questionToEditSlice.actions;

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
    resetSingleCorrect: (state) => {
      console.log('Resetting singleCorrect state');
      state.singleCorrect = null;
    },
  },
});

// Export action creators for the singleCorrect slice
export const { setSingleCorrect, resetSingleCorrect } = singleCorrectSlice.actions;

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
    resetMultipleCorrect: (state) => {
      console.log('Resetting multipleCorrect state');
      state.multipleCorrect = [];
    },
  },
});

// Export action creators for the multipleCorrect slice
export const { setMultipleCorrect, resetMultipleCorrect } = multipleCorrectSlice.actions;

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
    resetWarn: (state) => {
      console.log('Resetting warn state');
      state.warn = false;
    },
  },
});

// Export action creators for the warn slice
export const { setWarn, resetWarn } = warnSlice.actions;

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
    resetSelectedFile: (state) => {
      console.log('Resetting selectedFile state');
      state.selectedFile = null;
    },
  },
});

// Export action creators for the selectedFile slice
export const { setSelectedFile, resetSelectedFile } = selectedFileSlice.actions;

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
    resetAnswerType: (state) => {
      console.log('Resetting Multiple state');
      state.answerType = 'Multiple';
    },
  },
});

// Export action creators for the answerType slice
export const { setAnswerType, resetAnswerType } = answerTypeSlice.actions;

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
    resetIsFavorite: (state) => {
      console.log('Resetting isFavorite state');
      state.isFavorite = false;
    },
  },
});

// Export action creators for the isFavorite slice
export const { setIsFavorite, resetIsFavorite } = isFavoriteSlice.actions;

// Export the isFavorite reducer
export const isFavoriteReducer = isFavoriteSlice.reducer;




// question answer array Slice
export const questionAnswerArrSlice = createSlice({
  name: 'questionAnswerArr',
  initialState: {
    questions: []
  },
  reducers: {
    setQuestionAnswerArr: (state, action) => {
      return action.payload;
    },
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    resetQuestionAnswerArr: (state) => {
      console.log('Resetting questionAnswerArr state');
      state.questions = [];
    },
  },
});

// Export action creators for the questionAnswerArr slice
export const { setQuestionAnswerArr, addQuestion, resetQuestionAnswerArr } = questionAnswerArrSlice.actions;

// Export the questionAnswerArr reducer
export const questionAnswerArrReducer = questionAnswerArrSlice.reducer;