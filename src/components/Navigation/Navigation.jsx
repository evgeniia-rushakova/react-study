import React from "react";
import style from './Navigation.module.css'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return <nav className={style.nav}>
        <ul className="user-nav">
            <li>
                <NavLink className={style.link} to='/profile' activeClassName={style.current}>Profile</NavLink>
            </li>
            <li>
                <NavLink  className={style.link} to='/messages' activeClassName={style.current}>Messages</NavLink>
            </li>
            <li>
                <NavLink  className={style.link} to='/messages2' activeClassName={style.current}>Messagestest</NavLink>
            </li>
            <li>
                <NavLink  className={style.link} to='/music' activeClassName={style.current}>Music</NavLink>
            </li>
            <li>
                <NavLink  className={style.link} to='/settings' activeClassName={style.current}>Settings</NavLink>
            </li>
        </ul>
    </nav>
}

export default Navigation;