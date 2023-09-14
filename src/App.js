
import './App.css';
import React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <div className="App-splash">
        <h1>
          Skill and Quiz  {/* Google web font 'Anton' */}
        </h1>
        <p style={{ fontWeight: 'bold' }}>
          Your own quiz app
        </p>
        <div>
          <Button className='button-lightBlue'>Login</Button> <span></span>
          <Button className='button-darkBlue'>SignUp</Button>
        </div>
      </div>

    </div>
  );
}

export default App;
