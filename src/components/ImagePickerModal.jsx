import React from "react";
import { Backdrop, Box, Modal, Fade, Button, Typography } from '@mui/material';
import '../Styles/Components.css';
import LazyLoad from 'react-lazy-load';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  maxHeight: '25rem',
  width: '35rem',
  overflow: 'auto',

  boxShadow: 24,
  p: '1.5rem',
  borderRadius: '10px',
  // display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: 10,

};



export default function ImagePickerModal(props) {

  const modalState = props.modalState;

  function handleSelect(img) {
    props.selectImage(img);
    props.toggle();

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

    '/CategoryImages/Beakers - Copy.jpg',
    '/CategoryImages/Beakers2 - Copy.png',
    '/CategoryImages/Biology - Copy.jpg',
    '/CategoryImages/Einstein - Copy.jpg',
    '/CategoryImages/Rocket - Copy.jpg',
    '/CategoryImages/Science_Chemistry - Copy.png',
    '/CategoryImages/Scientist - Copy.png',
    '/CategoryImages/Scientist2 - Copy.png',

    '/CategoryImages/Beakers - Copy (2).jpg',
    '/CategoryImages/Beakers2 - Copy (2).png',
    '/CategoryImages/Biology - Copy (2).jpg',
    '/CategoryImages/Einstein - Copy (2).jpg',
    '/CategoryImages/Rocket - Copy (2).jpg',
    '/CategoryImages/Science_Chemistry - Copy (2).png',
    '/CategoryImages/Scientist - Copy (2).png',
    '/CategoryImages/Scientist2 - Copy (2).png',
  ];


  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalState}
        onClose={props.toggle}

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

            {images.map(img => (
              <LazyLoad key={img}>
                <img
                  key={img}
                  src={img}
                  onClick={() => handleSelect(img)}
                  width={"100%"}
                  style={{cursor: 'pointer'}} 
                />
              </LazyLoad>
            ))}

          </Box>
        </Fade>
      </Modal>
    </div >
  );
}
