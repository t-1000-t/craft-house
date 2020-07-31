import React from "react";
import {connect} from "react-redux";
import FormAnket from "../FormAnket/FormAnket";


const MiddleFormAnket = ({ notes, openNotify, onClose }) => {
  return (
    <FormAnket getNotes={notes} openNotify={openNotify} onClose={onClose}/>
  );
};

const mapStateToProps = (state) => {
  return { arrNote: state.notes };
};



export default connect(mapStateToProps)(MiddleFormAnket);