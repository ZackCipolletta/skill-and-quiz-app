
import './Styles/Landing.css';
import React from 'react';
import { Button } from '@mui/material';
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
    <div className="App">
      <div className="App-splash">
        <h1 style={{ marginBottom: -4 }} >
          Skill and Quiz  {/* Google web font 'Anton' */}
        </h1>
        <p style={{ fontWeight: 'bold', marginTop: 5 }}>
          Your own quiz app
        </p>
        <div style={{marginTop: -5 }}>
          <Button className='button-lightBlue'
            sx={{ mr: 2 }}
            onClick={handleLoginButtonClick}>
            Login
          </Button>
          {/* <span> </span> */}
          <Button className='button-darkBlue'
            sx={{ ml: 2 }}
            onClick={handleSignUpButtonClick}>
            SignUp
          </Button>
        </div>
      </div>

    </div>
  );
}

export default Landing;
