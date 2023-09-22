import '../Styles/Components.css';
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material';
import QuizCard from './QuizCard';

const quizList = [
  { Name: "Quiz1", tags: ['Tag1', 'Tag2', 'Tag3'] },
  { Name: "Quiz2", tags: ['TagA', 'TagB', 'TagC'] },
  { Name: "Quiz3", tags: ['Tag2', 'TagC']}
];

export default function Quizzes() {

  // move card into it's own component, import into QuizBoard and add styling to accommodate multiple cards - 3 across and stacked vertically with appropriate spacing.
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Three columns with equal width
    gap: '16px', // Adjust the spacing between cards
    paddingTop: '50px',
  };

  return (
    <div style={gridStyle}>
      {quizList.map((quiz, index) => (

        <QuizCard key={index} quiz={quiz} />
      ))}
    </div >
  );

}
