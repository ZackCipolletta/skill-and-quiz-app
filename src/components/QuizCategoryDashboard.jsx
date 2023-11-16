
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

export default function QuizCategoryDashboard(props) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [createModalState, seCreateModalState] = useState(false);
  const [deleteModalState, seDeleteModalState] = useState(false);
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [deleteCategory, setDeleteCategory] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState([]);

  const catsArr = [
    { Name: "Science", Color: '#a7d7f9', id: 1, Favorite: true },
    { Name: "Maths", Color: '#67c27c', id: 2, Favorite: false },
    { Name: "English", Color: '#cfd9fa', id: 3, Favorite: true },
    { Name: "Cat4", Color: '#f4bbc7', id: 4, Favorite: false },
    { Name: "Cat5", Color: '#c0f889', id: 5, Favorite: false },
    { Name: "Cat6", Color: '#cfd9fa', id: 6, Favorite: true }
  ];

  useEffect(() => {
    setCategoriesArray([...catsArr]);
  }, []);

  const addCategory = (newCat) => {
    setCategoriesArray([...categoriesArray, newCat]);
  };

  const handleCreateNewCategoryClick = () => {
    seCreateModalState(!createModalState);
  };

  const handleFavoriteButtonClick = (id) => {
    console.log("Fav icon clicked. Id value is: " + id);
    const index = categoriesArray.findIndex((category) => category.id === id);

    if (index !== -1) {
      const updatedCategoriesArray = [...categoriesArray];
      updatedCategoriesArray[index].Favorite = !updatedCategoriesArray[index].Favorite;

      setCategoriesArray(updatedCategoriesArray);
    }

    reset();
  };

  const handleDeleteButtonClick = (event, id, cat) => {
    seDeleteModalState(!deleteModalState);
    setDeleteCategory(cat);
    setSelectedCategoryId(id);
  };

  const reset = () => {
    setSelectedCategoryId([]);
    setDeleteCategory([]);
  };

  const handleDeleteConfirm = () => {
    seDeleteModalState(!deleteModalState);
    setCategoriesArray(categoriesArray.filter((cat) => cat.id !== selectedCategoryId));

    reset();
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
            <SearchBar />

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
          handleAddNewCategory={addCategory}
        />
      </Box>
      <QuizCategories
        categoriesArray={categoriesArray}
        deleteClick={handleDeleteButtonClick}
        favorite={handleFavoriteButtonClick}
      />
      <DeleteModal
        toggle={deleteModalState}
        handleClose={handleDeleteButtonClick}
        selectedCard={`"${deleteCategory}" category`}
        handleDeleteConfirm={handleDeleteConfirm}
      />
    </>
  );
}