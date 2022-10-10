import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Recipe from './Recipe';

const MyRecipes = () => {
    const [allRecipes, setAllRecipes] = useState([]);
    const myRecipes = allRecipes.filter(r => r.myRecipe);

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
                My Recipes
            </Typography>
            <Divider sx={{ mb: '50px' }} />
            <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {myRecipes.map((recipe, index) => (
                    <Grid key={recipe.uuid} item xs={12} sm={6} md={4}>
                        <Recipe recipe={recipe}/>
                    </Grid>
                ))}
            </Grid>
            {myRecipes.length < 1 && 
                <Box sx={{
                    height: '50vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <Typography variant="h4" sx={{ textAlign: 'center', color: '#d32f2f '}}>No Recipes</Typography>
                    <Link to="/createRecipe">
                        <Button 
                            size="large" 
                            variant="contained" 
                            color="error"
                            sx={{
                                margin: '25px auto',
                                display: 'block'
                            }}
                            >
                            Create A Recipe
                        </Button>
                    </Link>
                        
                </Box>
            }
        </Container>
    );
};

export default MyRecipes;