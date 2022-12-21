import dashboardReducer from "../reducers/dashboardReducer/dashboardReducer";
import { IInitialState } from "./initialState.types";

export const initialState:IInitialState = {
    dashboardState: dashboardReducer.INITIAL_STATE
}