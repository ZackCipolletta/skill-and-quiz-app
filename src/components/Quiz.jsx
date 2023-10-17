
import '../Styles/Components.css';
import React, { useState, useEffect } from "react";
import { Button, Box } from '@mui/material';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import Quizzes from './Quizzes';

export default function Quiz() {

  const quizInfo =
    { Name: "Quiz1", Color: '#cfd9fa', tags: ['Tag1', 'Tag2', 'Tag3',], id: 1, Favorite: false, question: 'What is the fastest route of all time?', answers: ['The Kessel run', 'qwerty', 'what?'] };
  const navigate = useNavigate();

  return (
    <Box style={{ marginTop: 35 }}>
    <Box style={{
      display: 'flex',
        alignItems: 'center',
        marginBottom: 5
    }}>
      <Box style={{
        backgroundColor: quizInfo.Color,
        borderRadius: 50,
        width: 65,
        height: 65,
        marginRight: 5
      }}
      >
      </Box>
      <h1 className='darkBlue-text'>
        {quizInfo.Name}
      </h1>
      </Box>
      <Box>
      {quizInfo.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  border: '1px solid #67c27c',
                  padding: '1px',
                  paddingLeft: '7px',
                  paddingRight: '7px',
                  borderRadius: '15px',
                  color: '#67c27c',
                  background: 'rgba(103, 194, 124, .09)',
                  marginRight: 5, // Add marginRight to create spacing between tags
                }}
              >
                {tag}
              </span>
            ))}
      </Box>
    </Box>
  );
}
