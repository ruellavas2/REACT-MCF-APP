import { Component } from "react";
import "./styles.css";
import PrevAddress from "./PrevAddress";
import ModalYesNo from "./ModalYesNo";
import React, { useState, useEffect } from "react";
import { Modal, Button, Row, Col, Container } from 'react-bootstrap';
import Save from "./PrevAddressProps";

const EnterAddressManually = () => {

  const [show, setShow] = useState(false);




  return (
    <>
      <Row  >
        <Col style={{ width: "30rem" }}>
          <p >Flat Number</p>
          <input type="text" id="input-1" aria-invalid="true" name="flatno" aria-describedby="help-message-46" className="InputEnterAddManFeilds" />
          <p >
          </p>
          <p>Building Number</p>
          <input type="text" id="input-47" aria-invalid="true" name="buildgno" aria-describedby="help-message-47" className="InputEnterAddManFeilds"></input>
          <p></p>
          <p>Building Name</p>
          <input type="text" id="input-48" aria-invalid="true" name="buildgname" aria-describedby="help-message-48"className="InputEnterAddManFeilds"></input>
          <p></p>
          <p>Street </p>
          <input type="text" id="input-49" aria-invalid="false" name="buildgstreet" className="InputEnterAddManFeilds"></input>
          <p></p>
          <p>Town </p>
          <input type="text" id="input-50" aria-invalid="true" name="addtown" aria-describedby="help-message-50" className="InputEnterAddManFeilds"></input>
          <p></p>
          <p>Postcode</p>
          <input type="text" id="input-51" aria-invalid="false" name="input1" className="InputEnterAddManFeilds"></input>
        </Col>
      </Row>
    </>
  );
}


export default EnterAddressManually