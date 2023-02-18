import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AppStateType} from "../../redux/state";

type ProfileType = {
    postData: postDataType[]
}
type postDataType = {
    id: number,
    numberOfLikes: number,
    postTitle: string,
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
            <MyPosts postData={props.postData}/>
        </div>
    );
};