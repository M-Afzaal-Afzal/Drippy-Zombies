import React from 'react';
import {Box, Container, IconButton, Stack} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {FaDiscord, FaEthereum, FaTwitter} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
    return (
        <Box sx={{
            background: (theme) => theme.palette.primary.main,
        }}>
            <Container maxWidth={'xxl'}>
                <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'} height={'70px'}>
                    {/* Left Side*/}
                    <Box sx={{color: '#fff'}}>
                        2021 &copy; DrippyZoombies
                    </Box>

                    {/* Right Icons*/}
                    <Box>
                        <Stack direction={'row'} spacing={2}>

                            <a target={'_blank'} href="https://twitter.com/DRIPPYZOMBIES">
                                <Image src={'/twitter.svg'} width={25} height={25}/>
                            </a>

                            <a target={'_blank'} href="https://twitter.com/DRIPPYZOMBIES">
                                <Image src={'/opensea.svg'} width={25} height={25}/>
                            </a>

                            <a target={'_blank'} href="https://discord.gg/FFb84mcxU3">
                                <Image src={'/discord.svg'} width={25} height={25}/>
                            </a>

                            <a target={'_blank'} href="https://twitter.com/DRIPPYZOMBIES">
                                <Image src={'/etherscan.png'} width={25} height={25}/>
                            </a>

                        </Stack>
                    </Box>

                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;