import {Box, Stack} from "@mui/material";
// import {zeroPad} from "react-countdown";


const CountdownRenderer = ({days, hours, minutes, seconds, completed}) => {
    // if (completed) {
    //     // Render a completed state
    //     return <Completionist />;
    // } else {
    // Render a countdown
    return (
        <Box sx={{
            maxWidth: "30rem",
            mx: 'auto',
        }}>

        <Stack direction={'row'}
               component={'h1'}
               spacing={4}
               sx={{
                   color: "#fff",
                   mx: 'auto',
                   fontWeight: 'normal',
                    justifyContent: {
                       xs: 'center',
                        'xl': 'space-between',
                    },
               }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <span>
                    {(days)}
                </span>
                <span>
                    DAYS
                </span>
            </Box>

            {/*<Box>:</Box>*/}

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <span>
                    {(hours)}
                </span>
                <span>
                    HRS
                </span>
            </Box>

            {/*<Box>:</Box>*/}

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <span>
                    {(minutes)}
                </span>
                <span>
                    MIN
                </span>
            </Box>

            {/*<Box>:</Box>*/}

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <span>
                    {(seconds)}
                </span>
                <span>
                    SEC
                </span>
            </Box>

        </Stack>

            <Stack direction={'row'}
                   component={'h1'}
                   spacing={4}
                   sx={{
                       color: "#fff",
                       mx: 'auto',
                       // fontWeight: 'bold',
                       justifyContent: {
                           xs: 'center',
                           'xl': 'space-between',
                       },
                   }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '110%',
                        background: '#444',
                        borderRadius:'8px',
                    }}
                >
                <span>
                    MINT!
                </span>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '25%',
                        background: '#444',
                        borderRadius:'8px',
                    }}
                >
                <span>
                    1
                </span>
                </Box>

            </Stack>

        </Box>
    );
    // }
};

export default CountdownRenderer;
