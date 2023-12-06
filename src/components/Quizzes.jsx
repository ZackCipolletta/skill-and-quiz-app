import '../Styles/Components.css';
import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material';
// import QuizCard from './QuizCard';
import Cards from './Cards';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Quizzes(props) {
  const navigate = useNavigate();

  
  const { catName } = useParams();

  useEffect(() => {
    console.log('the category to be filtered is: ', catName);
  }, []);

  const quizList = useSelector((state) => state.quizzesArray.filter(
    (quiz) => catName && quiz.Category.toLowerCase().includes(catName.toLowerCase())
  )
  );



  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const gridStyle = {
    display: !isMobile ? 'grid' : 'column',
    gridTemplateColumns: 'repeat(4, 1fr)', // Three columns with equal width
    gap: 25, // Adjust the spacing between cards
    paddingTop: !isMobile ? 50 : 25,
  };

  const handleCardClick = (quizId) => {
    // Handle the click event here, e.g., navigate to a new page or show more details
    console.log(`Card clicked with ID: ${quizId}`);
    navigate(`/quiz/${quizId}`);
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
          onClickEvent={() => handleCardClick(quiz.id)}
        />
      ))}
    </div >
  );

}
