import './Components.css';
import React, { useState, useEffect } from "react";
import {
  Button, AppBar, Toolbar, Typography, Card, CardMedia,
  CardContent, CardActions, CardHeader, Box, IconButton, createTheme, ThemeProvider
} from '@mui/material';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';

function QuizBoard() {

  const theme = createTheme({
    palette: {
      iconOutline: {
        main: 'black'
      }
    },
  });


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
                <IconButton sx={{ width: "50%" }} >
                  <StarOutlineOutlinedIcon color='iconOutline' />
                </IconButton>
                <IconButton sx={{ width: "50%" }}>
                  <DeleteForeverOutlinedIcon color='warning' />
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

export default QuizBoard;

{/* <Button variant="outlined" class='custom-button' sx={{ width: '1px', padding: 0}} ><StarOutlineOutlinedIcon /></Button> */ }
{/* <Button variant="outlined" class='custom-button'  sx={{ width: '1px', padding: 0}} ><DeleteForeverOutlinedIcon /></Button> */ }