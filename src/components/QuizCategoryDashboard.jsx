
import '../Styles/Components.css';
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import SearchBar from './SearchBar';
import AddIcon from '@mui/icons-material/Add';
import CreateNewCategoryModal from './CreateNewCategoryModal';
import QuizCategories from './QuizCategories';




export default function QuizCategoryDashboard() {

  const [modalState, setModalState] = useState(false);
  // const categoriesArray = [{ Name: "Science" }, { Name: "Maths" }, { Name: "English" }];
  const [categoriesArray, setCategoriesArray] = useState([]);

  const categoriesArr = [{ Name: "Science" }, { Name: "Maths" }, { Name: "English" }];

  useEffect(() => {
    setCategoriesArray([...categoriesArray, ...categoriesArr]);
  }, []);

  const addCategory = (newCat) => {
    setCategoriesArray([...categoriesArray, newCat])
  }



  const handleCreateNewCategoryClick = () => {
    // Handle the click event for the IconButton here
    // You can add your logic here
    setModalState(!modalState);
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

            {/* 'ml' does not work here, we must use marginLeft */}
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
          categoriesArray={categoriesArray}
        />
      </div>
      <QuizCategories categoriesArray={categoriesArray} />
    </>
  );
}
