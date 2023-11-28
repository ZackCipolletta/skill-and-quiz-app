import React from "react";
import { Backdrop, Box, Modal, Fade, Button, Typography } from '@mui/material';
import '../Styles/Components.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
};



export default function ImagePickerModal(props) {

  const modalState = props.toggleDeleteState;

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
          }
        }}
      >
        <Fade in={modalState}>
          <Box sx={style}>





          <Box>
        {images.map(img => (
          <img
            key={img}
            src={img}
            onClick={() => handleSelect(img)}
          />
        ))}
        </Box>

            





          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
