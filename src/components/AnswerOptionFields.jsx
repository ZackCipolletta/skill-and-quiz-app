import React, { useState } from "react";
import { Box, TextField, IconButton, } from '@mui/material';
import '../Styles/Components.css';
import { TfiClose } from 'react-icons/tfi';


const generateOptionFields = () => {


  const [answerType, setAnswerType] = useState('');
  const [options, setOptions] = useState(0);
  const [question, setQuestion] = useState('');
  const [answersArr, setAnswersArr] = useState([])


  const optionFields = [];
  const optionsArray = ['A', 'B', 'C', 'D'];

  for (let i = 0; i < options; i++) {
    // Assign options the four letters of the optionsArray
    optionFields.push(
      <Box key={i} sx={{ mt: 1 }}>
        <TextField
          required
          value={answersArr[i]} // points to a different answer in the array (using i). 
          // Without the index to select the position of the array, each answer TextField 
          // becomes the same. Modifying one, modifies each other TextField to be equal. 
          onChange={(e) => handleAnswerArrChange(i, e.target.value)}
          id={`Quiz-Answer-${optionsArray[i]}`}
          placeholder={`Enter Option ${optionsArray[i]}`}
          name={`Quiz-Answer-${optionsArray[i]}`}
          className='input-field'
          height='50px'
          size='small'
          sx={{
            width: 200
          }}
          InputProps={{ sx: { borderRadius: 2 } }}
        />
        {i > 0 && ( // if there is more than 1 answer option, add an X icon to 
          // remove or delete that specified TextField
          <IconButton sx={{ transform: "scale(0.5)" }}
            onClick={handleRemoveClick}>
            <TfiClose />
          </IconButton>
        )}
      </Box>
    );
  }
  return optionFields;
};