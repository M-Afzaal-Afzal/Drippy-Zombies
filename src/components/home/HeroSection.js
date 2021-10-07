import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import Image from 'next/image';
import ImagesSection from "./ImagesSection";
import Countdown from 'react-countdown';
import CountdownRenderer from './CountdownRenderer';

const HeroSection = () => {
    return (
        <Box sx={{
            background:'#000',
            pt: '2rem',
        }}>

            <Container maxWidth={'xxl'} sx={{
                position: 'relative',
                maxWidth: '1200px',
                mx: 'auto',
                '& img': {
                    borderRadius: '15px',
                }
                // minHeight: '100vh',
            }}>

                <Image priority src={'/home/bg/hero.png'} width={3892} height={2323}/>


                {/*<Box sx={{background: (theme) => theme.palette.primary.main}} pt={'3rem'}>*/}
                {/*    <ImagesSection/>*/}
                {/*</Box>*/}

            </Container>

        </Box>
    );
};

export default HeroSection;