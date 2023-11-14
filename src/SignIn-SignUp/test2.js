import { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { LuMail } from 'your-icon-library'; // Replace with the correct import for your icon

// ... other code ...

export default function YourComponent() {
  const [email, setEmail] = useState('');

  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography style={{ textFieldLabel }}>
        Email
      </Typography>
      <Box name='Email' style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          id="Email"
          placeholder="Enter email address here"
          name="Email"
          autoFocus
          className='input-field'
          size='small'
          sx={{ ...customStyle }}
          InputProps={{
            startAdornment: email === '' ? (
              <Box sx={{ color: '#637381', marginRight: '0.5rem' }}>
                <LuMail />
              </Box>
            ) : null,
            sx: { borderRadius: '0.375rem' },
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
    </Box>
  );
}
