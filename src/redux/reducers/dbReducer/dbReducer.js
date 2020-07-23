import db from "../../../db/db.json";

const dbReducer = (state = [...db.notes]) => state;

export default dbReducer;