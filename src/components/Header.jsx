import '../Styles/Components.css';
import React, {  } from "react";
import { Button, Toolbar, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/categories')
}

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
          style={{ cursor: 'pointer'}}
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

