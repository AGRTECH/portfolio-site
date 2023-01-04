import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Question from "../img/darkerqmark.png";
import styles from "./App.module.css";

function QuestionOverlay() {
  const renderTooltip = (props) => (
    <Tooltip {...props}>
      To be able to properly view these sites, you will need a metamask wallet
      and to log into the Goerli network.
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 150, hide: 50 }}
      overlay={renderTooltip}
    >
      <img
        className={styles.questionImg}
        src={Question}
        style={{
          width: "27px",
          height: "23px",
          position: "relative",
        }}
        alt=""
      />
    </OverlayTrigger>
  );
}

export default QuestionOverlay;
