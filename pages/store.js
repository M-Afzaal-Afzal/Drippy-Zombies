import React from 'react';
import {Box, Container} from "@mui/material";
import Image from 'next/image';

const Store = () => {
    return (
        <Box sx={{
            background: theme => theme.palette.primary.main,
            py: '6rem',
            minHeight: '100vh',
        }}>

            <Container maxWidth={'xxl'}>
                <Box position={'relative'}>
                    <Image priority src={'/store.png'} width={4255} height={2492}/>
                    <Box sx={{
                        position: 'absolute',
                        background: 'rgba(238,238,238,0.72)',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                        padding: '2rem',
                        borderRadius: '15px',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        boxShadow: theme => theme.shadows[20],
                    }}>
                        Opening Soon
                    </Box>
                </Box>
            </Container>


        </Box>
    );
};

export default Store;