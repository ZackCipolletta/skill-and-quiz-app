import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, Tabs, Tab, Typography, TextField } from '@mui/material';
import ColorTemplates from './ColorTemplates';

export default function QuizDetails() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" component="h2" sx={{ mt: 1 }} >
        Select a quiz picture
      </Typography>

      <TextField
        margin="normal"
        required
        width="250"
        id="QuizName"
        placeholder="Enter Quiz name"
        name="QuizName"
        autoFocus
        className='input-field'
        sx={{
          width: 350
        }}
      />
      {/* {selectedButton.toString()} */}
      <Typography variant="h6" component="h2" sx={{ mt: 1 }} >
        Select a quiz picture
      </Typography>
      <Typography component="h2" >
        Or here are some templates to help you get started
      </Typography>

      <ColorTemplates />
    </Box >
  );
}