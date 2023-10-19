import React, { useState } from "react";
import PropTypes from 'prop-types';
import {
  Box, Button, Paper, Tabs, Tab, Typography, InputLabel, Table, TableContainer,
  TextField, FormControl, Select, MenuItem, IconButton,
} from '@mui/material';
import ColorTemplates from './ColorTemplates';
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
  const [optionFields, setOptionFields] = useState([]);
  const [question, setQuestion] = useState('');

  const [questionAnswerArr, setQuestionAnswerArr] = useState({
    questions: [
      {
        answers: [],
      }
    ]
  });

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

  const handleAnswerChange = (event) => {
    setAnswerType(event.target.value);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const answersList = document.getElementById("answersList");
  const optionNumber = answersList ? answersList.children.length : 0;

  const handleAddOptionClick = () => {
    setOptions(options < 4 ? options + 1 : options);
  };

  const handleRemoveClick = () => {
    setOptions(options - 1);
  };

  const generateOptionFields = () => {
    const optionFields = [];
    const optionsArray = ['A', 'B', 'C', 'D'];

    for (let i = 0; i < options; i++) {
      optionFields.push(
        <Box key={i} sx={{ mt: 1 }}>
          <TextField
            required
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
          {i > 0 && (
            <IconButton sx={{ transform: "scale(0.5)" }}
              onClick={handleRemoveClick}>
              <TfiClose />
            </IconButton>
          )}
        </Box>
      );
    }
    return optionFields;
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAddQuestionClick = () => {

    setQuestionAnswerArr();
  };

  const handleAddClick = () => {
    setQuestionAnswerArr((prevState) => ({
      ...prevState,
      questions: [
        ...prevState.questions,
        {
          question: question,
          answers: []
        }
      ]
    }));
    console.log(questionAnswerArr);
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
        {options.toString()}
      </Typography>
    </Button>
  );

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
      <Button className='button-mediumBlue' sx={{
        ml:
          !isMobile ? 3 : 1
      }}
        onClick={handleAddClick}
      >
        Add
      </Button>

      <Box sx={{ mt: 5 }}>
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
              onChange={handleAnswerChange}
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
              <MenuItem value={'Single Choice'}>Single Choice</MenuItem>
              <MenuItem value={'Multiple Choice'}>Multiple Choice</MenuItem>
              <MenuItem value={'Type in Answer'}>Type in Answer</MenuItem>
            </Select>

            {(answerType === 'Single Choice' || answerType === 'Multiple Choice') && (
              <>
                <Box id='answersList'>
                  {generateOptionFields()}
                </Box>
                <Box>
                  {addOptionButton}
                </Box>
              </>
            )}

            <Button sx={{
              display: 'block',
              mt: 2
            }}
              className="button-mediumBlue"

            >
              Add Question
            </Button>

          </div>
        </FormControl>
      </Box>

      <Box>
      <TableContainer component={Paper}>
          <Table
            // size="small"
          >

        <QuestionsAndAnswers
          quizInfo={questionAnswerArr}
            />
            
          </Table>
          </TableContainer>
      </Box >

    </Box>
  );
};  