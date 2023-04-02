import {v1} from "uuid";
import {ActionsTypes, DialogsPageType} from "./type";

export const NEW_MESSAGE_BODY = "NEW-MESSAGE-BODY"
export const ADD_MESSAGE = "ADD_MESSAGE"
const initialState:DialogsPageType = {
    dialogs: [
        {id: v1(), name: 'Lui',},
        {id: v1(), name: 'Endi',},
        {id: v1(), name: 'Bob',},
        {id: v1(), name: 'Monika',},
    ],
    messages: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'How is your'},
        {id: v1(), message: 'Hi-hi'},
    ],
    newMessageBody: "New message"
}
export const DialogsReducer = (state= initialState, action: ActionsTypes):DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: v1(),
                message: state.newMessageBody,
            }
            state={...state, messages:[newMessage,...state.messages]}
            //state.messages.push(newMessage)
            state.newMessageBody = ""
            return state;
        case NEW_MESSAGE_BODY:
            state={...state, newMessageBody: action.body}
            //state.newMessageBody = action.body;
            return state;
        default:
            return state
    }
}

export const addMessageAC = (newMessageBody: string) => {
    debugger
    return {
        type: ADD_MESSAGE,
        newMessageBody
    } as const
}
export const changeMessageBodyAC = (body: string) => {
    debugger
    return {
        type: NEW_MESSAGE_BODY,
        body
    } as const
}