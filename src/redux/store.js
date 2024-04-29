import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./counter/counter.reducer";
import { userReducer } from "./users/user.reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    counter: authReducer,
    user: userReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
