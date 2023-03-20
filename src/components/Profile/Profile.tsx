import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType, StoreType} from "../../redux/store";

type ProfileType = {
    store:StoreType,
    postData: PostsType[],
    //addPost:(postMessage: string) => void,
    //changeNewText:(newText: string)=>void,
    dispatch:(action: ActionsTypes)=>void
}

export const Profile:React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.dispatch}
                postData={props.postData}
                store={props.store}
                //addPost={props.addPost}
                //changeNewText={props.changeNewText}
             />
        </div>
    );
};