import db from "../../../db/db.json";

const dbReducer = (state = db.notes) => {
  console.log(state);
  return state;
}

export default dbReducer;