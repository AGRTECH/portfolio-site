import React from "react";
import styles from "./App.module.css";

const About = () => {
  return (
    <>
      <div
        className={`${styles.aboutContainer} ${styles.homeContainerSmaller}`}
      >
        <div className={`${styles.innerAboutContainer}`}>
          <div className={`${styles.homeTopFlex} ${styles.aboutTop}`}>
            <div className={styles.hidden}></div>
            <ul className={styles.nameList}>
              <li className={styles.aboutName}>About Me</li>
              <li className={`${styles.homeOccupation}`}></li>
            </ul>
            <div className={styles.hidden}></div>
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

export default About;
