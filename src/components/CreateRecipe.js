import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Divider, FormGroup, FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import { recipeLayout, ingredientLayout, stepLayout } from '../utils/recipeLayout';
import { Container } from '@mui/system';

const CreateRecipe = () => {

    const [newRecipe, setNewRecipe] = useState(recipeLayout);

    const changeTitle = (event) => {
        setNewRecipe({...newRecipe, title: event.target.value});
    };

    const changeDesc = (event) => {
        setNewRecipe({...newRecipe, description: event.target.value});
    };
    
    const changeServings = (event) => {
        setNewRecipe({...newRecipe, servings: event.target.value});
    };

    const changePrepTime = (event) => {
        setNewRecipe({...newRecipe, prepTime: event.target.value});
    };

    const changeCookTime = (event) => {
        setNewRecipe({...newRecipe, cookTime: event.target.value});
    };

    const changeIngName = (event, index) => {
        let ingredients = [...newRecipe.ingredients];
        let ingredient = {...ingredients[index]};
        ingredient.name = event.target.value;
        ingredients[index] = ingredient;
        setNewRecipe({...newRecipe, ingredients: ingredients});
    };

    const changeInt= (event, index) => {
        let ingredients = [...newRecipe.ingredients];
        let ingredient = {...ingredients[index]};
        ingredient.amount.int = event.target.value;
        ingredients[index] = ingredient;
        setNewRecipe({...newRecipe, ingredients: ingredients});
    };

    const changeFrac= (event, index) => {
        let ingredients = [...newRecipe.ingredients];
        let ingredient = {...ingredients[index]};
        ingredient.amount.frac = event.target.value;
        ingredients[index] = ingredient;
        setNewRecipe({...newRecipe, ingredients: ingredients});
    };

    const changeMeasurement = (event, index) => {
        let ingredients = [...newRecipe.ingredients];
        let ingredient = {...ingredients[index]};
        ingredient.measurement = event.target.value;
        ingredients[index] = ingredient;
        setNewRecipe({...newRecipe, ingredients: ingredients});
    };

    const addIngredient = () => {
        let newIngredient = {...ingredientLayout};
        newIngredient.uuid = new Date().getTime();
        setNewRecipe({...newRecipe, ingredients: newRecipe.ingredients ? [...newRecipe.ingredients, newIngredient] : [newIngredient] })
    };

    const removeIngredient = index => {
        console.log(index);
        const updatedIngredients = newRecipe.ingredients.filter(i => i.uuid !== newRecipe.ingredients[index].uuid)
        console.log(updatedIngredients)
        setNewRecipe({...newRecipe, ingredients: updatedIngredients});
    };


    const changeInstructions = (event, index) => {
        let directions = [...newRecipe.directions];
        let direction = {...directions[index]};
        direction.instructions = event.target.value;
        directions[index] = direction;
        setNewRecipe({...newRecipe, directions: directions});
    };

    const addStep = () => {
        let newStep = {...stepLayout};
        newStep.uuid = new Date().getTime();
        setNewRecipe({...newRecipe, directions: newRecipe.directions ? [...newRecipe.directions, newStep] : [newStep] })
    };

    const removeStep = index => {
        const updatedDirections = newRecipe.directions.filter(d => d.uuid !== newRecipe.directions[index].uuid);
        console.log(updatedDirections)
        setNewRecipe({...newRecipe, directions: updatedDirections});
    };

    const handleSubmit = () => {
        console.log(newRecipe);
    }

    return (
        <Container sx={{ my: '50px' }}>
            <Link 
                to="/"
                onClick={() => setNewRecipe(recipeLayout)}
                >
                <Button variant="contained" color="error">
                    Back to Recipes
                </Button>
            </Link>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '50px auto 0px',
                    '& > :not(style)': { m: 1, width: '400px', maxWidth: '87%' },
                    '& > * .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#de6226'
                    },
                    '& > * .MuiFormLabel-root.Mui-focused': {
                        color: '#de6226'
                    }
                }}
                noValidate
                autoComplete="off"
            >
                    <Typography variant="h4" sx={{ color: '#d32f2f', fontWeight: '100', width: '100%', textAlign: 'center' }}> Create a Recipe</Typography>
    
                    <TextField
                        id="outlined-basic"
                        label="Recipe Name"
                        value={newRecipe.title}
                        onChange={changeTitle}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        rows={4}
                        value={newRecipe.description}
                        onChange={changeDesc}
                    />
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Servings</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={newRecipe.servings}
                            label="Servings"
                            onChange={changeServings}
                        >
                            <MenuItem value={1}>One</MenuItem>
                            <MenuItem value={2}>Two</MenuItem>
                            <MenuItem value={3}>Three</MenuItem>
                            <MenuItem value={4}>Four</MenuItem>
                            <MenuItem value={5}>Five</MenuItem>
                            <MenuItem value={6}>Six</MenuItem>
                            <MenuItem value={7}>Seven</MenuItem>
                            <MenuItem value={8}>Eight</MenuItem>
                            <MenuItem value={9}>Nine</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            value={newRecipe.prepTime}
                            onChange={changePrepTime}
                            endAdornment={<InputAdornment position="end">minutes</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'Prep Time',
                            }}
                        />
                        <FormHelperText id="outlined-weight-helper-text">Prep Time</FormHelperText>
                    </FormControl>
                    <FormControl variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            value={newRecipe.cookTime}
                            onChange={changeCookTime}
                            endAdornment={<InputAdornment position="end">minutes</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'Cook Time',
                            }}
                        />
                        <FormHelperText id="outlined-weight-helper-text">Cook Time</FormHelperText>
                    </FormControl>
                    <Typography variant="h5" sx={{ color: '#de6226', textAlign: 'center' }} >Ingredients</Typography>
                    {newRecipe.ingredients && newRecipe.ingredients.map(((i, index) => (
                        <>
                            <TextField
                            key={`i${index}`}
                            id="outlined-basic"
                            label="Ingredient Name"
                            value={i.name}
                            onChange={(event) => changeIngName(event, index)}
                            />
                            <FormGroup sx={{flexDirection: 'row'}}>
                                <FormControl sx={{ width: '47%'}}>

                                    <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={i.amount.int}
                                        label="Servings"
                                        onChange={(event) => changeInt(event, index)}
                                        
                                        >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                        <MenuItem value={8}>8</MenuItem>
                                        <MenuItem value={9}>9</MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                    </Select>
                                </FormControl>
                                    <span style={{ display: 'flex', alignItems: 'center', color: 'grey', padding: '0px 2px'} }>+</span> 
                                <FormControl sx={{ width: '47%'}}>
                                    <Select
                                        value={i.amount.frac}
                                        onChange={(event) => changeFrac(event, index)}
                                        
                                        >
                                        <MenuItem value={0.25}>1/4</MenuItem>
                                        <MenuItem value={0.333}>1/3</MenuItem>
                                        <MenuItem value={0.5}>1/2</MenuItem>
                                        <MenuItem value={0.666}>2/3</MenuItem>
                                        <MenuItem value={0.75}>3/4</MenuItem>
                                    </Select>
                                </FormControl>
                            </FormGroup>
                            <TextField
                            id="outlined-basic"
                            label="Measurement"
                            value={i.measurement}
                            onChange={(event) => changeMeasurement(event, index)}
                            />
                            <Button color="error" size="small" onClick={() => removeIngredient(index)}>Remove</Button>
                            {index < newRecipe.ingredients.length -1 && <Divider/>}
                        </>
                        )))
                    }
                    <Button onClick={addIngredient} variant="outlined" color="error">Add Ingredient</Button>
                    <Typography variant="h5" sx={{ color: '#de6226', textAlign: 'center', paddingTop: '10px' }} >Instructions</Typography>
                    {newRecipe.directions && newRecipe.directions.map(((d, index) => (
                        <>
                            <TextField
                                key={`d${index}`}
                                id="outlined-multiline-flexible"
                                label={`Step ${index + 1}...`}
                                multiline
                                rows={4}
                                value={d.instructions}
                                onChange={(event) => changeInstructions(event, index)}
                                />
                            <Button color="error" size="small" onClick={() => removeStep(index)}>Remove</Button>
                        </>
                    )))}
                    <Button onClick={addStep} variant="outlined" color="error">Add Step</Button>
            </Box>
            <Button onClick={handleSubmit} sx={{ margin: '20px auto 50px', display: 'flex', width: '500px', maxWidth: '95%' }} variant="contained" size="large" color="error">SUBMIT RECIPE</Button>
        </Container>
    );
}

export default CreateRecipe;
