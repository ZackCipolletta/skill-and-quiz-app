
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
  const collectionRef = collection(db, 'quizzes');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [selectedQuiz, setSelectedQuiz] = useState([]);
  const [idOfQuizToDelete, setIdOfQuizToDelete] = useState([]);
  const [deleteModalState, seDeleteModalState] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const quizzesArray = useSelector((state) => state.quizzesArray);

  const { quizCategory } = useSelector((state) => state.quizCategory);
  const [searchValue, setSearchValue] = useState(false);
  const { catName } = useParams();


  const [quizzes, setQuizzes] = useState([]);


  useEffect(() => {
    // Set up a snapshot listener for the 'quizzes' collection in Firebase
    const querySnapshotHandler = (querySnapshot) => {
      const quizzes = [];
      querySnapshot.forEach((doc) => {
        quizzes.push(doc.data());
      });
      dispatch(setQuizzesArray(quizzes));
      setQuizzes(quizzes)
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

  setQuizzes(searchedQuizzes);
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

// const handleDeleteConfirm = () => {
//   seDeleteModalState(!deleteModalState);
//   dispatch(deleteQuiz(idOfQuizToDelete));

//   reset();
//   };
  
  const handleDeleteConfirm = async () => {
    try {
  
      //first we find the specific category with the id
      const querySnapshot = await getDocs(query(collection(db, 'quizzes'), where('id', '==', idOfQuizToDelete)));
  
      //a querySnapshot is a collection, so for each item with the selected id (which should be only 1), we delete the doc.
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
  
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
  // first we query the database and filter the 'quizzes' collection for any quiz 
  // with an id field that matches 'quizId'.
  const quizQuery = query(collection(db, "quizzes"), where("id", "==", quizId));
  // then we get a snapshot of the corresponding doc
  const querySnapshot = await getDocs(quizQuery);

  // check if the snapshot exists (is not empty)
  if (!querySnapshot.empty) {

    // a querySnapshot is a collection, so we assign the first (and only) member of the collection to a variable
    const quizDoc = querySnapshot.docs[0];
    // we then assign the favorite property of the quizDoc to a variable so we can update it
    const { Favorite } = quizDoc.data();
    
    // Use quizDoc.id as the actual document ID
    const quizRef = doc(db, "quizzes", quizDoc.id);
    
    //we then update the document with the id of the quizDoc
    await updateDoc(quizRef, { Favorite: !Favorite });
  }
};


const handleNoSearchValue = () => {
  setQuizzes(quizzesArray);
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
      quizList={quizzes}
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
