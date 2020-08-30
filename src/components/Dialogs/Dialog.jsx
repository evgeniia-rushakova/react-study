import React from "react";
import style from './Dialog.module.css'
import DialogLink from "./DialogLink/DialogLink";
import Message from './Message/Message';

const Dialog = (props) => {
    let dialogsElems = props.data.dialogs.map((el) => <DialogLink name={el.name} idName={el.id}/>);
    let messagesElems = props.data.messages.map(elem => <Message message={elem.text} date={elem.date}/>);

    return (<div className={style.dialogsWrapper}>
        <div className={style.dialogs}>
            {dialogsElems}
        </div>
        <div className={style.messages}>
            {messagesElems}
        </div>
    </div>)
}

export default Dialog;