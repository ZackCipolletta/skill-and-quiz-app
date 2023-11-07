import '../Styles/Components.css';
import React, { useState } from "react";
import { Button, Toolbar, Typography, IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";

import { HiOutlineCog8Tooth, HiOutlineChevronLeft } from 'react-icons/hi2';

export default function Header() {
  const [settings, setSettings] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/categories');
  };

  const toggle = () => {
    setSettings(!settings);
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
          onClick={handleClick}
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
          onClick={toggle}>

          <HiOutlineChevronLeft style={{
            transform: "scaleY(.8)"
          }} />
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
              borderRadius: '5px'
            }}
            className='button-darkBlue'
            onClick={toggle} >
            <HiOutlineCog8Tooth />
          </IconButton>
        }


      </Toolbar>
    </div >
  );

}

