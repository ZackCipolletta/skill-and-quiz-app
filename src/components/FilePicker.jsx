import React, { useRef } from "react";
import Papa from 'papaparse';
import { FaFileCsv, FaCheckCircle } from 'react-icons/fa';
import {
  Box, Button, Paper, Typography, InputLabel, Table, TableContainer,
  TextField, FormControl, Select, MenuItem, IconButton, Checkbox,
} from '@mui/material';



export default function FilePicker(props) {
  const fileInputRef = useRef(null);


  const parseCSV = (file) => {
    Papa.parse(file, {
      complete: (result) => {
        // The 'result' object now contains the CSV data as JSON objects
        const jsonData = result.data;

        // Helper function to split a field if it contains the delimiter
        const splitIfContains = (field) => {
          return field && field.includes(',') ? field.split(',') : field;
        };

        // Modify the jsonData to split fields with '|' delimiter
        const modifiedData = jsonData.map((row) => ({
          ...row,
          correct: splitIfContains(row.correct),
          answers: splitIfContains(row.answers),
        }));


        console.log(modifiedData);

        // You can pass 'modifiedData' to your parent component via the 'onFileSelected' callback
        // onFileSelected(modifiedData);

        console.log('CSV to JSON conversion complete.');
        addUploadedQuestions(modifiedData);
      },
      header: true, // Set to true if the CSV file has headers
    });
  };


  const addUploadedQuestions = (upload) => {
    upload.forEach((obj) => {
      props.setQuestionAnswerArr((prevState) => ({
        ...prevState,
        questions: [
          ...prevState.questions,
          {
            type: obj.type,
            correct: Array.isArray(obj.correct) ?
              obj.correct.map((str) => parseInt(str, 10)) :
              parseInt(obj.correct),

            question: obj.question,
            answers: obj.answers
          }
        ]
      }));
    });
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    parseCSV(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
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
        onClick={handleButtonClick} // in order for the button to handle picking the CSV file, onClick we actaully
      // have it call a function, which calls the file picker input. Which is a hidden 'input' component.
      >
        <IconButton>
          <FaFileCsv color='green' />
        </IconButton>
        Import using CSV
      </Button>


      <input //Here 
        type="file"
        accept=".csv" // specify the file type to accept
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </>
  );
};

