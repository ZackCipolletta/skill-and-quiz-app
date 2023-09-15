import * as React from 'react';
import '../components/Components.css';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';


export default function EmailValidation() {

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          sx={{
            fieldset: { borderColor: "green" }
          }}
          // error
          // helperText="Invalid Email"
          id="outlined-error-helper-text"
          defaultValue="Hello World"
        />
      </div>
    </Box>
  );
}