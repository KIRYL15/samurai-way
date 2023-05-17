import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilts/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

type AddNewPostFormPropsType = {
    onSubmit: (newPostText: any) => void
}
const maxLength10 = maxLengthCreator(10)

export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"}
                       component={Textarea}
                       placeholder={"Post message"}
                       validate={[required, maxLength10]}
                />
            </div>
            {/*<textarea*/}
            {/*    placeholder={"Напиши новый пост"}*/}
            {/*    value={props.newPostText}*/}
            {/*    onChange={props.onPostChange}/>*/}
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};
export const AddNewPostFormRedux = reduxForm<AddNewPostFormPropsType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)