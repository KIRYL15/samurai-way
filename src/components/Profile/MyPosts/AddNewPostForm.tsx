import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type AddNewPostFormPropsType = {
    onSubmit: (newPostText: any) => void
}
export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText"
                       component="textarea"
                       placeholder="Post message"
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
export const AddNewPostFormRedux= reduxForm<AddNewPostFormPropsType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)