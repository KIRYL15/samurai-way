import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Dialogs.module.css'

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}
export const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Lui'},
        {id: 2, name: 'Endi'},
        {id: 3, name: 'Bob'},
        {id: 4, name: 'Monika'},
    ]
    let messagesData = [
        {message: 'Hello'},
        {message: 'How is your'},
        {message: 'Hi-hi'},
    ]
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsData.map((m) => {
                    return (
                        <div className={style.dialog + ' ' + style.active}>
                            <NavLink to={'/dialogs/' + m.id}>{m.name}</NavLink>
                        </div>
                    )
                })}
            </div>
            <div className={style.messages}>
                {messagesData.map((m) => {
                    return (
                        <div className={style.message}>{m.message}</div>
                    )
                })}
            </div>
        </div>
    );
};

