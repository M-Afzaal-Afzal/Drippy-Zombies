import React from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from 'next/image';

import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

const mysteryBoxes = [
    `/home/boxes/box01a.png`,
    `/home/boxes/box02a.png`,
    `/home/boxes/box03a.png`,
    `/home/boxes/box04a.png`,
    `/home/boxes/box05a.png`,
    `/home/boxes/box06a.png`,
    `/home/boxes/box07a.png`,
    `/home/boxes/box08a.png`,
    `/home/boxes/box13a.png`,
    `/home/boxes/box14a.png`,
    `/home/boxes/box15a.png`,
]

const ImagesSection = () => {
    return (
        <Box id={'box'} sx={{
            background: theme => theme.palette.primary.main,
            py: {
                xs: '3rem',
                md: '4rem',
                lg: '6rem',
            },
        }}>
            <Container maxWidth={'xxl'}>

                <Box sx={{
                    display: 'flex',
                    gap: '1rem',
                    direction: 'row-reverse',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                    <Button size={'large'} sx={{
                        color: '#fff',
                        borderColor: '#fff',
                        '&:hover': {
                            borderColor: '#fff',
                        }
                    }} color={'primary'} variant={'outlined'}>
                            <Image src={'/token.png'} width={25} height={25}/>
                        <Box ml={'8px'}>

                         0.000000 DRIP
                        </Box>
                    </Button>

                    <Button size={'large'} sx={{
                        color: '#fff',
                        borderColor: '#fff',
                        '&:hover': {
                            borderColor: '#fff',
                        }
                    }} color={'primary'} variant={'outlined'}>
                        CLAIM
                    </Button>
                </Box>

                <Swiper slidesPerView={'auto'} pagination={{
                    "clickable": true
                }} className="mySwiper">'
                    {
                        mysteryBoxes.map(mysteryBox => (
                            <SwiperSlide key={mysteryBox} className={'swiper-slide'}>
                                <Box sx={{
                                    width: '150px',
                                    height: '150px',
                                    background: '#000',
                                    overflow: 'hidden',
                                    borderRadius: '15px',
                                    position: 'relative'
                                }}>
                                    <Image priority={true} src={mysteryBox} layout={'fill'} objectFit={'cover'}/>
                                </Box>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>

                <Box sx={{
                    border: '1px solid #eee',
                    padding: '1rem',
                    borderRadius: '20px',
                    textAlign: 'center',
                }}>
                    <Typography color={'#fff'} fontSize={'1.3rem'} variant={'body1'}>
                        Mystery boxes include upgrades, patterns, items, clothing, and customizations for your zombies,
                        with over 100 eth in physical collectibles. All items inside the mystery box will be digital,
                        qualifying items can be claimed for a physical version!
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
};

export default ImagesSection;