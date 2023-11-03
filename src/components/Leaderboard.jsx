
import '../Styles/Components.css';
import React, { useState } from "react";
import {
  Box, TableContainer, Table, TableHead, Typography,
  TableRow, TableCell, Paper
} from '@mui/material';


export default function Leaderboard() {

  const [options, setOptions] = useState(0);
  const [quizInfo, setQuizInfo] = useState({
    Name: "Quiz1",
    Color: '#a7d7f9',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    id: 1,
    Favorite: false,
    questions: [
      {
        id: 0,
        type: 'Single',
        favorite: true,
        correct: 0,
        question: 'What is the fastest route of all time?',
        answers: ['The Kessel run', 'qwerty', 'what?', 'qwerty'],
      },
      {
        id: 1,
        type: 'Single',
        favorite: false,
        correct: [1, 2],
        question: 'How many planets are there in the solar system?',
        answers: ['1', '8', '9'],
      },
      {
        id: 2,
        type: 'Type',
        favorite: false,
        question: 'How many planets are there in the solar system?',
        answers: [],
      }
    ],
  });


  const [userInfo, setUserInfo] = useState({
    users: [
      {
        userName: 'userName1',
        userImage: 'Single',
        score: 700,
      },
      {
        userName: 'userName2',
        userImage: 'Single',
        score: 500,
      },
      {
        userName: 'userName3',
        userImage: 'Single',
        score: 800,
      },
      {
        userName: 'userName4',
        userImage: 'Single',
        score: 900,
      },
      {
        userName: 'userName5',
        userImage: 'Single',
        score: 600,
      },
    ],
  });

  
  return (
    <Box
      style={{ marginTop: 35, paddingBottom: 5 }}>

      <Box name='name&Selection'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 5
        }}>

        <Box name='quizName'>
          <h2 className='darkBlue-text'>
            {quizInfo.Name} * Leaderboard
          </h2>
        </Box> {/* quizName closes */}

        <Box name='selection'>
          <Typography style={{ display: 'inline' }} >
            Board
          </Typography>
          <span>  </span>
          <Typography style={{ display: 'inline' }} >
            Question Analysis
          </Typography>
        </Box> {/* selection */}

      </Box> {/* name&Buttons closes */}

      <Box sx={{ mt: 3, mb: 5 }}>
        <TableContainer component={Paper}>
          <Table
          // size="small"
          >
            <TableHead>
              <TableRow style={{
                color: '#1E1E1E',
                fontFamily: 'Anton',
                fontSize: '2rem',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '100%'
              }}>
                <TableCell
                  sx={{
                    borderRight: '1px solid #e0e0e0',
                    borderBottom: '1px solid #e0e0e0'
                  }}
                >
                  <h2>#</h2>

                </TableCell>
                <TableCell
                  sx={{
                    borderRight: '1px solid #e0e0e0',
                    borderBottom: '1px solid #e0e0e0'
                  }}>
                  <h2>Users</h2>
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: '1px solid #e0e0e0',
                    borderBottom: '1px solid #e0e0e0'
                  }}>
                  <h2>Points</h2>
                </TableCell>
              </TableRow>
            </TableHead>


            {/* we sort userInfo by score high to low, then map onto this template. 
            The userInfo as a whole is represented by 'u' */}
            {userInfo.users.sort((a, b) => b.score - a.score).map((u, i) => (

            <TableRow key={i}
              sx={{
                '&:hover': {
                  backgroundColor: '#f8fafe',
                  // border: '2px solid #3ea7f2 !important'
                },
                color: i < 3 ? (i === 0 ? '#FCD25C': i === 1 ? '#9A8D8D' : '#A77272') : null
              }}
            >
              <TableCell
                sx={{
                  borderRight: '1px solid #e0e0e0',
                  fontWeight: 'bold', borderBottom: "none"
                }}
              >
                {/* we use the index (i) to add a number for each user when it is displayed */}
                {i + 1}
              </TableCell>

                {/* here we display the users information */}
              <TableCell
                sx={{
                  width: 750, borderRight: '1px solid #e0e0e0',
                  borderBottom: "none",
                  marginTop: 0,
                  marginBottom: 0,
                  paddingTop: 0,
                  paddingBottom: 0
                }}
              >
                {/* here is the user's image or placeHolder image */}
                <div style={{ display: 'flex', alignItems: 'center', }}>

                  <img
                    src='/img/placeholder-image.png'
                    width="30"
                    height="30"
                    alt="Placeholder"
                  />

                    {/* her is the username  */}
                  <Typography style={{
                    marginLeft: 10,
                    fontFamily: 'Inter', // Font family should be enclosed in single or double quotes
                    fontSize: '1.75rem',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '100%', // 1.75rem
                  }}>
                    {u.userName}
                  </Typography>

                </div>

                </TableCell>
                
                {/* and finally the sore  */}
              <TableCell
                sx={{
                  borderRight: '1px solid #e0e0e0',
                  fontWeight: 'bold', borderBottom: "none"
                }}
              >
                {u.score}
              </TableCell>

            </TableRow>
            ))}


          </Table>
        </TableContainer>

      </Box>

    </Box >
  );
}


