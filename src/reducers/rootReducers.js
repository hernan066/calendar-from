import { combineReducers } from "redux";
import { calendaReducer } from "./calendaReducer";
import {uiReducer} from "./uiReducer";


export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendaReducer,
});