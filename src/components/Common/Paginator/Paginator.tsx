import React from 'react';
import s from "./Paginator.module.css";


type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (page: number) => void,
}
export const Paginator: React.FC<UsersPropsType> = ({totalUsersCount, currentPage, pageSize, onPageChanged}) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize)
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
                        className={currentPage === p ? s.selectedPage : ''}
                        onClick={() => onPageChanged(p)}>{p}</span>
                })
            }
            </div>
        </div>

    )
}