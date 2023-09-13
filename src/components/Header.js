import './Components.css';
import React, { useState, useEffect } from "react";
import { Button, AppBar, Toolbar, Typography } from '@mui/material';

function Header() {

  return (
    <div>
      {/*The elevation property here removes the default shadow for the MUI AppBar element */}
      <AppBar position="static" elevation={0}>
        <Toolbar className='lightBlue-bg'>
          <Typography className='darkBlue-text' fontWeight='bold' variant="h6">ConnectLink</Typography>
          <Button className='button-darkBlue'>SignUp</Button>
        </Toolbar>
      </AppBar>
    </div>
  )

}

export default Header;