import React from "react";
import { Box, IconButton, Typography, Checkbox } from '@mui/material';
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
        answers: ['The Kessel run', 'what happens?', 'what?', 'qwerty'],
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
    <div className="question-container">
      {quizInfo.questions.map((q, i) => (
        <div className="question-row" key={i}>
          <div className="question-number">{i + 1}</div>

          <div className="question" style={{ width: questionWidth || 'auto' }}>
            {q.question}
          </div>

          <div className="answers">
            {q.answers.map((answer, index) => (
              <div key={index} className="answer">
                <Typography
                  style={{
                    border: q.correct === index || (Array.isArray(q.correct) && q.correct.includes(index)) ? '1px solid #478bfe' : '1px solid #67c27c',
                    padding: '1px',
                    paddingLeft: '7px',
                    paddingRight: '7px',
                    borderRadius: '15px',
                    color: q.correct === index || (Array.isArray(q.correct) && q.correct.includes(index)) ? '#478bfe' : '#67c27c',
                    background: q.correct === index || (Array.isArray(q.correct) && q.correct.includes(index)) ? 'rgba(208, 225, 255, .4)' : 'rgba(103, 194, 124, .09)',
                    // display: 'block',
                  }}
                >
                  {answer}
                </Typography>
              </div>
            ))}
          </div>

          <div className="favorite">
            <Checkbox
              icon={<PiStar color='black' />}
              checkedIcon={<PiStarFill color='gold' />}
              checked={q.favorite}
              onChange={() => handleFavorite(i)}
            />
          </div>

          <div className="actions">
            <IconButton
              sx={{
                transform: "scale(.7) scaleY(1.2)"
              }}
            >
              <PiPencilLineLight color='black' onClick={() => handleEditQuestion(i)} />
            </IconButton>

            <IconButton
              sx={{
                transform: "scale(.7) scaleY(1.2)"
              }}
              onClick={() => handleRemoveQuestion(i)}
            >
              <PiTrashThin color='red' />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
}
