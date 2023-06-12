import React from 'react';
import {NavLink} from 'react-router-dom';
import usersPhotoClass from "./ava_2_anders.png";
import style from "./Users.module.css";

type UsersPropsType = {
    user: any
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    followingInProgress: number[]
}
export const User: React.FC<UsersPropsType> = ({user, followingInProgress, follow, unFollow
                                               }) => {
    return (
        <div>
                        <span>
                            <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : usersPhotoClass} alt="avatarUser"/>
                            </NavLink>
                            </div>
                            <div >
                                {user.followed
                                    ? <button className={style.followUnfollow} disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {unFollow(user.id)}}>UnFollow</button>
                                    : <button className={style.followUnfollow} disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {follow(user.id)}}>Follow</button>}
                            </div>
                        </span>

                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                  <div>{"user.location.country"}</div>
                                    <div>{"user.location.city"}</div>
                                </span>

        </div>


    );
}