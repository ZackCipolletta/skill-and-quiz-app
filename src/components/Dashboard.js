
import './Components.css';
import React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import SearchBar from './SearchBar';


function Dashboard() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar className='lightBlue-bg'>
          <Typography className='darkBlue-text' fontWeight='bold' variant="h6">ConnectLink</Typography>
          <Button className='button-darkBlue'>SignUp</Button>
        </Toolbar>
      </AppBar>
      <div>
        <h1 className='darkBlue-text'>
          Quiz Board  {/* Google web font 'Anton' */}
        </h1>

        <SearchBar />

      </div>

    </div>
  );
}

export default Dashboard;
