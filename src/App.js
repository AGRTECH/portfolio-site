import React from "react";
import forest from "./img/light-forest.jpg";
import Nav from "./components/Nav";
import styles from "./App.module.css";

const App = () => {
  return (
    <React.Fragment>
      <div className={styles.title}>
        <Nav />
        {/* <img src={forest} /> */}
        <h1>Hello, I'm Alex The Front End Dev</h1>
      </div>
    </React.Fragment>
  );
};

export default App;
