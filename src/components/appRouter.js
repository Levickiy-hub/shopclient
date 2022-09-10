import React from 'react';
import {Routes,Route,Navigate } from 'react-router-dom';
import Index from '../pages/index';
import Product from '../pages/productPage'
export const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Index/>} exact/>
            <Route path={'/products/:id'} element={<Product/>} exact/>
            <Route path="*" element={<Navigate to ={'/'} />}/>
        </Routes>
    );
};

export default AppRouter;