import React from "react";
import stylish from "./Cart.module.css";
// import Bounce from "react-reveal/Bounce";
// import Flip from "react-reveal/Flip";

const Cart = ({ note }) => {
  return (
    <>
      {note && <div key={note.id} className={stylish.imgBoxCart}>
        {note.name0 && <h1 className={stylish.fontNameCart}>
          {note.name0}
        </h1>}
        {note.name1 && <h3 className={stylish.fontNameCart1}>{note.name1}</h3>}

        {note.name2 && note.name3 && <div className={stylish.boxfontNameCart_23}>
          {note.name2 && <h1 className={stylish.fontNameCart2}>
            {note.name2}
          </h1>}
          {note.name3 && <h3 className={stylish.fontNameCart3}>{note.name3}</h3>}
        </div>}
        <div className={stylish.boxImgCart}>
          <img className={stylish.imgCart} src={note.url_full} alt=""/>
        </div>
        {/* Start cart 1 */}
        {note.text &&
        <p className={stylish.textCart1}><b>{note.text}</b>&nbsp;{note.text1}<b>{note.text2}</b>{note.text3}</p>}
        {/* Start cart 2 */}
        {note.twoText && <p className={stylish.boxTwoText}>
          <div className={stylish.blockTwoText1}>
            <b>{note.twoText}</b>&nbsp;<br/>
            <b>{note.twoText2}</b>&nbsp;<br/>
            <b>{note.twoText4}</b>&nbsp;<br/>
            <b>{note.twoText6}</b>&nbsp;<br/>
            <b>{note.twoText8}</b>&nbsp;<br/>
            <b>{note.twoText10}</b>&nbsp;<br/>
          </div>
          <div className={stylish.blockTwoText2}>
            {note.twoText1}<br/>
            {note.twoText3}<br/>
            {note.twoText5}<br/>
            {note.twoText7}<br/>
            {note.twoText9}<br/>
            {note.twoText11}<br/>
          </div>
        </p>}
        <br/>
        {note.twoText12 && <p>{note.twoText12}</p>} {note.twoText12 && <br/>}
        {note.twoText13 && <p>{note.twoText13}</p>} {note.twoText12 && <br/>}
        {note.twoText14 && <p>{note.twoText14}</p>} {note.twoText12 && <br/>}
        {note.twoText15 && <p>{note.twoText15}</p>} {note.twoText12 && <br/>}

        {/* Start cart 3 */}
        {note.threeText1 && <p>
          {note.threeText1}<br/>
          {note.threeText2}
        </p>}
        {note.threeText3 && <h3>{note.threeText3}</h3>}
        {note.threeText4 && <h3>{note.threeText4}</h3>}
        {note.threeText5 && <p>
          {note.threeText5}<br/>
          {note.threeText6}<br/>
          {note.threeText7}<br/>
          {note.threeText8}<br/>
          {note.threeText9}<br/>
        </p>}
        {note.threeText10 && <h3>{note.threeText10}</h3>}
        {note.threeText10 && <br/>}
        {note.threeText11 && <p>
          {note.threeText11}<br/>
          {note.threeText12}<br/>
          {note.threeText13}<br/>
          {note.threeText14}<br/>
          {note.threeText15}<br/>
          {note.threeText16}<br/>
        </p>}

        {note.requisite && <div>
          <h2 className={stylish.fontRequisite}>
            {note.requisite}
          </h2>
        </div>}
      </div>}
    </>
  );
};


export default Cart;
