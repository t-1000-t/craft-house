import React, { Component, createRef } from "react";
import { createPortal } from "react-dom";


import stylish from "./ModalAnketa.module.css";

const MODAL_ANKETA = document.getElementById("modal-anketa-page");

class ModalAnketa extends Component {

  backdropeRef = createRef();

  componentDidMount() {
    window.addEventListener("keydown", this.handlerKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handlerKeyPress);
  }

  handlerKeyPress = (e) => {
    if (e.code !== "Escape") {
      return;
    }

    this.props.onClose();
  };

  handlerBackDropClick = (e) => {
    if (this.backdropeRef.current && e.target !== this.backdropeRef.current) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div
        className={stylish.backdrop}
        ref={this.backdropeRef}
        onClick={this.handlerBackDropClick}
        role="presentation"
      >
        <div className={stylish.modal}>{children}</div>
      </div>,
      MODAL_ANKETA
    );
  }
}

export default ModalAnketa;