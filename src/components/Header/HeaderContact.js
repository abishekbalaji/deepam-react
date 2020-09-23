import React from "react";

import HeaderContactDetail from "./HeaderContactDetail";

const HeaderContact = () => (
  <div className="header__contact">
    <HeaderContactDetail title={"Call Us"} subtitle={"1234567890"} />
    <HeaderContactDetail
      title={"Email Us"}
      subtitle={"deepamchennai87@@gmail.com"}
    />
    <button className="header__contact-btn">
      Contact Us
    </button>
  </div>
);

export default HeaderContact;
