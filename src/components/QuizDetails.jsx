import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {
  Box, Paper, Tabs, Tab, IconButton,
  Typography, TextField, Button
} from '@mui/material';
import ColorTemplates from './ColorTemplates';
import '../Styles/Components.css';
import { TfiClose } from 'react-icons/tfi';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImagePicker from "./ImagePicker";
import ImagePickerModal from "./ImagePickerModal";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { RxImage } from "react-icons/rx";
import { setQuizName, setQuizTags, addQuizTag, removeQuizTag, setNewTag, setQuizColor, setImageUrl } from "./redux/quizDetails";



export default function QuizDetails(props) {
  const dispatch = useDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [imgPreview, setImgPreview] = useState(null);
  const [selectImageModalState, setSelectImageModalState] = useState(false);
  // const [imageUrl, setImageUrl] = useState(false);


  const { quizName } = useSelector((state) => state.quizName);
  const { quizTags } = useSelector((state) => state.quizTags);
  const { newTag } = useSelector((state) => state.newTag);
  const { quizColor } = useSelector((state) => state.quizColor);
  const { imageUrl } = useSelector((state) => state.imageUrl);

  const handleAddClick = () => {

    if (newTag && newTag.trim() !== "") {
      const tagsArr = (newTag.split(','));

      const trimmedTags = tagsArr.map(tag => tag.trim()).filter(tag => tag !== "");

      trimmedTags.forEach(tag => {
        dispatch(addQuizTag(tag));
      });

      dispatch(setNewTag(""));
    }
  };

  const handleRemoveClick = (tagToRemove) => {
    dispatch(removeQuizTag(tagToRemove));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddClick();
    }
  };

  const changeQuizName = (e) => {
    dispatch(setQuizName(e.target.value));
  };

  const handleQuizColor = (color) => {
    dispatch(setQuizColor(color));
  };

  const handleSelectImage = (event, id) => {
    setSelectImageModalState(!selectImageModalState);

    console.log("image selection button clicked");

  };

  const selectImage = (img) => {
    dispatch(setImageUrl(img));
    console.log(img);
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

  const imagePickerButton = (
    <Button
      variant="outlined"
      size='small'
      id="importButton"
      sx={{
        height: '2rem',
        padding: '0.8125rem 1rem',
        borderRadius: '10px',
        color: '#a2a2a2',
        borderColor: '#c4c4c4',
        '&:hover': {
          borderColor: 'black',
          backgroundColor: 'white'
        },
        mt: '1rem',
        mb: '1rem'
      }}
      onClick={handleSelectImage}
    >
      <IconButton sx={{ ml: '-1rem' }}>
        <RxImage color='909090' />
      </IconButton>
      Select an image
    </Button>
  );


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
          value={quizName || ''}
          onChange={(e) => changeQuizName(e)}
          sx={{
            width: 350,
          }}
          InputProps={{ sx: { borderRadius: "0.52069rem" } }}
        />
      </Box>

      <Typography className='inputLabel' sx={{ mt: 1 }} >
        Select a quiz picture
        <Box>
          {imagePickerButton} {imageUrl ? <img src={imageUrl} alt="quizImg"
            style={{
              maxWidth: '128px',
              maxHeight: '128px',
              height: 'auto',
              width: 'auto'
            }} /> : null}
        </Box>
      </Typography>


      <Typography sx={{ mb: '-10px' }}>
        Or here are some templates to help you get started
      </Typography>
      <ColorTemplates
        selectColor={handleQuizColor}
        quizColor={quizColor}
      />

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
            width: 250,
          }}
          InputProps={{
            sx: { borderRadius: "0.52069rem" },
            value: newTag,
            onChange: (e) => dispatch(setNewTag(e.target.value))
          }}
          onKeyDown={handleKeyPress}
        />
        <Button
          className='button-mediumBlue'
          sx={{ ml: 3, mt: 1 }}
          onClick={handleAddClick}
        >
          Add
        </Button>
      </Box>

      {quizTags.map((tag, index) => (
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
            onClick={() => handleRemoveClick(tag)}
          >
            <TfiClose />
          </IconButton>
        </span>
      ))
      }

      <ImagePickerModal
        modalState={selectImageModalState}
        toggle={handleSelectImage}
        selectImage={selectImage}
      />

    </Box >
  );
}



// const quiz = {
//   "name": "testQuiz",
//   "color": "#f4bbc7",
//   "tags": [
//     "tag1",
//     "tag2",
//     "tag3"
//   ],
//   "questions": [
//     {
//       "type": "Multiple",
//       "favorite": false,
//       "correct": [
//         2
//       ],
//       "question": "what?",
//       "answers": [
//         "asdfas",
//         "fasdfasdfa",
//         "dfasdfa"
//       ]
//     },
//     {
//       "type": "Single",
//       "favorite": false,
//       "correct": [
//         0
//       ],
//       "question": "ASDFSDF",
//       "answers": [
//         "ASDFAS",
//         "FASDFASDF"
//       ]
//     },
//     {
//       "type": "Multiple",
//       "favorite": false,
//       "correct": [
//         1
//       ],
//       "question": "DFASDFASDF",
//       "answers": [
//         "FASDFASD",
//         "FASDFAS",
//         "FASDFASDF"
//       ]
//     }
//   ]
// };