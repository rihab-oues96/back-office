import React from "react";
import user from "../../assets/images/user.png";
import down from "../../assets/icons/down.png";
import search from "../../assets/icons/search.png";

import "./Header.scss";

const Header = () => {
  return (
    <section className="header">
      <div className="search">
        <img src={search} alt="search" />
        <input type="text" placeholder="ابحث عن أى شيء ... " />
      </div>

      <div className="user">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="desc">
          <p className="name">محمدأمين </p>
          <p className="role">Admin</p>
        </div>
        <div className="icon">
          <img src={down} alt="down" />
        </div>
      </div>
    </section>
  );
};

export default Header;
