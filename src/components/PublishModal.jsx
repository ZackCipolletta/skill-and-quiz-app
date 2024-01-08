import React from "react";
import {
  Backdrop, Box, Modal, Fade,
  Button, Typography
} from '@mui/material';
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

export default function PublishModal(props) {

  const { publishModalState, handleConfirmPublishButtonClick, handleCancelButtonClick, quizToPublish } = props;


  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={publishModalState}
        onClose={handleCancelButtonClick}

        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          }
        }}
      >
        <Fade in={publishModalState}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" >
              Do you want to publish {quizToPublish}?
            </Typography>
            <Box sx={{pt: 2 }}>
              <Button
                className='button-redButton'
                onClick={handleConfirmPublishButtonClick}
                sx={{ mr: 5 }}>
                Publish
              </Button>
              <Button
                className='button-mediumBlue'
                onClick={handleCancelButtonClick}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
