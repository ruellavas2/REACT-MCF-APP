import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";




const ReviewPage = () => {
    var name = window.location.href.split("name=")[1]
    return (
        <Container>
            <Row>
                <Col xs={8} >
                    <p className="header_style m_top50">{name}, thanks for submitting your application</p>
                </Col>
            </Row>
            <Row>
                <Col xs={8} className="normal_style">
                    <p>Your application is under review while we check some details. This won’t impact your credit score. We’ll be in touch with you within 24 hours.

                        Return to our homepage.</p>
                    <p><u><a target="_blank" href="https://uat-uat-gojoko.cs80.force.com/MCFPortal/s/" className="approvedCSS">Return to our homepage.</a></u>

                    </p>
                </Col>
            </Row>
        </Container>
    );
};
export default ReviewPage;
