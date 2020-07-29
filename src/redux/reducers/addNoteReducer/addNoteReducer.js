import type from "../../../services/type/type";

const addNoteReducer = (state = [], action) => {
  switch (action.type) {
    case type.ADD_NOTE:
      return action.payload
    default:
      return state;
  }
};

export default addNoteReducer;