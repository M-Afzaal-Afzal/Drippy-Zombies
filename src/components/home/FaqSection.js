import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import AccordionCustom from "../common/AccordionCustom";
// import Image from "next/image";

const faqs = [
    {
        id: 1,
        question: `What are drippy zombies? `,
        ans: ` DRIPPY ZOMBIES are 8,000 unique nft collectibles algorithmically generated and stored on the ethereum blockchain as ERC-721 Tokens.`,
    }, {
        id: 2,
        question: `Who is behind the team? `,
        ans: `We are a team of six members, who are based in the U.S, Asia, and Australia. We have worked with companies, creators, and influencers and have a vision engraved In us which is the success of the brand we have created.`
    },
    {
        id: 3,
        question: `When can I mint?`,
        ans: `October 15th 3,00 PM EST`,
    },
    {
        id: 4,
        question: `How can I mint a drippy zombie?`,
        ans: `You will need a personal Ethereum wallet and some ETH. Connect your account via Metamask or WalletConnect and pay for the mint fee and gas fee.`
    },
    {
        id: 5,
        question: `How much is it to mint a drippy zombie?`,
        ans: `0.08 eth to mint + gas fee.`,
    },
    {
        id: 6,
        question: `What is the max mint per tx?`,
        ans: `A maximum of 10 zombies at a time! `,
    },
    {
        id: 7,
        question: `I can’t see my zombies!`,
        ans: `The images will be revealed 24hrs after the mint.`,
    },
    {
        id: 8,
        question: `When can I expect rarity tools, rarity sniper & open sea verification?`,
        ans: `It will proceed immediately after all items are sold out.`,
    },
    {
        id: 9,
        question: `When can I redeem my mystery box?`,
        ans: `You can redeem your mystery box on our website after the conclusion of the mint.`,
    },
    {
        id: 10,
        question: `What is zombie mania?`,
        ans: `Zombie mania is a play-to-earn & PvP game.
DRIP token has its own utility in the game. Attack power will be initially based on your power level for your items.`,
    },
    {
        id: 11,
        question: `WILL THE DRIP TOKENS BE LISTED?`,
        ans: `After all the drippy zombies have sold out, DRIP token will be supplied as liquidity to sushiswap.`,
    },
]

const FaqSection = () => {

    return (


        <Box
            id={'faq'}
            sx={{
                py: {
                    xs: '3rem',
                    md: "4rem",
                    lg: '6rem',
                },
                background: theme => theme.palette.primary.main,
            }}
        >
            <Container maxWidth={'xxl'}>

                <Typography
                    color={'#fff'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    variant={'h1'}
                >
                   FAQ?
                </Typography>

                {/*     Accordion Section     */}

                <Box mt={'3rem'}>

                    {
                        faqs.map(({question, id, ans}) => (
                            <AccordionCustom
                                key={id}
                                heading={question}
                                description={[
                                    ans
                                ]}
                            />
                        ))
                    }

                </Box>

            </Container>
        </Box>

    );
};

export default FaqSection;