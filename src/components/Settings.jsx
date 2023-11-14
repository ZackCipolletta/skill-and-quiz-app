
import '../Styles/Components.css';
import React, { useState, useEffect } from "react";
import { Button, Box, Typography, TextField, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Settings() {

  const navigate = useNavigate();

  // const [deleteQuiz, setDeleteQuiz] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [changePassword, setChangePassword] = useState(false); 


  const handleCreateNewQuizClick = () => {
    navigate('/newquiz');
  };

  const textFieldLabel = {
    fontFamily: 'Inter',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '1.5rem', // 150%
  };

  const handleChangePasswordclick = () => {
    setChangePassword(true);
  };


  const creationDate = (
    <Box sx={{ marginTop: 5 }}>
      <Typography style={{ textFieldLabel }} >
        Creation Date
      </Typography>
      <Box name='CreationDate'
        style=
        {{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField
          id="CreationDate"
          name="CreationDate"
          autoFocus
          className='input-field'
          size='small'
          sx={{
            width: 350,
          }}
          InputProps={{ sx: { borderRadius: 2 } }}
        />
      </Box>
    </Box>
  );


  const status = (
    < Box sx={{ marginTop: 3 }}>
      <Typography style={{ textFieldLabel }} >
        Status
      </Typography>
      <Box name='Status'
        style=
        {{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField
          id="Status"
          placeholder="Status"
          name="Status"
          autoFocus
          className='input-field'
          size='small'
          sx={{
            width: 350,
          }}
          InputProps={{ sx: { borderRadius: 2 } }}
        />
      </Box>
    </Box >
  );

  return (
    <Box style={!isMobile ? { marginTop: 20 } : { marginTop: 1 }} >

      <div style={{
        display: !isMobile ? 'flex' : 'block',
        justifyContent: !isMobile ? 'space-between' : 'flex-start',
        alignItems: 'center'
      }}
      >
        <h1 className='darkBlue-text'>
          Settings  {/* Google web font 'Anton' */}
        </h1>

        <div style={{
          display: !isMobile ? 'flex' : 'block',
          alignItems: 'center'
        }}>

          {/* 'ml' does not work here, we must use marginLeft */}
          <Button
            className='button-mediumBlue textButton'
            style={{
              ...(isMobile ? { marginTop: 20 } : { marginLeft: 20 }),
            }}
          >
            Save Changes
          </Button>
          <Button
            className='button-darkBlue textButton'
            style={{
              ...(isMobile ? { marginTop: 20 } : { marginLeft: 20 }),
            }}
          >
            Logout
          </Button>


        </div>
      </div>

      <Box>

        <Box sx={{ marginTop: 3 }}>
          <Typography style={{ textFieldLabel }} >
            Name
          </Typography>
          <Box name='name'
            style=
            {{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextField
              id="userName"
              placeholder="User Name"
              name="userName"
              size='small'
              sx={{
                width: 350,
              }}
              InputProps={{ sx: { borderRadius: 2 } }}
            />
          </Box>
        </Box>

        <Box sx={{ marginTop: 3 }}>
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
              placeholder="User Email"
              name="Email"
              autoFocus
              className='input-field'
              size='small'
              sx={{
                width: 350,
              }}
              InputProps={{ sx: { borderRadius: 2 } }}
            />
          </Box>
        </Box>

        <Box sx={{ marginTop: 3 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Box name='CurrentPassword'
              style=
              {{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
              }}
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
                sx={{
                  width: 350,
                  borderRadius: 2,
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
              <Box name='NewPassword' sx={{ ml: 10 }}>
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
                  sx={{
                    width: 350,
                    borderRadius: 2,
                  }}
                />
              </Box>
              : null
            }

          </div>
        </Box>

        {changePassword ? [creationDate, status] : null }

      </Box>
    </Box >
  );
};