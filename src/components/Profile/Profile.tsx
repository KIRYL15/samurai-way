import React from 'react';
import mainImg from "./voleibol-2.jpg";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <img src={mainImg} alt="Main image"/>
            <div>ava + description</div> {/*Описание*/}
            <MyPosts/>
        </div>
    );
};