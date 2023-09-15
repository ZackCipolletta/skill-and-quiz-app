
import '../components/Components.css';
import React, { useState } from 'react';
import {
  Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box,
  Typography, Container, createTheme, ThemeProvider, AppBar, Toolbar, Paper, InputAdornment, IconButton
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import isEmail from 'validator/lib/isEmail';


function SignInTest() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    setIsValidEmail(isEmail(inputEmail));
  };

  const theme = createTheme({
    palette: {
      success: {
        main: '#67c27c'
      }
    },
  });

  const validPassword = (str) => {
    if (str.length >= 8) {
      return true;
    } else {
      return false
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <div className="SignUp-SignIn">
        <div className="SignUp-SignIn-splash">
          <Paper className="signIn-paper">

            <Container component="main">
              <CssBaseline />
              <Box>
                <div style={{ textAlign: 'left', fontWeight: 'bold' }}>Email</div>
                <div className="faded" style={{ textAlign: 'right' }}>Mandatory</div>
                <Box component="form" noValidate sx={{ mt: -2 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"

                    name="email"
                    autoComplete="email"
                    autoFocus
                    className='input-field'
                    value={email}
                    // as the email is being entered, call handleEmailChange function which will set the value of email in state and uses the regex to evaluate the inputEmail.
                    onChange={handleEmailChange}
                    error={!isValidEmail && email !== ''} // Apply error style if email is not valid and not empty
                    helperText={!isValidEmail && email !== '' ? "Invalid Email" : ""}
                    label={!isValidEmail && email !== '' ? "Error" : ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {isValidEmail && (
                            <IconButton edge="end" color="success">
                              <CheckCircleIcon />
                            </IconButton>
                          )
                          }
                        </InputAdornment>
                      ),
                      sx: isValidEmail
                        ? {
                          '& fieldset': { borderColor: 'green !important' },
                          '&:hover fieldset': { borderColor: 'green !important' },
                        }
                        : {},
                    }}
                  />
                </Box>
              </Box>
            </Container>

          </Paper>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default SignInTest;
