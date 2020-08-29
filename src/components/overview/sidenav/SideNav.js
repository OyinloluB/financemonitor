import React from "react";
import Styles from "./sidenav.module.css";

const SideNav = () => {
  return (
    <div className={Styles.container}>
      <ul>
        <li>Github</li>
        <li>Twitter</li>
        <li>LogOut</li>
      </ul>
    </div>
  );
};

export default SideNav;
