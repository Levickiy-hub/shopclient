import React from 'react';
import {
    Box,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import '../css/Card.css'
import {Link} from "react-router-dom";
const Card = ({content}) => {
    return (
         <div className={"Card"}>
             <Link to={'/products/'+content.id}>
                 <Grid container wrap="nowrap" >
                        <Paper elevation={3} >
                            <Box className="CardBox">
                                <img src={content.img && require('../img/'+content.img)} className="CardImage"/>
                                <div className="CardText">
                                    <Typography mt={2}>
                                        name:{content.name}
                                    </Typography>
                                    <Typography mt={2}>
                                        {/*category:{content.category}*/}
                                    </Typography>
                                    <Typography mt={2}>
                                        price:{content.price}
                                    </Typography>
                                </div>
                            </Box>
                        </Paper>
                </Grid>
             </Link>
         </div>

    );
};

export default Card;