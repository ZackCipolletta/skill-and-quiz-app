import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import Landing from './Landing';
import SignIn from './SignIn-SignUp/SignIn';
import SignUp from './SignIn-SignUp/SignUp';
import Control from './components/Control';
import { Routes, Route } from 'react-router-dom';
import PasswordRecovery from './SignIn-SignUp/PasswordRecovery';
import PageNotFound from './SignIn-SignUp/PageNotFound';
import { HelmetProvider } from 'react-helmet-async';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const helmetContext = {};

root.render(
  <HelmetProvider context={helmetContext}>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/quizzes" element={ <Control page="quizzes"/> } />
        <Route path="/categories" element={ <Control page="categories"/> } />
        <Route path="/questions" element={<Control page="questions" />} />
        <Route path="/quiz" element={<Control page="quiz" />} />


        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
    </HelmetProvider>
);