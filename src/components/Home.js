import React, { useState } from "react";
import styles from "./App.module.css";
import nftImg from "../img/mynft.png";
import award from "../img/transaward.png";
import reactLogo from "../img/2.jpg";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import everpayPreview from "../img/everpaypreview.png";
import votingPreview from "../img/transparentvotingpreview.png";
import powerwashPreview from "../img/powerwashingpreview.png";
import tokenExchangePreview from "../img/agrtokenexchangepreview.png";
import code from "../img/onesandzeroes.jpg";
import chain from "../img/transparentchaingreen.png";
import swapPreview from "../img/agrswappreview.png";
import github from "../img/githubicon.png";
import linkedin from "../img/inicon.png";
import emailIcon from "../img/emailicon.png";
import codeWars from "../img/codewarslogo.png";
import { Fade, Flip } from "react-reveal";
import HeadShake from "react-reveal/HeadShake";
import QuestionOverlay from "./QuestionOverlay";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <div className={styles.globalDiv}>
        <div className={styles.globalDiv2}>
          {/* <div className={styles.codeDiv}>
          <img src={code} alt="" className={styles.codeImg} />
          <img src={code} alt="" className={styles.codeImg2} />
          <img src={code} alt="" className={styles.codeImg3} />
          <img src={code} alt="" className={styles.codeImg4} />
        </div> */}
          <div className={`${styles.homeWrap}`}>
            <div
              className={`${styles.homeContainer} ${styles.homeContainerSmaller} `}
            >
              <div className={`${styles.innerHomeContainer}`}>
                <div
                  className={`${styles.homeTopFlex} ${styles.homeTopFlexIphone}`}
                >
                  <Fade left>
                    <img
                      className={`${styles.nftImage} ${styles.nftImageIphone}`}
                      src={nftImg}
                      alt="no img"
                    />
                  </Fade>

                  <ul className={styles.nameList}>
                    <li
                      className={`${styles.homeName} ${styles.homeNameIphone}`}
                    >
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
                    <p
                      className={`${styles.homeDescription} ${styles.aboutTitle}`}
                    >
                      Hello and welcome!
                    </p>
                    <p className={styles.homeDescription}>
                      I am a software developer, programming for 3+ years
                      specializing in{" "}
                      <span className={styles.frontEndText}>
                        Front-End (Javascript, React, Redux, CSS, HTML,
                        Bootstrap)
                      </span>{" "}
                      +{" "}
                      <span className={styles.backEndText}>
                        Solidity Back-End (Truffle / Ganache, Web3.js,
                        Openzeppelin, Hardhat / Ethers.js)
                      </span>
                      . Check out my projects below to see these skills put into
                      use!
                    </p>

                    <Link
                      className={`${styles.buttonCenter}${styles.noStyle}`}
                      to={"/contact"}
                    >
                      <button className={`${styles.contactButton}`}>
                        Contact Me
                      </button>
                    </Link>
                  </div>
                  <div className={styles.homeBotRight}>
                    <ul className={styles.homeBotRightLeftList}>
                      <li className={styles.mobileBorder}>
                        23 &nbsp;<span className={styles.seperator}>|</span>
                      </li>
                      <li className={styles.mobileBorder}>
                        &nbsp;&nbsp;Clinton Township,{" "}
                        <span className={styles.mobileOnly}>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        MI &nbsp;
                        <span className={styles.seperator}>|</span>{" "}
                      </li>

                      <li>
                        <span className={styles.seperator}>&nbsp;&nbsp;</span>
                        586-651-6917
                      </li>
                    </ul>
                    <ul className={styles.homeBotRightRightList}>
                      <li>
                        <a href="https://github.com/AGRTECH/">
                          <img
                            src={github}
                            alt=""
                            className={styles.socialIcon}
                          />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="https://www.linkedin.com/in/alex-ross-188267231/">
                          <img
                            src={linkedin}
                            alt=""
                            className={styles.socialIcon}
                          />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="mailto:ross4467@gmail.com">
                          <img
                            src={emailIcon}
                            alt=""
                            className={styles.socialIcon}
                          />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="https://www.codewars.com/users/AGRTECH">
                          <img
                            src={codeWars}
                            alt=""
                            className={styles.socialIcon}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.chainDiv}>
            <img src={chain} alt="" className={styles.chainImg} />
          </div>
          <div
            className={`${styles.aboutContainer} ${styles.homeContainerSmaller}`}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p></p>
              <p className={styles.portfolioTitle}>Portfolio</p>
              <QuestionOverlay />
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
                  <Button
                    className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://everpay.vercel.app", "_blank");
                    }}
                  >
                    Site
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://drive.google.com/file/d/1er-bTRLXtN6Q21xLQiQh25u3Z4A85pQ6/view?usp=sharing",
                        "_blank"
                      );
                    }}
                    className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                  >
                    Video Demo
                  </Button>
                  <Button
                    className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://github.com/AGRTECH/Everpay",
                        "_blank"
                      );
                    }}
                  >
                    Code
                  </Button>
                </div>
                <p className={styles.projectDescription}>
                  A new way to pay others with 24/7 payment streaming on the
                  blockchain
                </p>
              </div>
              <Fade top>
                <div>
                  <img src={award} className={styles.awardIcon} alt="" />
                </div>
              </Fade>
              <div className={styles.concreteCleaningCard}>
                <img
                  src={votingPreview}
                  className={styles.concreteCleaningImg}
                  alt=""
                />
                <p className={styles.cardCenter}>Transparent Voting</p>
                <div className={styles.buttons}>
                  <Button
                    className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://transparent-voting.vercel.app",
                        "_blank"
                      );
                    }}
                  >
                    Site
                  </Button>
                  <Button
                    className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://drive.google.com/file/d/1gTfqQe_jzTWXunBC71Af9Wuwx8RljwWQ/view?usp=sharing",
                        "_blank"
                      );
                    }}
                  >
                    Video Demo
                  </Button>
                  <Button
                    className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://github.com/AGRTECH/transparent-voting",
                        "_blank"
                      );
                    }}
                  >
                    Code
                  </Button>
                </div>
                <p className={styles.projectDescription}>
                  Web 3.0 voting and poll creation
                </p>
              </div>
              <Fade top>
                <div>
                  <img src={award} className={styles.awardIcon} alt="" />
                </div>
              </Fade>
              <div className={styles.concreteCleaningCard}>
                <img
                  src={powerwashPreview}
                  className={styles.concreteCleaningImg}
                  alt=""
                />
                <p className={styles.cardCenter}>Hercules Power Washing Site</p>
                <div className={styles.buttons}>
                  <Button
                    className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://hercules-power-washing.vercel.app/",
                        "_blank"
                      );
                    }}
                  >
                    Site
                  </Button>
                  <Button
                    className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://github.com/AGRTECH/alins-power-washing",
                        "_blank"
                      );
                    }}
                  >
                    Code
                  </Button>
                </div>
                <p className={styles.projectDescriptionLight}>
                  A local power washing business site
                </p>
              </div>
            </div>
            <div className={styles.thirdCard}>
              <div className={styles.concreteCleaningCard}>
                <img
                  src={tokenExchangePreview}
                  className={styles.concreteCleaningImg}
                  alt=""
                />
                <p className={styles.cardCenter}>AGR Token Exchange</p>
                <div className={styles.buttons}>
                  <Button
                    className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://agr-token-exchange.vercel.app/",
                        "_blank"
                      );
                    }}
                  >
                    Site
                  </Button>

                  {/* <Button
                    className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                  >
                    Video Demo
                  </Button> */}

                  <Button
                    className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://github.com/AGRTECH/agr-token-exchange",
                        "_blank"
                      );
                    }}
                  >
                    Code
                  </Button>
                </div>
                <p className={styles.projectDescriptionLight}>
                  Trade the AGR/ETH pair on the blockchain
                </p>
              </div>
              <div className={styles.concreteCleaningCard}>
                <img
                  src={swapPreview}
                  className={styles.concreteCleaningImg}
                  alt=""
                />
                <p className={styles.cardCenter}>AGR Swap</p>
                <div className={styles.buttons}>
                  <Button
                    className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://agrswap.vercel.app/", "_blank");
                    }}
                  >
                    Site
                  </Button>

                  {/* <Button
                    className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                  >
                    Video Demo
                  </Button> */}

                  <Button
                    className={`${styles.estimateButton} ${styles.center} ${styles.iphoneEstimate}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://github.com/AGRTECH/starter_kit",
                        "_blank"
                      );
                    }}
                  >
                    Code
                  </Button>
                </div>
                <p className={styles.projectDescription}>A simple dex clone.</p>
              </div>
              {/* <div className={styles.concreteCleaningCard}>
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
          </div> */}
            </div>
          </div>
          <div className={styles.chainDiv}>
            <img src={chain} alt="" className={styles.chainImg} />
          </div>
          <div
            className={`${styles.contactContainer} ${styles.homeContainerSmaller} ${styles.contactContainer}`}
          >
            <div className={`${styles.innerAboutContainer}`}>
              <div className={styles.homeTopFlex}>
                <div></div>
                <ul className={styles.nameList}>
                  <li className={styles.aboutName}>Contact</li>
                  <li className={styles.homeOccupation}></li>
                </ul>
                <div></div>
              </div>
              <div className={styles.contactBot}>
                <Form
                  action="https://formsubmit.co/xarossx@yahoo.com"
                  method="POST"
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      type="name"
                      name="name"
                      placeholder="Enter name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicCheckbox"
                  ></Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Message for me</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      as="textarea"
                      name="message"
                      rows={3}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
