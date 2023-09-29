
import '../Styles/Components.css';
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import SearchBar from './SearchBar';
import AddIcon from '@mui/icons-material/Add';
import CreateNewCategoryModal from './CreateNewCategoryModal';
import QuizCategories from './QuizCategories';

export default function QuizCategoryDashboard() {

  const [modalState, setModalState] = useState(false);
  const [categoriesArray, setCategoriesArray] = useState([]);

  const categoriesArr = [{ Name: "Science", Color: '#cfd9fa' }, { Name: "Maths", Color: '#67c27c' }, { Name: "English", Color: '#cfd9fa' }];

  useEffect(() => {
    setCategoriesArray([...categoriesArray, ...categoriesArr]);
  }, []);

  const addCategory = (newCat) => {
    setCategoriesArray([...categoriesArray, newCat]);
  };

  const handleCreateNewCategoryClick = () => {
    setModalState(!modalState);
  };

  const handleDeleteCategory = (index) => {
    setCategoriesArray(categoriesArray.filter((cat) => cat.index !== index));
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
          toggle={modalState}
          handleCancel={handleCreateNewCategoryClick}
          handleAddNewCategory={addCategory}
          
        />
      </div>
      <QuizCategories
        categoriesArray={categoriesArray}
        delete={handleDeleteCategory}
      />
    </>
  );
}
