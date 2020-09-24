import React from "react";
import style from './Dialogs.module.css'
import DialogLink from "./DialogLink/DialogLink";
import Message from './Message/Message';
import AddMessage from "./Message/AddMessage/AddMessage";
import Dialogs from "./Dialogs";
import {msgActionCreator, newMsgActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messages.dialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMsg: () => dispatch(msgActionCreator()),
        updateMsg: (text) => dispatch(newMsgActionCreator(text))
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;