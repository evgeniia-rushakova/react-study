import React from "react";
import style from './Dialogs.module.css'
import Message from "../Message/Message";
import AddMessage from "../Message/AddMessage/AddMessage";
import {Route} from "react-router-dom";


const Dialogs = (props) => {
    let renderMessages = (id) => {
        let messagesElems = props.data.dialogs[id-1].messages.map(elem => <Message message={elem.text} date={elem.date}/>);
        return messagesElems
    }
    return (
        <div className={style.dialogsWrapper}>
        <div className={style.dialogs}>
            {renderMessages(props.id)}
        </div>
        <AddMessage dispatch={props.dispatch}/>
    </div>
    )
}

export default Dialogs;