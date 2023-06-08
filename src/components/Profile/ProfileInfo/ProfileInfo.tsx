import React, {useState} from 'react';
import mainImg from "./voleibol-2.jpg";
import style from './ProfileInfo.module.css';
import {ContactType, ProfileType} from "../../../api/api";
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import PhotoProfile from './ava_2_anders.png'
import {ProfileDataFormReduxForm} from "./ProfileDataForm";

type ProfileInfoPropsType = {
    profile: null | ProfileType,
    status: string,
    updateStatus: (status: string) => void
    isOwner: boolean,
    savePhoto: (file: File) => void
    saveProfile: any
}
export type ContactsType = {
    contactTitle: string
    contactValue: string | null
}
export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                                profile,
                                                                status,
                                                                updateStatus,
                                                                isOwner,
                                                                savePhoto,
                                                                saveProfile
                                                            }) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = async (formData: any) => {
        await saveProfile(formData)
                setEditMode(false)
    }
    return (
        <div>
            <div><img src={mainImg} alt="Main image"/></div>
            <div className={style.descriptionBlock}>
                <img src={profile.photos?.small || PhotoProfile} alt="ava"/>
                <div>
                    {isOwner &&
                        <input
                            type="file"
                            onChange={onMainPhotoSelected}/>}
                </div>

                {/*   <div>
                    <div>Full Name: {profile.fullName}</div>
                    <div>
                        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
                    </div>
                    {profile.lookingForAJob &&
                        <div>
                            <b>My professional skills</b>: {profile.lookingForAJobDescription}
                        </div>}
                    <div>About Me: {profile.aboutMe}</div>
                </div>*/}
                {editMode
                    ? <ProfileDataFormReduxForm
                        onSubmit={onSubmit}
                        profile={profile}
                        initialValues={profile}/>
                    : <ProfileData
                        goToEditMode={() => {
                            setEditMode(true)
                        }}
                        isOwner={isOwner}
                        profile={profile}/>}
                {/*<ProfileData profile={profile}/>*/}

                {/*<div>UserId: {profile.userId}</div>
                <div>
                    <div>Full Name: {profile.fullName}</div>
                    <div>
                        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
                    </div>
                    {profile.lookingForAJob &&
                        <div>
                            <b>My professional skills</b>: {profile.lookingForAJobDescription}
                        </div>}
                    <div>About Me: {profile.aboutMe}</div>

                    <div>Contacts: {

                        profile.contacts &&
                        Object.keys(profile.contacts).map((key) => {

                            const contactsKey = profile?.contacts ? profile.contacts[key as keyof ContactType] : ''
                            return (
                                <Contact
                                    key={key}
                                    contactTitle={key}
                                    contactValue={contactsKey}/>
                            )
                        })}
                    </div>
                </div>*/}
            </div>
            <div>
                <ProfileStatusWithHooks
                    updateStatus={updateStatus}
                    status={status}/>
            </div>
        </div>
    );
};
export const Contact = ({contactTitle, contactValue}: ContactsType) => {
    return (
        <div className={style.contact}>
            <b>{contactTitle}</b>:{contactValue}
        </div>
    )
}
export const ProfileData = ({
                                profile,
                                isOwner,
                                goToEditMode
                            }: { goToEditMode: () => void, profile: ProfileType, isOwner: boolean }) => {

    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div>Full Name: {profile.fullName}</div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob && <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>}
            <div>About Me: {profile.aboutMe}</div>
            <div>Contacts: {

                profile.contacts && Object.keys(profile.contacts).map((key) => {
                    const contactsKey = profile?.contacts
                        ? profile.contacts[key as keyof ContactType]
                        : ''
                    return (
                        <Contact
                            key={key}
                            contactTitle={key}
                            contactValue={contactsKey}/>
                    )
                })}</div>
        </div>
    )
}
/*export const ProfileDataForm = ({profile}: { profile: ProfileType }) => {
    debugger
    return (
        <div>
Form

           {/!* <div>Full Name: {profile.fullName}</div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob && <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>}
            <div>About Me: {profile.aboutMe}</div>
            <div>Contacts: {

                profile.contacts && Object.keys(profile.contacts).map((key) => {
                    const contactsKey = profile?.contacts
                        ? profile.contacts[key as keyof ContactType]
                        : ''
                    return (
                        <Contact
                            key={key}
                            contactTitle={key}
                            contactValue={contactsKey}/>
                    )
                })}</div>*!/}
        </div>
    )
}*/
