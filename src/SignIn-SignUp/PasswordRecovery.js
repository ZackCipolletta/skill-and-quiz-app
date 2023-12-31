
import '../Styles/Components.css';
import React, { useState } from 'react';
import {
  Button, CssBaseline, TextField, Link, Box,
  Typography, Container, createTheme, ThemeProvider, Paper, InputAdornment, IconButton
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import isEmail from 'validator/lib/isEmail';


export default function PasswordRecovery() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    setIsValidEmail(isEmail(inputEmail));
  };

  const theme = createTheme({
    palette: {
      valid: {
        main: '#67c27c'
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="SignUp-SignIn">
        <div className="SignUp-SignIn-splash">
          <Paper className="signIn-paper">

            <Container>
              <CssBaseline />
              <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
              }}
              >
                <Typography
                  component="h1"
                  variant="h5"
                  align='left'
                  fontWeight={850}
                  sx={{ mb: '20px', mt: -5 }}
                >
                  Recover Your Password
                </Typography>

                <div
                  style=
                  {{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 'large'
                  }}
                >
                  <div
                    style={{
                      textAlign: 'left',
                      fontWeight: 'bold'
                    }}
                  >
                    Email
                  </div>
                  <div
                    className="faded"
                    style={{ textAlign: 'right' }}
                  >
                    Mandatory
                  </div>
                </div>
                <Box
                  component="form"
                  noValidate sx={{ mt: -2 }}
                >
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
                    // as the email is being entered, call handleEmailChange function which will set the value 
                    // of email in state and uses the regex to evaluate the inputEmail.
                    onChange={handleEmailChange}
                    error={!isValidEmail && email !== ''} // Apply error style if email is not valid and not empty
                    helperText={!isValidEmail && email !== '' ? "Invalid Email" : ""}
                    label={!isValidEmail && email !== '' ? "Error" : ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {isValidEmail && (
                            <IconButton edge="end" color="valid">
                              <CheckCircleIcon />
                            </IconButton>
                          )
                          }
                        </InputAdornment>
                      ),
                      sx: isValidEmail
                        ? {
                          '& fieldset': { borderColor: theme.palette.valid.main + '!important' },
                          '&:hover fieldset': { borderColor: theme.palette.valid.main + '!important' },
                        }
                        : {},
                    }}
                  />
                  <Button
                    type="Continue"
                    fullWidth
                    className='button-black'
                    sx={{ mt: 3, mb: 6 }}
                  >
                    Continue
                  </Button>
                </Box>
              </Box>
            </Container>

          </Paper>
        </div>
      </div>
    </ThemeProvider>
  );
}

