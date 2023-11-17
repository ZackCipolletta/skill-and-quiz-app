import '../Styles/Components.css';
import React, { useState } from "react";
import {
  Button, Box, Typography, TextField,
  FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BiUser } from 'react-icons/bi';
import { LuMail } from 'react-icons/lu';
import { PiSuitcase } from "react-icons/pi";
import { FaChevronLeft } from "react-icons/fa";
import DeleteUserModal from './DeleteUserModal';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setUserInfo, deleteUser } from "./redux/User";

// imported into 'Admin'


export default function UserDetails(props) {
  const dispatch = useDispatch();

  const { selectedUser, toggleUserDetails } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // const [email, setEmail] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [focus, setFocus] = useState(false);
  const [deleteUserModalState, setDeleteUserModalState] = useState(false);
  // const [deleteUser, setDeleteUser] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');

  const textFieldLabel = {
    fontFamily: 'Inter',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '1.5rem', // 150%
  };

  const customTextField = {
    background: '#FFF',
    width: !isMobile ? '25rem' : '18rem',
    height: '2.875rem',
    flexShrink: 0,
    marginTop: '.5rem'
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleDeleteUserButtonClick = (event, id, user) => {
    setDeleteUserModalState(!deleteUserModalState);
    // setDeleteUser(user);
    setSelectedUserId(selectedUser.id);
  };

  const handleDeleteConfirm = () => {
    console.log(selectedUserId);
    dispatch(deleteUser(selectedUserId));
    setDeleteUserModalState(!deleteUserModalState);
    toggleUserDetails();
  };

  const { userInfo } = useSelector((state) => state.userInfo);

  return (

    <Box style={{ marginTop: '2rem', paddingBottom: '1rem' }}>

      <Box name="TopNav" style={{
        display: 'flex',
        justifyContent: !isMobile ? 'space-between' : 'flex-start',
        alignItems: 'center',
        marginTop: '2rem',
        // paddingBottom: '1rem'
      }}
      >
        <h1 className='darkBlue-text'>
          User Board  {/* Google web font 'Anton' */}
        </h1>

        <Box name="BackButton" sx={{ marginLeft: isMobile ? '2rem' : null, marginRight: isMobile ? '-1.5rem' : null }}>
          <Button className='button-mediumBlue' onClick={toggleUserDetails} >
            <FaChevronLeft />
            Back
          </Button>
        </Box> {/* BackButton closes */}

      </Box> {/* TopNav closes */}


      <Box>
        <Box sx={{ marginTop: 3 }}>
          <div style={{ display: !isMobile ? 'flex' : null, alignItems: 'center' }}>
            <Box name='FirstNameBox'
              style=
              {{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
              }}
            >
              <Typography style={{ textFieldLabel }}>
                First Name
              </Typography>
              <TextField
                id="FirstName"
                placeholder="Enter first name here"
                name="FirstName"
                type="FirstName"
                className='input-field'
                size='small'
                value={selectedUser ? selectedUser.firstName : ''}
                sx={{ ...customTextField }}
                InputProps={{
                  // here we check if the value of firstName has been set or not (or if the user has begun 
                  // typing in the TextField), if not we show the BiUser icon, if so, it disappears 
                  // (along with the placeholder text). The same is true for the remaining text fields
                  startAdornment: selectedUser && selectedUser.firstName === '' ? (
                    <Box sx={{ color: '#a2a2a2', marginRight: '0.5rem', pt: '.25rem' }}>
                      <BiUser />
                    </Box>
                  ) : null,
                  sx: { borderRadius: '0.375rem' },
                }}
              // onChange={(e) => setFirstName(e.target.value)}
              />

            </Box> {/* first name box closes */}

            <Box name='LastNameBox' sx={{ ml: !isMobile ? 10 : null, mt: isMobile ? 3 : null }}>
              <Typography style={{ textFieldLabel }}>
                Last Name
              </Typography>
              <TextField
                id="LastName"
                placeholder="Enter last name here"
                name="LastName"
                type="LastName"
                className='input-field'
                size='small'
                value={selectedUser ? selectedUser.lastName : ''}
                sx={{ ...customTextField }}
                InputProps={{
                  startAdornment: selectedUser && selectedUser.lastName === '' ? (
                    <Box sx={{ color: '#a2a2a2', marginRight: '0.5rem', pt: '.25rem' }}>
                      <BiUser />
                    </Box>
                  ) : null,
                  sx: { borderRadius: '0.375rem' }
                }}
              // onChange={(e) => setLastName(e.target.value)}
              />
            </Box>

          </div>
        </Box>

        < Box sx={{ marginTop: 3 }}>
          <Typography style={{ textFieldLabel }} >
            Email
          </Typography>
          <Box name='Email'
            style=
            {{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextField
              id="Email"
              placeholder="Enter email address here"
              name="Email"
              autoFocus
              className='input-field'
              size='small'
              value={selectedUser ? selectedUser.email : ''}
              sx={{ ...customTextField }}
              InputProps={{
                startAdornment: selectedUser && selectedUser.email === '' ? (
                  <Box sx={{ color: '#a2a2a2', marginRight: '0.5rem', pt: '.25rem' }}>
                    <LuMail />
                  </Box>
                ) : null,
                sx: { borderRadius: '0.375rem' }
              }}
            // onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
        </Box >


        <Box sx={{ mt: 3 }}>
          <Typography style={{ textFieldLabel }} >
            Role
          </Typography>
          <FormControl size='small'>
            <InputLabel id="SelectRole"
              sx={{ color: "#a2a2a2", marginTop: '.5rem' }}
            >
              {/* here we check to see if a role has been selected and if the input field is in focus. If the role
              does not have a value and the field is not in focus, we display the suitcase icon. Otherwise it disappears. */}
              {role === '' && !focus &&
                (<Box sx={{
                  display: 'inline-flex',
                  marginRight: '0.5rem',
                  pt: '.25rem',
                  transform: "scale(1.2)"
                }}>
                  <PiSuitcase />
                </Box>)}
              Select Role
            </InputLabel>

            <Box >
              <FormControl>
                <Select
                  labelId='SelectRole'
                  id='SelectRole'
                  value={role}
                  // onChange={handleRoleChange}
                  onFocus={handleFocus}
                  // onBlur handles when an element loses focus 
                  onBlur={handleBlur}
                  label='SelectRole'
                  sx={{ ...customTextField, borderRadius: '.375rem', height: '2.65rem' }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'User'}>User</MenuItem>
                  <MenuItem value={'Creator'}>Creator</MenuItem>
                  <MenuItem value={'Admin'}>Admin</MenuItem>
                </Select>
              </FormControl>
            </Box>

          </FormControl>
        </Box>

      </Box>
      <Box sx={{ display: 'block', margin: '0 auto', mt: 5, display: 'flex', justifyContent: 'center' }}>
        <Button
          className="button-redButton"
          onClick={handleDeleteUserButtonClick}
          sx={{ mr: 5 }}
        >
          Delete User
        </Button>
        <Button
          className="button-mediumBlue"
        // onClick={handleAddClick}
        >
          Save Changes
        </Button>
      </Box>

      <DeleteUserModal
        toggleDeleteState={deleteUserModalState}
        handleClose={handleDeleteUserButtonClick}
        selectedUser={selectedUser}
        handleDeleteConfirm={handleDeleteConfirm}
      />

    </Box>
  );

}