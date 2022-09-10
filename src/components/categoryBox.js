import React from 'react';
import {Box, Button} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
        // secondary: {
        //     main: '#616161',
        //     darker: '#424242',
        // },
        // neutral: {
        //     main: '#64748B',
        //     contrastText: '#fff',
        // },
    },
});
const CategoryBox = ({content}) => {
    return (
        <Box>
            <ThemeProvider theme={theme}>
                <Button variant="contained" className={"categoryButton"}>
                    {content.name}
                </Button>
            </ThemeProvider>
        </Box>
    );
};

export default CategoryBox;