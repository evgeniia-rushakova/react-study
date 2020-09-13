import React from "react";
import style from './Dialog.module.css'
import DialogLink from "./DialogLink/DialogLink";
import Message from './Message/Message';
import AddMessage from "./Message/AddMessage/AddMessage";

const Dialog = (props) => {
    let renderMessages = () => {
        let messagesElems = props.data.dialogs[0].messages.map(elem => <Message message={elem.text} date={elem.date}/>);
        return messagesElems
    }
    let dialogsElems = props.data.dialogs.map((el) => <DialogLink name={el.name} idName={el.id} dialogs={el.messages}/>);
    return (<div className={style.dialogsWrapper}>
        <div className={style.dialogs}>
            {dialogsElems}
        </div>
        <div className={style.dialogs}>
            {renderMessages(0)}
        </div>
        <AddMessage dispatch={props.dispatch}/>
    </div>)
}

export default Dialog;