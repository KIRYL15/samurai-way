import React from 'react';
import axios from "axios";
import s from "./Users.module.css";
import {NavLink} from 'react-router-dom';
import {UsersType} from "../../redux/type";
import usersPhotoClass from "./ava_2_anders.png";
import {userAPI} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (page: number) => void,
    usersPage: UsersType,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void
}
export const Users: React.FC<UsersPropsType> = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (

        <div>
            <div className={s.allPageType}>{
                pages.map((p, index) => {
                    return <span
                        key={index}
                        className={props.currentPage === p ? s.selectedPage : ''}
                        onClick={() => props.onPageChanged(p)}>{p}</span>
                })
            }
            </div>
            {props.usersPage.users.map(u => (
                <div key={u.id}>
                        <span>
                            <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : usersPhotoClass}
                                     alt="avatarUser"/>
                            </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        userAPI.unFollow(u.id)
                                            .then(data => {
                                                if (data.resultCode == 0) {
                                                    props.unFollow(u.id)
                                                }
                                            })
                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        userAPI.follow(u.id)
                                            .then(data => {
                                                if (data.resultCode == 0) {
                                                    props.follow(u.id)
                                                }
                                            })
                                    }}>Follow</button>}
                            </div>
                        </span>
                    <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                  <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </span>
                    </span>
                </div>
            ))
            }
        </div>
    );
}