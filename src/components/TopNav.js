import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SideBar from './SideBar';

const TopNav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#de6226' }}>
        <Toolbar sx={{ justifyContent: {xs: 'start', sm: 'center'} }}>
            <Link to="/">
                <LocalDiningIcon sx={{ fontSize: '2.5rem'}} />
                <Typography variant="h4" component="div" sx={{ marginLeft: '7px', fontWeight: '500' }}>
                    RecipeMe
                </Typography>
            </Link>
            <SideBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopNav;
