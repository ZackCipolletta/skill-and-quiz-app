
import './SignUp-SignIn.css';
import React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';

function SignIn() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Material-UI App</Typography>
        </Toolbar>
      </AppBar>
      <div className="App-splash">
        <h1>
          This is the sign in page  {/* Google web font 'Anton' */}
        </h1>
        <p style={{ fontWeight: 'bold' }}>
          You will sign in here
        </p>
        <div>
          <Button className='button-lightBlue'>Login</Button> <span></span>
          <Button className='button-darkBlue'>SignUp</Button></div>
      </div>

    </div>
  );
}

export default SignIn;
