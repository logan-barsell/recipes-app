import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EggAltIcon from '@mui/icons-material/EggAlt';

const Ingredients = ({ ingredients }) => {
    console.log(ingredients);
    return (
        <Box 
            sx={{
                margin: '50px 25px', 
                '& > *': {
                    textAlign: 'left'
                }
            }} 
        >
            <Typography sx={{ color: '#de6226', fontWeight: '200'}} variant="h4" gutterBottom>
                Ingredients
            </Typography>
                {ingredients.map(ingredient => (
                    <Typography variant="body1">
                        <EggAltIcon sx={{ fontSize: '10px', mr: '5px'}} />&nbsp;
                        {ingredient.amount}&nbsp;
                        {ingredient.measurement.length > 0 && ingredient.measurement}&nbsp;
                        <span style={{ fontWeight: '500' }}>
                            {ingredient.name.split(',')[0]}
                        </span>
                        <span style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                            {ingredient.name.split(',')[1] && `, ${ingredient.name.split(',')[1]}`}
                        </span>
                    </Typography>
                ))}
        </Box>
    );
};

export default Ingredients;
