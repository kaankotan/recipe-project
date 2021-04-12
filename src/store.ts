import { createStore } from "redux";
import { numberReducer } from "./redux/reducers/numberReducer";

export const store = createStore(numberReducer)