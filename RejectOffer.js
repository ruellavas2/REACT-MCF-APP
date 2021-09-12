import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";




const RejectOffer = () => {
var name = window.location.href.split("name=")[1]

  

  return (
    <Container>
      <Row>
        <Col xs={12} >
          <p className="header_style_big m_top50">{name}, we're unable to offer you a loan right now</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="normal_style">
          <p>Thank you for your loan application. Unfortunately, we are unable to offer you a loan at this time.
          </p><p>
            A hard search was not carried out on your application so this will not impact your credit score.
          </p><p>
            Because of industry standards and guidelines we cannot provide you with the details for this decision. Applications are often rejected because of information from credit reference agencies or the fact that we weren’t able to verify the details you provided in the application.
          </p><p>
            We work with Transunion and Experian to perform a soft credit search. Transunion and Experian are two of the UK's three major credit reference agencies. You can get access to your free credit report from Transunion and Experian. We’re sorry that we can’t help at this stage, but do feel free to apply at a later date. You can apply again after 30 days.
          </p><p>
            You can ask for a free copy of your credit report here:
            <span className="approvedCSS wrap"><u className="approvedCSS"><a href="https://www.transunionstatreport.co.uk/" className="approvedCSS" target="_blank">https://www.transunionstatreport.co.uk/</a></u></span>
            or <span className="approvedCSS wrap"><u className="approvedCSS"><a href="https://www.experian.co.uk/" className="approvedCSS" target="_blank">https://www.experian.co.uk/</a></u></span>
            <br /><br />Thank you for visiting My Community Finance, <span ><u><a target="_blank" href="https://uat-uat-gojoko.cs80.force.com/MCFPortal/s/" className="approvedCSS">return to our homepage</a></u></span>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default RejectOffer;
