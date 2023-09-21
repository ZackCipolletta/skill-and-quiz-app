import '../Styles/Components.css';
import React, { useState } from "react";
import {
  Typography, Card, CardContent, CardHeader, CardActions,
  CardActionArea, Box, IconButton, createTheme, ThemeProvider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteCategoryModal from './DeleteCategoryModal';
import { PiTrashThin, PiTagChevron } from 'react-icons/pi';
// PiTagChevronFill will be colored gold and used to signify a 'favorite' category


export default function QuizCard(props) {

  const [modalState, setModalState] = useState(false);

  const theme = createTheme({
    palette: {
      iconOutline: {
        main: 'black'
      }
    },
  });

  const history = useNavigate();

  const handleDeleteButtonClick = (event) => {
    // Prevent the click event from propagating to the CardActionArea
    event.stopPropagation();

    // Handle the click event for the IconButton here
    // You can add your logic here
    setModalState(!modalState);
  };

  const handleFavoriteButtonClick = (event, webAddress) => {
    // Prevent the click event from propagating to the CardActionArea
    event.stopPropagation();

    // Handle the click event for the IconButton here
    // You can add your logic here
    history(webAddress);
  };

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{
        maxWidth: 235,
        borderRadius: '20px',
        ':hover': { boxShadow: 5 }
      }}
      >
        {/* borderRadius controls how rounded the corners are */}
        <CardActionArea>
          <CardHeader sx={{ backgroundColor: '#cfd9fa', height: 50 }} />
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '5px',
            mx: 2,
            mb: 1
          }}
          >
            <Typography /*gutterBottom variant="h5" component="div" */ sx={{ flex: 1, minWidth: 0 }}>
              {/* By default, flex containers will try to distribute space among their children elements based 
            on their content and available space. When you add content to one child element, it can affect the layout of other child elements. */}
              {props.category} {modalState.toString()}
            </Typography>

            <CardActions style={{ all: "initial" }}>
              {/* scale enlarges the icons in both X and Y directions, ScaleY stretches left right  */}
              <IconButton sx={{
                marginLeft: '5px',
                marginRight: '-25px',
                transform: "rotate(90deg) scale(.7) scaleY(1.2)"
              }}
                onClick={(event) => handleFavoriteButtonClick(event, 'favorite')}
              >
                <PiTagChevron color='black' />
              </IconButton>
              <IconButton sx={{
                marginRight: '-5px',
                transform: "scale(.7) scaleY(1.2)"
              }}
                onClick={(event) => handleDeleteButtonClick(event, 'delete')}
              >
                <PiTrashThin color='red' />

              </IconButton>
            </CardActions>
            {/* </div> */}
          </Box>
        </CardActionArea>
        <DeleteCategoryModal
          toggle={modalState}
          handleClose={handleDeleteButtonClick}
        />
      </Card>

    </ThemeProvider >
  );
}
