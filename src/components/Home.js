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
              <li className={styles.homeName}>Alex Ross</li>
              <li className={styles.homeOccupation}>dApp Developer</li>
            </ul>
            <div></div>
          </div>
          <div className={styles.homeBotFlex}>
            <div className={styles.homeBotLeft}>
              <p>About Me</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                soluta aliquid? Esse voluptatum laudantium quasi non? Tenetur
                voluptates quidem perferendis, fugiat eaque, laudantium aut
                illum esse atque eligendi enim ipsum?
              </p>
            </div>
            <div className={styles.homeBotRight}>asfasfaswf</div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
