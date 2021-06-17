import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk'
import imageReducer from "./imageReducer";
import { saveState } from "./localStorage";
import { loadState } from "./localStorage";



const persistedState = loadState()

const rootReducer = combineReducers({
    imageReducer
})


export const store = createStore(
    rootReducer,
    persistedState,
    compose( applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

store.subscribe(() => {
    saveState(store.getState());
});