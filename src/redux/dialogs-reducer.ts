import {v1} from "uuid";
import {DialogsPageType} from "../api/api";
import {AppActionsTypes} from "./redux-store";

export type DialogsActionType = AddMessageAT
type AddMessageAT = ReturnType<typeof addMessageAC>
const initialState: DialogsPageType = {
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
    ]
}

export const DialogsReducer = (state = initialState, action: AppActionsTypes): DialogsPageType => {
    switch (action.type) {
        case "ADD_MESSAGE":
            const newMessage = {
                id: v1(),
                message: action.newMessageBody,
            }
            state = {...state, messages: [...state.messages, newMessage]}
            return state;
        default:
            return state
    }
}

export const addMessageAC = (newMessageBody: string) => {
    console.log('newMessageBody', newMessageBody)
    return {
        type: "ADD_MESSAGE",
        newMessageBody
    } as const
}
