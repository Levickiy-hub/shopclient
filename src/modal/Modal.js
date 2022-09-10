import React from 'react';
import {Button} from "@mui/material";
import "../css/modal.css"
const Modal = ({active,setActive,content})=> {
    return (
        <div className={active ? "modalStyle":"modalOff"}>
            <div className="modalStyle__content">
                <Button onClick={()=>setActive(false)} className="modalButton">Close</Button>
                {content}
            </div>
        </div>
    );
};

export default Modal;