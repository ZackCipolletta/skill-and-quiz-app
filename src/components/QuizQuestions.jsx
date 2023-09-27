import React, { useState } from "react";
import PropTypes from 'prop-types';
import {
  Box, Button, Paper, Tabs, Tab, Typography, InputLabel,
  TextField, FormControl, Select, MenuItem, IconButton
} from '@mui/material';
import ColorTemplates from './ColorTemplates';
import '../Styles/Components.css';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { FaFileCsv } from 'react-icons/fa';



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
      <Button
        variant="outlined"
        size='small'
        id="importButton"
        sx={{
          p: 0,
          pr: 1,
          borderRadius: '10px',
          color: '#a2a2a2',
          borderColor: '#c4c4c4',
          '&:hover': {
            borderColor: 'black',
            backgroundColor: 'white'
          }
        }}
      >
        <IconButton>
          <FaFileCsv color='green' />
        </IconButton>
        Import using CSV
      </Button>
      <Typography className='inputLabel' sx={{ mt: 1 }} >
        Questions
      </Typography>
      <TextField
        required
        id='QuizName'
        placeholder='Enter Question'
        name='QuizName'
        className='input-field'
        height='50px'
        size='small'
        sx={{
          width: 550
        }}
        InputProps={{ sx: { borderRadius: 2, borderColor: 'purple !important' } }}
      />
      <Button className='button-mediumBlue' sx={{ ml: 4, }}>Add</Button>

      <Box sx={{ mt: 5 }}>
        <FormControl size='small'>
          <InputLabel id="select-answer-type"
            sx={{
              color: "#a2a2a2"
            }}
          >
            Answer Type
          </InputLabel>
          <div >
            <Select

              labelId='select-answer-type'
              id='select-answer-type'
              value={answerType}
              onChange={handleChange}
              label='answerType'
              sx={{
                minWidth: 200,
                mr: 2,
                borderRadius: 2
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Single Choice'}>Single Choice</MenuItem>
              <MenuItem value={'Multiple Choice'}>Multiple Choice</MenuItem>
              <MenuItem value={'Type in Answer'}>Type in Answer</MenuItem>
            </Select>

            {(answerType === 'Single Choice' || answerType === 'Multiple Choice') && (
              <>
                <IconButton>
                  <AddBoxOutlinedIcon sx={{ color: "rgba(72, 139, 253, 255)" }} />
                </IconButton>
                <Typography
                  component="span"
                  sx={{
                    color: '#a2a2a2'
                  }}>
                  Add another option
                </Typography>
              </>
            )}

          </div>

        </FormControl>
      </Box>


    </Box >
  );
}