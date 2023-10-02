import '../Styles/Components.css';
import React, { useState } from "react";
import {
  Typography, Card, CardContent, CardHeader, CardActions,
  CardActionArea, Box, IconButton, createTheme, ThemeProvider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteCategoryModal from './DeleteCategoryModal';
import { PiTrashThin, PiTagChevron } from 'react-icons/pi';

export default function CategoryCard(props) {

  const [modalState, setModalState] = useState(false);
  const [quizName, setQuizName] = useState(null);

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
    setQuizName(props.quiz);
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
              {props.quiz.Name}
            </Typography>

            <CardActions style={{ all: "initial" }}>
              {/* scale enlarges the icons in both X and Y directions, ScaleY stretches left right  */}
              <IconButton sx={{
                marginLeft: '5px',
                marginRight: '-25px',
                transform: "rotate(90deg) scale(.7) scaleY(1.2)"
              }}
                onClick={(event) => handleFavoriteButtonClick(event)}
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
        <Typography sx={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '5px',
          mx: 2,
          mb: 1
        }}>
          {props.quiz.tags.map((tag, index) => (
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

          {/* borderRadius: '20px', */}
        </Typography>
        <DeleteCategoryModal
          toggle={modalState}
          handleClose={handleDeleteButtonClick}
          selectedQuiz={quizName}
        />
      </Card>

    </ThemeProvider >
  );
}
