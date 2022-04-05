import React from "react";
import styles from "./App.module.css";
import { Button } from "react-bootstrap";

const Portfolio = () => {
  return (
    <>
      <div
        className={`${styles.aboutContainer} ${styles.homeContainerSmaller}`}
      >
        <div className={`${styles.innerAboutContainer}`}>
          <div className={styles.homeTopFlex}>
            <div></div>
            <ul className={styles.nameList}>
              <li className={styles.aboutName}>My portfolio</li>
              <li className={styles.homeOccupation}></li>
            </ul>
            <div></div>
          </div>
          <div className={styles.homeBotFlex}>
            <div className={styles.homeBotLeft}>
              <p>Everpay</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                soluta aliquid? Esse voluptatum laudantium quasi non? Tenetur
                voluptates quidem perferendis, fugiat eaque, laudantium aut
                illum esse atque eligendi enim ipsum?
              </p>
              <div>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://drive.google.com/file/d/1aJtbq-9sHBH0fbW6bogfB6nCGes128dS/view",
                      "_blank"
                    );
                  }}
                  className={styles.buttonLiveDemo}
                >
                  Demo
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/AGRTECH/Everpay", "_blank");
                  }}
                >
                  Code
                </Button>
              </div>
            </div>
            <div className={styles.homeBotLeft}>
              <p>Transparent Voting</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                soluta aliquid? Esse voluptatum laudantium quasi non? Tenetur
                voluptates quidem perferendis, fugiat eaque, laudantium aut
                illum esse atque eligendi enim ipsum?
              </p>
              <div>
                <Button className={styles.buttonLiveDemo}> Demo</Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://github.com/AGRTECH/Transparent-Voting",
                      "_blank"
                    );
                  }}
                >
                  Code
                </Button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
