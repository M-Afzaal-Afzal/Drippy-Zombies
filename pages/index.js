import * as React from 'react';
import {Box} from "@mui/material";
import HeroSection from "../src/components/home/HeroSection";
import ImagesSection from "../src/components/home/ImagesSection";
import IntroSection from "../src/components/home/IntroSection";
import RoadmapSection from "../src/components/home/RoadmapSection";
import RaritySection from "../src/components/home/RaritySection";
import GiveBackSection from "../src/components/home/GiveBackSection";
import MerchStoreSection from "../src/components/home/MerchStoreSection";
import FaqSection from "../src/components/home/FaqSection";
import TeamsSection from "../src/components/home/TeamsSection";
import PresaleCards from "../src/components/home/PresaleCards";
import PostSalesRoadmap from "../src/components/home/PostSalesRoadmap";
import MintSection from "../src/components/home/MintSection";
import TextSection from "../src/components/home/TextSection";
import FeaturesSection from "../src/components/home/FeaturesSection";
import ClawMachineSection from "../src/components/home/ClawMachineSection";
import SocialIconsCenter from "../src/components/home/SocialIconsCenter";
// import {AppBar, Box, Stack, Toolbar} from "@mui/material";

export default function Index() {

    return (
        <Box>
            <HeroSection/>

            {/*<Box>*/}
            {/*    <IntroSection/>*/}
            {/*</Box>*/}

            <Box>
                <MintSection/>
            </Box>

            <Box >
                <PresaleCards/>
            </Box>

            <Box>
                <TextSection/>
            </Box>

            <Box>
                <SocialIconsCenter/>
            </Box>

            <Box >
                <ImagesSection/>
            </Box>

            <RaritySection/>

            <ClawMachineSection/>



            <Box>
                <FeaturesSection/>
            </Box>



            <Box>
                <RoadmapSection/>
            </Box>

            <Box>
                <PostSalesRoadmap/>
            </Box>


            {/*<Box>*/}
            {/*    <RaritySection/>*/}
            {/*</Box>*/}

            {/*<Box>*/}
            {/*    <GiveBackSection/>*/}
            {/*</Box>*/}

            {/*<Box>*/}
            {/*    <MerchStoreSection/>*/}
            {/*</Box>*/}

            <Box>
                <FaqSection/>
            </Box>

            <Box>
                <TeamsSection/>
            </Box>

        </Box>
    );
}
