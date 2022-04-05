import React from "react";
import styles from "./App.module.css";
import nftImg from "../img/mynft.png";

const Home = () => {
  return (
    <>
      <div className={`${styles.homeContainer} ${styles.homeContainerSmaller}`}>
        <div className={`${styles.innerHomeContainer}`}>
          <div className={`${styles.homeTopFlex} ${styles.homeTopFlexIphone}`}>
            <img
              className={`${styles.nftImage} ${styles.nftImageIphone}`}
              src={nftImg}
              alt="no img"
            />
            <ul className={styles.nameList}>
              <li className={`${styles.homeName} ${styles.homeNameIphone}`}>
                Alex Ross
              </li>
              <li
                className={`${styles.homeOccupation} ${styles.homeNameOccupationIphone}`}
              >
                dApp Developer
              </li>
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
            <div className={styles.homeBotRight}>
              <ul className={styles.homeBotRightLeftList}>
                <li>Age</li>
                <li>Residence</li>
                <li>e-mail</li>
                <li>Phone</li>
              </ul>
              <ul className={styles.homeBotRightRightList}>
                <li>22</li>
                <li>Michigan, USA</li>
                <li>xarossx@yahoo.com</li>
                <li>(586) 651-6917</li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
