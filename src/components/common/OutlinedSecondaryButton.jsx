import React from 'react';
import {Button} from "@mui/material";

const OutlinedSecondaryButton = React.forwardRef(({children, sx, ...props}, ref) => {
    return (
        <Button
            sx={{
                background: "transparent",
                color: '#fff',
                '&:hover': {
                    background: theme => theme.palette.secondary.main,
                },
                ...sx,
            }}
            color={'secondary'}
            variant={'outlined'}
            ref={ref}
            {...props}
        >
            {children}
        </Button>
    );
});

export default OutlinedSecondaryButton;