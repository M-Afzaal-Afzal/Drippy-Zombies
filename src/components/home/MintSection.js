import React, {useState} from 'react';
import {Box, Button, Container, IconButton, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const MintSection = () => {

    const [counter, setCounter] = useState(1);

    const counterHandler = (type) => {
        if (type === 'add') {
            if (counter < 20) {
                setCounter(counter + 1);
            }
        } else if (type === 'sub') {
            if (counter > 1) {
                setCounter(counter - 1)
            }
        }
    }

    return (
        <Box sx={{
            background: theme => theme.palette.primary.main,
            py: {
                xs: '2rem',
                md: "3rem",
                lg: '5rem',
            },
        }}>
            <Container maxWidth={'xxl'}>
                <Box sx={{
                    borderRadius: '15px',
                    background: "#424242",
                    padding: '1.5rem',
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        md: '1fr 1fr'
                    },
                    justifyContent: 'space-between',
                    gridGap: '1.5rem',
                    color: '#fff',
                }}>

                    <Box>
                        <Box mb={'1.5rem'}>
                            <Typography sx={{
                                textTransform: 'uppercase',
                            }} fontWeight={'bold'} gutterBottom variant={'h1'} fontSize={'1.5rem'}>
                                Maindrop
                            </Typography>
                            <Typography variant={'body1'} fontSize={'1.2rem'}>
                                Oct 20, 3:00 est
                            </Typography>
                        </Box>

                        <Box maxWidth={'200px'} sx={{
                            background: "#6c6c6c",
                            borderRadius: '10px',
                            padding: '1rem',
                            fontSize: '1rem',
                            color: '#fff',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <Box>
                                Available
                            </Box>
                            <Box>
                                8,000
                            </Box>
                        </Box>

                        <Box mt={'1rem'} maxWidth={'200px'} sx={{
                            background: "#6c6c6c",
                            borderRadius: '10px',
                            padding: '1rem',
                            fontSize: '1rem',
                            color: '#fff',
                        }}>
                            Coming Soon
                        </Box>


                    </Box>

                    {/* Connect to wallet section*/}

                    <Box>

                        <Box sx={{
                            display: 'grid',
                            placeItems: 'center',
                            height: '100%',
                        }}>

                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>

                                <Button
                                    onClick={counterHandler.bind(this, 'sub')}
                                    variant={'contained'}
                                    sx={{
                                        color: '#000',
                                        background: '#fff',
                                        marginRight: '1rem',
                                        '&:hover': {
                                            background: "#fff",
                                            color: '#000',
                                        }
                                    }}
                                >
                                    <RemoveIcon/>
                                </Button>

                                <Box sx={{
                                    fontSize: '1.3rem',
                                }}>
                                    {counter}
                                </Box>


                                <Button
                                    onClick={counterHandler.bind(this, 'add')}
                                    variant={'contained'}
                                    sx={{
                                        color: '#000',
                                        background: '#fff',
                                        marginLeft: '1rem',
                                        '&:hover': {
                                            background: "#fff",
                                            color: '#000',
                                        }
                                    }}
                                    color={'primary'}>
                                    <AddIcon/>
                                </Button>

                            </Box>

                            <Box sx={{
                                width: '100%',
                                mt: '1rem',
                            }}>
                                <Button sx={{
                                    background: '#fff',
                                    color: '#000',
                                    '&:hover': {
                                        background: "#fff",
                                        color: '#000',
                                    }
                                }} variant={'contained'} fullWidth={true}>
                                    Mint
                                </Button>

                            </Box>

                        </Box>

                    </Box>

                </Box>
            </Container>
        </Box>
    );
};

export default MintSection;