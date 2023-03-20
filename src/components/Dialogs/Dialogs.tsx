import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {ActionsTypes, StoreType} from "../../redux/store";
import {addMessageAC, changeMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogsType = {
    dialogsData: dialogsDataType[],
    messagesData: messagesDataType[],
    store:StoreType,
    dispatch: (action: ActionsTypes) => void
}
type dialogsDataType = {
    id: number,
    name: string
}
type messagesDataType = {
    message: string
}
export const Dialogs = (props: DialogsType) => {

    let dialogsElement = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.messagesData.map(m => <Message message={m.message}/>)
    let onClickHandler = () => {
        props.dispatch(addMessageAC(props.store._state.dialogsPage.newMessageBody))
    }

    const onChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeMessageBodyAC(event.currentTarget.value))
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElement}
                <textarea
                    value={props.store._state.dialogsPage.newMessageBody}
                    placeholder={"Enter a new message"}
                    onChange={onChangeHandler}
                />
                <button
                    onClick={onClickHandler}>Add message
                </button>
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>
    );
};

