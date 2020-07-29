import db from "../../../db/db.json";

const dbReducer = (state = db.notes) => {
  return state;
}

export default dbReducer;