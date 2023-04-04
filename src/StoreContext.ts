import React from "react";
import {Store} from "redux";
import {StoreType} from "./redux/type";

export const StoreContext = React.createContext({} as StoreType)

export type ProviderType={
    store:StoreType;
    children:React.ReactNode
}
/*
export const Provider=(props:ProviderType)=>{
    return(
        <StoreContext.Provider value={props.store}>
            {props.children}
            </StoreContext.Provider}
    )
}*/
