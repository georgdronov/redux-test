import { createStore } from "redux";
import { counerReducer } from "../reducer/CounterReducer";

const store = createStore(counerReducer);

export default store;
