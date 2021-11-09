import { combineReducers } from "redux";
import { calendaReducer } from "./calendaReducer";
import {uiReducer} from "./uiReducer";
import {authReducer} from "./authReducer";


export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendaReducer,
    auth: authReducer,
});