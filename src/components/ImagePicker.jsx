import React, { useRef } from "react";
import Papa from 'papaparse';
import { RxImage } from "react-icons/rx";
import {
  Button, 
  IconButton,
} from '@mui/material';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import {
  setQuestionAnswerArr} from "./redux/quizQuestions";



export default function ImagePicker(props) {
  const fileInputRef = useRef(null);

  const dispatch = useDispatch();  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // parseCSV(file);
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
          <RxImage color='909090' />
        </IconButton>
        Select an image
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

