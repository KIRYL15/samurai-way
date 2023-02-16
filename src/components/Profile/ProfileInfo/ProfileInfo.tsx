import React from 'react';
import mainImg from "./voleibol-2.jpg";
import style from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={mainImg} alt="Main image"/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
            {/*Описание*/}
        </div>
    );
};
