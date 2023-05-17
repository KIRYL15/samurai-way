import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utilts/validators/validators";

type AddMessageFormPropsType = {
    onSubmit: (newMessageBody:any) => void
}
const maxLength50=maxLengthCreator(50)
export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name="newMessageBody"
                placeholder="Введи текст сообщения"
                validate={[required, maxLength50]}
            />
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<AddMessageFormPropsType>({form: "dialogAddMessageForm"})(AddMessageForm)