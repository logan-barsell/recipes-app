import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { RecipeContext } from './App';
import Ingredients from './Ingredients';
import Directions from './Directions';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const RecipeDetails = () => {
    const { selectedRecipe, setSelectedRecipe } = useContext(RecipeContext);

    return (
    <Container sx={{ my: '50px'}}>
        <Link 
            to="/"
            onClick={() => setSelectedRecipe(null)}
            >
            <Button variant="contained" color="error">
                Back to Recipes
            </Button>
        </Link>
        
        <Box 
            sx={{ 
                maxWidth: '75vh', 
                margin: '50px auto', 
                borderRadius: '10px', 
                overflow: 'hidden', 
                '& > *': {
                    textAlign: 'center'
                }
            }}
        >
            <img width="100%" src={selectedRecipe.images.full} />
            <Typography variant="h3" gutterBottom my={3} sx={{ textAlign: 'center' }}>
                {selectedRecipe.title}
            </Typography>
            <Box sx={{ textAlign: 'center', '& > .css-1wniyei-MuiTypography-root': {fontWeight: '100'} }}>
                <Typography variant="subtitle1" gutterBottom>
                    <span style={{fontSize: '20px'}}>{selectedRecipe.ingredients.length}</span> ingredients
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    <span style={{ color: '#de6226', fontWeight: '500' }}>Prep </span>
                    <span style={{ fontSize: '20px' }}>{selectedRecipe.prepTime} </span>
                     minutes
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    <span style={{ color: '#de6226', fontWeight: '500' }}>Cook </span>
                     <span style={{ fontSize: '20px' }}>{selectedRecipe.cookTime} </span>
                     minutes
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                     <span style={{ fontSize: '20px' }}>{selectedRecipe.servings} </span>
                     servings
                </Typography>
            </Box>
            <Divider sx={{ margin: '20px 0px' }} />
            <Typography variant="h5" sx={{fontWeight: '300'}}>
                {selectedRecipe.description}
            </Typography>
            <Ingredients ingredients={selectedRecipe.ingredients}/>
            <Directions directions={selectedRecipe.directions} />
        </Box>
    </Container>
    );
};

export default RecipeDetails;
