
import './Components.css';
import React from 'react';
import { Button, Box } from '@mui/material';
import SearchBar from './SearchBar';
import AddIcon from '@mui/icons-material/Add';


function Dashboard() {
  return (
    <div style={{ marginTop:'20px' }} >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className='darkBlue-text'>
          Quiz Board  {/* Google web font 'Anton' */}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center' }}>
        <SearchBar />

        {/* 'ml' does not work here, we must use marginLeft */}
          <Button className='button-mediumBlue' style={{ marginLeft: '50px' }}>
            <AddIcon /> Create new category
          </Button>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
