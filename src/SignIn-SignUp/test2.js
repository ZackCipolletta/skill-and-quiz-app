import React from "react";
import { IconButton, Checkbox, Typography } from '@mui/material';
import { PiTrashThin, PiPencilLineLight, PiStar, PiStarFill } from 'react-icons/pi';

export default function Test(props) {
  const { questionWidth, handleRemoveQuestion, handleEditQuestion, handleFavorite } = props;

  const quizInfo = {
    questions: [
      {
        type: 'Single',
        favorite: false,
        correct: 2,
        question: 'What is the fastest route of all time?',
        answers: ['The Kessel run', 'what happens when every one of the answers is super long?', 'what?', 'qwerty'],
      },
      {
        type: 'Multiple',
        favorite: true,
        correct: [1, 2],
        question: 'How many planets are there in the solar system?',
        answers: ['1', '8', '9'],
      }
    ]
  };

  return (
    <div>
      {quizInfo.questions.map((q, i) => (
        <div key={i} style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          backgroundColor: i % 2 === 0 ? '#f8fafe' : 'white'
        }}>
          <div style={{
            fontWeight: 'bold',
            marginRight: '10px',
          }}>
            {i + 1}
          </div>
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            width: questionWidth || 'auto'
          }}>
            <div style={{
              fontWeight: 'bold',
            }}>
              {q.question}
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '5px',
            }}>
              {q.answers.map((answer, index) => (
                <Typography
                  key={index}
                  style={{
                    border: q.correct === index ? '1px solid #478bfe' : '1px solid #67c27c',
                    padding: '1px 7px',
                    borderRadius: '15px',
                    backgroundColor: q.correct === index ? 'rgba(208, 225, 255, 0.4)' : 'rgba(103, 194, 124, 0.09)',
                    color: q.correct === index ? '#478bfe' : '#67c27c',
                  }}
                >
                  {answer}
                </Typography>
              ))}
            </div>
          </div>
          <div style={{
            display: 'flex',
            gap: '10px',
          }}>
            <Checkbox
              icon={<PiStar color='black' />}
              checkedIcon={<PiStarFill color='gold' />}
              checked={q.favorite}
              onChange={() => handleFavorite(i)}
            />
            <IconButton onClick={() => handleEditQuestion(i)}>
              <PiPencilLineLight color='black' />
            </IconButton>
            <IconButton onClick={() => handleRemoveQuestion(i)}>
              <PiTrashThin color='red' />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
}




<TableCell sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  {/* Add the Question content here */}
  <Box name='answers' style={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
    {q.answers.map((answer, index) => (
      {/* Add the answer styling here */}
    ))}
  </Box>
  <Box>
    <Checkbox
      icon={<PiStar color='black' />}
      checkedIcon={<PiStarFill color='gold' />}
      checked={q.favorite}
      onChange={() => handleFavorite(i)}
    />
  </Box>
  <Box>
    <IconButton onClick={() => handleEditQuestion(i)}>
      <PiPencilLineLight color='black' />
    </IconButton>
    <IconButton onClick={() => handleRemoveQuestion(i)}>
      <PiTrashThin color='red' />
    </IconButton>
  </Box>
</TableCell>
