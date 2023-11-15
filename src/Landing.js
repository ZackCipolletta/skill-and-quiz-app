
import './Styles/Landing.css';
import React from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';



function Landing() {

  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate('/signin');
  };

  const handleSignUpButtonClick = () => {
    navigate('/signup');
  };


  return (
    <Box className="App">
      <Box className="App-splash">
        <h1 style={{ marginBottom: -4 }} >
          Skill and Quiz  {/* Google web font 'Anton' */}
        </h1>
        <p style={{ fontWeight: 'bold', marginTop: 5 }}>
          Your own quiz app
        </p>
        <Box style={{marginTop: -5, display: 'flex' }}>
          <Button className='button-landingLightBlue'
            sx={{ mr: 2 }}
            onClick={handleLoginButtonClick}>
            Login
          </Button>
          {/* <span> </span> */}
          <Button className='button-landingDarkBlue'
            sx={{ ml: 2 }}
            onClick={handleSignUpButtonClick}>
            SignUp
          </Button>
        </Box>
      </Box>

    </Box>
  );
}

export default Landing;
