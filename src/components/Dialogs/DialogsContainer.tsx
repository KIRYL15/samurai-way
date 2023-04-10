import React from 'react';
import {Dialogs} from "./Dialogs";
import {addMessageAC, changeMessageBodyAC} from "../../redux/dialogs-reducer";
//import {StoreContext} from '../../StoreContext';
import {connect} from "react-redux";
import {DialogsPageType} from "../../redux/type";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

// type DialogsType = {store:StoreType}

// export const DialogsContainer = (/*props: DialogsType*/) => {
//     // let state = props.store.getState().dialogsPage
//     //
//     // let onSendMessageClick = (newMessage: string) => {
//     //
//     //     props.store.dispatch(addMessageAC(newMessage))
//     //     console.log(newMessage)
//     // }
//     // const onNewMessageChange = (body: string) => {
//     //
//     //     props.store.dispatch(changeMessageBodyAC(body))
//     //     //console.log(body)
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage
//                     let onSendMessageClick = () => {
//                         store.dispatch(addMessageAC())
//                     }
//                     const onNewMessageChange = (body: string) => {
//                         store.dispatch(changeMessageBodyAC(body))
//                     }
//                     return (
//                         <Dialogs
//                             changeMessageBody={onNewMessageChange}
//                             sendMessage={onSendMessageClick}
//                             dialogsPage={state}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// };
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type mapDispatchToPropsType = {
    changeMessageBody: (body: string) => void,
    sendMessage: () => void
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        changeMessageBody: (body: string) => {
            dispatch(changeMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(addMessageAC())
        },
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



