import React, {useCallback, useEffect, useState} from 'react';
import Card from '../../components/card';
import CategoryBox from "../../components/categoryBox";
import {IconButton, Typography} from "@mui/material";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import {useHttp} from "../../hooks/Http.hook";
import '../../css/index.css';

const Index = () => {
    let [product,setProduct] = useState(null);
    let [category,setCategory] = useState(null);
    const {request,loading,error}=useHttp();

    const getContent= useCallback(async ()=>{
        try{
            const data = await request('/api/products','GET');
            setProduct(data);
            const categories = await request('/api/categories','GET');
            setCategory(categories);
        }catch (e) {

        }
    },[request,setProduct,setCategory] )
    useEffect(()=>{
        getContent();
    },[getContent])
    return (
        <div>
            <div>
                <Typography mt={2} ml={5}>Product</Typography>
                <div className="container">
                    {product && product.map((row)=>(
                        <Card key={row.id} content={row}/>
                        ))}
                </div>
                <IconButton aria-label="Arrow" size="large">
                    <ArrowCircleDownIcon fontSize="inherit" />
                </IconButton>
            </div>
            <div>
                <Typography mt={2} ml={5}>Categories</Typography>
                <div className={'categoryContainer'}>
                    {category && category.map((row)=>
                       <CategoryBox content={row}/>)}
                </div>
            </div>
        </div>
    );
};

export default Index;