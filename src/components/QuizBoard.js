import './Components.css';
import React, { useState, useEffect } from "react";
import {
  Button, AppBar, Toolbar, Typography, Card, CardMedia,
  CardContent, CardActions, CardHeader, Box, IconButton
} from '@mui/material';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';

function QuizBoard() {

  return (
    <div style={{ paddingTop: '50px' }}>
      <Card variant="outlined" sx={{ maxWidth: 250, borderRadius: '20px' }}>
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
            <div style={{ marginLeft: '95px' }}>
              <IconButton sx={{ width: "50%" }} >
                <StarOutlineOutlinedIcon />
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
  );

}

export default QuizBoard;

{/* <Button variant="outlined" class='custom-button' sx={{ width: '1px', padding: 0}} ><StarOutlineOutlinedIcon /></Button> */ }
{/* <Button variant="outlined" class='custom-button'  sx={{ width: '1px', padding: 0}} ><DeleteForeverOutlinedIcon /></Button> */ }