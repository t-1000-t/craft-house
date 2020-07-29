import { createStore, combineReducers } from "redux";
import counterReducer from "../reducers/counterReducer/counterReducer";
import dbReducer from "../reducers/dbReducer/dbReducer";
import anketReducer from "../reducers/anketReducer/anketReducer";


const rootReducer = combineReducers({
  counterValue: counterReducer,
  database: dbReducer,
  anketStatus: anketReducer
});

const store = createStore(rootReducer);

console.log(store.getState())

export default store;