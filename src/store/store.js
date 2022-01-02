import { createStore } from "redux";

const store = createStore(reducer);

export default store;

function reducer(state, action) {
    action(state)
}