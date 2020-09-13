import React from "react";
import style from './DialogLink.module.css'
import {NavLink} from "react-router-dom";
import Message from "../Message/Message";

const DialogLink = (props) => {

    return <div>
        <div className={style.dialog}><NavLink to={"/messages2/" + props.idName}
                                               activeClassName={style.current}>{props.name} id={props.idName}</NavLink>
        </div>
    </div>
}
export default DialogLink;