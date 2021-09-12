import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.css";
const MonthlySnapshot = (props) => {
  return (
    <div className="m_top15">
      <Row>
        <Col className="MonthlySnapshot" xs={5}>
          <span className="">Monthly Cost </span>
          <p className="boxtext_bolder"> £
           {parseFloat(props.application.monthlyPayment).toFixed(2)}
          </p>
        </Col>
        <Col xs={2} className="m_top50">
          <p className="and"> & </p>
        </Col>
        <Col className="MonthlySnapshot" xs={5}>
        <span className="">Your rate (APR)</span>
          <p className="boxtext_bolder" boolean="decimal"> {JSON.stringify(props.application.APR)}%</p>
        </Col>
      </Row>
      <p className="m_top10">This means</p>
    </div>
  );
};

export default MonthlySnapshot;
