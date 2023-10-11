import '../Styles/Components.css';
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material';
// import QuizCard from './QuizCard';
import Cards from './Cards';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Quizzes(props) {
  const { quizList } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const gridStyle = {
    display: !isMobile ? 'grid' : 'column',
    gridTemplateColumns: 'repeat(4, 1fr)', // Three columns with equal width
    gap: 25, // Adjust the spacing between cards
    paddingTop: !isMobile ? 50 : 25,
  };

  return (
    <div style={gridStyle}>
      {quizList.map((quiz, index) => (

        <Cards
          key={index}
          cardInfo={quiz}
          height={100}
          favorite={props.favorite}
          deleteClick={props.deleteClick}
        />
      ))}
    </div >
  );

}
