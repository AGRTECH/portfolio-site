import React from "react";
import styles from "./Nav.module.css";

const Nav = (props) => {
  return (
    <div className={`${styles.nav} ${styles.navSmaller}`}>
      <h4 className={styles.nameNav}>Alex</h4>
      <p>about</p>
      <p>portfolio</p>
      <p>contact</p>
    </div>
  );
};

export default Nav;
