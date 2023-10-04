
import '../Styles/Components.css';
import React, { useState, useEffect } from "react";
import { Button } from '@mui/material';
import SearchBar from './SearchBar';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import DeleteCategoryModal from './DeleteCategoryModal';
import Quizzes from './Quizzes';

export default function QuizzesDashboard() {

  const quizArr = [
    { Name: "Quiz1", Color: '#cfd9fa', tags: ['Tag1', 'Tag2', 'Tag3',], id: 1, Favorite: false },
    { Name: "Quiz2", Color: '#cfd9fa', tags: ['TagA', 'TagB', 'TagC'], id: 2, Favorite: false },
    { Name: "Quiz3", Color: '#cfd9fa', tags: ['Tag2', 'TagC'], id: 3, Favorite: true }
  ];
  const navigate = useNavigate();

  // const [deleteQuiz, setDeleteQuiz] = useState([]);
  const [quizzesArray, setQuizzesArray] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState([]);
  const [idOfQuizToDelete, setIdOfQuizToDelete] = useState([]);
  const [deleteModalState, seDeleteModalState] = useState(false);


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

  return (
    <div style={{ marginTop: '20px' }} >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
      >
        <h1 className='darkBlue-text'>
          Quizzes  {/* Google web font 'Anton' */}
        </h1>

        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <SearchBar />

          {/* 'ml' does not work here, we must use marginLeft */}
          <Button
            className='button-mediumBlue'
            style={{ marginLeft: '50px' }}
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
      />
      <DeleteCategoryModal
        toggle={deleteModalState}
        handleClose={handleDeleteButtonClick}
        selectedCard={`"${selectedQuiz}" quiz`}
        handleDeleteConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
