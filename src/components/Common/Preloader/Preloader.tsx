import React from 'react';
import loading from "../../Users/HourglassNoBk.gif";


export const Preloader = () => {
    return (
        <div>
            <img src={loading} alt="loading"/>
        </div>
    );
};