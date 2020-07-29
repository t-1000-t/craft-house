import React from "react";
import stylish from "../FooterCraft/FooterCraft.module.css";
import { connect } from "react-redux";

import { Icon } from "@iconify/react";
import callOutline from "@iconify/icons-ion/call-outline";
import ModalAnketa from "../../modals/ModalAnketa";
import anketAction from "../../redux/actions/anketAction/anketAction";


const FooterCraft = ({ note, onOpen, onOpenModal, onCloseModal }) => {
  return (
    <>
      {note.requisite && <footer className={stylish.footerCraft}>
        {note.requisite && <h2 className={stylish.fontRequisite}>
          {note.requisite}
        </h2>}
        <div className={stylish.boxMiddleContact}>
          <div className={stylish.contactPhone}>
            {note.requisiteText && <p className={stylish.textRequisite}>{note.requisiteText}</p>}
            {note.requisiteText &&
            <p className={stylish.textRequisiteNumber}><Icon icon={callOutline} color="#77bb42"/> 1234567890123</p>}
            {note.requisiteText &&
            <p className={stylish.textRequisiteNumber}><Icon icon={callOutline} color="#77bb42"/> 1234567890123</p>}
            {note.requisiteText &&
            <p className={stylish.textRequisiteNumber}><Icon icon={callOutline} color="#77bb42"/> 1234567890123</p>}
          </div>
          <div className={stylish.contactPhone}>
            {note.requisiteText &&
            <p className={stylish.textRequisiteAnket}>Также просьба заполнить анкету, с Вами обязательно свяжутся. </p>}
          </div>
        </div>
        <button className={stylish.footerBtnFont} onClick={onOpenModal}>Заполнить анкету</button>
        {onOpen && <ModalAnketa onClose={onCloseModal}><p>ddfddfdfdddfdfd</p>
          <button onClick={onCloseModal}>Close</button>
        </ModalAnketa>}
      </footer>}
    </>
  );
};

const mapStateToProps = (state) => {
  return { onOpen: state.anketStatus };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenModal: () => {
      dispatch(anketAction.showModal());
    },
    onCloseModal: () => {
      dispatch(anketAction.closeModal());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterCraft);