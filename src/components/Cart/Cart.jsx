import React from "react";
import stylish from "./Cart.module.css";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";

const Cart = ({ note }) => {
  return (
    <div key={note.id} className={stylish.imgBoxCart}>
      <h1 className={stylish.fontNameCart}>
        {note.name}
      </h1>
      <div className={stylish.boxImgCart}>
        <Flip left>
          <img className={stylish.imgCart} src={note.url_full} alt=""/>
        </Flip>
      </div>
      <div>
        <h2 className={stylish.fontRequisite}>
          {note.requisite}
        </h2>
        <ul className={stylish.ulPositionText}>
          <Bounce right>
            <li className={stylish.liPositionStyle1}><div className={stylish.liAnimationStyle}>{note.title}</div></li>
            <li className={stylish.liPositionStyle1}><div className={stylish.liAnimationStyle}>{note.title1}</div></li>
            <li className={stylish.liPositionStyle1}><div className={stylish.liAnimationStyle}>{note.title2}</div></li>
            <li className={stylish.liPositionStyle1}><div className={stylish.liAnimationStyle}>{note.title3}</div></li>
            <li className={stylish.liPositionStyle1}><div className={stylish.liAnimationStyle}>{note.title4}</div></li>
            <li className={stylish.liPositionStyle1}><div className={stylish.liAnimationStyle}>{note.title5}</div></li>
            <li className={stylish.liPositionStyle1}><div className={stylish.liAnimationStyle}>{note.title6}</div></li>
            <li className={stylish.liPositionStyle1}><div className={stylish.liAnimationStyle}>{note.title7}</div></li>
            <li className={stylish.liPositionStyle1}><div className={stylish.liAnimationStyle}>{note.title8}</div></li>
            <li className={stylish.liPositionStyle1}><div className={stylish.liAnimationStyle}>{note.title9}</div></li>
            <li className={stylish.liPositionStyle1}><div className={stylish.liAnimationStyle}>{note.title10}</div></li>
            <li className={stylish.liPositionStyle1}><div className={stylish.liAnimationStyle}>{note.title11}</div></li>
          </Bounce>
        </ul>
      </div>
    </div>
  );
};


export default Cart;
