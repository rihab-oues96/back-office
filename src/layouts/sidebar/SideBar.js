import React from "react";
import logo from "../../assets/images/logo.png";
import chapters from "../../assets/icons/chapters.png";
import lessons from "../../assets/icons/lessons.png";
import levels from "../../assets/icons/levels.png";
import users from "../../assets/icons/users.png";
import settings from "../../assets/icons/settings.png";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <section className="sidebar">
      <div className="head">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p className="title">TakiAcademy</p>
          <p>Learn English</p>
        </div>
      </div>

      <div className="navigation">
        <NavLink to="/">
          <div className="link">
            <img src={chapters} alt="chapters" />
            <p>الفصول</p>
          </div>
        </NavLink>

        <NavLink to="lessons">
          <div className="link">
            <img src={lessons} alt="lessons" />
            <p>الدروس</p>
          </div>
        </NavLink>

        <NavLink to="levels">
          <div className="link">
            <img src={levels} alt="levels" />
            <p>المستويات</p>
          </div>
        </NavLink>

        <NavLink to="users">
          <div className="link">
            <img src={users} alt="users" />
            <p>المستخدمين</p>
          </div>
        </NavLink>

        <NavLink to="settings">
          <div className="link">
            <img src={settings} alt="settings" />
            <p>إعدادات</p>
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default SideBar;
