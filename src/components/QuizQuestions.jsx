import React, { useEffect } from "react";
import {
  Box, Button, Paper, Typography, InputLabel, Table, TableContainer, Link,
  TextField, FormControl, Select, MenuItem, IconButton, Checkbox,
} from '@mui/material';
import '../Styles/Components.css';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { FaCheckCircle } from 'react-icons/fa';
import { TfiClose } from 'react-icons/tfi';
import { BsFillCircleFill } from 'react-icons/bs';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import QuestionsAndAnswers from "./QuestionsAndAnswers";
import FilePicker from "./FilePicker";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import {
  setOptions, decreaseOptions, setQuestion, setAnswersArr,
  setQuestionToEdit, setSingleCorrect, setMultipleCorrect,
  setWarn, setSelectedFile, setAnswerType, setIsFavorite, setQuestionAnswerArr, addQuestion
} from "./redux/quizQuestions";


export default function QuizQuestions() {

  const dispatch = useDispatch();

  const { options } = useSelector((state) => state.options);
  const { question } = useSelector((state) => state.question);
  const { answersArr } = useSelector((state) => state.answersArr);
  const { questionToEdit } = useSelector((state) => state.questionToEdit);
  const { singleCorrect } = useSelector((state) => state.singleCorrect);
  const { multipleCorrect } = useSelector((state) => state.multipleCorrect);
  const { warn } = useSelector((state) => state.warn);
  const { selectedFile } = useSelector((state) => state.selectedFile);
  const { answerType } = useSelector((state) => state.answerType);
  const { isFavorite } = useSelector((state) => state.isFavorite);


  const questionAnswerArr = useSelector((state) => state.questionAnswerArr);

  const quiz = {
    questions: [
      {
        type: 'Single',
        favorite: false,
        correct: 2,
        question: 'What is the fastest route of all time?',
        answers: ['The Kessel run', 'qwerty', 'what?', 'qwerty'],
      },
      {
        type: 'Multiple',
        favorite: true,
        correct: [1, 2],
        question: 'How many planets are there in the solar system?',
        answers: ['1', '8', '9'],
      }
    ]
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleAddOptionClick = () => {
    dispatch(setOptions(options < 4 ? options + 1 : options));
    dispatch(setWarn(options === 4 ? true : false));
  };

  const handleAnswerTypeChange = (event) => {
    dispatch(setAnswerType(event.target.value));
    dispatch(setSingleCorrect(null));
    dispatch(setMultipleCorrect([]));
  };


  // ran into issue I was not able to resolve when this was directly called in handleAnswerTypeChange.
  // This is the best solution I could think of

  // ERROR: BREAKING CHANGE: webpack < 5 used to include polyfills for 
  // node.js core modules by default. This is no longer the case. Verify 
  // if you need this module and configure a polyfill for it.
  useEffect(() => {
    if (answerType === 'TypeIn' || answerType === '') {
      reset();
    }
  }, [answerType]);

  // used to clear answer array when changing answer type to reset 'options' and the array of answers.
  const reset = () => {
    dispatch(setAnswersArr([]));
    dispatch(setOptions(0));
    dispatch(setWarn(false));
    setIsFavorite(false);
    dispatch(setIsFavorite(false));
  };

  // used to clear all fields and reset all variables back to original once a question is created or done being edited.
  const clearAll = () => {
    reset();
    dispatch(setQuestion(''));
    dispatch(setAnswerType(''));
    dispatch(setQuestionToEdit(null));
    dispatch(setSingleCorrect(null));
    dispatch(setMultipleCorrect([]));
  };

  const handleRemoveClick = (i) => {
    // first we create a copy of the existing answersArr array
    const updatedAnswers = [...answersArr];
    // at the index of 'i' remove 1 item from the array
    updatedAnswers.splice(i, 1);
    //then we set the answersArr array equal to the updatedAnswers array we just modified
    dispatch(setAnswersArr(updatedAnswers));

    dispatch(setWarn(false));

    dispatch(decreaseOptions());
  };

  const handleQuestionChange = (event) => {
    dispatch(setQuestion(event.target.value));
  };

  const handleAnswerArrChange = (i, value) => {
    //first we copy the answer array to a new variable 'updatedAnswerArr'
    const updatedAnswerArr = [...answersArr];
    // then we set the value of index position 'i' equal to the 'value' that was passed in.
    updatedAnswerArr[i] = value;
    //Then we update answerArr to be equal to updatedAnswerArr
    dispatch(setAnswersArr(updatedAnswerArr));
  };

  const handleFileSelected = (file) => {
    dispatch(setSelectedFile(file));
  };

  const handleAddClick = () => {
    // because we are setting 'questionToEdit' to a position of the array, it could be that we wish to edit the 
    // first question in the array which is position 0. But because 0 evaluates to false, the first question 
    // cannot be edited.So we must evaluate whether 'questionToEdit' is null, instead of weather it exists. 
    if (questionToEdit !== null) {
      editQuestionInPlace();
    } else {

      dispatch(addQuestion(
        {
          type: answerType,
          correct: answerType !== 'TypeIn' ? (singleCorrect || multipleCorrect) : undefined,
          question: question,
          answers: answersArr,
        },
      ));

      clearAll();
    }

  };


  useEffect(() => {
    console.log(questionAnswerArr);
  }, [questionAnswerArr]);

  const editQuestionInPlace = () => {
    // first we create a copy of the existing questions objects in questionAnswerArr array
    const updatedQuestionAnswerArr = [...questionAnswerArr.questions];
    // then we create a variable that will contain our updated question.
    const updatedQuestion = {
      type: answerType,
      favorite: isFavorite,
      correct: answerType !== 'TypeIn' ? (singleCorrect || multipleCorrect) : undefined,
      question: question,
      answers: answersArr
    };
    // then we splice our updated question back into the at the same position the question we are editing originally was.
    updatedQuestionAnswerArr.splice(questionToEdit, 1, updatedQuestion);


    dispatch(setQuestionAnswerArr({
      questions: updatedQuestionAnswerArr,
    }));

    clearAll();
  };

  const addOptionButton = (
    <Button onClick={handleAddOptionClick}>
      <IconButton>
        <AddBoxOutlinedIcon sx={{ color: "rgba(72, 139, 253, 255)" }}
        />
      </IconButton>

      <Typography
        component="span"
        sx={{
          color: '#a2a2a2'
        }}>
        Add another option
      </Typography>
    </Button>
  );

  const generateOptionFields = () => {
    const optionFields = [];
    const optionsArray = ['A', 'B', 'C', 'D'];

    const handleCheckBoxChange = (index) => {
      if (answerType === 'Single') {
        // first we take the selected option the user clicked (the index value) and check if it is equal to the current
        // value for 'singleOption'(checking to see if this option is already selected). 
        // if it is already selected, we deselect it and uncheck the box. Otherwise we check the box
        dispatch(setSingleCorrect(singleCorrect === index ? null : index));
      } else if (answerType === 'Multiple') {
        // when selecting multiple correct answers, we first create a copy of the array of multiple correct answers.
        const updatedMultipleCorrect = [...multipleCorrect];
        //first we check to see if the array already includes the option the user clicked on (the index value).
        if (updatedMultipleCorrect.includes(index)) {
          // if so, we then splice out 1 value at the [index] position, thus removing the value from
          // the array and therefore unselecting or unchecking that answer.
          updatedMultipleCorrect.splice(updatedMultipleCorrect.indexOf(index), 1);
        } else {
          // if the array does not already include the selected value (index) then we add it to the array (which then checks the corresponding box on the page).
          updatedMultipleCorrect.push(index);
        }
        //lastly we set value of 'multipleCorrect' to the updated array contained in 'updatedMultipleCorrect'
        dispatch(setMultipleCorrect(updatedMultipleCorrect));
      }
    };

    for (let i = 0; i < options; i++) {
      // Assign options the four letters of the optionsArray
      optionFields.push(
        <Box key={i} sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
          <Checkbox
            icon={<BsFillCircleFill color="#c6c6c6" />}
            checkedIcon={<FaCheckCircle color="#67c27c" />}

            onChange={() => handleCheckBoxChange(i)}
            // this determines whether the box is checked or not. If the answerType is 'single'
            // then the box is checked if the 'singleCorrect' state is equal to the corresponding value (in this case the index position).
            checked={answerType === 'Single' ? singleCorrect === i
              :
              // otherwise the box is checked if the 'multipleCorrect' state contains the index position.
              multipleCorrect.includes(i)}
          />
          <TextField
            required
            value={answersArr[i]} // points to a different answer in the array (using i). 
            // Without the index to select the position of the array, each answer TextField 
            // becomes the same. Modifying one, modifies each other TextField to be equal. 
            onChange={(e) => handleAnswerArrChange(i, e.target.value)}
            id={`Quiz-Answer-${optionsArray[i]}`}
            placeholder={`Enter Option ${optionsArray[i]}`}
            name={`Quiz-Answer-${optionsArray[i]}`}
            className='input-field'
            height='50px'
            size='small'
            sx={{
              width: 200
            }}
            InputProps={{ sx: { borderRadius: 2 } }}
            autoFocus
          />
          {i > 0 && ( // if there is more than 1 answer option, add an X icon to 
            // remove or delete that specified TextField
            <IconButton sx={{ transform: "scale(0.5)" }}
              onClick={() => handleRemoveClick(i)}>
              <TfiClose />
            </IconButton>
          )}
        </Box>
      );
    }
    return optionFields;
  };


  return (

    <Box sx={{ width: '100%' }}>
      <Typography className='inputLabel' sx={{ mt: 1 }} >
        Have Questions Already? Import them!
      </Typography>

      <FilePicker
        onFileSelected={handleFileSelected}
        setQuestionAnswerArr={setQuestionAnswerArr}
      />
      {selectedFile && (
        <Box>
          <p>Selected File: {selectedFile.name}</p>
        </Box>
      )}

      <Link sx={{ marginLeft: '1rem' }}
        href="https://docs.google.com/spreadsheets/d/1wpM2PH8hfInh9ajWW5g5XR7BRCWOb0PyT8sfx6inAYc/edit?usp=drive_link">
        Example CSV
      </Link>

      <Typography className='inputLabel' sx={{ mt: 1 }} >
        Questions
      </Typography>
      <TextField
        required
        id='QuizName'
        placeholder='Enter Question'
        name='QuizName'
        className='input-field'
        height='50px'
        size='small'
        value={question}
        onChange={handleQuestionChange}
        sx={{
          width: !isMobile ? 500 : 150
        }}
        InputProps={{ sx: { borderRadius: 2 } }}
      />

      <Box sx={{ mt: 3 }}>
        <FormControl size='small'>
          <InputLabel id="select-answer-type"
            sx={{
              color: "#a2a2a2"
            }}
          >
            Answer Type
          </InputLabel>
          <div >
            <Select

              labelId='select-answer-type'
              id='select-answer-type'
              value={answerType}
              onChange={handleAnswerTypeChange}
              label='answerType'
              sx={{
                minWidth: 200,
                mr: 2,
                borderRadius: 2
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Multiple'}>Multiple Choice</MenuItem>
              <MenuItem value={'Single'}>Single Choice</MenuItem>
              <MenuItem value={'TypeIn'}>Type in Answer</MenuItem>
            </Select>

            {(answerType === 'Single' || answerType === 'Multiple') && (
              // show or hide 'Add another option' button
              <>
                <Box id='answersList'>
                  {generateOptionFields()}
                </Box>
                <Box sx={{ mt: 1 }}>
                  {warn ?
                    <Typography sx={{ color: 'red' }}>
                      You cannot add more than 4 possible answers
                    </Typography>
                    : null
                  }
                  {addOptionButton}
                </Box>
              </>
            )}

            <Button sx={{
              display: 'block',
              mt: 2
            }}
              className="button-mediumBlue"
              onClick={handleAddClick}
            >
              Add Question
            </Button>

          </div>
        </FormControl>
      </Box>

      <Box sx={{ mt: 5 }}>

        <TableContainer component={Paper}>
          <Table>

            <QuestionsAndAnswers
              // pass the array containing the question/answer
              //info to QuestionsAndAnswers
              className="table-with-borders"
            />

          </Table>
        </TableContainer>
      </Box >

    </Box>
  );
};  