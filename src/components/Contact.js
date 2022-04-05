import React, { useState } from "react";
import styles from "./App.module.css";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div
        className={`${styles.aboutContainer} ${styles.homeContainerSmaller}`}
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
    </>
  );
};

export default Contact;
