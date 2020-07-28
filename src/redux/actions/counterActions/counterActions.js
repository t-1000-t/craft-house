import actionTypes from "../../../services/type/type";

const increment = (value) => {
    return {
        type: actionTypes.INCREMENT,
        payload: {
            value: value
        }
    }
};

const decrement = (value) => {
    return {
        type: actionTypes.DECREMENT,
        payload: {
            value: value
        }
    }
};



export default {increment, decrement};