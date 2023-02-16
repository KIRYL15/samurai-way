import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Dialogs.module.css'

type DialogsItemType = {
    id: number
    name: string
}
type MessageType = {
    message: string
}
const DialogItem = (props: DialogsItemType) => {
    let path = '/dialogs/' + props.id
    return <div className={style.dialog + ' ' + style.active}>
        <NavLink to={path}>{props.name}</NavLink></div>
}
const Message = (props: MessageType) => {
    return (
        <div className={style.message}>{props.message}</div>

    )

}
export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem id={1} name={'Lui'}/>
                <DialogItem id={2} name={'Endi'}/>
                <DialogItem id={3} name={'Bob'}/>
                <DialogItem id={4} name={'Monika'}/>
            </div>
            <div className={style.messages}>
                <Message message={'Hello'}/>
                <Message message={'How is your'}/>
                <Message message={'Hi-hi'}/>
            </div>
        </div>
    );
};

