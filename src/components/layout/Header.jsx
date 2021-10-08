import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Box, Button,
    Container, Divider,
    Drawer,
    IconButton,
    // ListItem,
    // ListItemButton,
    // ListItemText,
    Stack,
    Toolbar, useTheme
} from "@mui/material";
import OutlinedSecondaryButton from "../common/OutlinedSecondaryButton";
import DehazeIcon from '@mui/icons-material/Dehaze';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// import {List} from "@mui/icons-material";
import DrawerOutlinedButton from "../common/DrawerOutlinedButton";
import Image from 'next/image';
import {FaDiscord, FaEthereum, FaTwitter} from 'react-icons/fa';
import Link from 'next/link';
import {useRouter} from "next/router";


const Header = () => {

    const router = useRouter();

    const [itemToNavigate, setItemToNavigate] = useState(null);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const links = [
        {
            id: '1',
            text: 'Features',
            imgSrc: '/icons/benefits.png',
        },
        {
            id: '2',
            text: 'Roadmap',
            imgSrc: '/icons/roadmap.png',
        },
        {
            id: '3',
            text: 'Box',
            imgSrc: '/icons/mysterybox.png',
        },
        {
            id: '4',
            text: 'Faq',
            imgSrc: '/icons/faq.png',
        }, {
            id: '5',
            text: 'Team',
            imgSrc: '/icons/comunity.png',
        }, {
            id: '5',
            text: 'Store',
            imgSrc: '/icons/cabana.png',
        },


    ];

    const drawerToggler = () => {
        setIsDrawerOpen(prevState => !prevState);
    }

    useEffect(() => {
        if (itemToNavigate) {

            if (router.pathname === '/') {
                document.getElementById(itemToNavigate.toString().toLowerCase()).scrollIntoView({
                    behavior: 'smooth',
                })
            } else {
                router.push('/')
                    .then(() => {
                        document.getElementById(itemToNavigate.toString().toLowerCase()).scrollIntoView({
                            behavior: 'smooth',
                        })
                    })

            }


        }
    }, [itemToNavigate])


    const linkClickHandler = (name) => {
        const elementId = name.toLowerCase();
        setItemToNavigate(elementId)

        if (itemToNavigate === elementId) {
            setItemToNavigate(name.toUpperCase())
        }

    }

    const theme = useTheme();

    return (
        <div>
            <AppBar elevation={2} sx={{
                background: theme => theme.palette.primary.main,
            }}>
                <Container maxWidth={'xxl'} disableGutters>

                    <Toolbar>
                        <Stack sx={{
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            display: 'flex',
                        }}
                               direction={'row'} component={'header'}
                        >

                            {/*Left Icons*/}
                            <Stack direction={'row'} spacing={2}>
                                {/* Logo */}
                                <Box>
                                    <Box pr={2} sx={{
                                        '& div': {
                                            maxWidth: '8rem !important',
                                            display: 'inline-block',
                                        }
                                    }}>
                                        <Image priority layout={'intrinsic'} src={'/logo.png'} width={70}
                                               height={57}/>
                                    </Box>
                                </Box>


                                <Stack sx={{
                                    display: {
                                        xs: 'none',
                                        xl: 'flex',
                                        alignItems: 'center',
                                    }
                                }} direction={'row'} spacing={1}>

                                    {
                                        links.map(({text, imgSrc, id}) => {

                                            if (text.toLowerCase() === 'store') {
                                                return (
                                                    <Link href={'/store'}>

                                                        <OutlinedSecondaryButton
                                                            key={id}
                                                            sx={{
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                lineHeight: 1,
                                                            }}
                                                        >
                                                            <Box sx={{
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                mr: '5px'
                                                            }} component={'span'}>
                                                                <Image
                                                                    priority
                                                                    layout={'intrinsic'}
                                                                    src={imgSrc} width={20}
                                                                    height={20}/>
                                                            </Box>
                                                            {text}
                                                        </OutlinedSecondaryButton>
                                                    </Link>
                                                )
                                            }

                                            return (
                                                <OutlinedSecondaryButton
                                                    key={id}
                                                    onClick={linkClickHandler.bind(this, text)}
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        lineHeight: 1,
                                                    }}
                                                >
                                                    <Box sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        mr: '5px'
                                                    }} component={'span'}>
                                                        <Image
                                                            priority
                                                            layout={'intrinsic'}
                                                            src={imgSrc} width={20}
                                                            height={20}/>
                                                    </Box>
                                                    {text}
                                                </OutlinedSecondaryButton>
                                            )
                                        })
                                    }

                                </Stack>
                            </Stack>

                            {/*    Right Icons*/}
                            <Box>
                                {/* Icons buttons on large screen*/}

                                <Stack sx={{
                                    display: {
                                        xs: 'none',
                                        xl: 'block',
                                    }
                                }} direction={'row'} spacing={2}>

                                    {/*<a target={'_blank'} href="https://twitter.com/DRIPPYZOMBIES">*/}
                                    {/*    <Image src={'/twitter.svg'} width={25} height={25}/>*/}
                                    {/*</a>*/}

                                    {/*<a href="#">*/}
                                    {/*    <Image src={'/opensea.svg'} width={25} height={25}/>*/}
                                    {/*</a>*/}

                                    {/*<a target={'_blank'} href="https://discord.gg/FFb84mcxU3">*/}
                                    {/*    <Image src={'/discord.svg'} width={25} height={25}/>*/}
                                    {/*</a>*/}

                                    {/*<a href="#">*/}
                                    {/*    <Image src={'/etherscan.png'} width={25} height={25}/>*/}
                                    {/*</a>*/}

                                    <Button variant={'contained'} color={'secondary'}>
                                        Connect Wallet
                                    </Button>

                                </Stack>

                                <Box sx={{
                                    display: {
                                        xs: 'block',
                                        xl: 'none',
                                    }
                                }}>
                                    <IconButton onClick={drawerToggler} sx={{color: '#fff'}}>
                                        <DehazeIcon fontSize={'large'}/>
                                    </IconButton>
                                </Box>
                            </Box>

                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>

            {/*    Side Drawer*/}

            <Drawer
                anchor={'left'}
                open={isDrawerOpen}
                onClose={drawerToggler}
            >
                <Box

                    sx={{width: 250,   background: '#000',color: '#fff', height: '100%'}}
                    role="presentation"
                    onClick={drawerToggler}
                    onKeyDown={drawerToggler}
                >
                    <Box sx={{
                        width: '100%',
                        height: '5rem',
                        display: 'grid',
                        placeContent: 'center',
                        fontSize: '1.5rem',
                    }}>
                        <Box sx={{
                            '& div': {
                                maxWidth: '8rem !important',
                                display: 'inline-block',
                            }
                        }}>
                            <Image priority layout={'intrinsic'} src={'/logo.png'} width={70}
                                   height={57}/>
                        </Box>
                    </Box>

                    <Divider/>

                    {
                        links.map(({text, id}) => {

                            if (text.toLowerCase() === 'store') {
                                return (
                                    <Link href={'/store'}>
                                        <Box>

                                            <DrawerOutlinedButton
                                                size={'large'}
                                                fullWidth
                                                sx={{
                                                    color: "#fff"
                                                }}
                                            >
                                                {text}
                                            </DrawerOutlinedButton>
                                            <Divider sx={{
                                                borderColor: '#222',
                                            }}/>
                                        </Box>
                                    </Link>
                                )
                            }

                            return (
                                <Box key={id}>
                                    <DrawerOutlinedButton sx={{
                                        color: "#fff"
                                    }} onClick={linkClickHandler.bind(this, text)} size={'large'}
                                                          fullWidth>
                                        {text}
                                    </DrawerOutlinedButton>
                                    <Divider sx={{
                                        borderColor: '#222',
                                    }}/>
                                </Box>
                            )
                        })
                    }

                </Box>
            </Drawer>

            {/*     Header Bottom Spacing*/}
            <Box sx={{
                ...theme.mixins.toolbar,
                '@media (min-width: 0px) and (orientation: landscape)': {
                    minHeight: '64px',
                }
            }}/>

        </div>
    );
};

export default Header;