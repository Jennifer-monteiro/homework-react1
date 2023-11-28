import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LogoImage from '../assets/logo.png';
import TodoPage from './TodoPage';
import '../styles/navbar.css';

function Navbar() {
  const [showTodoPage, setShowTodoPage] = useState(false);

  const toggleTodoPage = () => {
    setShowTodoPage(!showTodoPage);
  };

  return (
    <div>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <img src={LogoImage} alt="Logo" className="navbar-img" />
          <Button color="inherit" className="navbar-button">Home</Button>
          <Button color="inherit" onClick={toggleTodoPage} className="navbar-button">To-Do</Button>
          <Button color="inherit" className="navbar-button">Menu</Button>
          <Button color="inherit" className="navbar-button">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Render TodoPage if showTodoPage is true */}
      {showTodoPage && <TodoPage />}
    </div>
  );
}

export default Navbar;
