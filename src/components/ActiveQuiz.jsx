import '../Styles/Components.css';
import React, { useState } from "react";
import {
  Button, Box, TableRow, TableCell,
  Typography, TableBody, TextField
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ActiveQuiz() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { quizId } = useParams();
  const quizzesArray = useSelector((state) => state.quizzesArray);
  const quizInfo = quizzesArray.find(quiz => quiz.id === quizId);
  const navigate = useNavigate();
  const optionsArray = ['A', 'B', 'C', 'D'];
  const [selectedAnswers, setSelectedAnswers] = useState({});

  //questionIndex = the index of the current question
  // answerIndex = index of the clicked answer
  const handleAnswerClick = (questionIndex, answerIndex) => {

    //prevSelected is the previous state of selectedAnswers  
    setSelectedAnswers(prevSelected => {

      // first we retrieve the array of selected answer indices for the current question and assign that to a variable.
      // if there are not selected answers for thsi question eyt, the array is empty.
      const selectedForQuestion = prevSelected[questionIndex] || [];

      // then we check if the clicked answer is already in the selected answers for this question.
      if (selectedForQuestion.includes(answerIndex)) {

        // if the answer is already selected, we want to unselect it.
        // for the current question, we just clicked the answer for, we filter out the answerIndex from the array.
        return {
          ...prevSelected,
          [questionIndex]: selectedForQuestion.filter(index => index !== answerIndex)
        };
      } else {

        // If the answer is not already selected, we need to add it to the selected answers array.
        // we keep all the previous selected answers the same, and for the current question, we add the new
        // answerIndex to the array of selected answers.
        return {
          ...prevSelected,
          [questionIndex]: [...selectedForQuestion, answerIndex]
        };
      }
    });
  };

  const submit = () => {
    const category = quizInfo.Category;
    navigate(`/quizzes/${category}`);
  };

  return (
    <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', mb: 20 }}>

      <Box name='quizImage&Name'
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 5
        }}>

        <Box name='quizName'
          style={{

            backgroundImage: quizInfo.Image ? `url('${quizInfo.Image}')` : null,
            backgroundColor: !quizInfo.Image ? quizInfo.Color : null,

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

      <Box name='submit' sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
        <Button
          className='button-darkMediumBlue'
          sx={{
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '100%',
            letterSpacing: '-0.05rem',
            padding: ' 0.75rem 1.5rem',
            mb: 2
          }}
          onClick={submit}
        >
          Submit
        </Button>
      </Box>

      <TableBody>
        {/* we map quizInfo onto this template. The quiz as a whole is represented by 'q' */}
        {quizInfo.questions.map((question, qIndex) => (
          <TableRow key={qIndex}
            sx={{
              '&:hover': {
                backgroundColor: '#f8fafe',
                // border: '2px solid #3ea7f2 !important'
              }
            }}
          >
            <TableCell
              sx={{
                fontWeight: 'bold',
                borderBottom: "none",
                verticalAlign: 'top'
              }}
            >
              {/* we use the index (i) to add number each question when it is displayed */}
              {qIndex + 1}
            </TableCell>

            <TableCell
              sx={{ width: 750, borderBottom: "none", verticalAlign: 'top' }}
            >

              {/* here we display the question */}
              <Typography
                style={{
                  fontWeight: 'bold',
                }}
              >
                {question.question}
              </Typography>

              {/* Then we map array of answers onto this template */}
              <Box name='answers' style={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 5 }}>
                {question.type !== "TypeIn" ? (
                  <>

                    <Box>
                      {question.answers.map((answer, aIndex) => (
                        <Typography
                          key={aIndex}
                          style={{
                            marginTop: !isMobile ? 10 : 5,
                            border: selectedAnswers[qIndex]?.includes(aIndex) ? '1.558px solid #67C27C' : '1.558px solid #488BFD',
                            paddingLeft: 7,
                            paddingRight: 7,
                            marginRight: 5,
                            borderRadius: '12px',
                            // color: '#488BFD',
                            color: selectedAnswers[qIndex]?.includes(aIndex) ? '#67C27C' : '#488BFD',
                            background: '#F6FFF6',
                            cursor: 'pointer',
                          }}
                          onClick={() => handleAnswerClick(qIndex, aIndex)}
                        >
                          {optionsArray[aIndex]}.{answer}
                        </Typography>
                      ))}
                    </Box>

                  </>
                ) : (

                  <TextField
                    id="answer"
                    placeholder="Enter your answer here"
                    name="answer"
                    size='small'
                    sx={{
                      width: 550,
                      margin: 0,
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

    </Box>
  );
}