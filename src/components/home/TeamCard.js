import React from 'react';
import {Box, Card, CardContent, Chip, Divider, Stack, Typography} from "@mui/material";
import Image from "next/image";

const TeamCard = ({imgSrc, name, description, isWanted}) => {
    return (
        <Card sx={{
            borderRadius: '20px',
            width: 300,
            position: 'relative',
            transition: "all .3s linear",
            backfaceVisibility: 'hidden',
            '&:hover': {
                transform: 'scale(1.03)',
                backfaceVisibility: 'hidden',
                cursor: 'pointer',
            },
            '& img': {
                borderRadius: '20px',
            },
            flex:1,
        }}>
            <CardContent>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '15rem',
                    }}
                >
                    <Image priority={true} src={imgSrc} layout={'fill'} objectFit={'cover'}/>

                </Box>

                <Box sx={{
                    pt: '1rem',
                }}
                >
                        <Typography textAlign={'center'} fontSize={'1.1rem'} variant={'body1'} >
                            {name}
                        </Typography>

                </Box>

                <Stack spacing={2} divider={<Divider/>}>

                    {
                        description.map(desc => (
                            <Box>
                                <Typography textAlign={'center'} fontSize={'1.7rem'} variant={'body1'} fontWeight={'bold'}>
                                    {desc}
                                </Typography>
                            </Box>
                        ))
                    }

                </Stack>

            </CardContent>
        </Card>
    );
};

export default TeamCard;