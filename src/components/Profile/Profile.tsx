import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType,} from "../../redux/type";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileType = {
    store:StoreType
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};