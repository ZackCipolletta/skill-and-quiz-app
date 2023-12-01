import '../Styles/Components.css';
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material';
import Cards from './Cards';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function QuizCategories(props) {

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
