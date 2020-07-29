import type from "../../../services/type/type";

const addNoteAction = (obj) => {
  return {
    type: type.ADD_NOTE,
    payload: obj
  };
};

export default { addNoteAction };