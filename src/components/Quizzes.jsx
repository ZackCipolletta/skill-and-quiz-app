import '../Styles/Components.css';
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material';
import QuizCard from './QuizCard';
import Cards from './Cards';

const quizList = [
  { Name: "Quiz1", Color: '#cfd9fa', tags: ['Tag1', 'Tag2', 'Tag3', ], id: 1, Favorite: false  },
  { Name: "Quiz2", Color: '#cfd9fa', tags: ['TagA', 'TagB', 'TagC'], id: 2, Favorite: false  },
  { Name: "Quiz3", Color: '#cfd9fa', tags: ['Tag2', 'TagC'], id: 3, Favorite: true }
];

export default function Quizzes() {

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Three columns with equal width
    gap: '16px', // Adjust the spacing between cards
    paddingTop: '50px',
  };

  return (
    <div style={gridStyle}>
      {quizList.map((quiz, index) => (

        <Cards
          key={index}
          cardInfo={quiz}
          height={100}
        />
      ))}
    </div >
  );

}
