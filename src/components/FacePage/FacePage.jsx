import React from "react";
import { connect } from "react-redux";
import stylish from "./FacePage.module.css";
import Cart from "../Cart/Cart";
import FooterCraft from "../FooterCraft/FooterCraft";

const FacePage = ({ base }) => (
<div className={stylish.container}>
  <ul className={stylish.blockImgUl}>
    {base.map((elem) => (
      <li key={elem.id} className={stylish.blockImgLi}>
        <Cart note={elem}/>
        <FooterCraft note={elem}/>
      </li>
    ))}
  </ul>
</div>
);

const mapStateToProps = (state) => {
  return { base: [...state.database] };
};

export default connect(
  mapStateToProps
)(FacePage);
