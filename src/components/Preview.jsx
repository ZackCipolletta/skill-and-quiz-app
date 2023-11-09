import '../Styles/Components.css';
import React from "react";
import { Box, TableRow, TableCell, Typography, TableBody, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setQuestionAnswerArr } from "./redux/quizQuestions";


export default function Preview(props) {

  const dispatch = useDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const optionsArray = ['A', 'B', 'C', 'D'];

  const questionAnswerArr = useSelector((state) => state.questionAnswerArr);

  const quiz = {
    "name": "testQuiz",
    "tags": [
      "tag1",
      "tag2",
      "tag3"
    ],
    "questions": [
      {
        "type": "Multiple",
        "favorite": false,
        "correct": [
          2
        ],
        "question": "what?",
        "answers": [
          "asdfas",
          "fasdfasdfa",
          "dfasdfa"
        ]
      },
      {
        "type": "Single",
        "favorite": false,
        "correct": [
          0
        ],
        "question": "ASDFSDF",
        "answers": [
          "ASDFAS",
          "FASDFASDF"
        ]
      },
      {
        "type": "Multiple",
        "favorite": false,
        "correct": [
          1
        ],
        "question": "DFASDFASDF",
        "answers": [
          "FASDFASD",
          "FASDFAS",
          "FASDFASDF"
        ]
      },
      {
        "type": "TypeIn",
        "favorite": false,
        "correct": [
          1
        ],
        "question": "This is a write in question?",
        "answers": []
      },
      {
        "type": "Multiple",
        "favorite": false,
        "correct": [
          1
        ],
        "question": "DFASDFASDF",
        "answers": [
          "FASDFASD",
          "FASDFAS",
          "FASDFASDF"
        ]
      },
    ]
  };


  return (
    <Box sx={{ mt: 10 }}>
      <TableBody>
        {/* we map quizInfo onto this template. The quiz as a whole is represented by 'q' */}
        {questionAnswerArr.questions.map((q, i) => (
          <TableRow key={i}
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
              {i + 1}
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
                {q.question}
              </Typography>

              {/* Then we map array of answers onto this template */}
              <Box name='answers' style={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 5 }}>
                {q.type !== "TypeIn" ? (
                  <>

                    <Box>
                      {q.answers.map((answer, index) => (
                        <Typography
                          key={index}
                          style={{
                            marginTop: !isMobile ? 10 : 5,
                            border: '1.558px solid #488BFD',
                            paddingLeft: 7,
                            paddingRight: 7,
                            marginRight: 5,
                            borderRadius: '12px',
                            color: '#488BFD',
                            background: 'F6FFF6'
                          }}
                        >
                          {optionsArray[index]}.{answer}
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