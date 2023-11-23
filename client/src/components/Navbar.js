import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Logo from '../Recurso1.png'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { useLocation } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

import Logout from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

function ResponsiveAppBar() {

   const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuComponents = (
  <React.Fragment>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end',  marginLeft: 'auto', alignItems: 'center', textAlign: 'center' }}>
        <IconButton sx={{ minWidth: 100 }} href='/home'><HomeIcon sx={{ fontSize: 40, color: 'white' }}/></IconButton>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ fontSize: 40 }}/>
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
        </React.Fragment>
  );
  
  return (
    <AppBar position="static" style={{background:'black'}}>
      <Toolbar >
        {/* LOGO  */}
        <IconButton edge="start" aria-label="menu" > 
          <img src={Logo} alt="Logo" style={{ marginRight: '10px', height: '4vw' }} />
        </IconButton>       
        {/* menu  */}      
        {location.pathname !== "/" && ( menuComponents)}
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;