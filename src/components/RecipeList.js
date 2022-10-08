import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Recipe from './Recipe';

const RecipeList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/recipes').then(res => {
            setData(res.data);
        });
    }, []);
    
    return (
        <Container sx={{ my: '50px'}}>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {data.map((recipe, index) => (
                    <Grid key={recipe.uuid} item xs={12} sm={6} md={4}>
                        <Recipe recipe={recipe}/>
                    </Grid>
                ))}
                </Grid>
        </Container>
    );
};

export default RecipeList;
