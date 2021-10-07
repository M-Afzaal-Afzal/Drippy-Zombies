import React from 'react';
import {Box, Chip, Typography} from "@mui/material";

const StepWithDescription = ({heading,description}) => {
    return (
        <Box>
            <Box py={'.5rem'}>
                <Chip
                    size={'medium'}
                    sx={{fontSize: '1rem',height: '2rem'}}
                    label={heading}
                    color="secondary"
                />
            </Box>
            <Typography
                sx={{
                    mb: '.5rem',
                }}
                color={'#fff'}
                variant={'body1'}
            >
                {description}
            </Typography>
        </Box>
    );
};

export default StepWithDescription;