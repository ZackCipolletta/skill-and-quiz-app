import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

function EmailValidation() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    // Regular expression for validating email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  return (
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
                  <CheckIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default EmailValidation;
