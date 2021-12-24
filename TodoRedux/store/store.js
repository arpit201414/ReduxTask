import { createStore } from "redux";
import { todoReducers } from "./reducers";

export const store = createStore(todoReducers)