
import '../Styles/Components.css';
import React, { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import SearchBar from './SearchBar';
import AddIcon from '@mui/icons-material/Add';
import CreateNewCategoryModal from './CreateNewCategoryModal';
import QuizCategories from './QuizCategories';
import DeleteModal from './DeleteModal';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import {
  setCategoriesArray, addCategory, favoriteCategory, deleteCategory,
  searchCategories, resetCategories
} from './redux/Categories';
import { db } from "../firebase";
import {
  addDoc, doc, getDocs, onSnapshot, updateDoc, setDoc, deleteDoc, collection,
  serverTimestamp, getDoc, query, where, orderBy, limit, startAt,
} from 'firebase/firestore';




export default function QuizCategoryDashboard(props) {
  // const db = getFirestore();
  // const docRef = doc(db, 'categories', 'f5hBjv3s8caO8Gn3qZPx');
  // const docSnap = await getDoc(docRef);
  const collectionRef = collection(db, 'categories');

  const dispatch = useDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedCategoryId, setSelectedCategoryId] = useState([]);
  const [categoryToDelete, setCategoryToDelete] = useState([]);

  const [createModalState, setCreateModalState] = useState(false);
  const [deleteModalState, setDeleteModalState] = useState(false);

  const categoriesArray = useSelector((state) => state.categoriesArray);

  const [searchValue, setSearchValue] = useState(false);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collectionRef, (querySnapshot) => {
      const categories = [];
      querySnapshot.forEach((doc) => {
        categories.push(doc.data());
      });

      dispatch(setCategoriesArray(categories));
      setCategories(categories);
    });
    return () => {
      unsub();
    };
  }, []);


  const searching = (value) => {
    if (value.trim()) {
      setSearchValue(value);
      console.log(value);
      handleSearch(value);
    } else {
      setSearchValue(null);
    }
  };

  // const resetCategories = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collectionRef);
  //     const categories = [];

  //     querySnapshot.forEach((doc) => {
  //       categories.push(doc.data());
  //     });

  //     dispatch(setCategoriesArray(categories));
  //     setCategories(categories);

  //   } catch (error) {
  //     console.error("Error fetching categories from Firestore: ", error);
  //   }
  // };

  const handleSearch = async (searchValue) => {

    const searchVal = searchValue.toLowerCase()
    const searchQuery = query(
      collection(db, 'categories'),
      where('Name', '>=', searchVal),
      where('Name', '<=', searchVal + '\uf8ff')
    );
    // trying to solve issue with server side searching

    try {

      const querySnapshot = await getDocs(searchQuery);

      const searchedCategories = querySnapshot.docs.map(doc => doc.data());

      setCategories(searchedCategories);
    } catch (error) {
      console.log('Error searching categories in Firestore:', error);
    }
  };



  const addCat = (newCat) => {
    dispatch(addCategory(newCat));
  };

  const handleAddNewCategory = async (newCat) => {
    try {
      await addDoc(collection(db, "categories"), newCat);

      dispatch(addCategory(newCat));
    } catch (error) {
      console.error("error adding new quiz to Firestore: ", error);
    }
  };

  const handleCreateNewCategoryClick = () => {
    setCreateModalState(!createModalState);
  };


  const handleFavoriteButtonClick = async (categoryId) => {
    // first we query the database and filter the 'categories' collection for any category 
    // with an id field that matches 'categoryId'.
    const categoryQuery = query(collection(db, "categories"), where("id", "==", categoryId));
    // then we get a snapshot of the corresponding doc
    const querySnapshot = await getDocs(categoryQuery);

    // check if the snapshot exists (is not empty)
    if (!querySnapshot.empty) {

      // a querySnapshot is a collection, so we assign the first (and only) member of the collection to a variable
      const categoryDoc = querySnapshot.docs[0];
      // we then assign the favorite property of the categoryDoc to a variable so we can update it
      const { Favorite } = categoryDoc.data();

      // Use categoryDoc.id as the actual document ID
      const categoryRef = doc(db, "categories", categoryDoc.id);

      //we then update the document with the id of the categoryDoc
      await updateDoc(categoryRef, { Favorite: !Favorite });
    }
  };


  const handleDeleteButtonClick = (event, id, cat) => {
    setDeleteModalState(!deleteModalState);
    setCategoryToDelete(cat);
    setSelectedCategoryId(id);
  };

  const reset = () => {
    setSelectedCategoryId([]);
    setCategoryToDelete([]);
  };

  const handleDeleteConfirm = () => {
    setDeleteModalState(!deleteModalState);
    dispatch(deleteCategory(selectedCategoryId));
    reset();
  };

  const handleNoSearchValue = () => {
    setCategories(categoriesArray);
  };


  return (
    <>
      <Box style={{ marginTop: '2rem', paddingBottom: '1rem' }} >
        <Box style={{
          display: !isMobile ? 'flex' : 'block',
          justifyContent: !isMobile ? 'space-between' : 'flex-start',
          alignItems: 'center'
        }}
        >
          <h1 className='darkBlue-text'>
            Quiz Board  {/* Google web font 'Anton' */}
          </h1>

          <Box style={{
            display: !isMobile ? 'flex' : 'block',
            alignItems: 'center'
          }}>
            <SearchBar
              value=""
              onChange={searching}
              onSearch={handleSearch}
              placeholder={"Search categories..."}
              options={categoriesArray.map((cat) => cat.Name)}
              handleNoSearchValue={handleNoSearchValue}
            />

            <Button
              className='navButton button-mediumBlue'
              style={!isMobile ? { marginLeft: '50px' } : { marginTop: 20 }}
              onClick={(event) => handleCreateNewCategoryClick(event, 'delete')}
            >
              <AddIcon />
              Create new category
            </Button>

          </Box>
        </Box>
        <CreateNewCategoryModal
          toggle={createModalState}
          handleCancel={handleCreateNewCategoryClick}
          // handleAddNewCategory={addCat}
          handleAddNewCategory={handleAddNewCategory}
        />
      </Box>
      <QuizCategories
        deleteClick={handleDeleteButtonClick}
        favorite={handleFavoriteButtonClick}
      cats={categories}
      />
      <DeleteModal
        toggle={deleteModalState}
        handleClose={handleDeleteButtonClick}
        selectedCard={`"${categoryToDelete}" category`}
        handleDeleteConfirm={handleDeleteConfirm}
      />
    </>
  );
};