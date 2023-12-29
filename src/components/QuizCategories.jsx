import '../Styles/Components.css';
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material';
import Cards from './Cards';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function QuizCategories(props) {
  const navigate = useNavigate();

  const categoriesList = useSelector((state) => state.categoriesArray);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const gridStyle = {
    display: !isMobile ? 'grid' : 'column',
    gridTemplateColumns: 'repeat(4, 1fr)', // Three columns with equal width
    gap: 25, // Adjust the spacing between cards
    gridRowGap: 50,
    paddingTop: !isMobile ? 50 : 25,
  };

  const handleCardClick = (quizId) => {
    // Handle the click event here, e.g., navigate to a new page or show more details
    console.log(`Card clicked with ID: ${quizId}`);
    // console.log(`user id: ` + );
    navigate(`/quizzes/${quizId}`);
  };

  return (
    <div style={gridStyle}>
      {/* {categoriesList.map((category, index) => ( */}
      {props.cats.map((category, index) => (

        <Cards
          key={index}
          cardInfo={category}
          deleteClick={props.deleteClick}
          favorite={props.favorite}
          height={50}
          onClickEvent={() => handleCardClick(category.Name)}
          cardType="category"
        />
      ))}
    </div >
  );

}
