
import '../Styles/Components.css';
import React, { useState } from "react";
import { Button } from '@mui/material';
import SearchBar from './SearchBar';
import AddIcon from '@mui/icons-material/Add';

export default function QuizzesDashboard() {

  const [modalState, setModalState] = useState(false);

  const handleCreateNewCategoryClick = () => {
    // Handle the click event for the IconButton here
    // You can add your logic here
    setModalState(!modalState);
  };

  return (
    <div style={{ marginTop: '20px' }} >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
      >
        <h1 className='darkBlue-text'>
          Quizzes  {/* Google web font 'Anton' */}
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
            Create new quiz
          </Button>

        </div>
      </div>
    </div>
  );
}
