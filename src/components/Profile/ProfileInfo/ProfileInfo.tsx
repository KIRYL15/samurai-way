import React from 'react';
import mainImg from "./voleibol-2.jpg";
import style from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/type";

type ProfileInfoPropsType={
    profile: ProfileType
}
export const ProfileInfo:React.FC<ProfileInfoPropsType> = (props) => {

    return (
        <div>
            <div>
                <img src={mainImg} alt="Main image"/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} alt="222"/>
                Profile Info
            </div>
            {/*Описание*/}
        </div>
    );
};
