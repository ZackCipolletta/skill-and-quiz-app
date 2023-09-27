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

  const modalState = props.toggle;

  return (
    <div>
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
            <Typography id="transition-modal-title" className='inputLabel' sx={{ mt: 1 }} >
              Select custom colour
            </Typography>
            <Typography id="transition-modal-title" component="h2" >
              Here are some templates to help you get started
            </Typography>

            <ColorTemplates />
            <Box>
              <Button className='button-mediumBlue' onClick={props.handleClose}>Create category</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
