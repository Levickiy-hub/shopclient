import React from 'react';
import {Button} from "@mui/material";
import CardUser from "./cardUser";
import "../../css/userPage.css"
import {authHook} from "../../hooks/auth.hook";


const Index = () => {
    const {logout} = authHook();
    async function LogOut() {
        await logout();
    }
    const contentName = ["personal data","delivery","discount","point of issue","payment method","return of goods",
    "offer","application","contacts","about Us","sale rules"];
    return (
        <div>
            <div className={'headerContainer'}>
                <div className={'userImage'}>
                    <img alt={'userImage'} />
                </div>
                <Button className={'logout'} onClick={LogOut} style={{position:"absolute"}}>LogOut</Button>
            </div>
            <div className={"bodyContainer"}>
                {contentName.map(value => (<CardUser content={value}/>))}
            </div>
        </div>
    );
};

export default Index;