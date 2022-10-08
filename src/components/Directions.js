import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const Directions = ({ directions }) => {
    return (
        <Box 
            sx={{ 
                margin: '75px auto'
            }}>
                <Typography variant="h3" sx={{ color: '#de6226', fontWeight: '200' }}>Directions</Typography>
                <Box 
                    sx={{ 
                        py: '15px',
                        '& > *': {
                            textAlign: 'left'
                        }
                    }}
                >
                    {directions.map((step, index) => (
                        <Box key={index} sx={{ margin: '20px 0px', display: 'flex', 'alignItems': 'baseline'}} >
                            <Chip 
                                sx={{ 
                                    background: '#d32f2f',
                                    color: 'white',
                                    fontSize: '20px'
                                }} 
                                label={`Step ${index + 1}`} 
                            />
                            <span style={{ padding: '20px', fontSize: '17px' }}>{step.instructions}</span>
                            <span style={{ color: 'orange', fontVariant: 'small-caps', fontSize: '17px' }}>{step.optional && 'optional'}</span>
                        </Box>
                    ))}
                </Box>
        </Box>
    );
};

export default Directions;
