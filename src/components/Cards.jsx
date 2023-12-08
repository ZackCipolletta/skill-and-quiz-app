import '../Styles/Components.css';
import React from "react";
import {
  Typography, Card, CardHeader, CardActions,
  CardActionArea, Box, IconButton, createTheme, ThemeProvider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PiTrashThin } from 'react-icons/pi';
import { PiStar, PiStarFill } from 'react-icons/pi';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Cards(props) {
  const { cardInfo } = props;

  const cardTheme = createTheme({
    palette: {
      iconOutline: {
        main: 'black'
      }
    },
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const history = useNavigate();

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
                marginRight: '-25px',
                transform: "scale(.7)"
              }}
                onClick={(event) => handleFavoriteButtonClick(event, cardInfo.id)}
              >
                {cardInfo.Favorite ? (
                  <PiStarFill color='gold' />
                ) : (<PiStar color='black' />
                )}

              </IconButton>
              <IconButton sx={{
                marginRight: '-5px',
                transform: "scale(.7) scaleY(1.2)"
              }}
                // onClick={(event) => handleDeleteButtonClick(event, props.id)}
                onClick={(event) => handleDeleteButtonClick(event, cardInfo.id, cardInfo.Name)}
              >
                <PiTrashThin color='red' />

              </IconButton>
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