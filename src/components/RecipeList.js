import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Recipe from './Recipe';
import Divider from '@mui/material/Divider';

const RecipeList = () => {
    const [allRecipes, setAllRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/recipes').then(res => {
            setAllRecipes(res.data);
        });
    }, []);
    
    return (
        <Container sx={{ my: '50px'}}>
            <Typography 
                variant="h3"
                sx={{
                    color: '#de6226',
                    fontWeight: '100',
                    margin: '10px 29px -8px',
                }}
            >
                All Recipes
            </Typography>
            <Divider sx={{ mb: '50px' }} />
            <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {allRecipes.filter(r => !r.myRecipe).map((recipe, index) => (
                    <Grid key={recipe.uuid} item xs={12} sm={6} md={4}>
                        <Recipe recipe={recipe}/>
                    </Grid>
                ))}
                </Grid>
        </Container>
    );
};

export default RecipeList;
