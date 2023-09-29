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

export default function CategoryCard(props) {

  const [modalState, setModalState] = useState(false);
  const [categoryName, setCategoryName] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const theme = createTheme({
    palette: {
      iconOutline: {
        main: 'black'
      }
    },
  });

  const history = useNavigate();

  const handleDeleteConfirm = () => {
    setDeleteConfirm(true);
  }

  const handleDeleteButtonClick = (event, index) => {
    // Prevent the click event from propagating to the CardActionArea
    event.stopPropagation();

    setCategoryName(props.catName);
    setModalState(!modalState);

    if (deleteConfirm) {
      props.delete(index);
    }
  };

  const handleFavoriteButtonClick = (event, webAddress) => {
    event.stopPropagation();
    history(webAddress);
  };

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{
        maxWidth: 235,
        borderRadius: '20px',
        ':hover': { boxShadow: 5 }
      }}
        index={props.index}
      >
        {/* borderRadius controls how rounded the corners are */}
        <CardActionArea>

          <CardHeader sx={{ backgroundColor: `${props.color}`, height: 50 }} />
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
              {props.catName} {modalState.toString()}
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
                onClick={(event) => handleDeleteButtonClick(event, props.index)}
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
          selectedCategory={categoryName}
          handleDeleteConfirm={handleDeleteConfirm}
        />
      </Card>

    </ThemeProvider >
  );
}
