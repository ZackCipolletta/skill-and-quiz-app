
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
import { getAuth, updateProfile } from "firebase/auth";



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
  const [searchValue, setSearchValue] = useState(false);
  const [categories, setCategories] = useState([]);

  const categoriesArray = useSelector((state) => state.categoriesArray);
  const loggedInUserEmail = useSelector((state) => state.loggedInUserEmail.user);
  const loggedInUserId = useSelector((state) => state.loggedInUserID);

  const userFavs = useSelector((state) => state.loggedInUserFavCats);

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


  // search currently enabled with client side filtering as Firebase does not support case insensitive search.
  // only other option is paid service or possibly free tier if usage is low enough.
  // https://firebase.google.com/docs/firestore/solutions/search?provider=elastic

  // Alternatively we can convert all names to lowercase when adding to the db, then convert to title case when
  // displaying them. This will enable server side search.
  const handleSearch = (searchValue) => {
    // in order to search the complete list of categories each time the search query is modified (ex: French > F should search all categories containing 'f', not just the list of categories containing 'french'), we use local state 
    // and Redux state. Redux state stores the the full list of all categories, we then filter for the 
    // search term using Redux as the master list. Each time the search query is changed, we filter the 
    // main list from Redux, then the resulting filtered list is assigned to local state, which we then use to display
    // the filtered list.
    const searchTerm = searchValue.toLowerCase();
    const searchedCategories = categoriesArray.filter(category => category.Name.toLowerCase().includes(searchTerm));

    setCategories(searchedCategories);
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


  // const handleFavoriteButtonClick = async (categoryId) => {
  //   // first we query the database and filter the 'categories' collection for any category 
  //   // with an id field that matches 'categoryId'.
  //   const categoryQuery = query(collection(db, "categories"), where("id", "==", categoryId));
  //   // then we get a snapshot of the corresponding doc
  //   const querySnapshot = await getDocs(categoryQuery);

  //   // check if the snapshot exists (is not empty)
  //   if (!querySnapshot.empty) {

  //     // a querySnapshot is a collection, so we assign the first (and only) member of the collection to a variable
  //     const categoryDoc = querySnapshot.docs[0];
  //     // we then assign the favorite property of the categoryDoc to a variable so we can update it
  //     const { Favorite } = categoryDoc.data();

  //     // Use categoryDoc.id as the actual document ID
  //     const categoryRef = doc(db, "categories", categoryDoc.id);

  //     //we then update the document with the id of the categoryDoc
  //     await updateDoc(categoryRef, { Favorite: !Favorite });
  //   }
  // };


  // const handleFavoriteButtonClick = async (categoryId) => {
  //   // first we query the database and filter the 'categories' collection for any category 
  //   // with an id field that matches 'categoryId'.
  //   const categoryQuery = query(collection(db, "categories"), where("id", "==", categoryId));
  //   // then we get a snapshot of the corresponding doc
  //   const querySnapshot = await getDocs(categoryQuery);

  //   // check if the snapshot exists (is not empty)
  //   if (!querySnapshot.empty) {

  //     // a querySnapshot is a collection, so we assign the first (and only) member of the collection to a variable
  //     const categoryDoc = querySnapshot.docs[0];
  //     // we then assign the favorite property of the categoryDoc to a variable so we can update it
  //     const { Favorite } = categoryDoc.data();

  //     // Use categoryDoc.id as the actual document ID
  //     const categoryRef = doc(db, "categories", categoryDoc.id);

  //     //we then update the document with the id of the categoryDoc
  //     await updateDoc(categoryRef, { Favorite: !Favorite });
  //   }
  // };

  const handleFavoriteButtonClick = async (categoryId) => {
    const auth = getAuth();
    const user = auth.currentUser;
    try {
      // first we query the database and filter the 'users' collection for any user 
      // with an id field that matches the id of the currently logged in user.
      const userQuery = query(collection(db, "users"), where("id", "==", user.uid));
      // then we get a snapshot of the corresponding doc
      const querySnapshot = await getDocs(userQuery);

      // check if the snapshot exists (is not empty)
      if (!querySnapshot.empty) {

        // a querySnapshot is a collection, so we assign the first (and only) member of the collection to a variable
        const userDoc = querySnapshot.docs[0];

        // we then assign the favorite property of the categoryDoc to a variable so we can update it
        const { fav_Cats } = userDoc.data();

        // Use categoryDoc.id as the actual document ID
        const userRef = doc(db, "users", userDoc.id);

        const updatedFavorites = [...fav_Cats, categoryId];
        //we then update the document with the id of the categoryDoc
        try {
          return await updateDoc(userRef, { fav_Cats: updatedFavorites });
        } catch (error) {
          console.error("Error adding favorite category: ", error);
          throw error;
        }
      } else {
        throw new Error("Unable tor find current user");
      }
    } catch (error) {
      console.error("Error updating fav_Cats: ", error);
      throw error;
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

  const handleDeleteConfirm = async () => {
    try {

      //first we find the specific category with the id
      const querySnapshot = await getDocs(query(collection(db, 'categories'), where('id', '==', selectedCategoryId)));

      //a querySnapshot is a collection, so for each item with the selected id (which should be only 1), we delete the doc.
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });

      // we then close the modal
      setDeleteModalState(!deleteModalState);
      // and reset selectedCategoryId and categoryToDelete
      reset();
    } catch (error) {
      console.error("Error deleting category from Firestore: ", error);
    }
  };


  const handleNoSearchValue = () => {
    setCategories(categoriesArray);
  };

  const auth = getAuth();
  const user = auth.currentUser;

  const updateUserName = () => {
    let disName = "Updated displayName";
    updateProfile(auth.currentUser, {
      displayName: disName
    }).then(() => {
      return handleUpdateUserName(disName);
    }).then(() => {
      // Profile updated!
      console.log("Profile updated!");
    }).catch((error) => {
      // An error occurred
      console.log("An error occurred: ", error);
    });
  };

  const handleUpdateUserName = async (disName) => {
    try {
      // first we query the database and filter the 'categories' collection for any category 
      // with an id field that matches 'categoryId'.
      const userQuery = query(collection(db, "users"), where("id", "==", user.uid));
      // then we get a snapshot of the corresponding doc
      const querySnapshot = await getDocs(userQuery);

      // check if the snapshot exists (is not empty)
      if (!querySnapshot.empty) {

        // a querySnapshot is a collection, so we assign the first (and only) member of the collection to a variable
        const userDoc = querySnapshot.docs[0];

        // we then assign the favorite property of the categoryDoc to a variable so we can update it
        const { displayName } = userDoc.data();

        // Use categoryDoc.id as the actual document ID
        const userRef = doc(db, "users", userDoc.id);

        //we then update the document with the id of the categoryDoc
        try {
          return await updateDoc(userRef, { displayName: disName });
        } catch (error) {
          console.error("Error updating user name/displayName: ", error);
          throw error;
        }
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      console.error("Error updating user display name: ", error);
      throw error;
    }
  };

  const printFavs = () => {
    console.log("favorite cats: " + userFavs);
  };

  const updateUserButton = (
    <Box>
      < Button
        className='button-mediumBlue'
        onClick={updateUserName}
      >
        Update User Info
      </Button >
    </Box>
  );

  const printFavsButton = (
    <Box>
      < Button
        className='button-mediumBlue'
        onClick={printFavs}
      >
        printFavs
      </Button >
    </Box>
  );
  // use this method to pass the array of favs into Cards to display whether a category is a favorite or not.


  const printUserInfo = () => {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
      });
      console.log("id = " + user.uid);
      // const userIdArray = Object.values(loggedInUserId);
      // const userId = userIdArray.slice(0, userIdArray.length - 1).join('');
      // console.log("stored in state:", userId);
      console.log(loggedInUserId)

    }
  };

  const printUserButton = (
    <Box>
      < Button
        className='button-mediumBlue'
        onClick={printUserInfo}
      >
        Print User Info
      </Button >
    </Box>
  );

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

          {/* {printUserButton}
          {updateUserButton}
          {printFavsButton} */}

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