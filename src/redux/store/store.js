import {createStore, combineReducers} from "redux";
import counterReducer from "../reducers/counterReducer/counterReducer";


const rootReducer = combineReducers({
    counterValue: counterReducer
});

const store = createStore(rootReducer);

export default store;