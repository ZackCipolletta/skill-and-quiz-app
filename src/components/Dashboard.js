
import './Components.css';
import React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import SearchBar from './SearchBar';


function Dashboard() {
  return (
      <div>
        <h1 className='darkBlue-text'>
          Quiz Board  {/* Google web font 'Anton' */}
        </h1>

        <SearchBar />
      </div>

  );
}

export default Dashboard;
