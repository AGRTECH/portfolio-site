import React from "react";
import styles from "./Nav.module.css";

const Nav = (props) => {
  return (
    <div className={`${styles.nav} ${styles.navSmaller}`}>
      <h4 className={styles.nameNav}>Alex Ross</h4>
      <ul className={`${styles.listFlex}`}>
        <li>home</li>
        <li>about</li>
        <li>portfolio</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default Nav;
