import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { RecipeContext } from '../App';
import Ingredients from './Ingredients';
import Directions from './Directions';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import getDate from '../../utils/getDate';

const RecipeDetails = () => {
    const navigate = useNavigate();
    const { selectedRecipe, setSelectedRecipe, recipes } = useContext(RecipeContext);
    
    const currentRecipeId = window.location.pathname.split('/')[2];
    useEffect(() => {
        for(let recipe of recipes) {
            console.log(recipe.uuid)
            if(recipe.uuid === currentRecipeId) {
              setSelectedRecipe(recipe);
              console.log('hi')
            }
        }
    })

    return (
    selectedRecipe &&
            (<Container sx={{ my: '50px'}}>
            <Button 
                onClick={() => {
                    setSelectedRecipe(null);
                    navigate(-1);
                }}
                variant="contained" 
                color="error">
                Back to Recipes
            </Button>
            <Box 
                sx={{ 
                    maxWidth: '75vh', 
                    margin: '50px auto 150px', 
                    borderRadius: '10px', 
                    overflow: 'hidden', 
                    '& > *': {
                        textAlign: 'center'
                    }
                }}
            >
                {selectedRecipe.images && <img width="100%" src={selectedRecipe.images.full} />}
                <Typography variant="caption" sx={{ display: 'block', margin: 'auto', color: 'rgba(0, 0, 0, 0.4)' }}>Last Updated: {getDate(selectedRecipe.editDate)}</Typography>
                <Typography variant="h3" gutterBottom my={3} sx={{ textAlign: 'center' }}>
                    {selectedRecipe.title}
                </Typography>
                <Box sx={{ textAlign: 'center', '& > .css-1wniyei-MuiTypography-root': {fontWeight: '100'} }}>
                    <Typography variant="subtitle1" gutterBottom>
                        <span style={{fontSize: '20px'}}>{selectedRecipe.ingredients.length}</span> ingredients
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        <span style={{ color: '#de6226', fontWeight: '500' }}>Prep &nbsp;</span>
                        <span style={{ fontSize: '20px' }}>{selectedRecipe.prepTime} </span>
                        minutes
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        <span style={{ color: '#de6226', fontWeight: '500' }}>Cook &nbsp;</span>
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
                <Typography variant="h4" color="#d32f2f" sx={{ fontWeight: '100' }}>ENJOY!</Typography>
            </Box>
        </Container>)
    );
};

export default RecipeDetails;
