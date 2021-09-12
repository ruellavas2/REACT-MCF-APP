import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";




const AcceptPage = () => {
var name = window.location.href.split("name=")[1]

  return (
    <Container>
        <Row>
          <Col xs={12} >
            <p className="header_style middle">{name}, Your loan application is accepted.</p>
          </Col>
        </Row>
    </Container>
  );
};
export default AcceptPage ;
