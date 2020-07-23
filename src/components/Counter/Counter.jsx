import React from 'react';
import {connect} from 'react-redux';
import counterActions from "../../redux/actions/counterActions/counterActions";
import stylish from "./Counter.module.css";

const Counter = ({value, onIncrement, onDecrement}) => {
    return (
        <div className={stylish.container}>
            <button className={stylish.btnDecrement} onClick={onDecrement}>-</button>
            <div className={stylish.styleValue}>{value}</div>
            <button className={stylish.btnIncrement} onClick={onIncrement}>+</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        value: state.counterValue
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(counterActions.increment(20)),
        onDecrement: () => dispatch(counterActions.decrement(5))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);