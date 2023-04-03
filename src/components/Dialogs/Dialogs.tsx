import style from './Dialogs.module.css'
import React, {ChangeEvent} from 'react';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {DialogsPageType,} from "../../redux/type";

type DialogsType = {
    dialogsPage: DialogsPageType
    changeMessageBody: (body: string) => void
    sendMessage: (newMessage:string) => void
}

export const Dialogs = (props: DialogsType) => {
    let dialogsElement = props.dialogsPage.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.dialogsPage.messages
        .map(m => <Message key={m.id} message={m.message}/>)

    let onSendMessageClick = () => {
        //debugger
        let newMessage = props.dialogsPage.newMessageBody
        props.sendMessage(newMessage)
        //console.log(newMessage)

        //props.dispatch(addMessageAC(props.dialogsData.newMessageBody))
    }
    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        //debugger
        let body = event.currentTarget.value
        props.changeMessageBody(body)
        //console.log(body)

        //props.dispatch(changeMessageBodyAC(event.currentTarget.value))}
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElement}
                <textarea
                    value={props.dialogsPage.newMessageBody}
                    placeholder={"Введи текст сообщения"}
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

