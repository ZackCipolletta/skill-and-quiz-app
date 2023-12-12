import React, { useState, useEffect } from "react";
import { Button } from '@mui/material';
import SearchBar from './SearchBar';
// ... (other imports)

export default function QuizzesDashboard() {
  // ... (other state and useEffect code)

  const [searchOptions, setSearchOptions] = useState([]);

  useEffect(() => {
    // Set up a snapshot listener for the 'quizzes' collection in Firebase
    const querySnapshotHandler = (querySnapshot) => {
      const quizzes = [];
      querySnapshot.forEach((doc) => {
        quizzes.push(doc.data());
      });
      dispatch(setQuizzesArray(quizzes));
      setListOfQuizzes(quizzes);

      // Update search options after fetching quiz data
      setSearchOptions(quizzes.filter((quiz) => quiz.Name).map((quiz) => quiz.Name));
    };

    // Subscribe to the snapshot listener
    const unsub = onSnapshot(collectionRef, querySnapshotHandler);

    // Clean up the listener when the component unmounts
    return () => {
      unsub();
    };
  }, []);

  // ... (other functions)

  return (
    <Box style={!isMobile ? { marginTop: 20 } : { marginTop: 1 }}>
      {/* ... (other JSX code) */}
      <SearchBar
        value=""
        onChange={searching}
        onSearch={handleSearch}
        placeholder="Search quizzes..."
        options={searchOptions}
        handleNoSearchValue={handleNoSearchValue}
      />
      {/* ... (other JSX code) */}
    </Box>
  );
}
