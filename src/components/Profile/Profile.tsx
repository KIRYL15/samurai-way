import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType, StoreType} from "../../redux/state";

type ProfileType = {
    store:StoreType,
    postData: PostsType[],
    addPost:(postMessage: string) => void,
    changeNewText:(newText: string)=>void
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postData={props.postData}
                store={props.store}
                addPost={props.addPost}
                changeNewText={props.changeNewText}
             />
        </div>
    );
};