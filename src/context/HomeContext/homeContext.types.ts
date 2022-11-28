import { Dispatch, PropsWithChildren } from "react";
import { IHomeAction } from "../../reducers/homeReducer";

export interface IHomeContextProps extends PropsWithChildren{}

export interface IHomeState {
    searchData: any,
    searchFormData: {
        from:string,
        to:string,
        adults:number,
        children:number,
        date:Date
    }
}

export interface IHomeContext {
    homeState:IHomeState,
    homeDispatch: Dispatch<IHomeAction>
}