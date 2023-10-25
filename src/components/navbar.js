import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LogoImage from '../assets/logo.png';
import '../styles/navbar.css';

function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <img src={LogoImage} alt="Logo" className="navbar-img" />
        <Button color="inherit" className="navbar-button">Home</Button>
        <Button color="inherit" className="navbar-button">Menu</Button>
        <Button color="inherit" className="navbar-button">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
