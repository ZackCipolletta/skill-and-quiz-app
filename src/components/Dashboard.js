
import './Components.css';
import React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import AddIcon from '@mui/icons-material/Add';


function Dashboard() {
  return (
    <>
      <div>
        <h1 className='darkBlue-text'>
          Quiz Board  {/* Google web font 'Anton' */}
        </h1>

        <SearchBar />

        <Button className='button-mediumBlue'>
          <AddIcon /> Create new category
        </Button>
      </div>
    </>
  );
}

export default Dashboard;
