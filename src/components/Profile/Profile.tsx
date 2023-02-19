import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

type ProfileType = {
    postData: PostsType[],
    addPost:(postMessage: string) => void
}

export const Profile = (props: ProfileType) => {
    // let postData = [
    //     {numberOfLikes: 2, postTitle: 'Hi Friends'},
    //     {numberOfLikes: 33, postTitle: 'Hello World'},
    //     {numberOfLikes: 34, postTitle: 'Peace for everyone'},
    //     {numberOfLikes: 6, postTitle: 'Summer is coming'},
    // ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postData={props.postData}
                addPost={props.addPost}/>
        </div>
    );
};