// import '../Styles/Components.css';
// import React, { useState } from "react";
// import { createTheme, ThemeProvider } from '@mui/material';
// import Cards from './Cards';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

// export default function Test() {

//   return (
//     <>
// const quizInfo = {
//   questions: [
//     {
//       type: 'Single',
//       favorite: false,
//       correct: 2,
//       question: 'What is the fastest route of all time?',
//       answers: ['The Kessel run', 'what happens when every one of the answers is super long?', 'what?', 'qwerty'],
//     },
//     {
//       type: 'Multiple',
//       favorite: true,
//       correct: [1, 2],
//       question: 'How many planets are there in the solar system?',
//       answers: ['1', '8', '9'],
//     }
//   ]
// };

//     </>
//   );

// }







import '../Styles/Components.css';
import React from "react";
import { Box, IconButton, TableRow, TableCell, Typography, TableBody, Checkbox } from '@mui/material';
import { PiTrashThin, PiPencilLineLight, PiStar, PiStarFill } from 'react-icons/pi';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function QuestionsAndAnswers(props) {

  const { quizInfo, questionWidth, handleRemoveQuestion, handleEditQuestion, handleFavorite } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const optionsArray = ['A', 'B', 'C', 'D'];

  const { questionAnswerArr } = useSelector((state) => state.questionAnswerArr);

  // const quizInfo = {
  //   questions: [
  //     {
  //       type: 'Single',
  //       favorite: false,
  //       correct: 2,
  //       question: 'What is the fastest route of all time?',
  //       answers: ['The Kessel run', 'what happens when every one of the answers is super long?', 'what?', 'qwerty'],
  //     },
  //     {
  //       type: 'Multiple',
  //       favorite: true,
  //       correct: [1, 2],
  //       question: 'How many planets are there in the solar system?',
  //       answers: ['1', '8', '9'],
  //     }
  //   ]
  // };

  return (
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
            sx={{ borderRight: '1px solid #e0e0e0', fontWeight: 'bold', borderBottom: "none"}}
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
            </Box>
          </TableCell>

          <TableCell
            sx={{ borderRight: '1px solid #e0e0e0', borderBottom: "none" }}
          >

            <Checkbox sx={{
              // marginLeft: !isMobile ? -1 : -4,
              // marginRight: -4,
              // transform: "scale(.7)"
            }}
              icon={<PiStar color='black' />}
              checkedIcon={<PiStarFill color='gold' />}
              checked={q.favorite}

              onChange={() => handleFavorite(i)}
            />

          </TableCell>

          <TableCell
            sx={{ minWidth: 100, borderBottom: "none", paddingRight: 0 }}
          >

            <IconButton sx={{
              // marginLeft: !isMobile ? -4 : -4,
              // marginRight: -1,
              transform: "scale(.7) scaleY(1.2)"
            }}>
              <PiPencilLineLight color='black'
                onClick={() => handleEditQuestion(i)}
              />
            </IconButton>

            <IconButton sx={{
              marginRight: !isMobile ? 0 : -3,
              transform: "scale(.7) scaleY(1.2)"
            }}
              onClick={() => handleRemoveQuestion(i)}
            >

              <PiTrashThin color='red' />
            </IconButton>

          </TableCell>
        </TableRow>
      ))
      }
    </TableBody >
  );
}