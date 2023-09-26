import React, { useState } from "react";
import PropTypes from 'prop-types';
import {
  Box, Button, Paper, Tabs, Tab, Typography, InputLabel,
  TextField, FormControl, Select, MenuItem
} from '@mui/material';
import ColorTemplates from './ColorTemplates';
import '../Styles/Components.css';

export default function QuizQuestions() {

  const [answerType, setAnswerType] = useState('');

  const handleChange = (event) => {
    setAnswerType(event.target.value);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography className='inputLabel' sx={{ mt: 1 }} >
        Have Questions Already? Import them!
      </Typography>
      Import using CSV

      <Typography className='inputLabel' sx={{ mt: 1 }} >
        Questions
      </Typography>
      <TextField
        // margin="normal"
        required
        id="QuizName"
        placeholder="Enter Question"
        name="QuizName"
        autoFocus
        className='input-field'
        height="50px"
        size='small'
        sx={{
          width: 550
        }}
        InputProps={{ sx: { borderRadius: 2 } }}
      />
      <Button className='button-mediumBlue' sx={{ ml: 4 }}>Add</Button>

      <Box sx={{ ml: -1, mt: 5 }}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Answer Type</InputLabel>
          <Select
            value={answerType}
            label="AnswerType"
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Single Choice'}>Single Choice</MenuItem>
            <MenuItem value={'Multiple Choice'}>Multiple Choice</MenuItem>
            <MenuItem value={'Type in Answer'}>Type in Answer</MenuItem>
          </Select>
        </FormControl>
      </Box>


    </Box >
  );
}