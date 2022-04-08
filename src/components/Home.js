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
              <p className={styles.homeDescription}>About Me</p>
              <p className={styles.homeDescription}>
                I am a self-taught developer, programming for 2+ years mostly 
                specializing in <span className={styles.frontEndText}>Front-End (Javascript, React, Redux etc.)</span>  +  <span className={styles.backEndText}>Solidity Back-End (truffle / ganache, web3, openzeppelin etc.)</span>.
              </p>
            </div>
            <div className={styles.homeBotRight}>
              <ul className={styles.homeBotRightLeftList}>
                <li>Age</li>
                <li>Residence</li>
                <li>email</li>
                <li>Phone</li>
              </ul>
              <ul className={styles.homeBotRightRightList}>
                <li>22</li>
                <li>Michigan, USA</li>
                <li>xarossx@ yahoo.com</li>
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
