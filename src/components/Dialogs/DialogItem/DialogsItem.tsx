import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './../Dialogs.module.css'
import ava_dialogs_1 from "../avatar_for_message_2.png";

type DialogItemType = {
    id: string
    name: string
}

export const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={style.dialog + ' ' + style.active}>
            <img src={ava_dialogs_1} alt="ava_dialogs_1"/>
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
}
