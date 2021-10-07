import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import Image from "next/image";
import HeadingWithDescription from "../common/HeadingWithDescription";

const MerchStoreSection = () => {
    return (


            <Box py={'6rem'} sx={{
                background: theme => theme.palette.grey.main,
            }}>
                <Container maxWidth={'xxl'}>
                    <Box>
                        <Grid container spacing={6}>
                            <Grid item xs={12} xl={6}>
                                <Box sx={{
                                    width: '100%',
                                    position: 'relative',
                                    // height: '10rem',
                                    minHeight: '30rem',
                                    height: '100%',
                                }}>
                                    <Image src={'/home/merch.png'}
                                           layout={'fill'}
                                           objectFit={'contain'}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} xl={6} sx={{
                                mt: {
                                    xs: '2rem',
                                    xl: 0,
                                },
                                order: {
                                    xs: -5,
                                    xl: 0,
                                }
                            }}>
                                <Box sx={{display: 'grid', placeContent: 'center', height: '100%'}}>

                                    <HeadingWithDescription
                                        heading={'Merch Store'}
                                        headingLeft={true}
                                        sx={{
                                            color: '#fff', maxWidth: {
                                                xs: '50rem',
                                                xl: 'auto',
                                            }
                                        }}
                                        description={[
                                            'A real Fangster can’t go without catching the latest merch drop. The last milestone on the Fang Gang roadmap is the launch of a premium merch store.\n',
                                            'From fresh crewneck sweaters to dope long sleeve tees, 5 panel caps and beanies. These are just some of the goodies we aim to get out there. Some will showcase recognisable Fang Gang imagery and brands from their world, like Wildfangz and BITE.\n',
                                            'And other items will have completely new and unique designs so everyone can rock the sickest fits.',
                                        ]}
                                    />

                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </Container>
            </Box>

    );
};

export default MerchStoreSection;