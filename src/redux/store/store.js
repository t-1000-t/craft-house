import { createStore, combineReducers } from "redux";
import counterReducer from "../reducers/counterReducer/counterReducer";
import dbReducer from "../reducers/dbReducer/dbReducer";
import anketReducer from "../reducers/anketReducer/anketReducer";
import addNoteReducer from "../reducers/addNoteReducer/addNoteReducer";


const rootReducer = combineReducers({
  counterValue: counterReducer,
  database: dbReducer,
  anketStatus: anketReducer,
  notes: addNoteReducer
});

const store = createStore(rootReducer);

console.log(store.getState())

export default store;