import React from 'react';
import {UsersTypeProps} from "./UsersContainer";
import axios from "axios";
import usersPhoto from "./ava_1_lui.png";


export const Users: React.FC<UsersTypeProps> = (props) => {
    let getUsers = () => {
    if (props.usersPage.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })

    }}
    /*props.setUsers([
            {
                id: v1(),
                urlPhoto: ava_1,
                followed: true,
                fullName: "Dmitry",
                status: 'I am boss',
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: v1(),
                urlPhoto: ava_2,
                followed: false,
                fullName: "Igor",
                status: 'I am user',
                location: {city: "Mogilev", country: "Belarus"}
            },
            {
                id: v1(),
                urlPhoto: ava_3,
                followed: false,
                fullName: "Nastya",
                status: 'I am lady',
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: v1(),
                urlPhoto: ava_4,
                followed: true,
                fullName: "Nikolay",
                status: 'I am boss too',
                location: {city: "Oslo", country: "Norway"}
            },
        ])*/
    return (
        <div>
            <button onClick={getUsers}>Get users</button>

            {
                props.usersPage.users.map((users) => (
                    <div key={users.id}>
                        <span>
                            <div>
                            <img src={users.photos.small ? users.photos.small : usersPhoto}
                                 alt="avatarUser"/>
                        </div>
                            <div>
                                {users.followed ? <button onClick={() => {
                                        props.unFollow(users.id)
                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        props.follow(users.id)
                                    }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                                <span>
                                    <div>{users.name}</div>
                                    <div>{users.status}</div>
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