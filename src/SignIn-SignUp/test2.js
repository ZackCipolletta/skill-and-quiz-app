import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
} from '@mui/material';

export default function QuizDetails() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState(''); // State for the new tag input field

  const handleAddClick = () => {
    if (newTag.trim() !== "") {
      setTags([...tags, newTag]); // Add the new tag to the array
      setNewTag(""); // Clear the input field
    }
  };

  const handleRemoveClick = (tagToRemove) => {
    const updatedTags = tags.filter(tag => tag !== tagToRemove);
    setTags(updatedTags);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* ...other code */}
      
      <Typography className='inputLabel'>
        Tags
      </Typography>
      <Box style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <TextField
          margin="normal"
          required
          id="QuizTags"
          placeholder="Placeholder"
          name="QuizTags"
          autoFocus
          className='Placeholder'
          size='small'
          sx={{
            width: 250
          }}
          InputProps={{
            sx: { borderRadius: 2 },
            value: newTag, // Bind the input field value to the state
            onChange: (e) => setNewTag(e.target.value), // Handle input change
          }}
        />
        <Button
          className='button-mediumBlue'
          sx={{ ml: 3 }}
          onClick={handleAddClick}>
          Add
        </Button>
      </Box>

      {/* Display the added tags */}
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
          <Button
            className='button-mediumBlue'
            sx={{ ml: 1 }}
            onClick={() => handleRemoveClick(tag)}>
            Remove
          </Button>
        </span>
      ))}
    </Box>
  );
}
