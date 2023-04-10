import React from 'react';
import {UsersTypeProps} from "./UsersContainer";
import {v1} from "uuid";
import ava_1 from "./ava_1_lui.png";
import ava_2 from "./ava_2_anders.png";
import ava_3 from "./ava_6.png";
import ava_4 from "./ava_3 .png";


export const Users: React.FC<UsersTypeProps> = (props) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
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
        ])
    }
    return (
        <div>
            {
                props.usersPage.users.map((users) => (
                    <div key={users.id}>
                        <span>
                            <div>
                            <img src={users.urlPhoto} alt="avatarUser"/>
                        </div>
                            <div>
                                {users.followed ? <button onClick={() => {props.unFollow(users.id)}}>UnFollow</button>
                                    : <button onClick={() => {props.follow(users.id)}}>Follow</button>}
                            </div>
                        </span>
                        <span>
                                <span>
                                    <div>{users.fullName}</div>
                                    <div>{users.status}</div>
                                </span>
                                <span>
                                    <div>{users.location.country}</div>
                                    <div>{users.location.city}</div>
                                </span>
                        </span>
                    </div>
                ))
            }
        </div>
    );
};