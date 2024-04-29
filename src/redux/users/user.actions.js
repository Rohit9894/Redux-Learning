import axios from "axios"
import { GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCCESS } from "./user.types"

export const getData = () => async (dispatch) => {
    dispatch({
        type: GET_USER_LOADING
    })
    try {
        const res = await axios.get("https://reqres.in/api/users?page=2");

        dispatch({
            type: GET_USER_SUCCESS,
            payload: res?.data?.data
        })
    }
    catch (error) {
        dispatch({

            type: GET_USER_ERROR
        })
    }
}