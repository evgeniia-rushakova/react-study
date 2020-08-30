import React from "react";
import style from './DialogLink.module.css'
import {NavLink} from "react-router-dom";

const DialogLink = (props) => {
    return   <div className={style.dialog}><NavLink to={"/messages/" + props.idName} activeClassName={style.current}>{props.name}</NavLink> </div>
}
export default DialogLink;