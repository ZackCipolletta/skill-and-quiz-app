import '../Styles/Components.css';
import React, { useState } from "react";
import {
  Typography, Card, CardContent, CardHeader, CardActions,
  CardActionArea, Box, IconButton, createTheme, ThemeProvider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteCategoryModal from './DeleteCategoryModal';
import { PiTrashThin, PiTagChevron, PiTagChevronFill } from 'react-icons/pi';
import PropTypes from "prop-types";

// PiTagChevronFill will be colored gold and used to signify a 'favorite' category

export default function CategoryCard(props) {
  const { category } = props;

  const theme = createTheme({
    palette: {
      iconOutline: {
        main: 'black'
      }
    },
  });

  const history = useNavigate();

  const handleDeleteButtonClick = (e, id, catName) => {
    // Prevent the click event from propagating to the CardActionArea
    e.stopPropagation();
    props.toggle(e, id, catName);
  };

  // const handleFavoriteButtonClick = (e, id) => {
  //   e.stopPropagation();
  //   // history(webAddress);
  // };

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{
        maxWidth: 235,
        borderRadius: '20px',
        ':hover': { boxShadow: 5 }
      }}
        index={props.index}
        id={props.id}
      >
        {/* borderRadius controls how rounded the corners are */}
        <CardActionArea>

          <CardHeader sx={{ backgroundColor: `${category.Color}`, height: 50 }} />
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
              {category.Name} {category.id}
            </Typography>

            <CardActions style={{ all: "initial" }}>
              {/* scale enlarges the icons in both X and Y directions, ScaleY stretches left right  */}
              <IconButton sx={{
                marginLeft: '5px',
                marginRight: '-25px',
                transform: "rotate(90deg) scale(.7) scaleY(1.2)"
              }}
                onClick={(event) => props.favorite(category.id)}
              >

                
                {category.Favorite ? (
                  <PiTagChevronFill color='gold' />
              ) : (  <PiTagChevron color='black' />
          )}
                
              </IconButton>
              <IconButton sx={{
                marginRight: '-5px',
                transform: "scale(.7) scaleY(1.2)"
              }}
                // onClick={(event) => handleDeleteButtonClick(event, props.id)}
                onClick={(event) => handleDeleteButtonClick(event, category.id, category.Name)}
              >
                <PiTrashThin color='red' />

              </IconButton>
            </CardActions>
            {/* </div> */}
          </Box>
        </CardActionArea>
      </Card>

    </ThemeProvider >
  );
}