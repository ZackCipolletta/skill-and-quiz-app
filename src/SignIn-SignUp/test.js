import React from "react";
import {
  Typography, Card, CardContent, CardHeader,
  Box, IconButton, createTheme, ThemeProvider
} from '@mui/material';

import { PiTagChevronThin, PiTrashThin, PiTagChevronFill } from 'react-icons/pi';

export default function QuizCard(props) {
  const theme = createTheme({
    palette: {
      iconOutline: {
        main: 'black'
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 235, borderRadius: '20px', ':hover': { boxShadow: 5 } }} >
        <CardHeader sx={{ backgroundColor: '#cfd9fa', height: 50 }} />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '5px',
              marginBottom: '-15px',
              marginTop: '-15px'
            }}
          >
            <Typography>
              {props.categories.map((category, index) => (
                <div key={index}>
                  {category.Name}
                  <div style={{ marginLeft: '80px' }}>
                    <IconButton sx={{ width: "50%", marginLeft: '5px', transform: "rotate(90deg) scale(1.1) scaleY(1.2)" }}>
                      <PiTagChevronThin color='black' />
                    </IconButton>
                    <IconButton sx={{ width: "50%", marginLeft: '-5px', transform: "scale(1.1) scaleY(1.2)" }}>
                      <PiTrashThin color='red' />
                    </IconButton>
                  </div>
                </div>
              ))}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
