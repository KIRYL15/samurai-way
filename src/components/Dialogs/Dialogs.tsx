import style from './Dialogs.module.css'
import React, {ChangeEvent} from 'react';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {ActionsTypes, DialogsPageType, } from "../../redux/type";
import {addMessageAC, changeMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogsType = {
    dialogsData: DialogsPageType,
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElement = props.dialogsData.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.dialogsData.messages.map(m => <Message key={m.id} message={m.message}/>)
    let onSendMessageClick = () => {
        props.dispatch(addMessageAC(props.dialogsData.newMessageBody))
    }

    const onNewMessageChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeMessageBodyAC(event.currentTarget.value))
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElement}
                <textarea
                    value={props.dialogsData.newMessageBody}
                    placeholder={"Enter a new message"}
                    onChange={onNewMessageChange}/>
                <button
                    onClick={onSendMessageClick}>Add message
                </button>
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>
    );
};

