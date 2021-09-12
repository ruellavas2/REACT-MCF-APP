import React from "react";
import { Row } from "react-bootstrap";
import "./styles.css";

const TotalCost = (props) => {

  return (
    <Row className="LoanTerms">
       <span>
       The loan will cost you 
    </span>
    <p className="boxtext_bold">
     
    <span className="approvedCss">£
        {(parseFloat(props.application.totalRepayment) -
          parseFloat(props.application.loanAmount)).toFixed(2)} </span>
      </p>
      <span>
      Your total to pay back will be
    </span>
      <p className="boxtext_bold">
       <span className="approvedCss"> £
        {parseFloat(props.application.totalRepayment).toFixed(2)}</span>
      </p>
    </Row>
  );
};

export default TotalCost;
