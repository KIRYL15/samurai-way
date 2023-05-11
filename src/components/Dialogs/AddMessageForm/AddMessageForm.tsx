import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type AddMessageFormPropsType = {
    onSubmit: (newMessageBody:any) => void
}
export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component="textarea"
                name="newMessageBody"
                placeholder="Введи текст сообщения"/>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<AddMessageFormPropsType>({form: "dialogAddMessageForm"})(AddMessageForm)