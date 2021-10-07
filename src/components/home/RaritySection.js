import React from 'react';
import {Box, Container, TextField, Typography} from "@mui/material";
// import Image from 'next/image';
// import HeadingWithDescription from "../common/HeadingWithDescription";
// import RarityImageSection from "./RarityImageSection";

const RaritySection = () => {
    return (
        <Box id={'rarity'} sx={{
            background: '#000',
        }}>

            <Container maxWidth={'xxl'}>
                <Box sx={{
                    background: '#171717',
                    padding: '1rem',
                    borderRadius: '8px',
                    boxShadow: theme => theme.shadows[10],
                    // mt: '1rem',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Typography sx={{
                        fontSize: '1.5rem',
                    }} variant={'heading'}>

                        Rarity
                    </Typography>

                    <TextField sx={{
                        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                            background: '#171717',
                        },
                        '.css-1w2zgmd-MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgb(255 255 255 / 26%)',
                            background: '#171717',
                        },
                        '& .Mui-disabled': {
                            fontWeight: 'bold',
                            color: '#75808A',
                        }
                    }} label="Search" color="primary" disabled/>

                </Box>
            </Container>
        </Box>
    );
};

export default RaritySection;