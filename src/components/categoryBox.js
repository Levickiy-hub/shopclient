import React from 'react';
import {Box, Button} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import '../css/category.css'


const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#fdd835',
            darker: '#424242',
        },
    },
});
const CategoryBox = ({content}) => {
    return (
        <Box>
            <ThemeProvider theme={theme}>
                <Button variant="contained" className={"categoryButton"} style={{position:"revert"}}>
                    {content.name}
                </Button>
            </ThemeProvider>
        </Box>
    );
};

export default CategoryBox;