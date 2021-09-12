import React from "react";
import { Row, Col } from "react-bootstrap";
import "./styles.css";

function LoanTerms (props) {
  return (
    <>
      <Row className="LoanTerms">
        <Col>
        <span>
          Loan amount and term 
        </span>
          <p className="boxtext_bold">
            <span className="approvedCss">£{JSON.stringify(props.application2.loanAmount) }</span> over <span className="approvedCss">
            {JSON.stringify(props.application2.term)} months </span>
          </p>
        </Col>
      </Row>
    </>
  );
};

export default LoanTerms;

