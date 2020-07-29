import type from "../../../services/type/type";

const anketReducer = (state = false, action) => {
  switch (action.type) {
    case type.SHOW_MODAL_ANKET:
      return action.payload;
    case type.CLOSE_MODAL_ANKET:
      return action.payload;
    default:
      return state;
  }
};

export default anketReducer;