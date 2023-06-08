import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../api/api";
type ProfilePropsType={
    status:string
    profile:null | ProfileType
    updateStatus:(status: string) => void
    isOwner:boolean
    savePhoto:(file:any)=>void
    saveProfile:(profile:ProfileType)=>void
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo
                status={props.status}
                profile={props.profile}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
                />
            <MyPostsContainer/>
        </div>
    );
};