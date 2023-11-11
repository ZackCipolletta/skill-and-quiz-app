import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Box, Button, Paper, Tabs, Tab, Typography, IconButton } from '@mui/material';
import QuizDetails from "./QuizDetails";
import QuizQuestions from "./QuizQuestions";
import QuizSchedule from "./QuizSchedule";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import QuizCategoryDashboard from "./QuizCategoryDashboard";
import UserBoard from "./UserBoard";
import SearchBar from "./SearchBar";
import AddIcon from '@mui/icons-material/Add';


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

export default function Admin() {
  const [value, setValue] = useState(0);
  const [showIcons, setShowIcons] = useState(true);

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
    fontWeight: 525,
    color: '#a2a2a2',
    fontSize: 'larger',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '1.5rem', // 100%
  };


  const navigate = useNavigate();

  return (
    <Box sx={{ marginTop: '50px', marginLeft: -3, marginRight: -3 }} {...swipeHandlers}>
      <Box sx={{ width: '100%' }}>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: 1,
          borderColor: 'divider'
        }} >
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Quiz Board" sx={tabStyles} />
            <Tab label="User Board" sx={tabStyles} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <QuizCategoryDashboard />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box name="TopNav" style={{
            display: !isMobile ? 'flex' : 'block',
            justifyContent: !isMobile ? 'space-between' : 'flex-start',
            alignItems: 'center'
          }}
          >
            <h1 className='darkBlue-text'>
              User Board  {/* Google web font 'Anton' */}
            </h1>

            <Box name="Search&Button" style={{
              display: !isMobile ? 'flex' : 'block',
              alignItems: 'center'
            }}>
              <SearchBar />

              {/* 'ml' does not work here, we must use marginLeft */}
              <Button
                className='navButton button-mediumBlue'
                style={{
                  ...(!isMobile ? { marginLeft: '50px' } : { marginTop: 20 })
                }}
              // onClick={(event) => handleCreateNewQuizClick()}
              >
                <AddIcon />
                Create new user
              </Button>
            </Box> {/* Search&Button closes */}

          </Box> {/* TopNav closes */}
          <UserBoard />
        </CustomTabPanel>

      </Box>

    </Box>
  );
}
