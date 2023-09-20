
import './Landing.css';
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



function Landing() {

  const navigate = useNavigate();

const handleLoginButtonClick = () => {
  navigate('/SignIn')
  };
  
const handleSignUpButtonClick = () => {
  navigate('/SignUp')
};
  

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
          <Button className='button-lightBlue' onClick={handleLoginButtonClick}>Login</Button> <span></span>
          <Button className='button-darkBlue' onClick={handleSignUpButtonClick}>SignUp</Button>
        </div>
      </div>

    </div>
  );
}

export default Landing;
