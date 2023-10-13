<Box>

<Box sx={{ marginBottom: 5 }}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Typography>Start Date</Typography>
    <DatePicker
      value={startDate}
      onChange={(newStartDate) => setStartDate(newStartDate)}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2, // This will make the border radius 10px
        },
        '& .MuiOutlinedInput-input': {
          padding: '5px', // Adjust the padding as needed
        }
      }}
    />

  </LocalizationProvider >
</Box>

<Box>
  <LocalizationProvider>
    <Typography>End Date</Typography>
    <DatePicker
      value={startDate}
      onChange={(newStartDate) => setStartDate(newStartDate)}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2, // This will make the border radius 10px
        },
        '& .MuiOutlinedInput-input': {
          padding: '5px', // Adjust the padding as needed
        }
      }}
    />

  </LocalizationProvider >
</Box>

</Box>;






import React, { useState } from "react";
import PropTypes from 'prop-types';
import {
  Box, Button, Paper, Tabs, Tab, Typography, InputLabel,
  TextField, FormControl, Select, MenuItem, IconButton,
} from '@mui/material';
import ColorTemplates from './ColorTemplates';
import '../Styles/Components.css';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { FaFileCsv } from 'react-icons/fa';
import { TfiClose } from 'react-icons/tfi';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';


import dayjs, { Dayjs } from 'dayjs';

export default function QuizSchedule() {

  const [startDate, setStartDate] = React.useState(dayjs('2022-04-17'));
  // const [endDate, setEndDate] = React.useState < Dayjs | null > (dayjs('2022-04-17'));


  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <Box sx={{mb: 2}}>
        <Typography>Start Date</Typography>
        <DatePicker
          value={startDate}
          onChange={(newStartDate) => setStartDate(newStartDate)}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2, // This will make the border radius 10px
            },
            '& .MuiOutlinedInput-input': {
              padding: '5px', // Adjust the padding as needed
            }
          }}
        />
      </Box>

      <Box>
        <Typography>End Date</Typography>
        <DatePicker
          value={startDate}
          onChange={(newStartDate) => setStartDate(newStartDate)}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2, // This will make the border radius 10px
            },
            '& .MuiOutlinedInput-input': {
              padding: '5px', // Adjust the padding as needed
            }
          }}
        />
      </Box>
    </LocalizationProvider >

    // <LocalizationProvider
    //   dateAdapter={AdapterDayjs}
    //   sx={{ width: '100%' }}>

    //   <Typography>Start Date</Typography>
    //   <DatePicker
    //       label="Controlled picker"
    //       // value={startDate}
    //       // onChange={(newStartDate) => setStartDate(newStartDate)}
    //     />


    //   <Typography>Start Time</Typography>


    //   <Typography>End Date</Typography>
    //   <DatePicker
    //       label="Controlled picker"
    //       // value={endDate}
    //       // onChange={(newEndDate) => setEndDate(newEndDate)}
    //     />


    //   <Typography>End Time</Typography>


    // </LocalizationProvider>
  );
};  