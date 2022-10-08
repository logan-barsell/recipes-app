import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import getDate from './getDate';

const Recipe = ({ recipe }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
      <Link to={`/recipe/${recipe.uuid}`} style={{ width: 'fit-content' }}>
        <CardHeader
          title={recipe.title}
          subheader={getDate(recipe.postDate)}
          sx={{ '&:hover': {opacity: '0.7'}, transition: '150ms ease'}}
          />
      </Link>
      <CardMedia
        component='img'
        height='194'
        image={recipe.images.medium}
        alt='Paella dish'
      />
      <CardContent>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', pb: '15px' }}>
        <Link to={`/recipe/${recipe.uuid}`}>
          <Button
            color='error'
            variant='outlined'
          >
            See Full Recipe
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Recipe;
