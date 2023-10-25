import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {
  Box, Button, Paper, Tabs, Tab, Typography, InputLabel, Table, TableContainer,
  TextField, FormControl, Select, MenuItem, IconButton,
} from '@mui/material';
import '../Styles/Components.css';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { FaFileCsv } from 'react-icons/fa';
import { TfiClose } from 'react-icons/tfi';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import QuestionsAndAnswers from "./QuestionsAndAnswers";


export default function QuizQuestions() {

  const [answerType, setAnswerType] = useState('');
  const [options, setOptions] = useState(0);
  const [question, setQuestion] = useState('');
  const [answersArr, setAnswersArr] = useState([]);

  const [questionAnswerArr, setQuestionAnswerArr] = useState
    (
      {
        questions: []
      }
    );

  const quest = {
    questions: [
      {
        question: 'What is the fastest route of all time?',
        answers: ['The Kessel run', 'qwerty', 'what?', 'qwerty'],
      },
      {
        question: 'How many planets are there in the solar system?',
        answers: ['1', '8', '9'],
      }
    ]
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const answersList = document.getElementById("answersList");
  const optionNumber = answersList ? answersList.children.length : 0;

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

  const reset = () => {
    setAnswersArr([]);
    setOptions(0);
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
    setQuestionAnswerArr((prevState) => ({
      ...prevState,
      questions: [
        ...prevState.questions,
        {
          question: question,
          answers: answersArr
        }
      ]
    }));

    reset();
    setQuestion('');
    setAnswerType('');
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
    // first we create a copy of the existing questions objects in questionAnswerArr array
    const updatedQuestionAnswerArr = [...questionAnswerArr.questions];



    
    // then we remove 1 of the objects at position 'i' of the array (removing both the question and the answers)
    updatedQuestionAnswerArr.splice(i, 1);
    // then we set questionAnswerArr equal to updatedQuestionAnswerArr which no longer contains the targeted object in the array
    setQuestionAnswerArr({
      questions: updatedQuestionAnswerArr
    });
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

    for (let i = 0; i < options; i++) {
      // Assign options the four letters of the optionsArray
      optionFields.push(
        <Box key={i} sx={{ mt: 1 }}>
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
            />

          </Table>
        </TableContainer>
      </Box >

    </Box>
  );
};  