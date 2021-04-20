import { createStore } from "redux";
import reducers from './redux/reducers';

export const store = createStore(reducers)