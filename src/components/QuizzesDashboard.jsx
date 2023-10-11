
import '../Styles/Components.css';
import React, { useState, useEffect } from "react";
import { Button } from '@mui/material';
import SearchBar from './SearchBar';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import Quizzes from './Quizzes';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function QuizzesDashboard() {

  const quizArr = [
    { Name: "Quiz1", Color: '#cfd9fa', tags: ['Tag1', 'Tag2', 'Tag3',], id: 1, Favorite: false },
    { Name: "Quiz2", Color: '#cfd9fa', tags: ['TagA', 'TagB', 'TagC'], id: 2, Favorite: false },
    { Name: "Quiz3", Color: '#cfd9fa', tags: ['TagB', 'TagC'], id: 3, Favorite: false },
    { Name: "Quiz4", Color: '#cfd9fa', tags: [ 'TagC'], id: 4, Favorite: false },
    { Name: "Quiz5", Color: '#cfd9fa', tags: ['Tag2', 'TagC'], id: 5, Favorite: true }
  ];
  const navigate = useNavigate();

  // const [deleteQuiz, setDeleteQuiz] = useState([]);
  const [quizzesArray, setQuizzesArray] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState([]);
  const [idOfQuizToDelete, setIdOfQuizToDelete] = useState([]);
  const [deleteModalState, seDeleteModalState] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  useEffect(() => {
    setQuizzesArray([...quizArr]);
  }, []);

  const handleCreateNewQuizClick = () => {
    navigate('/questions');
  };

  const handleDeleteButtonClick = (event, id, quiz) => {
    seDeleteModalState(!deleteModalState);
    setSelectedQuiz(quiz);
    setIdOfQuizToDelete(id);
  };

  const reset = () => {
    setIdOfQuizToDelete([]);
    setSelectedQuiz([]);
  };

  const handleDeleteConfirm = () => {
    console.log("The quiz id to delete is: " + idOfQuizToDelete);
    seDeleteModalState(!deleteModalState);
    setQuizzesArray(quizzesArray.filter((quiz) => quiz.id !== idOfQuizToDelete));

    reset();
  };

  const handleFavoriteButtonClick = (id) => {
    console.log("Fav icon clicked. Id value is: " + id);
    const index = quizzesArray.findIndex((quiz) => quiz.id === id);

    if (index !== -1) {
      const updatedQuizzesArray = [...quizzesArray];
      updatedQuizzesArray[index].Favorite = !updatedQuizzesArray[index].Favorite;

      setQuizzesArray(updatedQuizzesArray);
    }

    reset();
  };

  return (
    <div style={!isMobile ? { marginTop: 20 } : { marginTop: 1 }} >
      <div style={{
        display: !isMobile ? 'flex' : 'block',
        justifyContent: !isMobile ? 'space-between' : 'flex-start',
        alignItems: 'center'
      }}
      >
        <h1 className='darkBlue-text'>
          Quizzes  {/* Google web font 'Anton' */}
        </h1>

        <div style={{
          display: !isMobile ? 'flex' : 'block',
          alignItems: 'center'
        }}>
          <SearchBar />

          {/* 'ml' does not work here, we must use marginLeft */}
          <Button
            className='button-mediumBlue'
            style={!isMobile ? { marginLeft: '50px' } : { marginTop: 20 }}
            onClick={(event) => handleCreateNewQuizClick(event, 'delete')}
          >
            <AddIcon />
            Create new quiz
          </Button>

        </div>
      </div>
      <Quizzes
        quizList={quizzesArray}
        deleteClick={handleDeleteButtonClick}
        favorite={handleFavoriteButtonClick}
      />
      <DeleteModal
        toggle={deleteModalState}
        handleClose={handleDeleteButtonClick}
        selectedCard={`"${selectedQuiz}" quiz`}
        handleDeleteConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
