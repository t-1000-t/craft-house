import actionTypes from "../../../services/type/type";

const showModal = () => {
  return {
    type: actionTypes.SHOW_MODAL_ANKET,
    payload: true
  };
};

const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL_ANKET,
    payload: false
  };
};

export default { showModal, closeModal };