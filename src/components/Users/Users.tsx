import React from 'react';
import axios from "axios";
import usersPhoto from "./ava_1_lui.png";
import {UsersTypeProps} from "./UsersContainer";


export const Users: React.FC<UsersTypeProps> = (props) => {
    let getUsers = () => {
    if (props.usersPage.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })

    }}

    return (
        <div>
            <button onClick={getUsers}>Get users</button>

            {
                props.usersPage.users.map(u => (
                    <div key={u.id}>
                        <span>
                            <div>
                            <img src={u.photos.small ? u.photos.small : usersPhoto}
                                 alt="avatarUser"/>
                        </div>
                            <div>
                                {u.followed ? <button onClick={() => {
                                        props.unFollow(u.id)
                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                  {/*  <div>{users.location.country}</div>
                                    <div>{users.location.city}</div>*/}
                                </span>
                        </span>
                    </div>
                ))
            }
        </div>
    );
};