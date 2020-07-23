import {createStore, combineReducers} from "redux";
import counterReducer from "../reducers/counterReducer/counterReducer";
import dbReducer from "../reducers/dbReducer/dbReducer";


const rootReducer = combineReducers({
    counterValue: counterReducer,
    database: dbReducer
});

const store = createStore(rootReducer);

export default store;