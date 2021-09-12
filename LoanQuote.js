import React from "react";
import { Container } from "react-bootstrap";

import LoanTerms from "./LoanTerms";
import MonthlySnapshot from "./MonthlySnapshot";
import TotalCost from "./TotalCost";
import "./styles.css";

const LoanQuote = (props) => {
  return (
    <Container className="bordered">
      <LoanTerms application2={props.application1} />
      <MonthlySnapshot application={props.application1} />
      <TotalCost application={props.application1} />
    </Container>
  );
};

export default LoanQuote;
