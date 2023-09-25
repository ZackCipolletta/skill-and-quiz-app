import React, { useState } from "react";
import {
  Backdrop, Box, Modal, Fade, TextField,
  Button, Typography, IconButton, Radio
} from '@mui/material';
import '../Styles/Components.css';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { TfiClose } from 'react-icons/tfi';
import { IoCloseOutline } from 'react-icons/io5';
import { CgColorPicker } from 'react-icons/cg';
import ColorTemplates from "./ColorTemplates";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

export default function CreateNewCategoryModal(props) {

  // const handleClose = props.toggle;
  // const [selectedButton, setSelectedButton] = useState(null);

  const modalState = props.toggle;

  // const handleChange = (buttonName) => {
  //   setSelectedButton(buttonName);
  // };


  // const emptyRoundButtonStyle = {
  //   borderRadius: '50%', // Makes the button round
  //   width: '25px', // Adjust the width as needed
  //   height: '25px', // Adjust the height as needed
  //   padding: 0, // Remove padding
  //   margin: 7,
  //   minWidth: 0, // Ensure a minimum width of 0
  //   minHeight: 0, // Ensure a minimum height of 0
  //   border: selectedButton === null ? "2px solid transparent" : "2px solid transparent",
  // };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalState}
        onClose={props.handleClose}

        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modalState}>
          <Box sx={style}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography id="transition-modal-title" className='inputLabel' >
                Add name to Quiz Category
              </Typography>
              <IconButton sx={{ transform: "scale(0.7)" }} onClick={props.handleCancel}>
                <TfiClose />
              </IconButton>
            </Box>
            <TextField
              margin="normal"
              required
              width="250"
              id="QuizName"
              placeholder="Enter Quiz name"
              name="QuizName"
              autoFocus
              className='input-field'
              sx={{
                width: 350
              }}
              InputProps={{ sx: { borderRadius: 2 } }}
            />
            {/* {selectedButton.toString()} */}
            <Typography id="transition-modal-title" className='inputLabel' sx={{ mt: 1 }} >
              Select custom colour
            </Typography>
            <Typography id="transition-modal-title" component="h2" >
              Here are some templates to help you get started
            </Typography>

            <ColorTemplates />

            {/* <Box sx={{ my: 2 }}>
              <Button
                variant="outlined"
                style={emptyRoundButtonStyle}
                sx={{
                  backgroundColor: 'rgba(167,215,249,255)',
                  border: selectedButton === 'button1' ? '2px solid rgb(62, 167, 242) !important' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(167, 215, 249, 1)',
                    border: '2px solid rgb(62, 167, 242) !important'
                  }
                }}
                onClick={() => handleChange('button1')}
              >
              </Button>
              <Button
                variant="outlined"
                style={emptyRoundButtonStyle}
                sx={{
                  backgroundColor: 'rgba(207,217,250,255)',
                  border: selectedButton === 'button2' ? '2px solid rgb(95, 129, 238) !important' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(207,217,250,255)',
                    border: '2px solid rgb(95, 129, 238) !important'
                  }
                }}
                onClick={() => handleChange('button2')}
              >
              </Button>

              <Button
                variant="outlined"
                style={emptyRoundButtonStyle}
                sx={{
                  backgroundColor: 'rgb(244,187,199,255)',
                  border: selectedButton === 'button3' ? '2px solid rgb(228, 87, 117) !important' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgb(244,187,199,255)',
                    border: '2px solid rgb(228, 87, 117) !important'
                  }
                }}
                onClick={() => handleChange('button3')}
              >
              </Button>

              <Button
                variant="outlined"
                style={emptyRoundButtonStyle}
                sx={{
                  backgroundColor: 'rgba(192,248,137,255)',
                  border: selectedButton === 'button4' ? '2px solid rgb(140, 242, 39) !important' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(192,248,137,255)',
                    border: '2px solid rgb(140, 242, 39) !important'
                  }
                }}
                onClick={() => handleChange('button4')}
              >
              </Button>

              <IconButton sx={{ color: 'black', transform: "scale(0.8)" }}>
                <CgColorPicker />
              </IconButton>
            </Box> */}

            <Box>
              <Button className='button-mediumBlue' onClick={props.handleClose}>Create category</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
