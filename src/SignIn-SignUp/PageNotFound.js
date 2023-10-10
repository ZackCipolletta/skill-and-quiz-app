
import '../Styles/Components.css';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


export default function PageNotFound() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/')
}

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
      <Button
        align='left'
        variant='contained'
        onClick={handleButtonClick}
      >
          Back to Home
      </Button>
    </Box>
  );
}

