import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import StepWithDescription from "../common/StepWithDescription";
import HeadingWithDescription from "../common/HeadingWithDescription";
import Image from 'next/image';

const RoadmapSection = () => {
    return (

        <Box id={'roadmap'} py={'3rem'} sx={{
            background: (theme) => theme.palette.primary.main,
        }}
        >

            <Container maxWidth={'xxl'}>
                <Typography fontWeight={'bold'}
                                textAlign={'center'}
                                variant={'h1'}
                                sx={{
                                    color: '#fff',
                                    fontSize: {
                                        xs: '1.8rem',
                                        md: "2rem",
                                        lg: '3rem',
                                    }
                                }}
                    >
                    DRIPPY ZOMBIES {' '}
                        <Typography  sx={{
                            color:'#34cc32',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                        }} component={'span'}>
                            Roadmap
                        </Typography>
                    </Typography>

                <Box sx={{
                    position: 'relative',
                    display: {
                        xs: 'none',
                        xl: 'block'
                    }
                }}>

                    <Image
                        priority
                        width={1696}
                        height={855}
                        alt={'Roadmap'}
                        src={'/home/bg/roadmap.png'}
                    />

                </Box>

                <Box sx={{
                    position: 'relative',
                    display: {
                        xs: 'block',
                        xl: 'none',
                    }
                }}>
                    <Image
                        priority
                        width={1121}
                        height={1827}
                        alt={'Roadmap'}
                        src={'/home/bg/roadmapMobile.png'}
                    />
                </Box>

            </Container>

            {/*<Container maxWidth={'xxl'}>*/}

            {/*    <Typography fontSize={'2.5rem'} fontWeight={'bold'} mb={'3rem'}*/}
            {/*                textAlign={'center'}*/}
            {/*                variant={'h1'}*/}
            {/*                sx={{*/}
            {/*                    color: '#fff',*/}
            {/*                }}*/}
            {/*    >*/}
            {/*        Roadmap*/}
            {/*    </Typography>*/}

            {/*    <Box sx={{*/}
            {/*        display: 'grid',*/}
            {/*        gridTemplateColumns: {*/}
            {/*            xs: '1fr',*/}
            {/*            lg: '1fr 1fr',*/}
            {/*            xxl: '1fr 1fr 1fr 1fr',},*/}
            {/*        gridGap: '1rem',*/}
            {/*    }}>*/}

            {/*        <Box sx={{*/}
            {/*            background: '#fff',*/}
            {/*            borderRadius: '10px',*/}
            {/*            padding: '1.5rem 1rem',*/}
            {/*            position: 'relative',*/}
            {/*        }}>*/}

            {/*            <Typography sx={{*/}
            {/*                py: '1rem',*/}
            {/*                fontSize: '1.3rem',*/}
            {/*                fontWeight: 'bold',*/}
            {/*            }} variant={'h1'}>*/}
            {/*                Heading*/}
            {/*            </Typography>*/}

            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, enim esse fugiat magni*/}
            {/*            omnis placeat praesentium quis repellat sed voluptas? Beatae blanditiis corporis excepturi iusto*/}
            {/*            magni nobis pariatur quisquam ut!*/}

            {/*            /!* Top Label*!/*/}
            {/*            <Box sx={{*/}
            {/*                position: 'absolute',*/}
            {/*                top: -25,*/}
            {/*                left: '50%',*/}
            {/*                transform: 'translate(-50%,0)',*/}
            {/*                borderRadius: '50%',*/}
            {/*                width: '50px',*/}
            {/*                height: '50px',*/}
            {/*                background: 'rgb(5,2,47)',*/}
            {/*                display: 'flex',*/}
            {/*                justifyContent: 'center',*/}
            {/*                alignItems: 'center',*/}
            {/*                color: '#fff',*/}
            {/*            }}>*/}
            {/*                25%*/}
            {/*            </Box>*/}

            {/*        </Box>*/}

            {/*        <Box sx={{*/}
            {/*            background: '#fff',*/}
            {/*            borderRadius: '10px',*/}
            {/*            padding: '1.5rem 1rem',*/}
            {/*            position: 'relative',*/}
            {/*        }}>*/}

            {/*            <Typography sx={{*/}
            {/*                py: '1rem',*/}
            {/*                fontSize: '1.3rem',*/}
            {/*                fontWeight: 'bold',*/}
            {/*            }} variant={'h1'}>*/}
            {/*                Heading*/}
            {/*            </Typography>*/}

            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, enim esse fugiat magni*/}
            {/*            omnis placeat praesentium quis repellat sed voluptas? Beatae blanditiis corporis excepturi iusto*/}
            {/*            magni nobis pariatur quisquam ut!*/}

            {/*            /!* Top Label*!/*/}
            {/*            <Box sx={{*/}
            {/*                position: 'absolute',*/}
            {/*                top: -25,*/}
            {/*                left: '50%',*/}
            {/*                transform: 'translate(-50%,0)',*/}
            {/*                borderRadius: '50%',*/}
            {/*                width: '50px',*/}
            {/*                height: '50px',*/}
            {/*                background: 'rgb(5,2,47)',*/}
            {/*                display: 'flex',*/}
            {/*                justifyContent: 'center',*/}
            {/*                alignItems: 'center',*/}
            {/*                color: '#fff',*/}
            {/*            }}>*/}
            {/*                50%*/}
            {/*            </Box>*/}

            {/*        </Box>*/}

            {/*        <Box sx={{*/}
            {/*            background: '#fff',*/}
            {/*            borderRadius: '10px',*/}
            {/*            padding: '1.5rem 1rem',*/}
            {/*            position: 'relative',*/}
            {/*        }}>*/}

            {/*            <Typography sx={{*/}
            {/*                py: '1rem',*/}
            {/*                fontSize: '1.3rem',*/}
            {/*                fontWeight: 'bold',*/}
            {/*            }} variant={'h1'}>*/}
            {/*                Heading*/}
            {/*            </Typography>*/}

            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, enim esse fugiat magni*/}
            {/*            omnis placeat praesentium quis repellat sed voluptas? Beatae blanditiis corporis excepturi iusto*/}
            {/*            magni nobis pariatur quisquam ut!*/}

            {/*            /!* Top Label*!/*/}
            {/*            <Box sx={{*/}
            {/*                position: 'absolute',*/}
            {/*                top: -25,*/}
            {/*                left: '50%',*/}
            {/*                transform: 'translate(-50%,0)',*/}
            {/*                borderRadius: '50%',*/}
            {/*                width: '50px',*/}
            {/*                height: '50px',*/}
            {/*                background: 'rgb(5,2,47)',*/}
            {/*                display: 'flex',*/}
            {/*                justifyContent: 'center',*/}
            {/*                alignItems: 'center',*/}
            {/*                color: '#fff',*/}
            {/*            }}>*/}
            {/*                75%*/}
            {/*            </Box>*/}

            {/*        </Box>*/}

            {/*        <Box sx={{*/}
            {/*            background: '#fff',*/}
            {/*            borderRadius: '10px',*/}
            {/*            padding: '1.5rem 1rem',*/}
            {/*            position: 'relative',*/}
            {/*        }}>*/}

            {/*            <Typography sx={{*/}
            {/*                py: '1rem',*/}
            {/*                fontSize: '1.3rem',*/}
            {/*                fontWeight: 'bold',*/}
            {/*            }} variant={'h1'}>*/}
            {/*                Heading*/}
            {/*            </Typography>*/}

            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, enim esse fugiat magni*/}
            {/*            omnis placeat praesentium quis repellat sed voluptas? Beatae blanditiis corporis excepturi iusto*/}
            {/*            magni nobis pariatur quisquam ut!*/}

            {/*            /!* Top Label*!/*/}
            {/*            <Box sx={{*/}
            {/*                position: 'absolute',*/}
            {/*                top: -25,*/}
            {/*                left: '50%',*/}
            {/*                transform: 'translate(-50%,0)',*/}
            {/*                borderRadius: '50%',*/}
            {/*                width: '50px',*/}
            {/*                height: '50px',*/}
            {/*                background: 'rgb(5,2,47)',*/}
            {/*                display: 'flex',*/}
            {/*                justifyContent: 'center',*/}
            {/*                alignItems: 'center',*/}
            {/*                color: '#fff',*/}
            {/*            }}>*/}
            {/*                100%*/}
            {/*            </Box>*/}

            {/*        </Box>*/}

            {/*    </Box>*/}

            {/*</Container>*/}

        </Box>
    );
};

export default RoadmapSection;