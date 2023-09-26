import '../Styles/Components.css';
import React, { } from "react";
import Header from './Header';
import QuizCategoryDashboard from './QuizCategoryDashboard';
import QuizzesDashboard from './QuizzesDashboard';
import QuizCategories from './QuizCategories';
import Quizzes from './Quizzes';
import CreateNewQuiz from './CreateNewQuiz';
import { useParams } from 'react-router-dom';
import QuizQuestions from './QuizQuestions';


export default function Control( {page} ) {

  // We may end up having to use state to update a 'CurrentlyVisibleState' which
  // will dictate what is mounted in Control
  // const { page } = useParams();

  let content;
  console.log("current page:", page);

  switch (page) {
    case 'quizzes':
      content = <Quizzes />;
      break;
    case 'questions':
      content = <CreateNewQuiz />;
      break;
    case 'categories':
      content = <QuizCategories />;
      break;
    
    default:
      content = <Header />;
      break;
  }
  

  return (
    <>
      <div className="header">
        <div className="Dash-and-Header" >

          <Header /> {/*The Header component will be shown on each page.*/}
              {/* <QuizCategoryDashboard /> */}
              {/* <QuizzesDashboard /> */}
              {/* Maybe what we need to do is a ternary operator inside of QuizCategoryDashboard to 
            conditionally display the title 'Quiz Board' or 'Quizzes' depending on which is being viewed. 
            Alternately we pass in a value into QuizCategoryDashboard from either the QuizBoard or
            Quizzes component which will then be rendered in a placeholder*/}
              {/* <Quizzes /> */}
              {/* <QuizCategories /> */}
              {content}
              {/* <CreateNewQuiz /> */}
        </div>
      </div>
    </>
  );
}