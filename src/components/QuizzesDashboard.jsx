
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
import { setQuizzesArray, favoriteQuiz, deleteQuiz, searchQuizzes, resetQuizzes, addQuiz } from './redux/quizzes';
import { setQuizCategory } from './redux/Categories';
import { db } from "../firebase";
import {
  doc, onSnapshot, updateDoc, setDoc, deleteDoc, collection,
  serverTimestamp, getDocs, query, where, orderBy, limit,
} from 'firebase/firestore';


export default function QuizzesDashboard() {
  const colletionRef = collection(db, 'quizzes');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [selectedQuiz, setSelectedQuiz] = useState([]);
  const [idOfQuizToDelete, setIdOfQuizToDelete] = useState([]);
  const [deleteModalState, seDeleteModalState] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const quizzesArray = useSelector((state) => state.quizzesArray);

  const { quizCategory } = useSelector((state) => state.quizCategory);

  const { catName } = useParams();




  const [quizzes, setQuizzes] = useState([]);


  useEffect(() => {
    const unsub = onSnapshot(colletionRef, (querySnapshot) => {
      const quizzes = [];
      querySnapshot.forEach((doc) => {
        quizzes.push(doc.data());
      });
      dispatch(addQuiz(quizzes));
    });
    return () => {
      unsub();
    };
  }, []);







  const handleCreateNewQuizClick = () => {
    dispatch(setQuizCategory(catName));
    navigate('/newquiz');
  };


  const handleSearch = (searchValue) => {
    // in order to search the complete list each time the search query is modified (ex: French > F should search the entire list containing 'f', not just the list containing 'french'), because the list is modified and then returned to us upon each search, we must reset the list. 
    dispatch(resetQuizzes());

    // we have created a reducer which searches through the list of quizzes
    dispatch(searchQuizzes(searchValue));
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
    seDeleteModalState(!deleteModalState);
    dispatch(deleteQuiz(idOfQuizToDelete));

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
