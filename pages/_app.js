import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import theme from '../src/theme/theme';
import createEmotionCache from '../src/utils/createEmotionCache';
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "../src/styles/swiper.css";
import '../src/styles/global.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Drippy Zombies</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>

                <Header/>
                <Component {...pageProps} />
                <Footer/>

            </ThemeProvider>
        </CacheProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
