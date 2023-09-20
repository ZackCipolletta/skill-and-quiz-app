import '../Styles/Components.css';
import React, {  } from "react";
import Header from './Header';
import Dashboard from './Dashboard';
import QuizBoard from './QuizBoard';

export default function Control() {

  // We may end up having to use state to update a 'CurrentlyVisibleState' which 
  // will dictate what is mounted in Control


  return (
    <>
      <div className="header">
        <div className="Dash-and-Header" >
          <Header /> {/*The Header component will be shown on each page.*/}
          <Dashboard >
            {/* Maybe what we need to do is a ternary operator inside of Dashboard to conditionally display the title 'Quiz Board' or 'Quizzes' depending on which is being viewed. Alternately we pass in a value into Dashboard from either the QuizBoard or Quizzes component which will then be rendered in a placeholder*/}
          </Dashboard>
          <QuizBoard />
        </div>
      </div>
    </>
  );
}