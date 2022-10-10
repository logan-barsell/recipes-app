import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <List sx={{ width: '100%', bgcolor: '#de6226', color: 'white', marginTop: '100px', paddingTop: '50px' }}>
      <ListItem sx={{ justifyContent: 'center '}}>
            <Typography variant="h4" component="div" sx={{ fontWeight: '100' }}>
                Follow us on social media!
            </Typography>
      </ListItem>
      <ListItem sx={{ justifyContent: 'center', '& > * .MuiButtonBase-root, .MuiIconButton-root': { color: 'white' }}}>
        <IconButton>
            <InstagramIcon fontSize='large' />
        </IconButton>
        <IconButton>
            <FacebookIcon fontSize='large' />
        </IconButton>
        <IconButton>
            <TwitterIcon fontSize='large' />
        </IconButton>
        <IconButton>
            <PinterestIcon fontSize='large' />
        </IconButton>
      </ListItem>
      <ListItem sx={{ justifyContent: 'center', marginTop: '30px'}}>
        © {new Date().getFullYear()} Copyright: RecipeMe
      </ListItem>
    </List>
  );
};

export default Footer;
