import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";


export const Profile: React.FC<ProfileContainerPropsType> = (props) => {
    return (
        <div>
            <ProfileInfo
                status={props.status}
                profile={props.profile}
                updateStatus={props.updateStatus}
                />
            <MyPostsContainer/>
        </div>
    );
};