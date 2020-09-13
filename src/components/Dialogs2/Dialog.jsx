import React from "react";
import style from './Dialog.module.css'
import DialogLink from "./DialogLink/DialogLink";
import Dialogs from "./Dialogs/Dialogs";

const Dialog2 = (props) => {
    let dialogsElems = props.data.dialogs.map((el) => <DialogLink name={el.name} idName={el.id} dialogs={el.messages}/>);
    return (<div className={style.dialogsWrapper}>
        <div className={style.dialogs}>
            {dialogsElems}
        </div>
        <Dialogs dispatch={props.dispatch} data={props.data} id={1}/>
    </div>)
}

export default Dialog2;