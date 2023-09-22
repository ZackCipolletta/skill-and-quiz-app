import '../Styles/Components.css';
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material';
import QuizCard from './CategoryCard';

const categoriesList = [{ Name: "Science" }, { Name: "Maths" }, { Name: "English" }];

export default function QuizBoard() {

  // move card into it's own component, import into QuizBoard and add styling to accommodate multiple cards - 3 across and stacked vertically with appropriate spacing.
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Three columns with equal width
    gap: '16px', // Adjust the spacing between cards
    paddingTop: '50px',
  };

  return (
    <div style={gridStyle}>
      {categoriesList.map((category, index) => (

        <QuizCard key={index} category={category.Name} />
      ))}
    </div >
  );

}
