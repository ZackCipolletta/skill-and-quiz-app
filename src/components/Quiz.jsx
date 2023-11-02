
import '../Styles/Components.css';
import React, { useState } from "react";
import {
  Button, Box, IconButton, TableContainer, Table, TableHead,
  TableRow, TableCell, Paper} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LuAward } from 'react-icons/lu';
import { PiTagChevron } from 'react-icons/pi';
import QuestionsAndAnswers from './QuestionsAndAnswers';

export default function Quiz() {

  const [options, setOptions] = useState(0);
  const [quizInfo, setQuizInfo] = useState({

    Name: "Quiz1",
    Color: '#a7d7f9',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    id: 1,
    Favorite: false,
    questions: [
      {
        id: 0,
        type: 'Single',
        favorite: true,
        correct: 0,
        question: 'What is the fastest route of all time?',
        answers: ['The Kessel run', 'qwerty', 'what?', 'qwerty'],
      },
      {
        id: 1,
        type: 'Single',
        favorite: false,
        correct: [1, 2],
        question: 'How many planets are there in the solar system?',
        answers: ['1', '8', '9'],
      },
      {
        id: 2,
        type: 'Type',
        favorite: false,
        question: 'How many planets are there in the solar system?',
        answers: [],
      }
    ],
  })

  const handleRemoveQuestion = (i) => {
    // first we create a copy of the existing questions objects in questionAnswerArr array
    const updatedQuestionAnswerArr = [...quizInfo.questions];
    // then we remove 1 of the objects at position 'i' of the array (removing both the question and the answers)
    updatedQuestionAnswerArr.splice(i, 1);
    // then we set questionAnswerArr equal to updatedQuestionAnswerArr which no longer contains the targeted object in the array
    setQuizInfo({
      ...quizInfo,
      questions: updatedQuestionAnswerArr
    });
  };

  const navigate = useNavigate();

  return (
    <Box
      style={{ marginTop: 35, paddingBottom: 5 }}>

      <Box name='name&Buttons'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 5
        }}>

        <Box name='quizImage&Name'
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 5
          }}>

          <Box name='quizName'
            style={{
              backgroundColor: quizInfo.Color,
              borderRadius: 50,
              width: 65,
              height: 65,
              marginRight: 5
            }}
          />

          <h1 className='darkBlue-text'>
            {quizInfo.Name}
          </h1>
        </Box> {/* quizImage&Name closes */}

        <Box name='buttons'>
          <IconButton className='button-lightGray'
            style={{
              borderRadius: 5,
              mr: 5,
              marginRight: 1,
              paddingBottom: 0,
              paddingTop: 0,
              paddingLeft: 3,
              paddingRight: 3,
              transform: "rotate(90deg) scale(.8) scaleY(1.2)"
            }}>
            <PiTagChevron />
          </IconButton>

          <IconButton className='button-lightGreen'
            style={{
              borderRadius: 5,
              padding: 3,
              // mr: 1,
              transform: "scale(.8)"
            }}>
            <LuAward />
          </IconButton>

          <Button
            className='button-redButton'
            sx={{ ml: 1, mr: 1, padding: 0 }}>
            Delete
          </Button>
          <Button
            className='button-mediumBlue'
            sx={{ padding: 0 }}
          >
            Cancel
          </Button>
        </Box>
      </Box> {/* name&Buttons closes */}

      <Box name='tags'>
        {quizInfo.tags.map((tag, index) => (
          <span
            key={index}
            style={{
              border: '1px solid #67c27c',
              padding: '1px',
              paddingLeft: '7px',
              paddingRight: '7px',
              borderRadius: '15px',
              color: '#67c27c',
              background: 'rgba(103, 194, 124, .09)',
              marginRight: 5, // Add marginRight to create spacing between tags
            }}
          >
            {tag}
          </span>
        ))}
      </Box>

      <Box sx={{mt: 3, mb: 5}}>
        <TableContainer component={Paper}>
          <Table
            // size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell><h1>#</h1></TableCell>
                <TableCell><h1>Questions</h1></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <QuestionsAndAnswers
              quizInfo={quizInfo}
              handleRemoveQuestion={handleRemoveQuestion}
            />
            
          </Table>
        </TableContainer>

      </Box>

    </Box>
  );
}
