
import '../Styles/Components.css';
import React, { useState, useEffect } from "react";
import { Button } from '@mui/material';
import SearchBar from './SearchBar';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import Quizzes from './Quizzes';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setQuizzesArray, favoriteQuiz, deleteQuiz, searchQuizzes, resetQuizzes } from './redux/quizzes';

export default function QuizzesDashboard() {
  const dispatch = useDispatch();

  const quizArr = [
    { Name: "Quiz44", Image: '/CategoryImages/Beakers.jpg', Color: '#a7d7f9', tags: ['Tag1', 'Tag2', 'Tag3',], id: 1, Favorite: false },
    { Name: "Quiz2", Color: '#67c27c', tags: ['TagA', 'TagB', 'TagC'], id: 2, Favorite: false },
    { Name: "Quiz3", Color: '#cfd9fa', tags: ['TagB', 'TagC'], id: 3, Favorite: false },
    { Name: "Quiz4", Color: '#f4bbc7', tags: ['TagC'], id: 4, Favorite: false },
    { Name: "Quiz5", Color: '#c0f889', tags: ['Tag2', 'TagC'], id: 5, Favorite: true }
  ];
  const navigate = useNavigate();

  // const [deleteQuiz, setDeleteQuiz] = useState([]);
  // const [quizzesArray, setQuizzesArray] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState([]);
  const [idOfQuizToDelete, setIdOfQuizToDelete] = useState([]);
  const [deleteModalState, seDeleteModalState] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const quizzesArray = useSelector((state) => state.quizzesArray);

  const handleCreateNewQuizClick = () => {
    navigate('/newquiz');
  };


  const handleSearch = (searchValue) => {
    const filtered = quizzesArray.filter((quiz) =>
      searchValue && quiz.Name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredQuizzes(filtered);
  };

  const [filteredQuizzes, setFilteredQuizzes] = useState([...quizArr]);

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
    seDeleteModalState(!deleteModalState);
    dispatch(deleteQuiz(idOfQuizToDelete))

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

  const handleNoSearchValue = () => {
    dispatch(resetQuizzes());
  };

  return (
    <Box style={!isMobile ? { marginTop: 20 } : { marginTop: 1 }} >
      <Box name="TopNav" style={{
        display: !isMobile ? 'flex' : 'block',
        justifyContent: !isMobile ? 'space-between' : 'flex-start',
        alignItems: 'center'
      }}
      >
        <h1 className='darkBlue-text'>
          Quizzes  {/* Google web font 'Anton' */}
        </h1>

        <Box name="Search&Button" style={{
          display: !isMobile ? 'flex' : 'block',
          alignItems: 'center'
        }}>
          <SearchBar
            value=""
            onChange={handleSearch}
            onSearch={handleSearch}
            placeholder={"Search quizzes..."}
            options={quizzesArray.map((quiz) => quiz.Name)}
            handleNoSearchValue={handleNoSearchValue}
          />

          {/* 'ml' does not work here, we must use marginLeft */}
          <Button
            className='navButton button-mediumBlue'
            style={!isMobile ? { marginLeft: '50px' } : { marginTop: 20 }}
            onClick={(event) => handleCreateNewQuizClick()}
          >
            <AddIcon />
            Create new quiz
          </Button>
        </Box> {/* Search&Button closes */}

      </Box> {/* TopNav closes */}
      <Quizzes
        deleteClick={handleDeleteButtonClick}
        favorite={handleFavoriteButtonClick}
      />
      <DeleteModal
        toggle={deleteModalState}
        handleClose={handleDeleteButtonClick}
        selectedCard={`"${selectedQuiz}" quiz`}
        handleDeleteConfirm={handleDeleteConfirm}
      />
    </Box>
  );
}
