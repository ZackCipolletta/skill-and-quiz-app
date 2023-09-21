import '../Styles/Components.css';
import React, { } from "react";
import {
  Typography, Card, CardContent, CardHeader,
  Box, IconButton, createTheme, ThemeProvider
} from '@mui/material';


import { PiTagChevronThin, PiTrashThin, PiTagChevronFill } from 'react-icons/pi';
// PiTagChevronFill will be colored gold and used to signify a 'favorite' category



export default function QuizCard(props) {

  const theme = createTheme({
    palette: {
      iconOutline: {
        main: 'black'
      }
    },
  });

  console.log(props.category)

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 235, borderRadius: '20px', ':hover': { boxShadow: 5 } }} >
        {/* borderRadius controls how rounded the corners are */}
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
            <Typography /*gutterBottom variant="h5" component="div" */>
              {props.category}
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

          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}