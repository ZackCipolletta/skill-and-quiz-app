import '../Styles/Components.css';
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import {
  Typography, Card, CardHeader, CardActions,
  CardActionArea, Box, IconButton, createTheme, ThemeProvider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PiTrashThin } from 'react-icons/pi';
import { PiStar, PiStarFill } from 'react-icons/pi';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { loadUserFavCats } from './redux/User';

export default function Cards(props) {
  const { cardInfo, cardType } = props;
  const dispatch = useDispatch();

  const cardTheme = createTheme({
    palette: {
      iconOutline: {
        main: 'black'
      }
    },
  });

  useEffect(() => {
    dispatch(loadUserFavCats());
    console.log("favorites are:" + userFavs)
  }, [dispatch]);


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const user = useSelector((state) => state.loggedInUserEmail.user);

  const userFavs = useSelector((state) => state.loggedInUserFavCats);

  const cardHeight = props.height;
  const handleDeleteButtonClick = (e, id, cardName) => {
    // Prevent the click event from propagating to the CardActionArea
    e.stopPropagation();
    props.deleteClick(e, id, cardName);
  };

  const handleFavoriteButtonClick = (e, id) => {
    e.stopPropagation();
    props.favorite(id);
  };

  const trashButton = (
    <IconButton sx={{
      marginRight: '-5px',
      transform: "scale(.7) scaleY(1.2)"
    }}
      onClick={(event) => handleDeleteButtonClick(event, cardInfo.id, cardInfo.Name)}
    >
      <PiTrashThin color='red' />
    </IconButton>
  );

  const displayTrash = (creator) => {
    if (cardType === "quiz" && user === creator) {
      return true;
    } else if (cardType === "category" && user) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ThemeProvider theme={cardTheme}>
      <Card sx={{
        maxWidth: 235,
        minWidth: !isMobile ? 200 : {},
        borderRadius: '20px',
        ':hover': { boxShadow: 5 },
        mb: 2
      }}
        index={props.index}
        id={props.id}
      >
        {/* borderRadius controls how rounded the corners are */}
        <CardActionArea onClick={() => props.onClickEvent()}>

          <CardHeader sx={{
            backgroundImage: cardInfo.Image ? `url('${cardInfo.Image}')` : null,
            background: cardInfo.Image ? null : cardInfo.Color,
            height: cardHeight,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }} />
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
              {cardInfo.Name}
            </Typography>

            <CardActions style={{ all: "initial" }}>
              {/* scale enlarges the icons in both X and Y directions, ScaleY stretches left right  */}
              <IconButton sx={{
                marginLeft: '5px',
                // we need to check if the trash icon is displayed to set the margin properly for the favorite icon
                marginRight: displayTrash(cardInfo.Creator) ? '-25px' : null,
                transform: "scale(.7)"
              }}
                onClick={(event) => handleFavoriteButtonClick(event, cardInfo.id)}
              >
                {cardInfo.Favorite ? (
                  <PiStarFill color='gold' />
                ) : (<PiStar color='black' />
                )}

              </IconButton>

              { // we check to see if the creator of the quiz matches the logged in user
                // if so we give them the option to delete the quiz
                displayTrash(cardInfo.Creator) ? trashButton : null
              }

            </CardActions>
            {/* </div> */}
          </Box>
        </CardActionArea>

        {cardInfo.tags && (
          <Typography sx={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '5px',
            mx: 2,
            mb: 1
          }}>
            {cardInfo.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  border: '1px solid #67c27c',
                  padding: '1px',
                  paddingLeft: '7px',
                  paddingRight: '7px',
                  borderRadius: '15px',
                  color: '#67c27c',
                  background: 'rgba(103, 194, 124, .09)',
                  marginRight: '5px', // Add marginRight to create spacing between tags
                }}
              >
                {tag}
              </span>
            ))}
          </Typography>
        )}
      </Card>

    </ThemeProvider >
  );
}