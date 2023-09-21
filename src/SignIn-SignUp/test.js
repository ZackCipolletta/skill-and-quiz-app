import '../Styles/Components.css';
import React from "react";
import {
  Typography, Card, CardContent, CardHeader, CardActions, CardActionArea,
  Box, IconButton, createTheme, ThemeProvider
} from '@mui/material';

import { PiTrashThin, PiTagChevron } from 'react-icons/pi';

export default function QuizCard(props) {
  const theme = createTheme({
    palette: {
      iconOutline: {
        main: 'black'
      }
    },
  });

  console.log(props.category);

  const handleIconButtonClick = (event) => {
    // Prevent the click event from propagating to the CardActionArea
    event.stopPropagation();
    
    // Handle the click event for the IconButton here
    // You can add your logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{
        maxWidth: 235,
        borderRadius: '20px',
        ':hover': { boxShadow: 5 }
      }}
      >
        <CardHeader sx={{ backgroundColor: '#cfd9fa', height: 50 }} />
        <CardActionArea>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '5px',
              mx: 2,
              mb: 1
            }}
          >
            <Typography sx={{ flex: 1, minWidth: 0 }}>
              {props.category}
            </Typography>
          </Box>
        </CardActionArea>

        <CardActions style={{ all: "initial" }}>
          {/* Attach the click event handler to the IconButton elements */}
          <IconButton
            sx={{
              marginLeft: '5px',
              marginRight: '-25px',
              transform: "rotate(90deg) scale(.7) scaleY(1.2)"
            }}
            onClick={handleIconButtonClick}
          >
            <PiTagChevron color='black' />
          </IconButton>
          <IconButton
            sx={{
              marginRight: '-5px',
              transform: "scale(.7) scaleY(1.2)"
            }}
            onClick={handleIconButtonClick}
          >
            <PiTrashThin color='red' />
          </IconButton>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
