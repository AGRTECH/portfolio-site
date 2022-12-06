import React from "react";
import styles from "./Nav.module.css";
import style from "./App.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Nav = (props) => {
  return (
    <div className={style.globalDiv}>
      <nav
        className={`${styles.nav} ${styles.navSmaller} ${styles.navIphone}
      `}
      >
        <h4 className={styles.nameNav}>AGR</h4>
        <ul className={`${styles.listFlex}`}>
          {/* <li>
            <Link to={"/home"}>home</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>portfolio</Link>
          </li> */}
          {/* <li>
          <Link to={"/about"}>about</Link>
        </li> */}
          {/* <li>
            <Link to={"/contact"}>contact</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
