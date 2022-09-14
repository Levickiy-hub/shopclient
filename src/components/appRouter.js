import React from 'react';
import {Routes,Route,Navigate } from 'react-router-dom';
import Index from '../pages/index';
import Product from '../pages/productPage'
import PersonalData from'../pages/userPage/personalData'
import AboutUs from "../pages/userPage/aboutUs";
import PointOfIssue from "../pages/userPage/pointOfIssue";
export const AppRouter = () => {
    // const contentName = ["personal data","delivery","discount","point of issue","payment method","return of goods",
    //     "offer","application","contacts","about Us","sale rules"];
    return (
        <Routes>
            <Route path={'/products/:id'} element={<Product/>} exact/>
            <Route path={'/personaldata/'} element ={<PersonalData/>} exact/>
            <Route path={'/aboutUs/'} element ={<AboutUs/>} exact/>
            <Route path={'/pointofissue/'} element ={<PointOfIssue/>} exact/>
            <Route path={'/'} element={<Index/>} exact/>
            <Route path="*" element={<Navigate to ={'/'} />}/>
        </Routes>
    );
};

export default AppRouter;