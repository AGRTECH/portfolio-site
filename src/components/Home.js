import React from "react";
import styles from "./App.module.css";
import nftImg from "../img/mynft.png";

const Home = () => {
  return (
    <>
      <div className={`${styles.homeContainer} ${styles.homeContainerSmaller}`}>
        <div className={`${styles.innerHomeContainer}`}>
          <div className={styles.homeTopFlex}>
            <img className={styles.nftImage} src={nftImg} alt="no img" />
            <ul className={styles.nameList}>
              <li>Alex Ross</li>
              <li>dApp Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
