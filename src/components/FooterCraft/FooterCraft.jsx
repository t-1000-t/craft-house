import React from "react";
import stylish from "../FooterCraft/FooterCraft.module.css";

import { Icon } from "@iconify/react";
import callOutline from "@iconify/icons-ion/call-outline";

const FooterCraft = ({ note }) => {
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
        <button className={stylish.footerBtnFont}>Зполнить анкету</button>
      </footer>}
    </>
  );
};

export default FooterCraft;