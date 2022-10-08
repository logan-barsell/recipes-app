import React from 'react';
import { Link } from 'react-router-dom'; 
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const RecipeDetails = () => {
  return (
    <Container sx={{ my: '50px'}}>
        <Link to="/">
            <Button variant="contained" color="error">
                Back to Recipes
            </Button>
        </Link>
    </Container>
  );
};

export default RecipeDetails;
