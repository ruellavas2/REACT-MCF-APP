import React from "react";
import { Row, Form, Col } from "react-bootstrap";
import "./styles.css";


const BankDetails = (props) => {

  return (
    <Row className="m_top15">
      <Col md={5}>
        <p className="quesCSS1 m_top15">Your bank details</p>
        <p className="normal_style">Please make sure this is a <span className="approvedCss">UK current account in your name</span>, and <span className="approvedCss">where your income is paid</span>. Your money will be sent to this account.</p>
        <p className="normal_style m_top15">Account number</p>
        <p>
          <Form.Control placeholder="Account number" defaultValue={props.bankDetails.accountNumber}
            className={
              props.errors.accountNumber ? 'select-search form-input-fail' : 'select-search'
            }
            {...props.register("accountNumber", { required: true,
              pattern: {
                value: /^([ /]*\d){8,12}$/,
                message: "invalid accountNumber"
              } })} maxLength="8" />
          {props.errors.accountNumber && <span className="error">Enter your valid bank account number</span>}
        </p>

        <p className="normal_style m_top15">Sort code</p>
        <p>
          <Form.Control placeholder="Sort code" defaultValue={props.bankDetails.sortCode}
            className={
              props.errors.sortCode ? 'select-search form-input-fail' : 'select-search'
            }            {...props.register("sortCode", { required: true,
              pattern: {
                value: /^(?!(?:0{6}|00-00-00|00 00 00))(?:\d{6}|\d\d-\d\d-\d\d|\d\d \d\d \d\d)$/,
                message: "invalid sortCode"
              } })} maxLength="8" />
          {props.errors.sortCode && <span className="error">Enter your valid bank sort code</span>}
        </p>
      </Col>
    </Row>




  );
};

export default BankDetails;
