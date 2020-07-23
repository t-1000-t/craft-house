const increment = (value) => {
    return {
        type: "INCREMENT",
        payload: {
            value: value
        }
    }
};

const decrement = (value) => {
    return {
        type: "DECREMENT",
        payload: {
            value: value
        }
    }
};

export default {increment, decrement};