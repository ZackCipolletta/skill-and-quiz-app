import './Components.css';
import React, { useState, useEffect } from "react";
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import Header from './Header';
import Dashboard from './Dashboard';

function Control() {

  return (
    <>
      <div className="header">
        <div className="Dash-and-Header" >
          <Header />
          <Dashboard style={{ paddingTop: '250px !important' }} />
        </div>
      </div>
    </>
  );
}

export default Control;