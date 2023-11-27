import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Box, Button, Paper, Tabs, Tab, Typography, IconButton } from '@mui/material';
import QuizDetails from "./QuizDetails";
import QuizQuestions from "./QuizQuestions";
import QuizSchedule from "./QuizSchedule";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AiOutlineArrowRight } from 'react-icons/ai';
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
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const changeToNextTab = () => {
  //   const nextTab = value + 1;
  //   if (nextTab < 3) {
  //     setValue(nextTab);
  //   }
  //   setShowIcons(false);
  // };

  // const changeToPreviousTab = () => {
  //   const nextTab = value - 1;
  //   if (nextTab >= 0) {
  //     setValue(nextTab);
  //   }
  // };


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

  const previewPublishButtons = (
    value > 1 ? 
    < Box sx={{ display: 'flex' }}>
      <Button
        className="button-darkMediumBlue"
        onClick={handlePreviewClick}
        sx={{ mr: 1 }}
      >
        Preview
      </Button>
      <Button
        className="button-darkMediumBlue"
        sx={{ mr: !isMobile ? 1 : null }}
      >
        Publish</Button>
      </Box >
      : null

  );

  return (
    <Paper sx={{ marginTop: '50px', marginLeft: -3, marginRight: -3 }} >
      <Box sx={{ width: '100%' }}>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: 1,
          borderColor: 'divider'
        }} >
          <Tabs value={value} onChange={handleChange}
            style={{
              textAlign: 'center', fontSize: !isMobile ? '1.5rem' : null,
              fontStyle: 'normal', fontWeight: 500,
            }}>
            <Tab label="Details" sx={tabStyles} />
            <Tab label="Questions" sx={tabStyles} />
            <Tab label="Schedule" sx={tabStyles} />
          </Tabs>
          <Box>
            {isMobile ? null :
              previewPublishButtons
            }

            {/* add a check for quiz title and questions. If no title or questions display error 'must enter title' or 'error must enter questions' when clicking preview/publish buttons. */}
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

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

        <Box sx={{ display: 'flex' }}>
          {value > 0 ? (
            <Button
              className="button-mediumBlue"
              size="small"
              sx={{ mr: 1 }}
              onClick={(e) => handleChange(e, value - 1)}
            >
              Prev
            </Button>
          ) : null}

          <Button
            size="small"
            className="button-mediumBlue"
            onClick={(e) => handleChange(e, value + 1)}
          >
            Next
          </Button>
        </Box>

        {!isMobile ? null :
          previewPublishButtons
        }

      </Box>


      <PublishModal
        publishModalState={publishModalState}
        handleCancelButtonClick={handleCancelButtonClick}
        quizToPublish={quiz.title}
      />

    </Paper >
  );
}
