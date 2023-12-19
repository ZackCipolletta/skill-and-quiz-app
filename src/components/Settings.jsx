
import '../Styles/Components.css';
import React, { useState, useEffect } from "react";
import { Button, Box, Typography, TextField, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LiaEditSolid } from 'react-icons/lia';
import { GoLock } from "react-icons/go";
import { getAuth, updateProfile } from "firebase/auth";

export default function Settings() {

  // const [deleteQuiz, setDeleteQuiz] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);

  const textFieldLabel = {
    fontFamily: 'Inter',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '1.5rem', // 150%
  };

  const textFieldStyle = {
    width: !isMobile ? '20rem' : '95%'
  };

  const handleChangePasswordclick = () => {
    setChangePassword(true);
  };

  const adornmentStyle = {
    color: '#a2a2a2',
    marginRight: '0.5rem',
    pt: '.25rem'
  };

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        setUserName(profile.displayName);
        setEmail(profile.email);
        console.log("  Email: " + profile.email);
      });
    }
  }, []);


  const creationDate = (
    <Box sx={{ mt: '2.5rem' }}>
      <Typography style={{ textFieldLabel }} >
        Creation Date
      </Typography>
      <Box name='CreationDate'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <TextField
          id="CreationDate"
          name="CreationDate"
          className='input-field'
          size='small'
          sx={{ ...textFieldStyle }}
          InputProps={{ sx: { borderRadius: '0.375rem' } }}
        />
      </Box>
    </Box>
  );


  const status = (
    < Box sx={{ mt: '1.5rem' }}>
      <Typography style={{ textFieldLabel }} >
        Status
      </Typography>
      <Box name='Status'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <TextField
          id="Status"
          placeholder="Status"
          name="Status"
          className='input-field'
          size='small'
          sx={{ ...textFieldStyle }}
          InputProps={{ sx: { borderRadius: '0.375rem' } }}
        />
      </Box>
      <Box sx={{ height: '3rem' }} />
    </Box >
  );

  return (
    <Box style={{ marginTop: '2rem' }} >

      <Box style={{
        display: !isMobile ? 'flex' : 'block',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}
      >
        <h1 className='darkBlue-text'>
          Settings  {/* Google web font 'Anton' */}
        </h1>

        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>

          {/* 'ml' does not work here, we must use marginLeft */}
          <Button className='button-mediumBlue' >
            Save Changes
          </Button>
          <Button className='button-darkBlue' >
            Logout
          </Button>

        </Box>

      </Box>

      <Box>

        <Box sx={{ mt: '1.5rem' }}>
          <Typography style={{ textFieldLabel }} >
            Name
          </Typography>
          <Box name='name'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <TextField
              id="userName"
              placeholder="User Name"
              name="userName"
              size='small'
              value={userName}
              sx={{
                ...textFieldStyle
              }}
              InputProps={{
                endAdornment: (
                  <Box sx={{ color: '#637381', mr: '0.5rem' }}>
                    <LiaEditSolid />
                  </Box>
                ),
                sx: { borderRadius: 2 }
              }}
            />
          </Box>
        </Box>

        <Box sx={{ mt: '1.5rem' }}>
          <Typography style={{ textFieldLabel }} >
            Email
          </Typography>
          <Box name='Email'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <TextField
              id="Email"
              placeholder="User Email"
              name="Email"
              className='input-field'
              size='small'
              value={email}
              sx={{
                ...textFieldStyle
              }}
              InputProps={{
                endAdornment: (
                  <Box sx={{ color: '#637381', mr: '0.5rem' }}>
                    <LiaEditSolid />
                  </Box>
                ),
                sx: { borderRadius: '0.375rem' }
              }}
            />
          </Box>
        </Box>

        <Box sx={{ mt: '1.5rem' }}>
          <div style={{ display: !isMobile ? 'flex' : null, alignItems: 'center' }}>
            <Box name='CurrentPassword'
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', }}
            >
              <Typography style={{ textFieldLabel }}>
                Current Password
              </Typography>
              <TextField
                id="Password"
                placeholder="User Password"
                name="CurrentPassword"
                type="CurrentPassword"
                className='input-field'
                size='small'
                error={!isValidPassword && password !== ''}
                helperText={!isValidPassword && password !== '' ? "Enter At Least 8 Characters Long" : ""}
                sx={{ ...textFieldStyle }}
                InputProps={{
                  // If we want to remove the lock icon when password is filled in or when user is typing, look at CreateNewUser
                  // component, where we do something similar for first and last name
                  startAdornment:
                    <Box sx={{ ...adornmentStyle }}>
                      <GoLock />
                    </Box>,
                  sx: { borderRadius: '0.375rem' },
                }}

              />
              {!changePassword ?
                <Link
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    color: '#484848', // Set the color
                    fontFamily: 'Inter',
                    fontSize: '0.875rem',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '1.25rem', // 142.857%
                  }}
                  onClick={handleChangePasswordclick}
                >
                  Change Password?
                </Link>
                : null
              }
            </Box>

            {changePassword ?
              <Box name='NewPassword' sx={{ ml: !isMobile ? 10 : null, mt: !isMobile ? null : '1.5rem' }}>
                <Typography style={{ textFieldLabel }}>
                  New Password
                </Typography>
                <TextField
                  id="NewPassword"
                  placeholder="New Password"
                  name="NewPassword"
                  type="NewPassword"
                  className='input-field'
                  size='small'
                  error={!isValidPassword && password !== ''}
                  helperText={!isValidPassword && password !== '' ? "Enter At Least 8 Characters Long" : ""}
                  sx={{ ...textFieldStyle }}
                  InputProps={{
                    startAdornment:
                      <Box sx={{ ...adornmentStyle }}>
                        <GoLock />
                      </Box>,
                    sx: { borderRadius: '0.375rem' },
                  }}
                />
              </Box>
              : null
            }

          </div>
        </Box>

        {changePassword ? [creationDate, status] : null}

      </Box>
    </Box >
  );
};