import { render } from "react-dom";
import { createStore, Store } from "redux";
import { Application } from "../scripts/structure";
import initialState from "./initialState";
import reducer from "./reducers/mainReducer"

const store: Store<Application> = createStore(reducer, initialState);
store.subscribe(() => render)

export default store;