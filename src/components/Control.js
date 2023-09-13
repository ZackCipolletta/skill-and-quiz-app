//import './Components.css';
import React, { useState, useEffect } from "react";
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import Header from './Header';
import Dashboard from './Dashboard';

function Control() {

  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  )

}

export default Control;