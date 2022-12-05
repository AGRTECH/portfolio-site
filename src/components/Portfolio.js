import React from "react";
import styles from "./App.module.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import everpayPreview from "../img/everpaypreview.png";
import votingPreview from "../img/transparentvotingpreview.png";
import powerwashPreview from "../img/powerwashingpreview.png";

const Portfolio = () => {
  return (
    <>
      <div
        className={`${styles.aboutContainer} ${styles.homeContainerSmaller}`}
      >
        {/* <div className={`${styles.innerAboutContainer}`}>
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
              <p className={styles.everpayTitle}>Everpay</p>
              <p>
                A payment streaming app. Streams money to the receiver every
                second over a specified interval of time and can be withdrawn at
                any time. This could be used as payment to employees from
                employers instead of the traditional, get paid every 2 weeks
                method.
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
              <p className={styles.transparentVotingTitle}>
                Transparent Voting
              </p>
              <p>
                A voting and poll creation app. You create a poll, or just vote
                on existing polls. Can be any category and users can only vote
                once per poll. Results are shown after a time interval and
                winner is revealed.
              </p>
              <div> */}
        {/* https://drive.google.com/file/d/1zA3Jx-ifjzlEBcXDVSX4othSllvrpSI4/view?usp=sharing */}
        {/* <Button
                  className={styles.buttonLiveDemo}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://drive.google.com/file/d/1zA3Jx-ifjzlEBcXDVSX4othSllvrpSI4/view?usp=sharing",
                      "_blank"
                    );
                  }}
                >
                  {" "}
                  Demo
                </Button>
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
        </div> */}
        <p className={styles.portfolioTitle}>Portfolio</p>
        <div className={styles.thirdCard}>
          <div className={styles.concreteCleaningCard}>
            <img
              src={everpayPreview}
              className={styles.concreteCleaningImg}
              alt=""
            />
            <p className={styles.cardCenter}>Everpay</p>
            <div className={styles.buttons}>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Site
                </Button>
              </Link>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Demo
                </Button>
              </Link>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Code
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.concreteCleaningCard}>
            <img
              src={votingPreview}
              className={styles.concreteCleaningImg}
              alt=""
            />
            <p className={styles.cardCenter}>Transparent Voting</p>
            <div className={styles.buttons}>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Site
                </Button>
              </Link>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Demo
                </Button>
              </Link>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Code
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.concreteCleaningCard}>
            <img
              src={powerwashPreview}
              className={styles.concreteCleaningImg}
              alt=""
            />
            <p className={styles.cardCenter}>Hercules Power Washing Site</p>
            <div className={styles.buttons}>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Site
                </Button>
              </Link>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Demo
                </Button>
              </Link>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Code
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.thirdCard}>
          <div className={styles.concreteCleaningCard}>
            <img
              src={everpayPreview}
              className={styles.concreteCleaningImg}
              alt=""
            />
            <p className={styles.cardCenter}>Everpay</p>
            <div className={styles.buttons}>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Site
                </Button>
              </Link>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Demo
                </Button>
              </Link>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Code
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.concreteCleaningCard}>
            <img
              src={votingPreview}
              className={styles.concreteCleaningImg}
              alt=""
            />
            <p className={styles.cardCenter}>Transparent Voting</p>
            <div className={styles.buttons}>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Site
                </Button>
              </Link>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Demo
                </Button>
              </Link>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Code
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.concreteCleaningCard}>
            <img
              src={powerwashPreview}
              className={styles.concreteCleaningImg}
              alt=""
            />
            <p className={styles.cardCenter}>Hercules Power Washing Site</p>
            <div className={styles.buttons}>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Site
                </Button>
              </Link>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Demo
                </Button>
              </Link>
              <Link
                className={`${styles.center} ${styles.noStyle}`}
                to={"/patio"}
              >
                <Button
                  className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                >
                  Code
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
