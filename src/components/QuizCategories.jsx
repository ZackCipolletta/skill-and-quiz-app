import '../Styles/Components.css';
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material';
import CategoryCard from './CategoryCard';

export default function QuizCategories(props) {

  const categoriesList = props.categoriesArray;

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Three columns with equal width
    gap: '16px', // Adjust the spacing between cards
    paddingTop: '50px',
  };

  return (
    <div style={gridStyle}>
      {categoriesList.map((category, index) => (

        <CategoryCard
          key={index}
          category={category}
          toggle={props.toggle}
          favorite={props.favorite}
        />
      ))}
    </div >
  );

}
