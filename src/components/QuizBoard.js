import './Components.css';
import React, {  } from "react";
import {
  Typography, Card, 
  CardContent, CardHeader, Box, IconButton, createTheme, ThemeProvider
} from '@mui/material';


import { PiTagChevronThin, PiTrashThin } from 'react-icons/pi';

export default function QuizBoard() {

  const theme = createTheme({
    palette: {
      iconOutline: {
        main: 'black'
      }
    },
  });

  // move card into it's own component, import into QuizBoard and and styling to accommodate multiple cards - 3 across and stacked vertically with appropriate spacing.

  return (
    <ThemeProvider theme={theme}>
      <div style={{ paddingTop: '50px' }}>
        <Card  sx={{ maxWidth: 235, borderRadius: '20px', ':hover': { boxShadow: 5 } }} >
          {/* borderRadius controls how roudned the corners are */}
          <CardHeader sx={{ backgroundColor: '#cfd9fa', height: 50 }} />
          <CardContent>
            <Box
              sx=
              {{
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '5px',

                marginBottom: '-15px',
                marginTop: '-15px'
              }}
            >

              {/* <CardActions sx={{ padding: '0px', marginBottom: '-15px' }}> */}
              <Typography /*gutterBottom variant="h5" component="div" */>
                Science
              </Typography>
              <div style={{ marginLeft: '80px' }}>
                {/* scale enlarges the icons in both X and Y directions, ScaleY stretches left right  */}
                <IconButton sx={{ width: "50%", marginLeft: '5px', transform: "rotate(90deg) scale(1.1) scaleY(1.2)" }} >
                  <PiTagChevronThin color='black' />
                </IconButton>
                <IconButton sx={{ width: "50%", marginLeft: '-5px', transform: "scale(1.1) scaleY(1.2)" }}>
                  <PiTrashThin color='red' />
                </IconButton>
              </div>
              {/* </CardActions> */}

            </Box>
          </CardContent>
        </Card>
      </div >
    </ThemeProvider>
  );

}
