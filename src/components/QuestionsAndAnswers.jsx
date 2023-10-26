import '../Styles/Components.css';
import React from "react";
import { Box, IconButton, TableRow, TableCell, Typography, TableBody, Checkbox } from '@mui/material';
import { PiTrashThin, PiPencilLineLight, PiStar } from 'react-icons/pi';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function QuestionsAndAnswers(props) {

  const { quizInfo, questionWidth, handleRemoveQuestion, handleEditQuestion } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


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
          <TableCell>
            {/* we use the index (i) to add number each question when it is displayed */}
            {i + 1}
          </TableCell>
          
          <TableCell
            sx={{ width: questionWidth || 'auto' }} // check to see if 'questionWidth' has been passed in - if so use the value of questionWidth as the value of the width, otherwise width is set automatically.
          >

            {/* here we display the question */}
            {q.question}

            {/* Then we map array of answers onto this template */}
            <Box name='answers'>
              {q.answers.map((answer, index) => (
                <Typography
                  key={index}
                  style={{
                    border: q.correct === index || (Array.isArray(q.correct) && q.correct.includes(index)) ? '1px solid #478bfe'
                      : '1px solid #67c27c',
                    padding: '1px',
                    paddingLeft: '7px',
                    paddingRight: '7px',
                    borderRadius: '15px',
                    color: q.correct === index || (Array.isArray(q.correct) && q.correct.includes(index)) ? '#478bfe' : '#67c27c',
                    background:
                      q.correct === index || (Array.isArray(q.correct) && q.correct.includes(index)) ? 'rgba(208, 225, 255, .4)'
                        : 'rgba(103, 194, 124, .09)',
                  }}
                >
                  {answer}
                </Typography>
              ))}
            </Box>
          </TableCell>

          <TableCell>

            <IconButton sx={{
              marginLeft: !isMobile ? -1 : -4,
              marginRight: -4,
              transform: "scale(.7)"
            }}>

              <PiStar color='black' />
            </IconButton>

          </TableCell>

          <TableCell
            sx={{ width: 75 }}
          >

            <IconButton sx={{
              marginLeft: !isMobile ? -4 : -4,
              marginRight: -1,
              transform: "scale(.7) scaleY(1.2)"
            }}>
              <PiPencilLineLight color='black'
                onClick={() => handleEditQuestion(i)}
              />
            </IconButton>

            <IconButton sx={{
              marginRight: !isMobile ? -1 : -3,
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