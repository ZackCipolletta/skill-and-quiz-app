import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Box, Button, Paper, Tabs, Tab, Typography, IconButton } from '@mui/material';
import QuizDetails from "./QuizDetails";
import QuizQuestions from "./QuizQuestions";
import QuizSchedule from "./QuizSchedule";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useSwipeable } from 'react-swipeable';
import PublishModal from "./PublishModal";
import { useNavigate } from 'react-router-dom';


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

export default function CreateNewQuiz() {
  const [value, setValue] = useState(0);
  const [showIcons, setShowIcons] = useState(true);

  const [publishModalState, setPublishModalState] = useState(false);

  const handleCancelButtonClick = () => {
    toggle();
  };

  const toggle = () => {
    setPublishModalState(!publishModalState);
  };

  const handlePublishButtonClick = () => {
    toggle();
  };

  const quiz = {
    title: 'Title quiz test',
    questions: [
      {
        type: 'Single',
        favorite: false,
        correct: 2,
        question: 'What is the fastest route of all time?',
        answers: ['The Kessel run', 'qwerty', 'what?', 'qwerty'],
      },
      {
        type: 'Multiple',
        favorite: true,
        correct: [1, 2],
        question: 'How many planets are there in the solar system?',
        answers: ['1', '8', '9'],
      }
    ]
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changeToNextTab = () => {
    const nextTab = value + 1;
    if (nextTab < 3) {
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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => changeToNextTab(),
    onSwipedRight: () => changeToPreviousTab()
  });

  const tabStyles = {
    textTransform: 'none',
    fontWeight: '525',
    color: '#a2a2a2',
    fontSize: 'larger'
  };

  const navigate = useNavigate();

  const handlePreviewClick = () => {
    navigate('/preview');
  };



  return (
    <Paper sx={{ marginTop: '50px', marginLeft: -3, marginRight: -3 }} {...swipeHandlers}>
      <Box sx={{ width: '100%' }}>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: 1,
          borderColor: 'divider'
        }} >
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Details" sx={tabStyles} />
            <Tab label="Questions" sx={tabStyles} />
            <Tab label="Schedule" sx={tabStyles} />
          </Tabs>
          <Box sx={{ display: !isMobile ? 'block' : 'none' }}>
            <Button className="button-darkMediumBlue" sx={{ mr: 1 }}
              onClick={(handlePreviewClick)}
            >
              Preview
            </Button>
            <Button className="button-darkMediumBlue" sx={{ mr: 1 }}
              onClick={handlePublishButtonClick}
            >
              Publish
            </Button>
          </Box>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <QuizDetails showIcons={showIcons} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <QuizQuestions />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <QuizSchedule />
        </CustomTabPanel>

      </Box>

      {!isMobile ? null :
        <Box>
          <Button
            className="button-darkMediumBlue"
            size="small"
            sx={{ mr: 1 }}
            onClick={handlePreviewClick}
          >
            Preview
          </Button>
          <Button
            size="small"
            className="button-darkMediumBlue"
            sx={{}}
          >
            Publish</Button>
        </Box>
      }

      <PublishModal
        publishModalState={publishModalState}
        handleCancelButtonClick={handleCancelButtonClick}
        quizToPublish={quiz.title}
      />

    </Paper>
  );
}
