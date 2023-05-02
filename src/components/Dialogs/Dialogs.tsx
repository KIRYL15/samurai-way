import style from './Dialogs.module.css'
import React, {ChangeEvent} from 'react';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsElement = props.dialogsPage.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.dialogsPage.messages
        .map(m => <Message key={m.id} message={m.message}/>)

    let onSendMessageClick = () => {props.sendMessage()}
    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {props.changeMessageBody(event.currentTarget.value)}
    //if (!props.isAuth) return <Redirect to={'/login'}/>
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

