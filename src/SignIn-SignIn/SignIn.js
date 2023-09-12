
// import './SignUp-SignIn.css';
import '../components/Components.css';
import React from 'react';
import {
  Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box,
  Typography, Container, createTheme, ThemeProvider, AppBar, Toolbar, Paper
} from '@mui/material';


function SignIn() {
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
                LogIn
              </Typography>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'large' }}>
                <div style={{ textAlign: 'left', fontWeight: 'bold' }}>Email</div>
                <div className="faded" style={{ textAlign: 'right' }}>Mandatory</div>
              </div>
              <Box component="form" noValidate sx={{ mt: -2 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  placeholder="connectlink@gmail.com"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  className='input-field'
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', fontSize: 'large' }}>
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
                />
                <div style={{ textAlign: 'left' }}>
                  <Link className='faded' href="#" variant="body2" underline="hover">
                    Forgot Your Password?
                  </Link>
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
