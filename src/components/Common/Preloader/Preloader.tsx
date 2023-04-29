import React from 'react';
import loading from "../../Users/HourglassNoBk.gif";

type PreloaderPropsType = {
    isFetching: boolean
}
export const Preloader = (props: PreloaderPropsType) => {
    return (
        <div>
            {props.isFetching
                ? <img src={loading} alt="loading"/>
                : null}
        </div>
    );
};