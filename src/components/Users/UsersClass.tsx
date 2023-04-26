import React from 'react';
import usersPhotoClass from "./ava_2_anders.png";
import axios from "axios";
import {UserType} from "../../redux/type";
import {UsersTypeProps} from "./UsersContainer";

export class UsersClass extends React.Component<UsersTypeProps> {
    getUsers = () => {
        if (this.props.usersPage.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items);
                })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get users</button>
                {
                    this.props.usersPage.users.map((users: UserType) => (
                        <div key={users.id}>
                        <span>
                            <div>
                            <img src={users.photos.small ? users.photos.small : usersPhotoClass}
                                 alt="avatarUser"/>
                        </div>
                            <div>
                                {users.followed ? <button onClick={() => {
                                        this.props.unFollow(users.id)
                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(users.id)
                                    }}>Follow</button>}
                            </div>
                        </span>
                            <span>
                                <span>
                                    <div>{users.name}</div>
                                    <div>{users.status}</div>
                                </span>
                                <span>
                                  {/*<div>{users.location.country}</div>
                                    <div>{users.location.city}</div>*/}
                                      </span>
                                      </span>
                        </div>
                    ))
                }
            </div>
        )
    }
}

/*
/!*
export const Users: React.FC<UsersTypeProps> = (props) => {
    if (props.usersPage.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }
    return (
        <div>
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
                                  {/!*  <div>{users.location.country}</div>
                                    <div>{users.location.city}</div>*!/}
                                </span>
                        </span>
                    </div>
                ))
            }
        </div>
    );
};*!/
*/
