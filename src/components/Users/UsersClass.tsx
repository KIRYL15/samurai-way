import React from 'react';
import usersPhotoClass from "./ava_2_anders.png";
import axios from "axios";
import {UsersTypeProps} from "./UsersContainer";
import s from "./Users.module.css";

export class UsersClass extends React.Component<UsersTypeProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            })
    }
    onPageChanged = (pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }
    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
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
                            className={this.props.currentPage === p ? s.selectedPage : ''}
                            onClick={()=>this.onPageChanged(p)}>{p}</span>
                    })
                }
                </div>
                {this.props.usersPage.users.map(u => (
                    <div key={u.id}>
                        <span>
                            <img src={u.photos.small != null ? u.photos.small : usersPhotoClass}
                                 alt="avatarUser"/>
                            <div>
                                {u.followed ?
                                    <button onClick={() => {
                                        this.props.unFollow(u.id)
                                    }}>UnFollow</button> :
                                    <button onClick={() => {
                                        this.props.follow(u.id)
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
        )
    }
}

/* getUsers = () => {
     if (this.props.usersPage.users.length === 0) {
         axios.get("https://social-network.samuraijs.com/api/1.0/users")
             .then(response => {
                 this.props.setUsers(response.data.items);
             })
     }
 }*/
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
