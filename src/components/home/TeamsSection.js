import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import TeamCard from "./TeamCard";
// import Image from "next/image";


const TeamsSection = () => {

    const temaData = [
        {
            name: 'Marketing lead',
            imgSrc: '/home/team/1member.png',
            isWanted: true,
            twitter: 'https://twitter.com/Kevork_drip',
            description: [
                'Kevork',
            ],
        },
        {
            name: 'Brand developer',
            imgSrc: '/home/team/2member.png',
            isWanted: false,
            twitter: 'https://twitter.com/drippzombieLeo',
            description: [
                'Leo',
            ],
        },
        {
            name: 'Blockchain developer',
            imgSrc: '/home/team/3member.png',
            isWanted: true,
            twitter: 'https://twitter.com/VinceEth',
            description: [
                'Vince',
            ],
        },
        {
            name: 'Community Lead',
            imgSrc: '/home/team/4member.png',
            isWanted: false,
            twitter: 'https://twitter.com/mark_eth_',
            description: [
                'Mark',
            ],
        },
        {
            name: 'Product designer',
            imgSrc: '/home/team/5member.png',
            isWanted: false,
            twitter: 'https://twitter.com/Arey_eth',
            description: [
                'Arey',
            ],
        },
        {
            name: 'Artist',
            imgSrc: '/home/team/6member.png',
            isWanted: false,
            twitter: 'https://twitter.com/Karsingo',
            description: [
                'Karsingo',
            ],
        },
    ];

    return (

            <Box id={'team'} sx={{
                background: (theme) => theme.palette.primary.main,
                py: {
                    xs: '3rem',
                    md: '4rem',
                    lg: "6rem",
                },
            }}>
                <Container maxWidth={'xxl'}>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        {
                            temaData.map(({name,twitter, description, imgSrc, isWanted}) => (
                                <Grid key={name} xs={12} md={12} lg={6} xl={4} item>
                                    <Box component={'a'} target={'_blank'} sx={{
                                        textDecoration: 'none',
                                    }} href={twitter} display={'grid'} justifyContent={'center'}>
                                        <TeamCard
                                            name={name}
                                            imgSrc={imgSrc}
                                            description={description}
                                            isWanted={isWanted}
                                        />
                                    </Box>
                                </Grid>
                            ))
                        }

                    </Grid>

                </Container>

        </Box>
    );
};

export default TeamsSection;