import React from "react";
import { Backdrop, Box, Modal, Fade, Button, Typography } from '@mui/material';
import '../Styles/Components.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400, // Increased width to fit 4 images
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'row', // Changed flexDirection to row
  flexWrap: 'wrap', // Allow wrapping to next line
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const imageStyle = {
  width: '90%', // Adjusted width of each image
  height: 'auto',
  margin: '5px', // Added margin between images
  cursor: 'pointer',
};

export default function ImagePickerModal(props) {
  const modalState = props.modalState;

  function handleSelect(img) {
    props.setImgPreview(img);
  }

  const images = [
    '/CategoryImages/Beakers.jpg',
    '/CategoryImages/Beakers2.png',
    '/CategoryImages/Biology.jpg',
    '/CategoryImages/Einstein.jpg',
    '/CategoryImages/Rocket.jpg',
    '/CategoryImages/Science_Chemistry.png',
    '/CategoryImages/Scientist.png',
    '/CategoryImages/Scientist2.png',
  ];

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalState}
        onClose={props.handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Fade in={modalState}>
          <Box sx={style}>
            {images.map((img) => (
              <img key={img} src={img} style={imageStyle} onClick={() => handleSelect(img)} />
            ))}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
