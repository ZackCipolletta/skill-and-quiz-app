import '../Styles/Components.css';
import React, { useEffect } from "react";
import Cards from './Cards';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getAuth, updateProfile } from "firebase/auth";


export default function Quizzes(props) {
  const navigate = useNavigate();

  const { catName } = useParams();

  // may want to convert this to server side filtering instead?


  const quizzesArray = useSelector((state) => state.quizzesArray);
  
  const listOfQuizzes = props.quizList || quizzesArray;

  const quizList = listOfQuizzes.filter((quiz) => catName && quiz.Category.toLowerCase().includes(catName));

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const gridStyle = {
    display: !isMobile ? 'grid' : 'column',
    gridTemplateColumns: 'repeat(4, 1fr)', // Three columns with equal width
    gap: 25, // Adjust the spacing between cards
    paddingTop: !isMobile ? 50 : 25,
  };


  const handleCardClick = (quiz) => {

    const auth = getAuth();
    const user = auth.currentUser;

    console.log(quizList);

    console.log("logged in user uid = " + user.uid);

    if (quiz.Creator === user.uid) {
      navigate(`/quiz/${quiz.id}`);
    } else {
      navigate(`/activequiz/${quiz.id}`);
    }

  };


  return (
    <div style={gridStyle}>
      {/* {quizList.map((quiz, index) => ( */}
      {quizList.map((quiz, index) => (

        <Cards
          key={index}
          cardInfo={quiz}
          height={100}
          favorite={props.favorite}
          deleteClick={props.deleteClick}
          onClickEvent={() => handleCardClick(quiz)}
          cardType="quiz"
        />
      ))}
    </div >
  );

}
