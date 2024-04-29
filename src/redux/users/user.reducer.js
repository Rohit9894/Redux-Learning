import { GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCCESS } from "./user.types"

const userState = {
    user: [],
    loading: false,
    error: false

}

export const userReducer = (state = userState, { type, payload }) => {
    switch (type) {
        case GET_USER_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                user: payload,
                loading: false,
            }
        }
        case GET_USER_ERROR: {
            return {
                ...state,
                error: true,
                loading: false,
            }
        }
        default: {
            return state;
        }
    }
}