import React from 'react';
import style from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsElement = props.dialogsPage.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.dialogsPage.messages
        .map(m => <Message key={m.id} message={m.message}/>)

    const addNewMessage = (values:any) => {
        props.sendMessage(values.newMessageBody)
    }

    //if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>{dialogsElement}</div>
            <div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
            <div className={style.messages}>{messagesElement}</div>
        </div>
    );
};
