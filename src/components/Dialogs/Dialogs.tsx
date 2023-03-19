import React from 'react';
import style from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";

type DialogsType = {
    dialogsData: dialogsDataType[],
    messagesData: messagesDataType[]
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
    let onClickHandler = () => newMessageElement.current.value

    let newMessageElement: any = React.createRef()
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElement}
                <div><textarea ref={newMessageElement}/></div>
                <button onClick={onClickHandler}>Add message</button>
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>
    );
};

