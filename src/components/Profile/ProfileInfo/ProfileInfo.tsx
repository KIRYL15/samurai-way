import React from 'react';
import mainImg from "./voleibol-2.jpg";
import style from './ProfileInfo.module.css';
import {ProfileType} from "../../../api/api";
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: null | ProfileType,
    status: string,
    updateStatus: (status: string) => void
}
export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus}) => {
    if (!profile) { return <Preloader/>}
    return (
        <div>
            <div><img src={mainImg} alt="Main image"/></div>
            <div className={style.descriptionBlock}>
                <img src={profile.photos.small != null ? profile.photos.small : ''} alt="ava"/>
                <div>UserId: {profile.userId}</div>
                <div>About Me: {profile.aboutMe}</div>
                <div>Full Name: {profile.fullName}</div>
                <div>Status: {status}</div>
            </div>
            <div>
                <ProfileStatusWithHooks
                    updateStatus={updateStatus}
                    status={status}/>
            </div>
        </div>
    );
};
