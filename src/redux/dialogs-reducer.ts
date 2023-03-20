import {ActionsTypes, DialogsPageType} from "./store";

export const NEW_MESSAGE_BODY = "NEW-MESSAGE-BODY"
export const ADD_MESSAGE = "ADD_MESSAGE"
const initialState = {
    dialogs: [
        {id: 1, name: 'Lui',},
        {id: 2, name: 'Endi',},
        {id: 3, name: 'Bob',},
        {id: 4, name: 'Monika',},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How is your'},
        {id: 3, message: 'Hi-hi'},
    ],
    newMessageBody: "New message"
}
export const DialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD_MESSAGE":
            const newMessage = {
                id: 6,
                message: action.newMessageBody,
            }
            state.newMessageBody = ""
            state.messages.push(newMessage)
            return state;
        case "NEW-MESSAGE-BODY":
            state.newMessageBody = action.body;
            return state;
        default:
            return state
    }
}

export const addMessageAC = (newMessageBody: string) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody: newMessageBody
    } as const
}
export const changeMessageBodyAC = (body: string) => {
    return {
        type: NEW_MESSAGE_BODY,
        body: body
    } as const
}