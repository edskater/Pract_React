import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Logo from '../Recurso1.png'


function ResponsiveAppBar() {
  
  return (
    <AppBar position="static" style={{background:'black'}}>
      <Toolbar >
        <IconButton edge="start" aria-label="menu" > 
          <img src={Logo} alt="Logo" style={{ marginRight: '10px', height: '4vw' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;