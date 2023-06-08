import React from 'react';
import style from './ProfileInfo.module.css';

import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../api/api";
import {CreateField, Input, Textarea} from "../../Common/FormsControls/FormsControls";

type ProfileDataFormPropsType = {
    fullName: string
    lookingForAJob: boolean
    aboutMe: string
    lookingForAJobDescription: string
}
type PropsType = {
    profile: ProfileType
}
const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormPropsType, PropsType> & PropsType> = ({
                                                                                                           profile,
                                                                                                           error,
                                                                                                           handleSubmit
                                                                                                       }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {error && <div className={style.formError}>{error}</div>}

            <div>
                <b>Full Name</b>: {CreateField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {CreateField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>My professional
                    skills</b>:{CreateField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About Me</b>:{CreateField("About Me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>:{profile.contacts && Object.keys(profile.contacts).map(key => {
                return <div key={key} className={style.contact}>
                    <b>
                        {key}:{CreateField(key, "contacts." + key, [], Input)}
                    </b>
                </div>
            })}
            </div>
            {/*<div>Contacts: {*/}
            {/*    profile.contacts && Object.keys(profile.contacts).map((key) => {*/}
            {/*        const contactsKey = profile?.contacts*/}
            {/*            ? profile.contacts[key as keyof ContactType]*/}
            {/*            : ''*/}
            {/*        return (*/}
            {/*            <Contact*/}
            {/*                key={key}*/}
            {/*                contactTitle={key}*/}
            {/*                contactValue={contactsKey}/>*/}
            {/*        )*/}
            {/*    })}</div>*/}
        </form>
    );
};
export const ProfileDataFormReduxForm = reduxForm<ProfileDataFormPropsType, PropsType>({form: 'edit-profile'})(ProfileDataForm)