
import './SignUp-SignIn.css';
import React from 'react';
import {
  Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box,
  Typography, Container, createTheme, ThemeProvider, AppBar, Toolbar, Paper
} from '@mui/material';


function SignIn() {
  return (
    <div className="App">
      <div className="App-splash">
        <Paper>

          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'left',
              }}
            >
              <Typography component="h1" variant="h5" align='left' fontWeight={850}>
                LogIn
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="connectlink@gmail.com"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <div style={{ textAlign: 'left', marginBottom: "5px" }} >Password</div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Placeholder"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{mb: -1, mt: -1}}
                />
                <Link style={{ textAlign: 'left' }} className='faded' href="#" variant="body2" underline="hover">
                  Forgot Your Password?
                </Link>
                <Button
                  type="Continue"
                  fullWidth
                  className='button-black'
                  sx={{ mt: 3, mb: 2 }}
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
