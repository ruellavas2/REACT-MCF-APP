import React from 'react'
import { Button, Row, Container,Col } from 'react-bootstrap'
import "./styles.css";

function Save() {
    return (
        <Row  >
            <Col>
            <button type="Submit" style={{ width: "18rem", backgroundColor: "#FFFFFF",  border: "2px solid #196B69", height:"2.5rem",
  color: "black"}}>Save</button>
      </Col>  </Row>
    )
}

export default Save
