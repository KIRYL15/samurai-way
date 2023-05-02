import React from 'react';
import {Dialogs} from "./Dialogs";
import {addMessageAC, changeMessageBodyAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {DialogsPageType} from "../../redux/type";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    dialogsPage: DialogsPageType
    //isAuth:boolean

}
type mapDispatchToPropsType = {
    changeMessageBody: (body: string) => void,
    sendMessage: () => void
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        // isAuth:state.auth.isAuth
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

//export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default  compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)



