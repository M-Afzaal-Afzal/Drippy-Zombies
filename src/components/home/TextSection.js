import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const TextSection = () => {
    return (
        <Box sx={{
            background: '#000',
        }}>
            <Box sx={{
                maxWidth: '1200px',
                margin: 'auto',
                py: {
                    xs: '3rem',
                    md: "4rem",
                    lg: '6rem',
                },
                background: {
                    xs: '#000',
                    lg: '#000 url(/characters.png) center/cover'},
                color: '#fff',
            }}>

                <Container maxWidth={'xxl'}>
                    <Box sx={{
                        background: 'rgba(255,255,255,0.15)',
                        borderRadius: '20px',
                        padding: '1rem',
                        '-webkit-text-stroke-width': '1px',
                        '-webkit-text-stroke-color': 'black',
                        '-webkit-text-fill-color': 'white',
                    }}>
                        <Typography sx={{
                            fontSize: {
                                xs: '2rem',
                                lg: "3rem",
                                textTransform: 'uppercase',
                            }
                        }} fontWeight={'bold'} gutterBottom variant={'body1'}>
                            Drippy Zombies
                        </Typography>
                        <Typography fontWeight={'bold'} sx={{
                            fontSize: {
                                xs: '1.3rem',
                                lg: "2rem",
                            }
                        }} variant={'body1'}>
                            Drippy zombies are a collection of 8,000 algorithmically generated zombies, hand-drawn by
                            several
                            collaborative artists, with 500+, attributes including references from Asian culture, anime,
                            fashion, memes, and games. Real physical utility, fashion, and a play-to-earn game.

                        </Typography>
                        <Typography fontWeight={'bold'} sx={{
                            fontSize: {
                                xs: '1.3rem',
                                lg: "2rem",
                            }
                        }} variant={'body1'}>
                            In addition to your drippy zombie membership, which grants holders play-to-earn and a
                            claimable
                            mystery box, you will be able to change your zombie???s clothing and appearance using content
                            from
                            mystery boxes that can be redeemed physically!

                        </Typography>
                    </Box>
                </Container>

            </Box>
        </Box>
    );
};

export default TextSection;