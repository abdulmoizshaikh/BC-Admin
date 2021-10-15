import { actionTypes, apiCreator } from "../common";


export const login = (body) => dispatch => {
    return apiCreator(
        { method: 'POST', endPoint: '/vendor/login', body: body },
        actionTypes.LOGIN,
        dispatch)
}


export const signup = (body) => dispatch => {
    return apiCreator(
        { method: 'POST', endPoint: '/vendor/register', body: body },
        actionTypes.SIGNUP,
        dispatch)
}

export const setWareHouseAddress = (userId, body) => dispatch => {
    console.log("userId", userId)
    return apiCreator(
        { method: 'POST', endPoint: `/vendor/update/${userId}`, body: body },
        actionTypes.SET_WAREHOUSE_ADDRESS,
        dispatch)
}

// import * as types from './constants';


// export const logout = () => ({
//     type: types.LOGOUT,
// })
