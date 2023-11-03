
import '../Styles/Components.css';
import React, { useState } from "react";
import {
  Box, TableContainer, Table, TableHead, Typography,
  TableRow, TableCell, Paper
} from '@mui/material';
import StackedBarChart from './StackedBarChart';


export default function QuestionAnalysis() {

  const [userInfo, setUserInfo] = useState({
    users: [
      {
        userName: 'userName1',
        userImage: 'Single',
        score: 700,
      },
      {
        userName: 'userName2',
        userImage: 'Single',
        score: 500,
      },
      {
        userName: 'userName3',
        userImage: 'Single',
        score: 800,
      },
      {
        userName: 'userName4',
        userImage: 'Single',
        score: 900,
      },
      {
        userName: 'userName5',
        userImage: 'Single',
        score: 600,
      },
    ],
  });

  const optionsArray = ['A', 'B', 'C', 'D'];

  const quizInfo = {
    title: 'Title quiz test',
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
        correct: 60,
      },
      {
        id: 1,
        type: 'Single',
        favorite: false,
        correct: [1, 2],
        question: 'How many planets are there in the solar system?',
        answers: ['1', '8', '9'],
        correct: 25,
      },
      {
        id: 2,
        type: 'Type',
        favorite: false,
        question: 'How many planets are there in the solar system?',
        answers: [],
        correct: 50,
      }
    ],
  };


  return (
    <Box
      style={{ marginTop: 35, paddingBottom: 5 }}>

      <Box sx={{ mt: 3, mb: 5 }}>
        <TableContainer component={Paper}>
          <Table
          // size="small"
          >
            <TableHead>
              <TableRow style={{
                color: '#1E1E1E',
                fontFamily: 'Anton',
                fontSize: '2rem',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '100%'
              }}>
                <TableCell
                  sx={{
                    borderRight: '1px solid #e0e0e0',
                    borderBottom: '1px solid #e0e0e0'
                  }}
                >
                  <h2>#</h2>

                </TableCell>
                <TableCell
                  sx={{
                    borderRight: '1px solid #e0e0e0',
                    borderBottom: '1px solid #e0e0e0'
                  }}>
                  <h2>Questions</h2>
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: '1px solid #e0e0e0',
                    borderBottom: '1px solid #e0e0e0'
                  }}>
                </TableCell>
              </TableRow>
            </TableHead>


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
                          marginTop: 0,
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
                  </Box>
                </TableCell>


              </TableRow>
            ))
            }


          </Table>
        </TableContainer>

      </Box>

    </Box >
  );
}


