import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {
  Box, Paper, Tabs, Tab, IconButton,
  Typography, TextField, Button
} from '@mui/material';
import ColorTemplates from './ColorTemplates';
import '../Styles/Components.css';
import { TfiClose } from 'react-icons/tfi';
import { MdOutlineSwipe } from 'react-icons/md';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';




export default function QuizDetails(props) {

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [quizColor, setQuizColor] = useState('');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleAddClick = () => {
    if (newTag.trim() !== "") {
      setTags([...tags, ...newTag.split(',')]);
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

  const handleQuizColor = (col) => {
    setQuizColor(col);
  };

  const iconStyling = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    background: '#80808080',
    borderRadius: 25,
    padding: 10,
    top: 305,
    zIndex: 1,
    transform: "scale(3)",
    opacity: props.showIcons ? 1 : 0,
    transition: theme.transitions.create('opacity', {
      duration: 5000, // 5 seconds
      easing: theme.transitions.easing.easeOut,
    }),
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography className='inputLabel' sx={{ mt: 1 }} >
        Quiz Name
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
          id="QuizName"
          placeholder="Enter Quiz Name"
          name="QuizName"
          autoFocus
          className='input-field'
          size='small'
          sx={{
            width: 350,
          }}
          InputProps={{ sx: { borderRadius: 2 } }}
        />
      </Box>

      {isMobile && props.showIcons && (
        <Box>
          <MdOutlineSwipe style=
            {{
              ...iconStyling,
              right: 185,
            }} />
        </Box>
      )}

      {/* {selectedButton.toString()} */}
      <Typography className='inputLabel' sx={{ mt: 1 }} >
        Select a quiz picture
      </Typography>


      <Typography sx={{ mb: '-10px' }}>
        Or here are some templates to help you get started
      </Typography>
      <ColorTemplates
        selectColor={handleQuizColor} />

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