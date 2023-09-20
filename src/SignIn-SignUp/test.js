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
        <CardHeader sx={{ backgroundColor: '#cfd9fa', height: 50 }} />
        <CardContent>

          <Box sx={{ display: 'flex', alignItems: 'center' }} >
            <Typography>
              Science
            </Typography>
            <div style={{ marginLeft: 'auto' }}>
              <IconButton sx={{ width: '1px', padding: 1 }} className='IconButton'><StarOutlineOutlinedIcon /></IconButton>
              <IconButton sx={{ width: '1px', padding: 1 }}><DeleteForeverOutlinedIcon /></IconButton>
            </div>
          </Box>
          
        </CardContent>
      </Card>
    </div >
  );

}

export default QuizBoard;
