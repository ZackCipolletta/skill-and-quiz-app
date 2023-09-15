import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignIn from './SignIn-SignUp/SignIn';
import SignUp from './SignIn-SignUp/SignUp';
import { Login } from '@mui/icons-material';
import Dashboard from './components/Dashboard';
import Control from './components/Control';
import EmailValidation from './SignIn-SignUp/EmailValidation';
import SignInTest from './SignIn-SignUp/SignInTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Control /> */}
    {/*<Dashboard />*/}
    {/* <SignUp /> */}
    {/* <SignIn /> */}
    <SignInTest />
    <EmailValidation />
  </React.StrictMode>
);