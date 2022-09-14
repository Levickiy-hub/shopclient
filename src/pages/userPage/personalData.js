import React, {useCallback, useEffect, useState} from 'react';
import {useHttp} from "../../hooks/Http.hook";
import {TextField} from "@mui/material";

const PersonalData = () => {
    const userId = localStorage.userid
    let [userData,setUserData] = useState(null);
    let [form,setForm] = useState({
        name:"",address:"",phone_number:""
    });
    const {request} = useHttp();
   const getData=useCallback(async ()=>{
        try {
            const data = await request('/api/users/'+userId,'GET');
            console.log(data);
            setUserData(data);
        }
        catch (e) {

        }
    },[setUserData,request,userId]);

    useEffect( ()=>{
        getData();
    },[getData]);

    return (
        <div>
            <TextField
                id="filled-read-only-input"
                label="Name"
                value ={userData && userData.name}
                InputProps={{
                    readOnly: true,
                }}
                variant="filled"
            />
            <TextField
                id="filled-read-only-input"
                label="Phone number"
                value={userData && userData.phone_number}
                InputProps={{
                    readOnly: true,
                }}
                variant="filled"
            />
            <TextField
                id="filled-read-only-input"
                label="Address"
                value={userData && userData.address}
                InputProps={{
                    readOnly: true,
                }}
                variant="filled"
            />
        </div>
    );
};

export default PersonalData;