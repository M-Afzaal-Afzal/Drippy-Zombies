import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const postSalesRoadmap = [
    {
        id: 1,
        desc: `Rarity Tools, Rarity Sniper &
            OpenSea Verification.`,
    },
    {
        id: 2,
        desc: `Drippy zombies in decentraland, metaverse.`,
    },
    {
        id: 3,
        desc: `DRIP listing and liquidity providing.`,
    },
    {
        id: 4,
        desc: `Exclusive clothing and webstore unlocked.`,
    },
    {
        id: 5,
        desc: `Artist & Influencers collaboration.`,
    },
    {
        id: 6,
        desc: `Register to claim boxes & DRIP token (ERC20)`,
    },
]

const RoadmapSection = () => {

    return (

        <Box id={'roadmap'} pb={'6rem'} sx={{
            background: (theme) => theme.palette.primary.main,
        }}
        >
            <Container maxWidth={'xxl'}>

                <Typography fontWeight={'bold'} mb={'3rem'}
                            textAlign={'center'}
                            variant={'h1'}
                            fontSize={'2.5rem'}
                            sx={{
                                color: '#fff',
                            }}
                >
                    Post Sales Roadmap
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        lg: '1fr 1fr',
                        xxl: '1fr 1fr 1fr',},
                    gridGap: '1rem',
                }}>

                    {
                        postSalesRoadmap.map(({id,desc}) => (
                            <Box key={id} sx={{
                                fontSize: '1.3rem',
                                textAlign:'center',
                                fontWeight: 'bold',
                                background: '#fff',
                                borderRadius: '10px',
                                padding: '1.5rem 1rem',
                                position: 'relative',
                            }}>

                                {desc}

                            </Box>
                        ))
                    }

                </Box>

            </Container>
        </Box>
    );
};

export default RoadmapSection;