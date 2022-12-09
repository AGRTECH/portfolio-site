import React, { useState } from "react";
import styles from "./App.module.css";
import nftImg from "../img/mynft.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import everpayPreview from "../img/everpaypreview.png";
import votingPreview from "../img/transparentvotingpreview.png";
import powerwashPreview from "../img/powerwashingpreview.png";
import tokenExchangePreview from "../img/agrtokenexchangepreview.png";
import code from "../img/onesandzeroes.jpg";
import chain from "../img/transparentchain.png";
import swapPreview from "../img/agrswappreview.png";
import github from "../img/githubicon.png";
import linkedin from "../img/inicon.png";
import emailIcon from "../img/emailicon.png";
import codeWars from "../img/codewarslogo.png";
import { Fade, Flip } from "react-reveal";
import HeadShake from "react-reveal/HeadShake";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <div className={styles.globalDiv}>
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
                  <p
                    className={`${styles.homeDescription} ${styles.aboutTitle}`}
                  >
                    Hello!
                  </p>
                  <p className={styles.homeDescription}>
                    I am a software developer, programming for 3+ years
                    specializing in{" "}
                    <span className={styles.frontEndText}>
                      Front-End (Javascript, React, Redux etc.)
                    </span>{" "}
                    +{" "}
                    <span className={styles.backEndText}>
                      Solidity Back-End (truffle / ganache, web3, openzeppelin
                      etc.)
                    </span>
                    . Check out my projects below to see these skills put into
                    use!
                  </p>
                  <Link className={styles.buttonCenter} to={"/contact"}>
                    <button className={`${styles.contactButton}`}>
                      Contact Me
                    </button>
                  </Link>
                </div>
                <div className={styles.homeBotRight}>
                  <ul className={styles.homeBotRightLeftList}>
                    <li>
                      23 &nbsp;<span className={styles.seperator}>|</span>
                    </li>
                    <li>
                      &nbsp;&nbsp;Clinton Township,{" "}
                      <span className={styles.mobileOnly}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      MI &nbsp;
                      <span className={styles.seperator}>|</span>{" "}
                    </li>
                    <li>
                      &nbsp;&nbsp;ross4467 @gmail.com &nbsp;
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
            <Fade top>
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
              </div>
            </Fade>
            <Fade top>
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
                        "https://drive.google.com/file/d/1zA3Jx-ifjzlEBcXDVSX4othSllvrpSI4/view?usp=sharing",
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
              </div>
            </Fade>
            <Fade top>
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
                        "https://herculeshosing.herokuapp.com/",
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
              </div>
            </Fade>
          </div>
          <div className={styles.thirdCard}>
            <Fade bottom>
              <div className={styles.concreteCleaningCard}>
                <img
                  src={tokenExchangePreview}
                  className={styles.concreteCleaningImg}
                  alt=""
                />
                <p className={styles.cardCenter}>AGR Token Exchange</p>
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
                      Video Demo
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
            </Fade>
            <Fade bottom>
              <div className={styles.concreteCleaningCard}>
                <img
                  src={swapPreview}
                  className={styles.concreteCleaningImg}
                  alt=""
                />
                <p className={styles.cardCenter}>AGR Swap</p>
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
                      Video Demo
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
            </Fade>
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
    </>
  );
};

export default Home;
