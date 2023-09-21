import React, { useState } from "react";
import {
  Backdrop, Box, Modal, Fade,
  Button, Typography
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px'
};

export default function DeleteCategoryModal(props) {
  const [open, setOpen] = useState(false);
  // const handleClose = props.toggle;


  const modalState = props.toggle;

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
            <Typography id="transition-modal-title" variant="h6" component="h2">
            Do you want to delete "{props.selectedCategory}" category?
            </Typography>
            <Button onClick={props.handleClose}>Cancel</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
