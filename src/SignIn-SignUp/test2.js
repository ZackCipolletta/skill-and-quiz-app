import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Box, Button, Paper, Tabs, Tab, Typography } from '@mui/material';
import QuizDetails from "./QuizDetails";
import QuizQuestions from "./QuizQuestions";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const switchToNextTab = () => {
    const nextTab = value + 1; // Calculate the index of the next tab
    if (nextTab < 3) {
      setValue(nextTab); // Set the next tab as the selected tab
    }
  };

  return (
    <Paper sx={{ marginTop: '50px' }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: 1, 
          borderColor: 'divider'
        }} >
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Details" sx={{
              textTransform: 'none',
              fontWeight: '525',
              color: '#a2a2a2',
              fontSize: 'larger'
            }} />
            <Tab label="Questions" sx={{
              textTransform: 'none',
              fontWeight: '525',
              color: '#a2a2a2',
              fontSize: 'larger'
            }} />
            <Tab label="Schedule" sx={{
              textTransform: 'none',
              fontWeight: '525',
              color: '#a2a2a2',
              fontSize: 'larger'
            }} />
          </Tabs>
          <Box>
            <Button className="button-darkMediumBlue" sx={{ mr: "20px" }}>Preview</Button>
            <Button className="button-darkMediumBlue" sx={{ mr: "50px" }}>Publish</Button>
            <Button
              className="button-darkMediumBlue"
              onClick={switchToNextTab} // Call the function to switch to the next tab
            >
              Next
            </Button>
          </Box>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <QuizDetails />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <QuizQuestions />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Schedule
        </CustomTabPanel>
      </Box>
    </Paper>
  );
}
