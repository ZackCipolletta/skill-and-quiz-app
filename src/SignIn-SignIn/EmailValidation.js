import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../components/Components.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import isEmail from 'validator/lib/isEmail';


function EmailValidation() {
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

  return (
    <ThemeProvider theme={theme}>
      <div>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {isValidEmail && (
                  <IconButton edge="end" color="success">
                    <CheckCircleIcon />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default EmailValidation;
