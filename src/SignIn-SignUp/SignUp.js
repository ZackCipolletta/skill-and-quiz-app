
// import './SignUp-SignIn.css';
import '../components/Components.css';
import React, { useState } from 'react';
import {
  Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box,
  Typography, Container, createTheme, InputAdornment, ThemeProvider, AppBar, Toolbar, Paper, IconButton
} from '@mui/material';
import isEmail from 'validator/lib/isEmail';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function SignIn() {

const [email, setEmail] = useState('');
const [isValidEmail, setIsValidEmail] = useState(false);
const [password, setPassword] = useState('');
const [isValidPassword, setIsValidPassword] = useState(false);

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

const handlePasswordChange = (event) => {
  const inputPassword = event.target.value;
  setPassword(inputPassword);

  setIsValidPassword(isPassword(inputPassword));
}

const isPassword = (str) => {
  if (str.length >= 8) {
    return true;
  } else {
    return false
  }
};



  return (
    <div className="SignUp-SignIn">
      <div className="SignUp-SignIn-splash">
        <Paper className="signIn-paper">

          <Container component="main">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography component="h1" variant="h5" align='left' fontWeight={850} sx={{ mb: '20px', mt: -5 }} >
                SignUp
              </Typography>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'large' }}>
                <div style={{ textAlign: 'left', fontWeight: 'bold' }}>Name</div>
                <div className="faded" style={{ textAlign: 'right' }}>Mandatory</div>
              </div>
              <Box component="form" noValidate sx={{ mt: -2 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  placeholder="Placeholder"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  className='input-field'
                />

                <div style=
                  {{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: 'large',
                  marginBottom: '-18px'
                  }}
                >
                  <div style=
                    {{
                      textAlign: 'left',
                      fontWeight: 'bold'
                    }}
                  >
                    Email</div>
                  <div className="faded" style={{ textAlign: 'right' }}>Mandatory</div>
                </div>
                {/* <Box component="form" noValidate sx={{ mt: -2 }}> */}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px', fontSize: 'large' }}>
                  <div style={{ textAlign: 'left', fontWeight: 'bold' }}>Password</div>
                  <div className="faded" style={{ textAlign: 'right' }}>Mandatory</div>
                </div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  placeholder="Placeholder"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{ mb: -1, mt: -1 }}
                  className='input-field'
                  value={password}
                  onChange={handlePasswordChange}
                  error={!isValidPassword && password !== ''} // apply error style if password is less than 8 characters and not and empty string
                  helperText={!isValidPassword && password !== '' ? "Enter At Least 8 Characters Long" : ""}
                />
                <div style={{ textAlign: 'left' }}>
                  {/* place warning text here that password must be at least 8 characters long */}
                </div>

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
  );
}

export default SignIn;
