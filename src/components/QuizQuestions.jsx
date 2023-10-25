import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {
  Box, Button, Paper, Tabs, Tab, Typography, InputLabel, Table, TableContainer,
  TextField, FormControl, Select, MenuItem, IconButton, Checkbox, CircleChecked,
} from '@mui/material';
import '../Styles/Components.css';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { FaFileCsv, FaCheckCircle } from 'react-icons/fa';
import { TfiClose } from 'react-icons/tfi';
import { BsFillCircleFill } from 'react-icons/bs';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import QuestionsAndAnswers from "./QuestionsAndAnswers";


export default function QuizQuestions() {

  const [answerType, setAnswerType] = useState('');
  const [options, setOptions] = useState(0);
  const [question, setQuestion] = useState('');
  const [answersArr, setAnswersArr] = useState([]);
  const [questionToEdit, setQuestionToEdit] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const [questionAnswerArr, setQuestionAnswerArr] = useState
    (
      {
        questions: []
      }
    );


  const quest = {
    questions: [
      {
        type: 'Single',
        question: 'What is the fastest route of all time?',
        answers: ['The Kessel run', 'qwerty', 'what?', 'qwerty'],
      },
      {
        type: 'Multiple',
        question: 'How many planets are there in the solar system?',
        answers: ['1', '8', '9'],
      }
    ]
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const answersList = document.getElementById("answersList");

  const handleAddOptionClick = () => {
    setOptions(options < 4 ? options + 1 : options);
  };

  const handleAnswerTypeChange = (event) => {
    setAnswerType(event.target.value);
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
    setAnswersArr([]);
    setOptions(0);
  };

  // used to clear all fields and reset all variables back to original once a question is created or done being edited.
  const clearAll = () => {
    reset();
    setQuestion('');
    setAnswerType('');
    setQuestionToEdit(null);
  };

  const handleRemoveClick = (i) => {
    // first we create a copy of the existing answersArr array
    const updatedAnswers = [...answersArr];
    // at the index of 'i' remove 1 item from the array
    updatedAnswers.splice(i, 1);
    //then we set the answersArr array equal to the updatedAnswers array we just modified
    setAnswersArr(updatedAnswers);

    //reduce options count
    setOptions(options - 1);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAnswerArrChange = (i, value) => {
    //first we copy the answer array to a new variable 'updatedAnswerArr'
    const updatedAnswerArr = [...answersArr];
    // then we set the value of index position 'i' equal to the 'value' that was passed in.
    updatedAnswerArr[i] = value;
    //Then we update answerArr to be equal to updatedAnswerArr
    setAnswersArr(updatedAnswerArr);
  };

  const handleAddClick = () => {
    // because we are setting 'questionToEdit' to a position of the array, it could be that we wish to edit the 
    // first question in the array which is position 0. But because 0 evaluates to false, the first question 
    // cannot be edited.So we must evaluate whether 'questionToEdit' is null, instead of weather it exists. 
    if (questionToEdit !== null) {
      editQuestionInPlace();
    } else {
      setQuestionAnswerArr((prevState) => ({
        ...prevState,
        questions: [
          ...prevState.questions,
          {
            type: answerType,
            question: question,
            answers: answersArr
          }
        ]
      }));

      clearAll();
    }

  };

  const handleRemoveQuestion = (i) => {
    // first we create a copy of the existing questions objects in questionAnswerArr array
    const updatedQuestionAnswerArr = [...questionAnswerArr.questions];
    // then we remove 1 of the objects at position 'i' of the array (removing both the question and the answers)
    updatedQuestionAnswerArr.splice(i, 1);
    // then we set questionAnswerArr equal to updatedQuestionAnswerArr which no longer contains the targeted object in the array
    setQuestionAnswerArr({
      questions: updatedQuestionAnswerArr
    });
  };


  const handleEditQuestion = (i) => {
    setAnswerType(questionAnswerArr.questions[i].type);
    // we set 'question' in state equal to the selected value at position 'i' of the questionAnswerArr array.
    setQuestion(questionAnswerArr.questions[i].question);
    // we set the value of options equal to the length of the answers array at position 'i' of the questionAnswerArr array.
    setOptions(questionAnswerArr.questions[i].answers.length);
    // we set the answersArr array equal to the array of answers at position 'i' of the questionAnswerArr array, which then populates the answer options text fields with answers from the selected question.
    setAnswersArr(questionAnswerArr.questions[i].answers);
    // sets the questionAnswerArr position that will be edited so we can edit and update the correct question while also telling handleAddClick that we are editing and not creating a new question.
    setQuestionToEdit(i);
  };

  const editQuestionInPlace = () => {
    // first we create a copy of the existing questions objects in questionAnswerArr array
    const updatedQuestionAnswerArr = [...questionAnswerArr.questions];
    // then we create a variable that will contain our updated question.
    const updatedQuestion = {
      type: answerType,
      question: question,
      answers: answersArr
    };
    // then we splice our updated question back into the at the same position the question we are editing originally was.
    updatedQuestionAnswerArr.splice(questionToEdit, 1, updatedQuestion);
    setQuestionAnswerArr({
      questions: updatedQuestionAnswerArr
    });

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
      if (selectedOption === index) {
        setSelectedOption(null);
      } else {
        setSelectedOption(index);
      }
    };

    for (let i = 0; i < options; i++) {
      // Assign options the four letters of the optionsArray
      optionFields.push(
        <Box key={i} sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
          <Checkbox
            icon={<BsFillCircleFill color="#c6c6c6" />}
            checkedIcon={<FaCheckCircle color="#67c27c" />}

            onChange={() => {
              if (answerType === 'Single') {
                handleCheckBoxChange(i);
              } else if (answerType === 'Multiple') {
                console.log('yay!');
              }
            }}
            checked={selectedOption === i}
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
      <Button
        variant="outlined"
        size='small'
        id="importButton"
        sx={{
          p: 0,
          pr: 1,
          borderRadius: '10px',
          color: '#a2a2a2',
          borderColor: '#c4c4c4',
          '&:hover': {
            borderColor: 'black',
            backgroundColor: 'white'
          }
        }}
      >
        <IconButton>
          <FaFileCsv color='green' />
        </IconButton>
        Import using CSV
      </Button>
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
              <MenuItem value={'Single'}>Single Choice</MenuItem>
              <MenuItem value={'Multiple'}>Multiple Choice</MenuItem>
              <MenuItem value={'TypeIn'}>Type in Answer</MenuItem>
            </Select>

            {(answerType === 'Single' || answerType === 'Multiple') && (
              // show or hide 'Add another option' button
              <>
                <Box id='answersList'>
                  {generateOptionFields()}
                </Box>
                <Box sx={{ mt: 1 }}>
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
              quizInfo={questionAnswerArr}
              // pass the array containing the question/answer
              //info to QuestionsAndAnswers
              questionWidth={350}
              // pass in the value we want the width of the
              //question /answer column to be so it is displayed correctly.
              handleRemoveQuestion={handleRemoveQuestion}
              handleEditQuestion={handleEditQuestion}
            />

          </Table>
        </TableContainer>
      </Box >

    </Box>
  );
};  