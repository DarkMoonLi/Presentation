import { render } from "react-dom";
import { createStore } from "redux";
import initialState from "./initialState";
import reducer from "./reducers/mainReducer"

const store = createStore(reducer, initialState);
store.subscribe(() => render)

export default store;