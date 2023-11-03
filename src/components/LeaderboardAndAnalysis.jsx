import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Box, Button, Paper, Tabs, Tab, Typography, IconButton } from '@mui/material';
import QuizDetails from "./QuizDetails";
import QuizQuestions from "./QuizQuestions";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useSwipeable } from 'react-swipeable';
import Leaderboard from "./Leaderboard";
import QuestionAnalysis from "./QuestionAnalysis";

function CustomTabPanel(props) {
  const { children, value, index } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function LeaderboardAndAnalysis() {
  const [value, setValue] = useState(0);
  const [showIcons, setShowIcons] = useState(true);

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


  const quiz = {
    title: 'Title quiz test',
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
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changeToNextTab = () => {
    const nextTab = value + 1;
    if (nextTab < 2) {
      setValue(nextTab);
    }
    setShowIcons(false);
  };

  const changeToPreviousTab = () => {
    const nextTab = value - 1;
    if (nextTab >= 0) {
      setValue(nextTab);
    }
  };

  const tabStyles = {
    borderBottom: 'none', // or borderBottom: '0',
    textTransform: 'none',
    fontWeight: '600',
    color: '#a2a2a2',
    // fontSize: 'larger',
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => changeToNextTab(),
    onSwipedRight: () => changeToPreviousTab()
  });

  return (
    <Box sx={{ marginTop: '50px', marginLeft: -3, marginRight: -3 }} {...swipeHandlers}>

      <Box name='name&Selection'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: -10
        }}>

        <Box name='quizName'>
          <h2 className='darkBlue-text'>
            {quizInfo.Name} * Leaderboard
          </h2>
        </Box> {/* quizName closes */}

        <Box name='selection'>

          <Tabs value={value}
            onChange={handleChange}
            // TabIndicatorProps controls the underline 'indicator' from the tab selection
            TabIndicatorProps={{
              style: {
                display: 'none'
              }
            }}
          >
            <Tab label="Board"
              sx={tabStyles}
            />
            <Tab label="Question Analysis"
              sx={tabStyles}
            />

          </Tabs>
        </Box> {/* selection closes */}
      </Box> {/* name&Selection closes */}


      <Box sx={{ width: '100%', marginTop: -5 }}>

        <CustomTabPanel value={value} index={0}>
          <Leaderboard showIcons={showIcons} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <QuestionAnalysis />
        </CustomTabPanel>

      </Box>


    </Box>
  );
}
