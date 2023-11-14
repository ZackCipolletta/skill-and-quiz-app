import '../Styles/Components.css';
import React, { useState, useEffect } from "react";
import { Button, Box, Typography, TextField, Link,  } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BiUser } from 'react-icons/bi';
import { LuMail } from 'react-icons/lu';

const textFieldLabel = {
  fontFamily: 'Inter',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '1.5rem', // 150%
};


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

const customStyle = {
  background: '#FFF',
  width: '25rem',
  height: '2.875rem',
  flexShrink: 0,
};


export default function CreateNewUser(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [settings, setSettings] = useState(false);


  return (

    <Box style={{ marginTop: 25, paddingBottom: 5 }}>

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

          {/* 'ml' does not work here, we must use marginLeft */}
          <Button
            className='navButton button-mediumBlue'
            style={{
              ...(!isMobile ? { marginLeft: '50px' } : { marginTop: 20 })
            }}
            onClick={props.toggle}
          >
            Back
          </Button>
        </Box> {/* Search&Button closes */}

      </Box> {/* TopNav closes */}


      <Box>
        <Box sx={{ marginTop: 3 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
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
                sx={{ ...customStyle }}
                InputProps={{
                  startAdornment : (
                    <Box sx={{ color: '#637381', marginRight: '0.5rem' }}>
                      <BiUser />
                    </Box>
                  ),
                  sx: { borderRadius: '0.375rem' },
                }}
              />

            </Box> {/* first name box closes */}

            <Box name='LastNameBox' sx={{ ml: 10 }}>
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
                sx={{ ...customStyle }}
                InputProps={{
                  startAdornment : (
                    <Box sx={{ color: '#637381', marginRight: '0.5rem' }}>
                      <BiUser />
                    </Box>
                  ),
                  sx: { borderRadius: '0.375rem' }
                }}
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
              sx={{ ...customStyle }}
              InputProps={{
                startAdornment : (
                  <Box sx={{ color: '#637381', marginRight: '0.5rem' }}>
                    <LuMail />
                  </Box>
                ),sx: { borderRadius: '0.375rem' }
              }}
            />
          </Box>
        </Box >

      </Box>

    </Box>
  );

}