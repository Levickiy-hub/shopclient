import React, {useState} from 'react';
import {Avatar, Button, Grid, Paper, TextField} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import '../../css/auth.css'
import {useHttp} from "../../hooks/Http.hook";
import {authHook} from "../../hooks/auth.hook";

const Index = () => {
    const [action,setAction]=useState(false);
    const {request,loading}=useHttp();
    const [form,setForm] = useState({
        username:'',password:'',name:''
    })
    const {login}=authHook()

    const ChangeHandler = event =>{
        setForm({...form,[event.target.name]:[event.target.value]})
    };
    const OnClickButton = async()=>{
        try{
            const data = await request('/api/users/login','POST',{...form});
            console.log('data:',data);
            login(data);
    }
    catch (e) {

    }}
    const OnClickButtonReg = async()=>{
        try{
            const data = await request('/api/users/registration','POST',{...form});
            console.log('data:',data);
        }
        catch (e) {

        }}
    
    const SwitchAction=(parameter)=>{
        setAction(parameter);
    }
    if(!action)
    return (
        <Grid align='center'>
            <Paper elevation={10} className={"paperStyle"}>
                <Grid align='center'>
                    <Avatar> <LockIcon/></Avatar>
                    <h2>Sign in</h2>
                    <TextField variant="standard" name='username' label='Login' placeholder='Login' fullWidth required onChange={ChangeHandler}/>
                    <TextField variant="standard" name='password' label='Password' placeholder='Password' type='password' fullWidth required onChange={ChangeHandler}/>
                    <div>
                        <Button onClick={OnClickButton}>Login</Button>
                    </div>
                    <div>
                        <Button onClick={()=>SwitchAction(true)}>Don't have an account?Registration</Button>
                    </div>
                </Grid>
            </Paper>
        </Grid>
        )
    else
        return (
            <Grid align='center'>
                <Paper elevation={10} className={"paperStyle"}>
                    <Grid align='center'>
                        <Avatar> <LockIcon/></Avatar>
                        <h2>Registration</h2>
                        <TextField variant="standard" name='name' label='Name' placeholder='Name' fullWidth required onChange={ChangeHandler}/>
                        <TextField variant="standard" name='username' label='Login' placeholder='Login' fullWidth required onChange={ChangeHandler}/>
                        <TextField variant="standard" name='password' label='Password' placeholder='Password' type='password' fullWidth required onChange={ChangeHandler}/>
                        <div>
                            <Button onClick={OnClickButtonReg}>Registration</Button>
                        </div>
                        <div>
                            <Button onClick={()=>SwitchAction(false)}>Already have an account?Login</Button>
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        )
};

export default Index;