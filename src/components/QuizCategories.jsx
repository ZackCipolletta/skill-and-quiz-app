import '../Styles/Components.css';
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material';
import Cards from './Cards';

export default function QuizCategories(props) {

  const categoriesList = props.categoriesArray;

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Three columns with equal width
    gap: 25, // Adjust the spacing between cards
    paddingTop: 50,
  };

  return (
    <div style={gridStyle}>
      {categoriesList.map((category, index) => (

        <Cards
          key={index}
          cardInfo={category}
          deleteClick={props.deleteClick}
          favorite={props.favorite}
          height={50}
        />
      ))}
    </div >
  );

}
