import React from 'react';
import {UsersType} from "../../api/api";
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (page: number) => void,
    usersPage: UsersType,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    followingInProgress: number[]
}
export const Users: React.FC<UsersPropsType> = ({
                                                    totalUsersCount,
                                                    usersPage,
                                                    followingInProgress,
                                                    pageSize,
                                                    onPageChanged,
                                                    currentPage,
                                                    follow,
                                                    unFollow
                                                }) => {
    return (
        <div>
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}/>
            {usersPage.users.map(u => (
                <User
                    key={u.id}
                    user={u}
                    follow={follow}
                    unFollow={unFollow}
                    followingInProgress={followingInProgress}/>
            ))}
        </div>
    );
}