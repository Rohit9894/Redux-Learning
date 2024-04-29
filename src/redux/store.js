import { legacy_createStore } from "redux";
import { authReducer } from "./counter/counter.reducer";

export const store = legacy_createStore(authReducer)
