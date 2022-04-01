import React from "react";
import styles from "./Nav.module.css";

const Nav = (props) => {
  return (
    <div>
      <ul className={styles.nav}>
        <li>about</li>
        <li>portfolio</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default Nav;
