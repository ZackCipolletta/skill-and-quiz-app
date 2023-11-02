import FilePicker from "./FilePicker";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { increaseOptions, decreaseOptions, setOptions, setQuestion, setAnswersArr, setQuestionEdit } from "./redux/quizQuestions";



export default function QuizQuestions() {

  const dispatch = useDispatch();

  const [answerType, setAnswerType] = useState('Multiple');
  const { options } = useSelector((state) => state.options);
  const { question } = useSelector((state) => state.question)
  const { answersArr } = useSelector((state) => state.answersArr)



  dispatch(setAnswersArr([]))
  dispatch(setOptions(0))



  setQuestionEdit to setQuestionToEdit.



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
      state.answersArr  = action.payload;
    },
  },
});

// Export action creators for the answersArr slice
export const { setAnswersArr } = answersArrSlice.actions;

// Export the answersArr reducer
export const answersArrReducer = answersArrSlice.reducer;



// questionToEdit Slice
export const questionToEditSlice = createSlice({
  name: 'answersArr',
  initialState: {
    questionToEdit: null,
  },
  reducers: {
    setQuestionEdit: (state, action) => {
      state.questionToEdit  = action.payload;
    },
  },
});

// Export action creators for the answersArr slice
export const { questionToEdit } = questionToEditSlice.actions;

// Export the answersArr reducer
export const questionToEditReducer = questionToEditSlice.reducer;


const [questionAnswerArr, setQuestionAnswerArr] = useState
(
  {
    questions: []
  }
);




dispatch(setQuestionAnswerArr({
  questions: [
    ...questionAnswerArr.questions,
    {
      type: answerType,
      correct: answerType !== 'TypeIn' ? (singleCorrect || multipleCorrect) : undefined,
      question: question,
      answers: answersArr,
    },
  ],
}));

dispatch(setQuestionAnswerArr((prevState) => ({
  ...prevState,
  questions: [
    ...prevState.questions,
    {
      type: answerType,
      correct: answerType !== 'TypeIn' ? (singleCorrect || multipleCorrect) : undefined,
      question: question,
      answers: answersArr,
    },
  ],
})));



{
  "questions": [
      {
          "type": "Multiple",
          "correct": [],
          "question": "aasdafsdf",
          "answers": [
              "asdfasdf"
          ]
      },
      {
          "type": "Multiple",
          "correct": [],
          "question": "question 2",
          "answers": [
              "aaaa",
              "bbbb",
              "cccc",
              "dddd"
          ]
      }
  ]
}