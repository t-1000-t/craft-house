import actionTypes from "../../../services/type/type";

const showModal = (value) => {
      return {
        type: actionTypes.SHOW_MODAL_ANKET,
        payload: {
          isShowModal: true
        }
      }
};

const closeModal = (value) => {
  return {
    type: actionTypes.CLOSE_MODAL_ANKET,
    payload: {
      isShowModal: false
    }
  }
};