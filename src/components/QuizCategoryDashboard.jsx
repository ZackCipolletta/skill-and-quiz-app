
import '../Styles/Components.css';
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import SearchBar from './SearchBar';
import AddIcon from '@mui/icons-material/Add';
import CreateNewCategoryModal from './CreateNewCategoryModal';
import QuizCategories from './QuizCategories';
import DeleteCategoryModal from './DeleteCategoryModal';

export default function QuizCategoryDashboard(props) {

  const [createModalState, seCreateModalState] = useState(false);
  const [deleteModalState, seDeleteModalState] = useState(false);
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [deleteCategory, setDeleteCategory] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState([]);

  const catsArr = [
    { Name: "Science", Color: '#cfd9fa', id: 1, Favorite: true },
    { Name: "Maths", Color: '#67c27c', id: 2, Favorite: false },
    { Name: "English", Color: '#cfd9fa', id: 3, Favorite: true }
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
    console.log("The Category id to delete is: " + selectedCategoryId);
    seDeleteModalState(!deleteModalState);
    setCategoriesArray(categoriesArray.filter((cat) => cat.id !== selectedCategoryId));

    reset();
  };

  return (
    <>
      <div style={{ marginTop: '20px' }} >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
        >
          <h1 className='darkBlue-text'>
            Quiz Board  {/* Google web font 'Anton' */}
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <SearchBar />

            <Button
              className='button-mediumBlue'
              style={{ marginLeft: '50px' }}
              onClick={(event) => handleCreateNewCategoryClick(event, 'delete')}
            >
              <AddIcon />
              Create new category
            </Button>

          </div>
        </div>
        <CreateNewCategoryModal
          toggle={createModalState}
          handleCancel={handleCreateNewCategoryClick}
          handleAddNewCategory={addCategory}
        />
      </div>
      <QuizCategories
        categoriesArray={categoriesArray}
        toggle={handleDeleteButtonClick}
        favorite={handleFavoriteButtonClick}
      />
      <DeleteCategoryModal
        toggle={deleteModalState}
        handleClose={handleDeleteButtonClick}
        selectedCategory={deleteCategory}
        handleDeleteConfirm={handleDeleteConfirm}
      />
    </>
  );
}
