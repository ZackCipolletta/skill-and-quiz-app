import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'
import SignIn from './SignIn/SignIn';
import { Login } from '@mui/icons-material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>
);