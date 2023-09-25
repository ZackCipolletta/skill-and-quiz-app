import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Box, Paper, Tabs, Tab, Typography } from '@mui/material';
import QuizDetails from "./QuizDetails";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
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

  return (
    <Paper sx={{ marginTop: '50px' }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Details" />
            <Tab label="Questions" />
            <Tab label="Schedule" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <QuizDetails />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Questions
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Schedule
        </CustomTabPanel>
      </Box>
    </Paper>
  );
}
