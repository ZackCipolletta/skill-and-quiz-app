import React, { useState } from "react";
import {
  Backdrop, Box, Modal, Fade, TextField,
  Button, Typography, IconButton
} from '@mui/material';
import '../Styles/Components.css';
import { TfiClose } from 'react-icons/tfi';
import ColorTemplates from "./ColorTemplates";
import PropTypes from "prop-types";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function CreateNewCategoryModal(props) {

  const [catName, setCatName] = useState("");
  const [catColor, setCatColor] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [indexCounter, setIndexCounter] = useState(7); // ------------------------------DELETE THIS!!! -------------------------------------

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: !isMobile ? 450 : 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
  };

  const modalState = props.toggle;

  const createCategory = () => {
    if (catName?.trim()) {
      if (catColor?.trim()) {
        props.handleAddNewCategory({ Name: catName, Color: catColor, id: indexCounter });
      } else {
        props.handleAddNewCategory({ Name: catName, Color: '#cfd9fa', id: indexCounter });
      }
      setIndexCounter(indexCounter + 1);
      setCatColor("");
    }
    close();
    setCatName("");
  };

  const handleCatColor = (col) => {
    setCatColor(col);
  };

  const close = () => {
    props.handleCancel();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      createCategory();
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalState}
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
              <IconButton sx={{ transform: "scale(0.7)" }} onClick={close}>
                <TfiClose />
              </IconButton>
            </Box>
            <TextField
              margin="normal"
              required
              width="250"
              size="small"
              id="QuizName"
              placeholder="Enter Category Name"
              name="QuizName"
              autoFocus
              className='input-field'
              sx={{
                width: !isMobile ? 350 : 250
              }}
              InputProps={{
                sx: { borderRadius: 2 },
                value: catName,
                onChange: (e) => setCatName(e.target.value)
              }}
              onKeyDown={handleKeyPress}
            />
            <Typography id="transition-modal-title" className='inputLabel' sx={{ mt: 1 }} >
              Select custom colour
            </Typography>
            <Typography id="transition-modal-title" component="h2" >
              Here are some templates to help you get started
            </Typography>

            <ColorTemplates
              selectColor={handleCatColor}
            />
            <Box>
              <Button
                className='button-mediumBlue'
                onClick={createCategory}
              >
                Create category
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

CreateNewCategoryModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleAddNewCategory: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};