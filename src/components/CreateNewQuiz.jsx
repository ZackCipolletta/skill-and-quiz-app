import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Box, Button, Paper, Tabs, Tab, Typography } from '@mui/material';
import QuizDetails from "./QuizDetails";
import QuizQuestions from "./QuizQuestions";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


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
  };

  const changeToPreviousTab = () => {
    const nextTab = value - 1;
    if (nextTab >= 0) {
      setValue(nextTab);
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
          <Box sx={{ display: !isMobile ? 'block' : 'none' }}>
            <Button className="button-darkMediumBlue" sx={{ mr: "20px" }}>Preview</Button>
            <Button className="button-darkMediumBlue" sx={{ mr: "50px" }}>Publish</Button>
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
      <Button
        className="button-darkMediumBlue"
        size="small"
        sx={{ mr: 1 }}
        onClick={changeToPreviousTab}
      >Back
      </Button>
      <Button
        className="button-darkMediumBlue"
        size="small"
        onClick={changeToNextTab}
      >Next
      </Button>

      <Button
        className="button-darkMediumBlue"
        size="small"
        sx={{
          mr: "20px",
        }}>Preview</Button>
      <Button
        size="small"
        className="button-darkMediumBlue"
        sx={{ mr: "50px" }}>
        Publish</Button>

    </Paper>
  );
}
