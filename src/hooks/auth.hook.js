import {useCallback, useContext} from "react";
import {Context} from "../index";

export const authHook= ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {user} = useContext(Context);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const saveUser = useCallback((data, message = '') => {
        if (data && data.message !== 'noAutorized') {}
        localStorage.setItem('userid', data.id);
        localStorage.setItem('username', data.name)
        localStorage.setItem('userrole', data.role);
        user.setUser(user);
        user.setIsAuth(true);
    }, [user]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const login = useCallback((data) => {
        console.log(data);
        if(data.message==='updatePassword')
            saveUser(data.user,data.message)
        else saveUser(data);
    },[saveUser]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const logout = useCallback(()=>{
        localStorage.removeItem('username');
        localStorage.removeItem('userid');
        localStorage.removeItem('userrole');
    },[])
    return {login,logout}
}