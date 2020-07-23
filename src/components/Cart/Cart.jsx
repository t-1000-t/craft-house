import React from "react";
import stylish from "./Cart.module.css";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";

const Cart = ({ note }) => {
  return (
    <div key={note.id} className={stylish.imgBoxCart}>
      <Flip left>
        <img className={stylish.imgCart} src={note.url_full} alt=""/>
      </Flip>
      <div>

        <h1 className={stylish.fontNameCart}>
          {note.name}
        </h1>

        <ul className={stylish.ulPositionText}>
          <Bounce right>
            <li className={stylish.liPositionStyle1}>{note.title}</li>
            <li className={stylish.liPositionStyle1}>{note.title1}</li>
            <li className={stylish.liPositionStyle1}>{note.title2}</li>
            <li className={stylish.liPositionStyle1}>{note.title3}</li>
            <li className={stylish.liPositionStyle1}>{note.title4}</li>
            <li className={stylish.liPositionStyle1}>{note.title5}</li>
            <li className={stylish.liPositionStyle1}>{note.title6}</li>
            <li className={stylish.liPositionStyle1}>{note.title7}</li>
            <li className={stylish.liPositionStyle1}>{note.title8}</li>
            <li className={stylish.liPositionStyle1}>{note.title9}</li>
            <li className={stylish.liPositionStyle1}>{note.title10}</li>
            <li className={stylish.liPositionStyle1}>{note.title11}</li>
          </Bounce>
        </ul>
      </div>
    </div>
  );
};


export default Cart;
