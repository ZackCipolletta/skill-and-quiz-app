import React, { useState } from "react";
import PropTypes from 'prop-types';
import {
  Box, Button, Paper, Tabs, Tab, Typography, InputLabel,
  TextField, FormControl, Select, MenuItem, IconButton,
} from '@mui/material';
import ColorTemplates from './ColorTemplates';
import '../Styles/Components.css';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { FaFileCsv } from 'react-icons/fa';
import { TfiClose } from 'react-icons/tfi';



export default function QuizQuestions() {

  const [answerType, setAnswerType] = useState('');
  const [options, setOptions] = useState(0);

  const handleChange = (event) => {
    setAnswerType(event.target.value);
  };

  const answersList = document.getElementById("answersList");
  const optionNumber = answersList ? answersList.children.length : 0;


  const handleAddOptionClick = () => {
    setOptions(options < 4 ? options + 1 : options);
  };

  const handleRemoveClick = () => {
    setOptions(options - 1);
  };

  const generateOptionFields = () => {
    const optionFields = [];

    const optionsArray = ['A', 'B', 'C', 'D'];


    for (let i = 0; i < options; i++) {

      optionFields.push(
        <Box key={i} sx={{ mt: 1 }}>
          <TextField
            required
            id={`Quiz-Answer-${optionsArray[i - 1]}`}
            placeholder={`Enter Answer ${optionsArray[i]}`}
            name={`Quiz-Answer-${optionsArray[i - 1]}`}
            className='input-field'
            height='50px'
            size='small'
            sx={{
              width: 200
            }}
            InputProps={{ sx: { borderRadius: 2 } }}
          />
          {i > 0 && (
            <IconButton sx={{ transform: "scale(0.5)" }}
              onClick={handleRemoveClick}>
              <TfiClose />
            </IconButton>
          )}
        </Box>
      );
    }
    return optionFields;
  }

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
          InputProps={{ sx: { borderRadius: 2 } }}
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
                <Box component="span">
                  <IconButton>
                    <AddBoxOutlinedIcon sx={{ color: "rgba(72, 139, 253, 255)" }}
                      onClick={handleAddOptionClick} />
                  </IconButton>
                  <Typography
                    component="span"
                    sx={{
                      color: '#a2a2a2'
                    }}>
                    Add another option
                    {options.toString()}
                  </Typography>
                </Box>
              )}

              <Box id='answersList'>

                {generateOptionFields()}
              </Box>

            </div>
          </FormControl>
        </Box>

      </Box >
    );
  };  