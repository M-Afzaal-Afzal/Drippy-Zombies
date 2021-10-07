import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import Image from 'next/image';

const RarityImageSection = () => {
    return (
        <Box  sx={{
            background: '#000',
            py: '6rem',
        }}
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                <Grid xs={12} md={12} lg={6} xl={3} item>
                    <Box
                        sx={{width: '100%', minHeight: {
                                xs: '256px',
                                md: '480px',
                                xl: '256px',
                            }, height: '100%', position: 'relative'}}
                    >
                        <Image src={'/home/rarity_common.png'} layout={'fill'} objectFit={'cover'}/>
                    </Box>

                    <Box py={'1rem'}>
                        <Typography color={'#fff'} textAlign={'center'} fontSize={'20px'} fontWeight={'bold'}>
                            Common
                        </Typography>
                    </Box>

                </Grid>

                <Grid xs={12} md={12} lg={6} xl={3} item>
                    <Box
                        sx={{width: '100%', minHeight: {
                                xs: '256px',
                                md: '480px',
                                xl: '256px',
                            }, height: '100%', position: 'relative'}}
                    >
                        <Image src={'/home/rarity_uncommon.png'} layout={'fill'} objectFit={'cover'}/>
                    </Box>

                    <Box py={'1rem'}>
                        <Typography color={'#fff'} textAlign={'center'} fontSize={'20px'} fontWeight={'bold'}>
                            Uncommon
                        </Typography>
                    </Box>

                </Grid>

                <Grid xs={12} md={12} lg={6} xl={3} item>
                    <Box
                        sx={{width: '100%',minHeight: {
                                xs: '256px',
                                md: '480px',
                                xl: '256px',
                            }, height: '100%', position: 'relative'}}
                    >
                        <Image src={'/home/rarity_rare.png'} layout={'fill'} objectFit={'cover'}/>
                    </Box>

                    <Box py={'1rem'}>
                        <Typography color={'#fff'} textAlign={'center'} fontSize={'20px'} fontWeight={'bold'}>
                            Rare
                        </Typography>
                    </Box>

                </Grid>

                <Grid xs={12} md={12} lg={6} xl={3} item>
                    <Box
                        sx={{
                            width: '100%',
                            minHeight: {
                                xs: '256px',
                                md: '480px',
                                xl: '256px',
                            },
                            height: '100%', position: 'relative'
                        }}
                    >
                        <Image src={'/home/rarity_mythic.png'} layout={'fill'} objectFit={'cover'}/>
                    </Box>

                    <Box py={'1rem'}>
                        <Typography color={'#fff'} textAlign={'center'} fontSize={'20px'} fontWeight={'bold'}>
                            Mythic
                        </Typography>
                    </Box>

                </Grid>

            </Grid>
        </Box>
    );
};

export default RarityImageSection;