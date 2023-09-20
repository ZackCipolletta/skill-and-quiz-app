import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css'
import Landing from './Landing';
import SignIn from './SignIn-SignUp/SignIn';
import SignUp from './SignIn-SignUp/SignUp';
import { Login } from '@mui/icons-material';
import Dashboard from './components/Dashboard';
import Control from './components/Control';
import { Routes, Route } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Landing /> */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Landing />} /> */}
      <Control />
      
        {/* <Dashboard />  */}
        {/* <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} /> */}
        {/* <SignUp /> */}
        {/* <SignIn /> */}
      {/* </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
);