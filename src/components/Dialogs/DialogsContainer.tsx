import React from 'react';
import {Dialogs} from "./Dialogs";
import {addMessageAC, changeMessageBodyAC} from "../../redux/dialogs-reducer";
import {StoreContext} from '../../StoreContext';

// type DialogsType = {store:StoreType}

export const DialogsContainer = (/*props: DialogsType*/) => {
    // let state = props.store.getState().dialogsPage
    //
    // let onSendMessageClick = (newMessage: string) => {
    //
    //     props.store.dispatch(addMessageAC(newMessage))
    //     console.log(newMessage)
    // }
    // const onNewMessageChange = (body: string) => {
    //
    //     props.store.dispatch(changeMessageBodyAC(body))
    //     //console.log(body)
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage
                    let onSendMessageClick = (newMessage: string) => {
                        store.dispatch(addMessageAC(newMessage))
                        console.log(newMessage)
                    }
                    const onNewMessageChange = (body: string) => {
                        store.dispatch(changeMessageBodyAC(body))
                    }
                    return (
                        <Dialogs
                            changeMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={state}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
};

