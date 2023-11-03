import '../Styles/Components.css';
import React, { } from "react";
import Header from './Header';
import QuizCategoryDashboard from './QuizCategoryDashboard';
import QuizzesDashboard from './QuizzesDashboard';
import CreateNewQuiz from './CreateNewQuiz';
import Quiz from './Quiz';
import Test from './Test';
import Preview from './Preview';
import { Helmet } from 'react-helmet-async';
import FavIcon from '../img/FavIcon.png';
import LeaderboardAndAnalysis from './LeaderboardAndAnalysis';



export default function Control({ page }) {

  // We may end up having to use state to update a 'CurrentlyVisibleState' which
  // will dictate what is mounted in Control
  // const { page } = useParams();

  let content;
  console.log("current page:", page);

  switch (page) {
    case 'quizzes':
      content =
        <>
          <QuizzesDashboard />
        </>;

      break;
    case 'newquiz':
      content = <CreateNewQuiz />;
      break;

    case 'categories':
      content =
        <QuizCategoryDashboard />;
      break;

    case 'quiz':
      content =
        <Quiz />;
      break;

    case 'test':
      content =
        <Test />;
      break;
    
    case 'preview':
      content =
        <Preview />;
      break;
    
    case 'LeaderboardAndAnalysis':
      content =
        <LeaderboardAndAnalysis />;
      break;

    default:
      content = <Header />;
      break;
  }


  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={FavIcon} />
        <title>Quiz By Connect Link</title>
        <meta name="Connect link" content="Quiz By Connect Link" />
      </Helmet>
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