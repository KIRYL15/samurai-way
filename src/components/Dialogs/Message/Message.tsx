import React from 'react';
import style from './../Dialogs.module.css'

type MessageType = {
    message: string
}

export const Message = (props: MessageType) => {
    console.log("props.message:", props.message)
    return (<div className={style.message}>{props.message}</div>)
}
