import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MenuIcon from '@mui/icons-material/Menu';


const SideBar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setToggle(!toggle);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List sx={{ backgroundColor: '#de6226', color: 'white' }}>
        <ListItem disablePadding sx={{ justifyContent: 'center' }}>
            <LocalDiningIcon sx={{ fontSize: '2.5rem'}} />
        </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem disablePadding>
            <Link to="/" style={{ width: '100%' }}>
                <ListItemButton>
                    <ListItemIcon>
                        <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary={'All Recipes'} />
                </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/myRecipes" style={{ width: '100%' }}>
                <ListItemButton>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary={'My Recipes'} />
                </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/createRecipe" style={{ width: '100%' }}>
                <ListItemButton>
                    <ListItemIcon>
                        <LibraryAddIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Create a Recipe'} />
                </ListItemButton>
            </Link>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
        <Button 
            color="error" 
            sx={{ 
                backgroundColor:"white", 
                position: 'absolute', 
                right: '20px',
                '&:hover': { 
                    '& > *': {
                        color: 'white'
                    } 
                }
            }} 
            onClick={toggleDrawer()}
        >
            <MenuIcon sx={{ color: '#de6226', transition: '200ms ease' }} />
        </Button>
        <Drawer
            anchor={'right'}
            open={toggle}
            onClose={toggleDrawer()}
        >
        {list()}
        </Drawer>
    </React.Fragment>
  );
}

export default SideBar;
