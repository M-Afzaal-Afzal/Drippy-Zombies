import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import Image from 'next/image';

const features = [
    {
        id: 1,
        imgSrc: '/home/features/1.png',
        heading: 'CLAIMABLE',
        description: `DRIPPY ZOMBIES are known for their stylish and drippy aurora.
Each mystery box will include digital items and clothing for your zombie,                                qualifying digital items can be redeemed for a physical version!
`,
    },
    {
        id: 2,
        imgSrc: '/home/features/2.png',
        heading: 'PLAY TO EARN GAME',
        description: `8 different rarity classes with different weaponry and various items. Drippy zombies are the gangs that control the streets in zombie mania a (play-to-earn) game. Come and fight to earn rewards and collectibles! `,
    },
    {
        id: 3,
        imgSrc: '/home/features/3.png',
        heading: ' MYSTERY BOX',
        description: `Mystery boxes include digital & physical collectibles to
Increase your rarity and drip.`
    },
    {
        id: 4,
        imgSrc: '/home/features/4.png',
        heading: 'FULL OWNERSHIP',
        description: `Full commercial rights granted to the
 owners of drippy zombies`
    },
    {
        id: 5,
        imgSrc: '/home/features/5.png',
        heading: ' COMMUNITY NEEDS',
        description: `Community is what drives us, community needs will be taken care of,
 the community will be given back. Supporters and contributors will be rewarded.`,
    },
    {
        id: 6,
        imgSrc: '/home/features/6.png',
        heading: 'MORE TO COME',
        description: `Various activities and drops will be executed, 
we aren’t going anywhere! Together we will 
Build unique opportunities for you.`
    },
]

const FeaturesSection = () => {
    return (
        <Box sx={{
            background: "#000",
        }} py={'6rem'} id={'features'}>

            <Container maxWidth={'xxl'}>

                <Typography sx={{
                    color: '#fff',
                    textTransform: 'uppercase',
                    py: '1rem',
                    textAlign: 'center',
                }} gutterBottom fontWeight={'bold'} vairant={'h1'} fontSize={'2.5rem'}>
                    Features
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        lg: '1fr 1fr',
                        xxl: '1fr 1fr 1fr',
                    },
                    gridGap: '1rem',
                    // placeItems: 'center',
                }}>

                    {
                        features.map(({id, heading, imgSrc, description}) => {

                            return (
                                <Box key={id} sx={{
                                    color: '#fff',
                                }}>

                                    <Box display={'flex'} justifyContent={'center'}>
                                        <Image src={imgSrc} width={200} height={200}/>
                                    </Box>

                                    <Box>
                                        <Typography textAlign={'center'} gutterBottom fontWeight={'bold'} vairant={'h1'} fontSize={'1.7rem'}>
                                            {heading}
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography textAlign={'center'} fontWeight={'bold'} gutterBottom vairant={'body1'} fontSize={'1rem'}>
                                            {description}
                                        </Typography>
                                    </Box>

                                </Box>
                            )
                        })
                    }


                </Box>

            </Container>

        </Box>
    );
};

export default FeaturesSection;