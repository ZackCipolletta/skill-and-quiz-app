import './Components.css';
import React, { useState, useEffect } from "react";
import { Button, AppBar, Toolbar, Typography } from '@mui/material';

function Header() {

  return (
    <div style={{ margin: 0 }}>
    {/*disableGutters removes the default built in padding for the element*/}
      <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography className='darkBlue-text' fontWeight='bold' variant="h6">ConnectLink</Typography>
          <Button className='button-darkBlue'>Logout</Button>
        </Toolbar>
    </div>
  )

}

export default Header;