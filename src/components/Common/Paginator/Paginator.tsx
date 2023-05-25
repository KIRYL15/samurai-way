import React, {useState} from 'react';
import s from "./Paginator.module.css";

type UsersPropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (page: number) => void,
}
export const Paginator: React.FC<UsersPropsType> = ({totalItemsCount, currentPage, pageSize, onPageChanged}) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    const portionSize = 10
    const portionCount = Math.ceil(pageCount / portionSize)//размер порции
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const ringhtPortionPageNumber = portionNumber * portionSize

    return (
            <div className={s.allPageType}>
                {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
                {pages.filter(p => p >= leftPortionPageNumber && p <= ringhtPortionPageNumber).map((p,index) => {
                    return (
                        <span key={index}
                            className={currentPage === p ? s.selectedPage : ''}
                            onClick={(e) => {onPageChanged(p)}}>{p}</span>
                    )
                })
                }
                {/*{pages.map((p, index) => {*/}
                {/*    return <span*/}
                {/*        key={index}*/}
                {/*        className={currentPage === p ? s.selectedPage : ''}*/}
                {/*        onClick={() => onPageChanged(p)}>{p}</span>*/}
                {/*})*/}
                {/*}*/}
                {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
            </div>

    )
}