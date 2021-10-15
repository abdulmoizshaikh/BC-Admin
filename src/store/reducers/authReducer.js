import { actionTypes } from "../common/types";

const initialState = {
    user: {
        // email: "",
        userIsLoggedIn: false,
        wareHouseAddress: {}
    },
}


export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                user: {
                    userIsLoggedIn: true,
                    ...payload
                }
            }

        case actionTypes.SIGNUP:
            return {
                ...state,
                user: {
                    userIsLoggedIn: true,
                    ...payload
                }
            }

        case actionTypes.SET_WAREHOUSE_ADDRESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    wareHouseAddress: payload
                }
            }

        // case actionTypes.GET_ME:
        //     return {
        //         ...state,
        //         user: {
        //             email: payload.email,
        //             userIsLoggedIn: true
        //         }
        //     }

        default:
            return state
    }
}
