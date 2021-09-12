import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class LinkExpire extends Component {
 
render() {
  return (
    <Container fluid >
    <Row className="">
      <Col xs={1}></Col>
      <Col xs={10}>
        <p className="header_style middle"> Your link is expired. </p>          </Col>
      <Col xs={1}></Col>
    </Row>
  </Container>
  );
 }
}