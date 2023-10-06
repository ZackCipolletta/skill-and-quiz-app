import React, { useState } from "react";
import PropTypes from 'prop-types';
import {
  Box, Paper, Tabs, Tab, IconButton,
  Typography, TextField, Button
} from '@mui/material';
import ColorTemplates from './ColorTemplates';
import '../Styles/Components.css';
import { TfiClose } from 'react-icons/tfi';

export default function QuizDetails() {

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const handleAddClick = () => {
    if (newTag.trim() !== "") {
      const splitTags = newTag.split(',');
      setTags([...splitTags]);
      setNewTag("");
    }
  };

  const handleRemoveClick = (tagToRemove) => {
    const updatedTags = tags.filter(tag => tag !== tagToRemove);
    setTags(updatedTags);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddClick();
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography className='inputLabel' sx={{ mt: 1 }} >
        Quiz Name
      </Typography>

      <TextField
        margin="normal"
        required
        id="QuizName"
        placeholder="Enter Quiz Name"
        name="QuizName"
        autoFocus
        className='input-field'
        borderRadius='20px'
        size='small'
        sx={{
          width: 350,
        }}
        InputProps={{ sx: { borderRadius: 2 } }}
      />
      {/* {selectedButton.toString()} */}
      <Typography className='inputLabel' sx={{ mt: 1 }} >
        Select a quiz picture
      </Typography>
      <Typography sx={{ mb: '-10px' }}>
        Or here are some templates to help you get started
      </Typography>
      <ColorTemplates />

      <Typography className='inputLabel' >
        Tags
      </Typography>
      <Box style=
        {{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField
          margin="normal"
          required
          id="QuizTags"
          placeholder="Placeholder"
          name="QuizTags"
          className='Placeholder'
          size='small'
          sx={{
            width: 250
          }}
          InputProps={{
            sx: { borderRadius: 2 },
            value: newTag,
            onChange: (e) => setNewTag(e.target.value)
          }}
          onKeyDown={handleKeyPress}
        />
        <Button
          className='button-mediumBlue'
          sx={{ ml: 3, }}
          onClick={() => handleAddClick()}>
          Add
        </Button>
      </Box>

      {tags.map((tag, index) => (
        <span key={index} className="tag" style={{
          border: '1px solid #67c27c',
          padding: '5px',
          paddingLeft: '7px',
          paddingRight: '7px',
          borderRadius: '15px',
          color: '#67c27c',
          background: 'rgba(103, 194, 124, .09)',
          marginRight: '5px', // Add marginRight to create spacing between tags
        }}>
          {tag}
          <IconButton
            sx={{ transform: "scale(0.4)", mr: '-15px', ml: '-10px' }}
            onClick={() => handleRemoveClick(tag)}>
            <TfiClose />
          </IconButton>
        </span>
      ))
      }
    </Box >
  );
}