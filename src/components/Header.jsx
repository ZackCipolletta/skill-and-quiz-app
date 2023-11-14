import '../Styles/Components.css';
import React, { useState } from "react";
import { Button, Toolbar, Typography, IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";

import { HiOutlineCog8Tooth, HiOutlineChevronLeft } from 'react-icons/hi2';
import { FaChevronLeft } from 'react-icons/fa';

export default function Header() {
  const [settings, setSettings] = useState(false);

  const navigate = useNavigate();

  const titleClick = () => {
    navigate('/categories');
  };

  const toggle = () => {
    setSettings(!settings);
  };

  const settingsClick = () => {
    toggle();
    navigate('/settings');
  };

  const backClick = () => {
    toggle();
    navigate(-1);
  };

  return (
    <div style={{ margin: 0 }}>
      {/*disableGutters removes the default built in padding for the element*/}
      <Toolbar disableGutters sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Typography
          className='darkBlue-text'
          fontWeight='bold'
          variant="h6"
          onClick={titleClick}
          style={{ cursor: 'pointer' }}
        >
          ConnectLink
        </Typography>



        {settings ? <Button
          className='button-darkBlue'
          style={{
            gap: '0.3125rem',
            flexShrink: 0,
            borderRadius: '0.25rem',
            color: '#FFF',
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: '1.5rem',
          }}
          onClick={backClick}>

          <FaChevronLeft />
          Back
        </Button>

          :

          <IconButton
            sx={{
              display: 'flex',
              padding: '.3rem .4rem',
              justifyContent: 'center',
              alignItems: 'center',
              transform: "scale(1.2)",
              borderRadius: '5px',
              backgroundColor: 'var(--darkBlue)',
              color: 'white',
              transition: 'box-shadow 0.3s',
              '&:hover': {
                backgroundColor: 'var(--darkBlue)',
                boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)',
              },
            }}
            // className='button-darkBlue'
            onClick={settingsClick} >
            <HiOutlineCog8Tooth />
          </IconButton>
        }


      </Toolbar>
    </div >
  );

}

