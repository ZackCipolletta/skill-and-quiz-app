
import '../Styles/Components.css';
import React, { useState, useEffect } from "react";
import {
  Button, Box, IconButton, TableContainer, Table, TableHead,
  TableRow, TableCell, TableBody, Paper
} from '@mui/material';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import Quizzes from './Quizzes';
import { LuAward } from 'react-icons/lu';
import { PiTagChevron } from 'react-icons/pi';

export default function Quiz() {

  const quizInfo =
    { Name: "Quiz1", Color: '#cfd9fa', tags: ['Tag1', 'Tag2', 'Tag3',], id: 1, Favorite: false, question: 'What is the fastest route of all time?', answers: ['The Kessel run', 'qwerty', 'what?'] };
  const navigate = useNavigate();

  return (
    <Box
      style={{ marginTop: 35 }}>
      
      <Box name='name&Buttons'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 5
        }}> 
        
        <Box name='quizImage&Name'
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 5
          }}>
          
          <Box name='quizName'
            style={{
              backgroundColor: quizInfo.Color,
              borderRadius: 50,
              width: 65,
              height: 65,
              marginRight: 5
            }}
          />

          <h1 className='darkBlue-text'>
            {quizInfo.Name}
          </h1>
        </Box> {/* quizImage&Name closes */}

        <Box name='buttons'>
          <IconButton className='button-lightGray'
            style={{
              borderRadius: 5,
              mr: 5,
              marginRight: 1,
              paddingBottom: 0,
              paddingTop: 0,
              paddingLeft: 3,
              paddingRight: 3,
              transform: "rotate(90deg) scale(.8) scaleY(1.2)"
            }}>
            <PiTagChevron />
          </IconButton>

          <IconButton className='button-lightGreen'
            style={{
              borderRadius: 5,
              padding: 3,
              // mr: 1,
              transform: "scale(.8)"
            }}>
            <LuAward />
          </IconButton>

          <Button
            className='button-redButton'
            sx={{ ml: 1, mr: 1, padding: 0 }}>
            Delete
          </Button>
          <Button
            className='button-mediumBlue'
            sx={{ padding: 0 }}
          >
            Cancel
          </Button>
        </Box>
      </Box> {/* name&Buttons closes */}

      <Box name='tags'>
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

      <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><h1>#</h1></TableCell>
            <TableCell><h1>Questions</h1></TableCell>
            <TableCell><h1>3</h1></TableCell>
            <TableCell><h1>4</h1></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Add your rows and cells here */}
          <TableRow>
            <TableCell>1</TableCell>
              <TableCell>{quizInfo.question}</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Where are you from?</TableCell>
            <TableCell>Cell 3 Content</TableCell>
            <TableCell>Cell 4 Content</TableCell>
          </TableRow>
          {/* Add more rows as needed */}
        </TableBody>
      </Table>
    </TableContainer>

    </Box>
  );
}
