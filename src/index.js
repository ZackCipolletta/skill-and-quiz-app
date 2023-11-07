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
import configureStore from './components/redux/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const helmetContext = {};

root.render(
  <HelmetProvider context={helmetContext}>
    <React.StrictMode>
      <Provider store={configureStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route path="/quizzes" element={<Control page="quizzes" />} />
            <Route path="/categories" element={<Control page="categories" />} />
            <Route path="/newquiz" element={<Control page="newquiz" />} />
            <Route path="/quiz" element={<Control page="quiz" />} />
            <Route path="/preview" element={<Control page="preview" />} />
            <Route path="/leaderboard" element={<Control page="leaderboard" />} />
            <Route path="/settings" element={<Control page="settings" />} />

            
            <Route path="/test" element={<Control page="test" />} />

            
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </HelmetProvider>
);