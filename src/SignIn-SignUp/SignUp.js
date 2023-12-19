import '../Styles/Components.css';
import React, { useState } from 'react';
import {
  Button, CssBaseline, TextField, Box, Typography, Container, Checkbox,
  createTheme, InputAdornment, ThemeProvider, Paper, IconButton
} from '@mui/material';
import isEmail from 'validator/lib/isEmail';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db } from "../firebase";
import {
  addDoc, doc, getDocs, onSnapshot, updateDoc, setDoc, deleteDoc, collection,
  serverTimestamp, getDoc, query, where, orderBy, limit, startAt,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';



function SignIn() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [tosAgreement, setTosAgreement] = useState(false);
  const [displayTosWarning, setDisplayTosWarning] = useState(false);
  // const [signUpSuccess, setSignUpSuccess] = useState(null);

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

  const handlePasswordChange = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);

    setIsValidPassword(isPassword(inputPassword));
  };

  const handleNameChange = (event) => {
    const inputName = event.target.value;
    setName(inputName);

    // setIsValidPassword(isPassword(inputPassword));  // use to check value of name
  };




  // the best thing to do is to create a 'users' document which stores the user data on sign up and then set up
  // authentication / authorization to allow only users with 'admin' role to access the doc.

  // then in the doc I can also assign roles and update the doc when a user is deleted or changes there name.

  // read documentation on how to Define Cloud Firestore security rules to restrict read/write access to the list.
  // Allow read access only for users with the "admin" claim.
  // Allow write access only for authorized users to update their own data or for admins to manage user data.


  const isPassword = (str) => str.length >= 8;

  const handleButtonClick = () => {
    if (tosAgreement) {
      //proceed to next page, send info to server, etc
      setDisplayTosWarning(false);
      doSignUp();
    } else {
      setDisplayTosWarning(true);
    }

  };

  const currentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
    const day = currentDate.getDate();
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  };


  function doSignUp() {
    let signUpSuccess;
    let userId;
    // event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Update user profile
        userId = userCredential.user.uid;
        console.log(userId);
        return updateProfile(userCredential.user, {
          displayName: `${name}`
        });

      })
      .then(() => {
        // Handle additional user-related tasks
        return handleAddNewUser(email, userId);
      })
      .then(() => {
        // Set sign-up success message
        signUpSuccess = `You've successfully signed up, ${name}!`;
        // Navigate or perform additional actions here
        // navigate('/');
      })
      .catch((error) => {
        // Handle errors
        signUpSuccess = `There was an error signing up: ${error.message}!`;
      })
      .finally(() => {
        console.log(signUpSuccess);
        console.log("once again the id is: " + userId);
      });
  }

  // const auth = getAuth();
  // const user = auth.currentUser;
  // const printUserInfo = () => {
  //   if (user !== null) {
  //     user.providerData.forEach((profile) => {
  //       console.log("  Name: " + profile.displayName);
  //       console.log("  Email: " + profile.email);
  //     });
  //     console.log("id = " + user.uid);
  //   }
  // };


  const handleAddNewUser = async (email, userId) => {
    const newUser = {
      displayName: `${name}`, email: email, joinDate: currentDate(), quizzesAttempted: 0,
      quizzesCreated: 0, quizzesWon: 0, role: null, id: userId,
    };
    try {
      return await addDoc(collection(db, "users"), newUser);
    } catch (error) {
      console.error("error adding new quiz to Firestore: ", error);
      throw error;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="SignUp-SignIn">
        <div className="SignUp-SignIn-splash">
          <Paper className="signIn-paper">

            <Container component="main">
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
                  SignUp
                </Typography>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: 'large'
                }}
                >
                  <div style={{
                    textAlign: 'left',
                    fontWeight: 'bold'
                  }}
                  >
                    Name
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
                  noValidate
                  sx={{ mt: -2 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    placeholder="Placeholder"
                    name="name"
                    autoFocus
                    className='input-field'
                    value={name}
                    onChange={handleNameChange}
                  />

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 'large',
                    marginBottom: '-18px'
                  }}
                  >
                    <div style={{
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
                  {/* <Box component="form" noValidate sx={{ mt: -2 }}> */}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"

                    name="email"
                    autoComplete="email"
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
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '7px',
                      fontSize: 'large'
                    }}
                  >
                    <div
                      style={{
                        textAlign: 'left',
                        fontWeight: 'bold'
                      }}
                    >
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
                    error={!isValidPassword && password !== ''} // apply error style if password is less than 8 characters and not and empty string
                    helperText={!isValidPassword && password !== '' ? "Enter At Least 8 Characters Long" : ""}
                  />
                  <div style={{ textAlign: 'left' }}>
                  </div>

                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: -2 }}>
                      <Checkbox
                        size="small"
                        InputProps={{
                          label: 'tosAgreement'
                        }}
                        onChange={() => setTosAgreement(!tosAgreement)}
                      />
                      <Typography
                        fontSize={10}
                        sx={{ paddingTop: 2 }}
                      >
                        By signing up, I agree with
                        <a href='https://myconnectlink.com/terms-of-service/'> ConnectLink terms of service </a>
                        and <a href='https://myconnectlink.com/privacy-policy/'>Privacy Policy </a>
                      </Typography>
                    </Box>

                    {(displayTosWarning) && (
                      <Typography
                        fontSize={10}
                        sx={{ marginTop: 3, marginBottom: -2 }}
                        color={'red'}
                      >
                        You must agree to the terms of service and privacy policy before proceeding.
                      </Typography>
                    )}

                  </Box>

                  <Button
                    fullWidth
                    className='button-black'
                    sx={{ mt: 3, mb: 6 }}
                    onClick={handleButtonClick}
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

export default SignIn;
