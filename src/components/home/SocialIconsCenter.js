import React from 'react';
import {Box, Container, Stack} from "@mui/material";
import Image from "next/image";

const SocialIconsCenter = () => {
    return (
        <Box sx={{
            pt: {
                xs: "0",
                md: '0',
                lg: "6rem",
            },
            background: theme => theme.palette.primary.main,
        }}>

            <Container maxWidth={'xxl'}>

                <Stack direction={'row'} spacing={3} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <a target={'_blank'} href="https://twitter.com/DRIPPYZOMBIES">
                        <Image src={'/twitter.svg'} width={25} height={25}/>
                    </a>

                    <a href="#">
                        <Image src={'/opensea.svg'} width={25} height={25}/>
                    </a>

                    <a target={'_blank'} href="https://discord.gg/FFb84mcxU3">
                        <Image src={'/discord.svg'} width={25} height={25}/>
                    </a>

                    <a href="#">
                        <Image src={'/etherscan.png'} width={25} height={25}/>
                    </a>
                </Stack>
            </Container>

        </Box>
    );
};

export default SocialIconsCenter;