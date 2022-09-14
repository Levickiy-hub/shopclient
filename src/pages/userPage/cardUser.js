import React from 'react';
import {Box, Paper, Typography} from "@mui/material";
import "../../css/userPage.css"
import {Link} from "react-router-dom";

const CardUser = ({content}) => {
    return (
        <div className={"userCard"}>
            <Link to={"/"+content.replace(/\s+/g, '')}>
                <Box>
                    <Paper elevation={5}>
                        <Typography>
                            {content}
                        </Typography>
                    </Paper>
                </Box>
            </Link>
        </div>
    );
};

export default CardUser;