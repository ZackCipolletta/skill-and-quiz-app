import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, Tabs, Tab, Typography, TextField } from '@mui/material';
import ColorTemplates from './ColorTemplates';
import '../Styles/Components.css';

export default function QuizQuestions() {

  return (
    <Box sx={{ width: '100%' }}>
      <Typography className='inputLabel' sx={{ mt: 1 }} >
        Have Questions Already? Import them!
      </Typography>

      <TextField
        margin="normal"
        required
        id="QuizName"
        placeholder="Enter Question"
        name="QuizName"
        autoFocus
        className='input-field'
        height="50px"
        size='small'
        sx={{
          width: 350
        }}
        InputProps={{ sx: { borderRadius: 2 } }}
      />
      {/* {selectedButton.toString()} */}
      <Typography className='inputLabel' sx={{ mt: 1 }} >
        Select a quiz picture
      </Typography>
      <Typography>
        Or here are some templates to help you get started
      </Typography>
      <ColorTemplates />

      <Typography className='inputLabel' >
        Tags
      </Typography>
      <TextField
        margin="normal"
        required
        id="QuizName"
        placeholder="Enter Quiz Name"
        name="QuizName"
        autoFocus
        className='input-field'
        height="50px"
        sx={{
          width: 350
        }}
      />
    </Box >
  );
}