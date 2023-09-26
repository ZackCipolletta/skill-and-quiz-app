import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css'
import Landing from './Landing';
import SignIn from './SignIn-SignUp/SignIn';
import SignUp from './SignIn-SignUp/SignUp';
import { Login } from '@mui/icons-material';
import QuizCategoryDashboard from './components/QuizCategoryDashboard';
import Control from './components/Control';
import { Routes, Route } from 'react-router-dom';
import EmptyRoundButton from './SignIn-SignUp/test';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Landing /> */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Landing />} /> */}
      {/* <Control /> */}
      
        {/* <Dashboard />  */}
        {/* <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} /> */}
        <SignUp />
        {/* <SignIn /> */}
        {/* <EmptyRoundButton /> */}
      {/* </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
);