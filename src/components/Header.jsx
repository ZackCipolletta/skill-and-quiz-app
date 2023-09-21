import '../Styles/Components.css';
import React, {  } from "react";
import { Button, Toolbar, Typography } from '@mui/material';

export default function Header() {

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
        >
          ConnectLink
        </Typography>
        <Button className='button-darkBlue'>
          Logout
        </Button>
        </Toolbar>
    </div>
  )

}

