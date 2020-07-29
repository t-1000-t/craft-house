import React from "react";
import {connect} from "react-redux";
import FormAnket from "../FormAnket/FormAnket";


const MiddleFormAnket = ({ notes }) => {
  return (
    <FormAnket getNotes={notes} />
  );
};

const mapStateToProps = (state) => {
  return { arrNote: state.notes };
};



export default connect(mapStateToProps)(MiddleFormAnket);