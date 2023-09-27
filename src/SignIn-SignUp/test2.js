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

  const handleAddOptionClick = () => {
    if (options < 4) {
      setOptions(options + 1);
    }
  };

  const handleRemoveClick = () => {
    if (options > 0) {
      setOptions(options - 1);
    }
  };

  const generateOptionFields = () => {
    const optionFields = [];

    for (let i = 0; i < options; i++) {
      const optionPlaceholder = String.fromCharCode(65 + i); // A, B, C, D, ...

      optionFields.push(
        <Box key={i} sx={{ mt: 1 }}>
          <TextField
            required
            id={`QuizName-Option-${optionPlaceholder}`}
            placeholder={`Enter Option ${optionPlaceholder}`}
            name={`QuizName-Option-${optionPlaceholder}`}
            className='input-field'
            height='50px'
            size='small'
            sx={{
              width: 200
            }}
            InputProps={{ sx: { borderRadius: 2 } }}
          />
          {i > 0 && (
            <IconButton sx={{ transform: "scale(0.5)" }} onClick={handleRemoveClick}>
              <TfiClose />
            </IconButton>
          )}
        </Box>
      );
    }

    return optionFields;
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* ... Other components */}
      <Box id='answersList'>
        {generateOptionFields()}
      </Box>
      {/* ... Other components */}
    </Box >
  );
}
