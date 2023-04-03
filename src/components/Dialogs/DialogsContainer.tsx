import React from 'react';
import {Dialogs} from "./Dialogs";
import {StoreType,} from "../../redux/type";
import {addMessageAC, changeMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogsType = {store:StoreType}

export const DialogsContainer = (props: DialogsType) => {
    let state=props.store.getState().dialogsPage

    let onSendMessageClick = (newMessage:string) => {

        props.store.dispatch(addMessageAC(newMessage))
        console.log(newMessage)
    }
    const onNewMessageChange = (body:string) => {

        props.store.dispatch(changeMessageBodyAC(body))
        //console.log(body)
    }

    return <Dialogs
        changeMessageBody={onNewMessageChange}
        sendMessage={onSendMessageClick}
        dialogsPage={state}/>
};

