import React from 'react';
import {Box, Container} from "@mui/material";
import HeadingWithDescription from "../common/HeadingWithDescription";
// import Image from "next/image";

const GiveBackSection = () => {
    return (


            <Box sx={{
                py: '6rem',
                background: theme => theme.palette.primary.main,
            }}>

                <Container maxWidth={'xxl'} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}>
                    <HeadingWithDescription
                        sx={{
                            color: '#fff',
                            maxWidth: "50rem",
                        }}
                        heading={'Give Back'}
                        description={[
                            'While the Fangsters live a good life in the urban jungle, not all creatures on planet Earth share this fortunate lifestyle. That’s why we want to give back part of our profits to NGOs that protect and restore wildlife.',
                            'This will kick off when we reach both 50% and 100% sold on the roadmap. A donation of 10ETH is planned for each of these milestones, to two different NGOs.\n',
                            'These will be chosen by community vote, from a pool of pre-selected options - such as re:wild and rewilding Europe. Both donations will be made through The Giving Block, the #1 crypto donations platform, providing verified transactions.'
                        ]}
                    />
                </Container>
            </Box>

    );
};

export default GiveBackSection;