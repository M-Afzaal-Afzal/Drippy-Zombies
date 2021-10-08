import React from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";
import Image from 'next/image';

const clawMachineText = [
    `Physical posters `,
    `Hoodies `,
    `Pants`,
    `jackets`,
    `Exclusive items `,
    `Prop collectible weapons`,
    `Exclusive clothing`,
]

const ClawMachineSection = () => {
    return (
        <Box sx={{
            py: {
                xs: '2rem',
                lg: '4rem',
            },
            background: '#000',
            color: '#fff',
        }}>
            <Container maxWidth={'xxl'}>
                <Box sx={{
                    border: '1px solid #eee',
                    borderRadius: '20px',
                    padding: '2rem'
                }}>

                    <Typography sx={{
                        mb: '1rem',
                    }} fontWeight={'bold'} textAlign={'center'} gutterBottom variant={'h1'}
                                fontSize={'2rem'}>
                        Mystery box physical collectibles
                    </Typography>

                    <Typography textAlign={'center'} sx={{
                        mb: '1rem',
                    }} fontSize={'1.3rem'} variant={'body1'}>
                        Each mystery box will include digital items and clothing that can later be claimed
                        physically, only certain items will be allowed for a physical claim. Clothing, items,
                        and patterns can be put on your drippy zombie replacing your current items through our
                        webstore on our website, this is what makes us unique.
                    </Typography>

                    <Box sx={{
                        display: 'grid',
                        gridGap: '2rem',
                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '1fr 1fr',
                        },
                        placeItems: 'center',


                    }}>

                        <Box>
                            <Image priority src={'/clawMachine.png'} width={501} height={526.9}/>
                        </Box>

                        <Stack spacing={1} sx={{
                            padding: '2rem',
                            maxWidth: '25rem',
                        }}>

                            {
                                clawMachineText.map(text => (
                                    <Box sx={{
                                        cursor: 'pointer',
                                        transition: 'all .3s linear',
                                        transform: 'scale(1)',
                                        background: '#171717',
                                        '&:hover': {
                                          background: '#34cc32',
                                            transform: "scale(1.08)",
                                        },
                                        border: '1px solid #eee',
                                        borderRadius: '10px',
                                        padding: '8px',
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem',
                                    }}>
                                        {text}
                                    </Box>
                                ))
                            }


                        </Stack>

                    </Box>
                </Box>

            </Container>

        </Box>
    );
};

export default ClawMachineSection;