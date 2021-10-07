import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import TeamCard from "./TeamCard";
// import Image from "next/image";


const TeamsSection = () => {

    const temaData = [
        {
            name: 'Marketing lead',
            imgSrc: '/home/team/1.png',
            isWanted: true,
            description: [
                'Kervork',
            ],
        },
        {
            name: 'Brand developer',
            imgSrc: '/home/team/2.png',
            isWanted: false,
            description: [
                'Leo',
            ],
        },
        {
            name: 'Blockchain developer',
            imgSrc: '/home/team/3.png',
            isWanted: true,
            description: [
                'Vince',
            ],
        },
        {
            name: 'Community Lead',
            imgSrc: '/home/team/4.png',
            isWanted: false,
            description: [
                'Mark',
            ],
        },
        {
            name: 'Product designer',
            imgSrc: '/home/team/5.png',
            isWanted: false,
            description: [
                'Arey',
            ],
        },
        {
            name: 'Artist',
            imgSrc: '/home/team/6.jpg',
            isWanted: false,
            description: [
                'Karsingo',
            ],
        },
    ]

    return (

            <Box id={'team'} sx={{
                background: (theme) => theme.palette.primary.main,
                py: '6rem',
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
                            temaData.map(({name, description, imgSrc, isWanted}) => (
                                <Grid key={name} xs={12} md={12} lg={6} xl={4} item>
                                    <Box display={'grid'} justifyContent={'center'}>
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