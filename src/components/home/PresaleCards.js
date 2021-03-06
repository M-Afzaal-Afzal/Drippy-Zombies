import React, {useState} from 'react';
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const PresaleCards = () => {

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
            background: (theme) => theme.palette.primary.main,
            pb: {
                xs: '3rem',
                md: '4rem',
                lg: '6rem',
            },
        }}
        >
            <Container maxWidth={'xxl'}>
                <Box sx={{
                    background: '#424242',
                    padding: '1rem',
                    borderRadius: '8px',
                    boxShadow: theme => theme.shadows[10],
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        md: 'auto 1fr',
                    },
                    alignItems: 'center',
                    color: '#fff',
                }}>
                    <Typography sx={{
                        fontSize: '1.5rem',
                        flexBasis: '100%',
                    }} variant={'heading'}>

                        Pre Sale
                    </Typography>

                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>

                        <Button
                            onClick={counterHandler.bind(this, 'sub')}
                            variant={'contained'}
                            sx={{
                                color: '#000',
                                background: '#fff',
                                '&:hover': {
                                    background: "#fff",
                                    color: '#000',
                                },
                                marginRight: '1rem',
                            }} >
                            <RemoveIcon/>
                        </Button>

                        <Box sx={{
                            fontSize: '1.3rem',
                        }}>
                            {counter}
                        </Box>


                        <Button onClick={counterHandler.bind(this, 'add')} variant={'contained'}
                                sx={{
                                    color: '#000',
                                    background: '#fff',
                                    marginLeft: '1rem',
                                    '&:hover': {
                                        background: "#fff",
                                        color: '#000',
                                    }
                                }} >
                            <AddIcon/>
                        </Button>

                        <Box>
                            <Box sx={{
                                marginLeft: '2rem',
                                padding: '8px 1rem',
                                background: '#565656',
                                color: '#fff',
                                borderRadius: '8px',
                            }}>
                                Mint
                            </Box>
                        </Box>

                    </Box>



                </Box>

            </Container>

        </Box>
    );
};

export default PresaleCards;