
import '../Styles/Components.css';
import React, { useState, useEffect } from "react";
import { Button, Typography } from '@mui/material';
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
import { setQuizzesArray, deleteQuiz } from './redux/quizzes';
import { setQuizCategory } from './redux/Categories';
import { db } from "../firebase";
import {
  doc, onSnapshot, updateDoc, deleteDoc, collection,
  getDocs, query, where, getDoc
} from 'firebase/firestore';


export default function QuizzesDashboard() {
  const collectionRef = collection(db, 'quizzes');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [selectedQuiz, setSelectedQuiz] = useState([]);
  const [idOfQuizToDelete, setIdOfQuizToDelete] = useState([]);
  const [deleteModalState, seDeleteModalState] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [listOfQuizzes, setListOfQuizzes] = useState([]);
  const [searchValue, setSearchValue] = useState(false);
  const [searchOptions, setSearchOptions] = useState([]);

  const { catName } = useParams();
  const quizzesArray = useSelector((state) => state.quizzesArray);
  const user = useSelector((state) => state.loggedInUserEmail.user);

  // finish implementing edit functionality. currently sending question and answer info to newquiz to edit existing quiz on db
  // must send name, image/color, tags as well to redux state.





  useEffect(() => {
    // Set up a snapshot listener for the 'quizzes' collection in Firebase
    const querySnapshotHandler = (querySnapshot) => {
      const quizzes = [];
      querySnapshot.forEach((doc) => {

        const quizWithId = {
          id: doc.id,
          ...doc.data()
        };
        quizzes.push(quizWithId);
      });
      dispatch(setQuizzesArray(quizzes));
      setListOfQuizzes(quizzes);

      // Update search options after fetching quiz data, this prevents null errors with the search bar.
      setSearchOptions(quizzes.filter((quiz) => quiz.Name).map((quiz) => quiz.Name));
    };

    // Subscribe to the snapshot listener
    const unsub = onSnapshot(collectionRef, querySnapshotHandler);

    // Clean up the listener when the component unmounts
    return () => {
      unsub();
    };
  }, []);


  const handleCreateNewQuizClick = () => {
    dispatch(setQuizCategory(catName));
    navigate('/newquiz');
  };


  const handleSearch = (searchValue) => {
    // in order to search the complete list of categories each time the search query is modified (ex: French > F should search all categories containing 'f', not just the list of categories containing 'french'), we use local state 
    // and Redux state. Redux state stores the the full list of all categories, we then filter for the 
    // search term using Redux as the master list. Each time the search query is changed, we filter the 
    // main list from Redux, then the resulting filtered list is assigned to local state, which we then use to display
    // the filtered list.
    const searchTerm = searchValue.toLowerCase();
    const searchedQuizzes = quizzesArray.filter(quiz => quiz.Name.toLowerCase().includes(searchTerm));

    setListOfQuizzes(searchedQuizzes);
  };

  const searching = (value) => {
    if (value.trim()) {
      setSearchValue(value);
      console.log(value);
      handleSearch(value);
    } else {
      setSearchValue(null);
    }
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


  const handleDeleteConfirm = async () => {
    try {

      // first we create a document reference to point to the document with the specified id (idOfQuizToDelete) in the 'quizzes' db.
      const docRef = doc(db, 'quizzes', idOfQuizToDelete);

      // then we delete the document in question.
      await deleteDoc(docRef);

      // we then close the modal
      seDeleteModalState(!deleteModalState);
      dispatch(deleteQuiz(idOfQuizToDelete));
      // and reset selectedCategoryId and categoryToDelete
      reset();
    } catch (error) {
      console.error("Error deleting category from Firestore: ", error);
    }
  };


  const handleFavoriteButtonClick = async (quizId) => {
    // Create a reference directly to the specified document using the quizId
    const quizRef = doc(db, "quizzes", quizId);

    // Then we get the current document
    const quizDoc = await getDoc(quizRef);

    if (quizDoc.exists()) {

      // We assign the current value of Favorite
      const currentFavValue = quizDoc.data().Favorite;

      //we then update the Favorite field with the new value
      await updateDoc(quizRef, { Favorite: !currentFavValue });
    } else {
      console.log("Quiz does not exist");
    }
  };


  const handleNoSearchValue = () => {
    setListOfQuizzes(quizzesArray);
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
            onChange={searching}
            onSearch={handleSearch}
            placeholder={"Search quizzes..."}
            options={searchOptions}
            handleNoSearchValue={handleNoSearchValue}
          />

          {/* 'ml' does not work here, we must use marginLeft */}
          <Box>
            {user ? (
              <Button
                className='navButton button-mediumBlue'
                style={!isMobile ? { marginLeft: '50px' } : { marginTop: 20 }}
                onClick={(event) => handleCreateNewQuizClick()}
              >
                <AddIcon />
                Create new quiz
              </Button>
            ) : null
            }
          </Box>

        </Box> {/* Search&Button closes */}

      </Box> {/* TopNav closes */}
      <Quizzes
        deleteClick={handleDeleteButtonClick}
        favorite={handleFavoriteButtonClick}
        quizList={listOfQuizzes}
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
