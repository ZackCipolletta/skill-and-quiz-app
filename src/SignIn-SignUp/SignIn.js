
import '../Styles/Components.css';
import React, { useState } from 'react';
import {
  Button, CssBaseline, TextField, Link, Box,
  Typography, Container, createTheme, ThemeProvider, Paper, InputAdornment, IconButton
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import isEmail from 'validator/lib/isEmail';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setLoggedInUserEmail, setLoggedInUserID } from '../components/redux/User';


export default function SignIn() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    setIsValidEmail(isEmail(inputEmail));
  };

  const handlePasswordChange = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
  };

  const theme = createTheme({
    palette: {
      valid: {
        main: '#67c27c'
      }
    },
  });

  const handleButtonClick = () => {
    doSignIn();
  };

  function doSignIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`);
        // props.onSignInSuccess(userCredential.user);

        navigate('/categories');
        dispatch(setLoggedInUserEmail(userCredential.user.email));
        dispatch(setLoggedInUserID(userCredential.user.uid));

        // onSuccess store the userCredential or just email & displayName in redux state to be verified against the db of quizzes and
        // categories, providing edit and delete options if user created them or if admin
        // also to display under account info and when updating userName or password
      })
      .catch((error) => {
        // setSignInSuccess(`There was an error signing in: ${error.message}!`);
      });
  }



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
                  LogIn
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
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '5px',
                    fontSize: 'large'
                  }}
                  >
                    <div style={{
                      textAlign: 'left',
                      fontWeight: 'bold'
                    }}>
                      Password
                    </div>
                    <div
                      className="faded"
                      style={{ textAlign: 'right' }}
                    >
                      Mandatory
                    </div>
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
                  />
                  <div style={{ textAlign: 'left' }}>
                    <Link
                      className='faded'
                      href="password-recovery"
                      variant="body2"
                      underline="hover"
                    >
                      Forgot Your Password?
                    </Link>
                  </div>

                  <Button
                    type="Button"
                    fullWidth
                    className='button-black'
                    sx={{ mt: 3, mb: 1 }}
                    onClick={handleButtonClick}
                  >
                    Continue
                  </Button>

                  <Button
                    type="Button"
                    fullWidth
                    className='button-mediumBlue'
                    // color='blue'
                    sx={{ mt: 0, mb: 6 }}

                  >
                    Sign in with LinkedIn (replace w/LI API)
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

