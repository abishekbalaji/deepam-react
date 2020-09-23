import React from "react";

const HeaderContactDetail = (props) => (
  <div className="header__contact-item">
    <p className="header__contact-item-title">{props.title}</p>
    <p className="header__contact-item-subtitle">{props.subtitle}</p>
  </div>
);

export default HeaderContactDetail;
