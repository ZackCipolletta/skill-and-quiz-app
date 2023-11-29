import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Box, Button, Tabs, Tab, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import QuizCategoryDashboard from "./QuizCategoryDashboard";
import UserBoard from "./UserBoard";
import CreateNewUser from "./CreateNewUser";
import UserDetails from "./UserDetails";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setUserInfo } from "./redux/User";


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
  const dispatch = useDispatch();

  const [createUser, setCreateUser] = useState(false);
  const [userDetails, setUserDetails] = useState(false);

  const [value, setValue] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);

  const newInfoArr = [
    {
      firstName: 'FirstName1',
      lastName: 'LastName1',
      userImage: 'Single',
      email: 'firstEmail@mail.com',
      created: '4',
      attempted: '24',
      won: '19',
      joinDate: '01/11/2024',
      score: 700,
      id: 9
    },
    {
      firstName: 'FirstName2',
      lastName: 'LastName2',
      userImage: 'Single',
      email: 'secondEmail@mail.com',
      created: '2',
      attempted: '15',
      won: '11',
      joinDate: '19/02/2024',
      score: 500,
      id: 8
    },
    {
      firstName: 'FirstName3',
      lastName: 'LastName3',
      userImage: 'Single',
      email: 'thirdEmail@mail.com',
      created: '1',
      attempted: '7',
      won: '5',
      joinDate: '22/01/2024',
      score: 800,
      id: 7
    },
    {
      firstName: 'FirstName4',
      lastName: 'LastName4',
      userImage: 'Single',
      email: 'fourthEmail@mail.com',
      created: '5',
      attempted: '12',
      won: '8',
      joinDate: '17/03/2024',
      score: 900,
      id: 6
    },
    {
      firstName: 'FirstName5',
      lastName: 'LastName5',
      userImage: 'Single',
      email: 'fifthEmail@mail.com',
      created: '4',
      attempted: '24',
      won: '17',
      joinDate: '12/02/2024',
      score: 600,
      id: 5
    },
  ];

  const { users } = useSelector((state) => state.userInfo);

  // useEffect(() => {
  //   dispatch(setUserInfo({
  //     users: newInfoArr,
  //   })
  //   );
  // }, []);

  useEffect(() => {
    dispatch(setUserInfo({ users: newInfoArr }));
  }, [])

  const loadUsers = () => {
    dispatch(setUserInfo({ users: newInfoArr }));
  };

  useEffect(() => {
    console.log(users);
  }, [users]);


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  const toggleCreate = () => {
    setCreateUser(!createUser);
  };

  const toggleUserDetails = () => {
    setUserDetails(!userDetails);
  };

  const selectUser = (id) => {
    const user = users.find(user => user.id === id);
    console.log(id);
    setSelectedUser(user);
  };

  useEffect(() => {
    console.log(selectedUser);
  }, [selectedUser]);

  return (
    <Box sx={{ marginTop: 5, marginLeft: -3, marginRight: -3 }}
    >
      <Box sx={{ width: '100%' }}>
        {/* <Button
          onClick={loadUsers}
        >Load Users</Button> */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: 1,
          borderColor: 'divider',
          marginBottom: -5
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
          {
            createUser ?
              <CreateNewUser
                toggleCreate={toggleCreate}
              /> :
              userDetails ?
                <UserDetails
                  toggleUserDetails={toggleUserDetails}
                  selectedUser={selectedUser}
                />
                :
                <UserBoard
                  toggleCreate={toggleCreate}
                  toggleUserDetails={toggleUserDetails}
                  // userInfo={userInfo}
                  selectUser={selectUser}
                  selectedUser={selectedUser}
                />
          }
        </CustomTabPanel>

      </Box>

    </Box>
  );
}
