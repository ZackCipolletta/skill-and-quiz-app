import '../Styles/Components.css';
import React from "react";
import { Box, IconButton, TableRow, TableCell, Typography, TableBody } from '@mui/material';
import { PiTrashThin, PiPencilLineLight, PiStar } from 'react-icons/pi';

export default function QuestionsAndAnswers(props) {

  const { quizInfo, questionWidth, handleRemoveQuestion } = props;

  return (
    <TableBody>
      {quizInfo.questions.map((q, i) => (
        <TableRow key={i}
          
        >
          <TableCell>
            {i + 1}
          </TableCell>
          <TableCell
          sx={{width: questionWidth || 'auto' }} // check to see if 'questionWidth' has been passed in - if so use the value of questionWidth as the value of the width, otherwise width is set automatically.
          >

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
                  {answer}
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

          <TableCell
          sx={{width: 75}}
          >

            <IconButton sx={{
              marginLeft: -1,
              marginRight: -1,
              transform: "scale(.7) scaleY(1.2)"
            }}>
              <PiPencilLineLight color='black' />
            </IconButton>

            <IconButton sx={{
              marginRight: -1,
              transform: "scale(.7) scaleY(1.2)"
            }}
            onClick={handleRemoveQuestion(i)}
            >
              
              <PiTrashThin color='red' />
            </IconButton>

          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}


const [questionAnswerArr, setQuestionAnswerArr] = useState
(
  {
    questions: []
  }
);


const handleRemoveQuestion = (i) => {
  const updatedQuestionAnswerArr = [...questionAnswerArr];

  updatedQuestionAnswerArr.splice(i, 1);

  setQuestionAnswerArr(updatedQuestionAnswerArr);
};