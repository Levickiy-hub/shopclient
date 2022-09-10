import React, {useCallback, useEffect, useState} from 'react';
import {useHttp} from "../../hooks/Http.hook";
import Loading from "../../components/loading"
import {Box, Typography} from "@mui/material";
import '../../css/product.css'


const Index = () => {
    const {request,loading}=useHttp();
    let [product,setProduct] = useState(null);
    const getContent= useCallback(async ()=>{
        try{
            const data = await request('/api'+window.location.pathname,'GET');
            setProduct(data);
        }catch (e) {

        }
    },[request,setProduct]);
    useEffect(()=>{
        getContent();
    },[getContent]);

    if(loading){
        return (<Loading/>);
    }

    if(product)
    return (
        <div>
            <Box className='Image'>
            <img src={''} alt={product && product.img}/>
            </Box>
            <Typography>
                {product.name}
            </Typography>
            <Typography>
                {product.description}
            </Typography>
            <Typography>
                price:{product.price}
            </Typography>
        </div>
    );
    else{
        return (<Loading/>)
    }
};

export default Index;