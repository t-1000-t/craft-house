import React from "react";
import stylish from "../FooterCraft/FooterCraft.module.css";
import { connect } from "react-redux";

import { Icon } from "@iconify/react";
import closeSharp from "@iconify/icons-ion/close-sharp";
import callOutline from "@iconify/icons-ion/call-outline";
import ModalAnketa from "../../modals/ModalAnketa";
import anketAction from "../../redux/actions/anketAction/anketAction";
import MiddleFormAnket from "../MiddleFormAnket/MiddleFormAnket";

import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "glamor";

// toast.configure();

const FooterCraft = ({ note, onOpen, onOpenModal, onCloseModal, notify }) => {
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
        {onOpen && <ModalAnketa onClose={onCloseModal}>
          <div className={stylish.btnBox}>
            <button type="button" onClick={onCloseModal}><Icon icon={closeSharp} color="#dddee" width="35px"
                                                               height="35px">Close</Icon></button>
          </div>

          <MiddleFormAnket openNotify={notify} onClose={onCloseModal}/>
        </ModalAnketa>}
        <ToastContainer autoClose={2500} transition={Zoom}/>
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
    },
    notify: () => {
      toast("Отправлено. Желаем продуктивного дня. ", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterCraft);