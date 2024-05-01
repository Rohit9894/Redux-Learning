import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counter.slice"
import todoReducer from "./Todo/todo.slice"
import fetchDataReducer from "./fetchData/fetchData.slice"
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        fetchData: fetchDataReducer
    }
})