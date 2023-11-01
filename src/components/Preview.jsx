
import '../Styles/Components.css';
import React, { useState } from "react";
import {
  Button, Box, IconButton, TableContainer, Table, TableHead, TextField,
  TableRow, TableBody, Typography, TableCell, Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LuAward } from 'react-icons/lu';
import { PiTagChevron } from 'react-icons/pi';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Preview() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const optionsArray = ['A', 'B', 'C', 'D'];

  const [quizInfo, setQuizInfo] = useState({

    Name: "Quiz1",
    Color: '#cfd9fa',
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
  });

  const navigate = useNavigate();

  return (
    <Paper sx={{ marginTop: 10 }}>
      <TableBody>
        {/* we map quizInfo onto this template. The quiz as a whole is represented by 'q' */}
        {quizInfo.questions.map((q, i) => (
          <TableRow key={i}
            sx={{
              '&:hover': {
                backgroundColor: '#f8fafe',
                // border: '2px solid #3ea7f2 !important'
              }
            }}
          >
            <TableCell
              sx={{ borderRight: '1px solid #e0e0e0', fontWeight: 'bold', borderBottom: "none" }}
            >
              {/* we use the index (i) to add number each question when it is displayed */}
              {i + 1}
            </TableCell>

            <TableCell
              sx={{ width: 750, borderRight: '1px solid #e0e0e0', borderBottom: "none" }}
            >

              {/* here we display the question */}
              <Typography
                style={{
                  fontWeight: 'bold',
                }}
              >
                {q.question}
              </Typography>

              {/* Then we map array of answers onto this template */}
              <Box name='answers' style={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 5 }}>
                {q.answers.map((answer, index) => (
                  <Typography
                    key={index}
                    style={{
                      marginTop: !isMobile ? 0 : 5,
                      border: q.correct === index || (Array.isArray(q.correct) && q.correct.includes(index)) ?
                        '1px solid #478bfe'
                        : '1px solid #67c27c',
                      // padding: 1,
                      paddingLeft: 7,
                      paddingRight: 7,
                      marginRight: 5,
                      borderRadius: '12px',
                      color: q.correct === index || (Array.isArray(q.correct) && q.correct.includes(index)) ?
                        '#478bfe' : '#67c27c',
                      background:
                        q.correct === index || (Array.isArray(q.correct) && q.correct.includes(index)) ?
                          'rgba(208, 225, 255, .4)'
                          : 'rgba(103, 194, 124, .09)',
                    }}
                  >
                    {optionsArray[index]}.  {answer}

                  </Typography>
                ))}
                
                {q.answers.length === 0 && (
                  <TextField
                    margin="normal"
                    placeholder="Enter your answer here"
                    name="Answer"
                    className='input-field'
                    size='small'
                    sx={{
                      width: 350,
                    }}
                    InputProps={{ sx: { borderRadius: 2 } }}
                  />
                )}
              </Box>

            </TableCell>

          </TableRow>
        ))
        }
      </TableBody >
    </Paper>
  );
}
