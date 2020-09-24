import React from "react";
import style from './AddMessage.module.css'
import {msgActionCreator, newMsgActionCreator} from "../../../../redux/dialogs-reducer";

const AddMessage = (props) => {

    let newPostElement = React.createRef();

    function addNewMsg() {
        props.addNewMsg();
        newPostElement.current.value = '';
    }

    function onMsgChange() {
        let text = newPostElement.current.value;
        props.updateMsg(text)
    }

    return (
        <div className={style.post}>
            <div className={style.form}>
                            <textarea onChange={onMsgChange} ref={newPostElement} className={style.text}
                                      name="new-post-text" id="" cols="30" rows="5" placeholder='Your post text here'
                                      value={props.newPostText}>
                            </textarea>
                <button className={style.button} type="submit" onClick={addNewMsg}>Send</button>
            </div>
        </div>
    )
}

export default AddMessage;