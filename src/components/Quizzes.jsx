import '../Styles/Components.css';
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material';
// import QuizCard from './QuizCard';
import Cards from './Cards';


export default function Quizzes(props) {

  const { quizList } = props;

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Three columns with equal width
    gap: '16px', // Adjust the spacing between cards
    paddingTop: '50px',
  };

  const handleDeleteButtonClick = (event, id, cat) => {
    // seDeleteModalState(!deleteModalState);
    // setDeleteCategory(cat);
    // setSelectedCategoryId(id);
  };

  return (
    <div style={gridStyle}>
      {quizList.map((quiz, index) => (

        <Cards
          key={index}
          cardInfo={quiz}
          height={100}
          // deleteClick={handleDeleteButtonClick}
          deleteClick={props.deleteClick}
        />
      ))}
    </div >
  );

}
