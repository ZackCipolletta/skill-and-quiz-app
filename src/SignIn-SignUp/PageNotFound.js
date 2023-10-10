
import '../Styles/Components.css';
import React from 'react';
import {Box, Typography} from '@mui/material';


export default function PageNotFound() {


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Typography
        variant="h1"
        align='left'
        fontSize={150}
        fontWeight={850}
      >
        404
      </Typography>
      <Typography
        variant="h5"
        align='left'
        fontWeight={850}
        sx={{ mb: '20px'}}
      >
        Page not found
      </Typography>
      <Typography
        align='left'
      >
        <a href='/'> Back to Home </a>
      </Typography>
    </Box>
  );
}

