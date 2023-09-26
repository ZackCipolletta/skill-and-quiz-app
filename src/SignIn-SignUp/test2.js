import React from "react";
import Header from './Header';
import CreateNewQuiz from './CreateNewQuiz';
import { useParams } from 'react-router-dom';

export default function Control() {
  // Access the current route parameters
  const { page } = useParams();

  // Conditionally render components based on the route parameter
  let content;
  switch (page) {
    case 'quizzes':
      content = <CreateNewQuiz />;
      break;
    // Add other cases for different route paths and corresponding components

    default:
      // Handle the default case, e.g., render a not found component
      content = <NotFoundComponent />;
      break;
  }

  return (
    <>
      <div className="header">
        <div className="Dash-and-Header" >
          <Header />
          {content} {/* Render the content based on the route */}
        </div>
      </div>
    </>
  );
}
