import React from "react";
import forest from "./img/light-forest.jpg";
import Nav from "./Nav";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <div className={styles.title}>
        <Nav />
        <h1 className="ml-4">Hello, I'm Alex The Front End Dev</h1>
      </div>
    </>
  );
};

export default App;
