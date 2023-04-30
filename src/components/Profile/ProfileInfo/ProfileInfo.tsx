import React from 'react';
import mainImg from "./voleibol-2.jpg";
import style from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/type";
import {Preloader} from "../../Common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: null | ProfileType
}
export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={mainImg} alt="Main image"/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.small != null ? props.profile.photos.small : ''} alt="ava"/>
                <div>UserId: {props.profile.userId}</div>
                <div>About Me: {props.profile.aboutMe}</div>
                <div>Full Nmae: {props.profile.fullName}</div>
            </div>
        </div>
    );
};
