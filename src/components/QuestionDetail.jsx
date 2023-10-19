import '../Styles/Components.css';
import React from "react";
import { Box, IconButton, TableRow, TableCell, Typography, TableBody } from '@mui/material';
import { PiTrashThin, PiPencilLineLight, PiStar } from 'react-icons/pi';

export default function QuestionDetail(props) {

  const { quizInfo } = props;

  // const quizInfo = {
  //   "questions": [
  //       {
  //           "answers": []
  //       },
  //       {
  //           "question": "what is your name?",
  //           "answers": []
  //       }
  //   ]
  // }

  return (
    <TableBody>
      {quizInfo.questions.map((q, i) => (
        <TableRow key={i}>
          <TableCell>{i + 1}</TableCell>
          <TableCell
            // style={{ width: '40%' }}
          >
            {/* {quizInfo.questions[i].question} */}
            {q.question}
            <Box name='answers'>
              {q.answers.map((answer, index) => (
                <Typography
                  key={index}
                  style={{
                    border: '1px solid #67c27c',
                    padding: '1px',
                    paddingLeft: '7px',
                    paddingRight: '7px',
                    borderRadius: '15px',
                    color: '#67c27c',
                    background: 'rgba(103, 194, 124, .09)',
                  }}
                >
                  {answer ? answer : null}
                </Typography>
              ))}
            </Box>
          </TableCell>

          <TableCell>

            <IconButton sx={{
              marginLeft: -1,
              marginRight: -3,
              transform: "scale(.7)"
            }}>
              <PiStar color='black' />
            </IconButton>

          </TableCell>

          <TableCell>

            <IconButton sx={{
              marginLeft: -1,
              marginRight: -1,
              transform: "scale(.7) scaleY(1.2)"
            }}>
              <PiPencilLineLight color='black' />
            </IconButton>

            <IconButton sx={{
              marginRight: -4,
              transform: "scale(.7) scaleY(1.2)"
            }}>
              <PiTrashThin color='red' />
            </IconButton>

          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}