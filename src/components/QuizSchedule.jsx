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
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';


import dayjs, { Dayjs } from 'dayjs';

export default function QuizSchedule() {

  const [date, setDate] = useState(new Date());
  
  const [startDate, setStartDate] = React.useState(dayjs(`${date}`));
  const [startTime, setStartTime] = React.useState(dayjs(`${date}`));
  const [endDate, setEndDate] = React.useState(dayjs(`${date}`));
  const [endTime, setEndTime] = React.useState(dayjs(`${date}`));

  
  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}>

      

      <Box sx={{ mb: 5, display: 'flex' }}>
        <Box sx={{ mr: 5 }}>
          <Typography>Start Date</Typography>
          <DatePicker
            value={startDate}
            onChange={(newStartDate) => setStartDate(newStartDate)}
            minDate={dayjs(`${date}`)}
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
          <Typography>Start Time</Typography>
          <TimePicker
            value={startTime}
            onChange={(newStartTime) => setStartTime(newStartTime)}
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
      </Box>

      <Box sx={{ mb: 2, display: 'flex' }}>
        <Box sx={{ mr: 5 }}>
          <Typography>End Date</Typography>
          <DatePicker
            value={endDate ? dayjs(endDate) : null}
            onChange={(newEndDate) => setEndDate(newEndDate)}
            minDate={startDate ? dayjs(startDate) : dayjs()}
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
          <Typography>End Time</Typography>
          <TimePicker
            value={endTime}
            onChange={(newEndTime) => setEndTime(newEndTime)}
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
      </Box>

    </LocalizationProvider >

  );
};  