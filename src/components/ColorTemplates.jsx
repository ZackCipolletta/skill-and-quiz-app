import React, { useState } from "react";
import { Box, Button, IconButton} from '@mui/material';
import '../Styles/Components.css';
import { CgColorPicker } from 'react-icons/cg';

export default function ColorTemplates(props) {

  const [selectedButton, setSelectedButton] = useState(null);

  const handleChange = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const emptyRoundButtonStyle = {
    borderRadius: '50%', // Makes the button round
    width: '25px', // Adjust the width as needed
    height: '25px', // Adjust the height as needed
    padding: 0, // Remove padding
    margin: 7,
    minWidth: 0, // Ensure a minimum width of 0
    minHeight: 0, // Ensure a minimum height of 0
    border: selectedButton === null ? "2px solid transparent" : "2px solid transparent",
  };

  return (
    <div>
      <Box sx={{ my: 2 }}>
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
        
      </Box>
    </div>
  );
}
