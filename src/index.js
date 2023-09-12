import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'
// import SignIn from './SignIn-SignIn/SignIn';
import SignUp from './SignIn-SignIn/SignUp';
import { Login } from '@mui/icons-material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);