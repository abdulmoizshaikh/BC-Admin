import { actionTypes } from "../common";

import { combineReducers } from 'redux';
// reducers
import { themeOptionsReducer } from "./ThemeOptions";
import { authReducer } from "./authReducer";


const appReducer = combineReducers({
    ThemeOptions: themeOptionsReducer,
    auth: authReducer,
})

const rootReducer = (state, action) => {
    if (action.type === actionTypes.LOGOUT) {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer;