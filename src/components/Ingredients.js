import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EggAltIcon from '@mui/icons-material/EggAlt';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { decimalToFraction } from '../utils/decimalToFraction';

const Ingredients = ({ ingredients }) => {
    const [specials, setSpecials] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/specials').then(res => {
            setSpecials(res.data);
        });
    }, []);

    const isSpecial = id => {
        let found = false;
        for(let special of specials) {
            if (special.ingredientId === id) {
                found = true;
            }
        }
        return found;
    };

    const renderSpecial = id => {
        let currentSpecial;
        for(let special of specials) {
            if (special.ingredientId === id) {
                currentSpecial = special;
            }
        }
        if(currentSpecial.type === 'event') {
            return (
                <>
                    <Typography variant="subtitle2">UPCOMING {currentSpecial.type.toUpperCase()}: {currentSpecial.title}</Typography>
                    <Typography variant="body2">{currentSpecial.text}</Typography>
                </>
            );
        }
        if(currentSpecial.type === 'local') {
            return (
                <>
                    <Typography variant="subtitle2">{currentSpecial.type.toUpperCase()} DEAL: {currentSpecial.title} </Typography>
                    <Typography variant="body2">{currentSpecial.text}</Typography>
                </>
            );
        }
        if(currentSpecial.type === 'promocode') {
            return (
                <>
                    <Typography variant="subtitle2">{currentSpecial.type.toUpperCase()}: "{currentSpecial.code}"</Typography>
                    <Typography variant="body2">Want {currentSpecial.title}?</Typography>
                    <Typography variant="body2">{currentSpecial.text}</Typography>
                </>
            );
        }
        if(currentSpecial.type === 'sale') {
            return (
                <>
                    <Typography variant="subtitle2">ON {currentSpecial.type.toUpperCase()}: {currentSpecial.title}</Typography>
                    <Typography variant="body2">{currentSpecial.text}</Typography>
                </>
            );
        }
    };



    const StyledTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: 'rgba(222, 98, 38, 0.9)',
        },
      }));

   

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
                    <Typography key={ingredient.uuid} variant="body1">
                        <EggAltIcon sx={{ fontSize: '10px', mr: '7px'}} />
                        <span>
                            {ingredient.amount && decimalToFraction(ingredient.amount) + ' '}
                        </span>
                        <span>
                            {ingredient.measurement.length > 0 && ingredient.measurement + ' '}
                        </span>
                        <span style={{ fontWeight: '500' }}>
                            {ingredient.name.split(',')[0]}
                        </span>
                        <span style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                            {ingredient.name.split(',')[1] && `, ${ingredient.name.split(',')[1]}`}
                        </span>
                        {isSpecial(ingredient.uuid) &&
                            <StyledTooltip title={renderSpecial(ingredient.uuid)} placement="bottom">
                                <Button color="error">special</Button>
                            </StyledTooltip>
                        }
                    </Typography>
                ))}
        </Box>
    );
};

export default Ingredients;
