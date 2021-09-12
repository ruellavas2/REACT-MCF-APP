import React, { useState, useEffect } from "react";
import { Container, Row, Table, Col } from "react-bootstrap";
import * as Constants from "./utils/Constants";
import dd_logo from "../images/DD_Logo.png";

import {
    useLocation
} from "react-router-dom";

const DDMandate = () => {
    const [app, setApp] = useState({});
    let location = useLocation();

    useEffect(() => {
        setApp({ loading: true });
        fetch(Constants.Headers.baseURL + "loanapplications/wrapper/genagreement", {
            method: "PUT",
            headers: new Headers({
                "X-API-KEY": Constants.Headers.apiKey,
                "X-Auth-Token": Constants.Headers.authToken,
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                token: new URLSearchParams(location.search).get("iHubId"),
                state: "GEN_AGREEMENT",
            }),
        })
            .then((res) => res.json())
            .then((response) => {
                console.info("response is ", response);
                response = {
                    "isValid": true,
                    "applicant": "Miss. JOANNA ROSI CURRIN",
                    "loanApplicationId": 1138493,
                    "status": "ARST",
                    "allocatedCU": "My Community Bank",
                    "cuLeagalName": "Brent Shrine Credit Union Limited",
                    "cuRegNumber": "IP00007C",
                    "cuAddress": "Ivybridge House, 1 Adam Street, London, WC2N 6LE",
                    "cuEmail": "ramyakrushna_k@persistent.co.in",
                    "cuReferenceNumber": "213245",
                    "cuPhoneNumber": null,
                    "serviceUserNumber": "171101",
                    "cuId": "BS-0001",
                    "loanAmount": 2000.00,
                    "loanAPR": 37.35,
                    "loanRate": 32.16,
                    "loanTermMonths": 12,
                    "emiAmount": 197.11,
                    "totalInterestDue": 431.6600000000001,
                    "arrangementFee": 0.0,
                    "totalCost": 2431.66,
                    "firstInstallmentDate": "15/09/2021",
                    "firstRepayment": "197.11",
                    "lastRepayment": "197.11",
                    "esignUrl": "https://api-test.mycommunityfinance.co.uk/cuplatform/loanapplications/agreementDraft?agreementID=VDdyWjBTQjhoeWZkYzgxMU9rS2dSWVJET3BKc1FJZEthVU8xbTV6WmVIckRZNWo4UVRPSGpJNGpHRllvWUdSaTExMzg0OTM=&apiKey=8ab7c59b5843653401584365625a0000",
                    "resumeAgreementURL": "https://uat-uat-gojoko.cs80.force.com/MCFPortal/s/mcf-createaccountab?iHubId=VDdyWjBTQjhoeWZkYzgxMU9rS2dSWVJET3BKc1FJZEthVU8xbTV6WmVIckRZNWo4UVRPSGpJNGpHRllvWUdSaTExMzg0OTM="
                };
                if (response.isValid) {
                    var name = response.applicant.split(" ");
                    name = name[1] + " " + name[2] + " " + name[3];
                    response.applicant = name;
                    setApp(response);
                } else {
                    //alert("Your link is expired");
                    //window.location.assign("/expired");
                }
            });
    }, [setApp]);
    return (
        <Container className="">
            <Row className="m_top50 ">
                <div className="col-md-8">

                </div>
                <div className="col-md-4">
                    <img
                        src={dd_logo} alt="My Community Finance Logo" className="dd_logo" />
                </div>
            </Row>
            <Row className="">
                <div className="col-md-4">
                    <p className="bold_regular">{app.allocatedCU}</p>
                    <p className="bold_regular">{app.cuAddress}
                    </p>
                    <p className="bold_regular">Name of account holder</p>
                    <p className="dd_box">{app.applicant}</p>

                    <p className="bold_regular">Bank/Building Society account number</p>
                    <p className="dd_box">{app.applicant}</p>

                    <p className="bold_regular">Branch sort code</p>
                    <p className="dd_box">{app.applicant}</p>
                    <p className="bold_regular">Name and full postal address of your
                        Bank/Building Society
                    </p>
                    <p className="dd_box">{app.applicant}</p>
                </div>
                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                    <p className="bold_regular">Instruction to your bank or building society to
                        pay by Direct Debit
                    </p>
                    <p className="bold_regular">Service User Number</p>
                    <p className="dd_box">{app.serviceUserNumber}</p>

                    <p className="bold_regular">Reference</p>
                    <p className="dd_box">{app.cuReferenceNumber}</p>

                    <p className="bold_regular">Instruction to your Bank or Building Society</p>
                    <p className="">Please pay L&Z Re {app.allocatedCU} Direct Debits from the account detailed in this Instruction subject to the safeguards assured by the Direct Debit Guarantee. I understand that this instruction may remain with L&Z Re {app.allocatedCU} and, if so, details will be passed electronically to my bank/building society.</p>
                    <p className="bold_regular">Date</p>
                    <p className="dd_box">{app.cuReferenceNumber}</p>
                </div>
                <hr></hr>

            </Row>

          
            <Row className="m_top50">
                <div className="row m_top50">
                    <div className="col-md-10"><h2 className="sub_heading font-weight-bold">The Direct Debit Guarantee</h2>
                    </div>
                    <div className="col-md-2"><img
                        src={dd_logo} alt="My Community Finance Logo" className="dd_logo" /></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="m_bottom200">
                            <li>This Guarantee is offered by all banks and building societies that accept instructions to pay Direct Debits.
                            </li>
                            <li className="m_top10">If there are any changes to the amount, date or frequency of your Direct Debit <span
                                className="font-weight-bold">L&Z re {app.allocatedCU}</span> will
                                notify you 3 working days in advance of your
                                account being debited or as otherwise agreed. If you request <span className="font-weight-bold">
                                    L&Z re  {app.allocatedCU}</span> to collect a payment,
                                confirmation of the amount and date will be
                                given to you at the time of the request.</li>
                            <li className="m_top10">If an error is made in the payment of your Direct Debit, by <span className="font-weight-bold">L&Z
                                re {app.allocatedCU}</span> or your bank or building
                                society, you are entitled to a full and
                                immediate refund of the amount paid from your bank or building society.</li>
                            <li className="m_top10">If you receive a refund you are not entitled to, you must pay it back when <span
                                className="font-weight-bold">L&Z re {app.allocatedCU}</span> asks you to.
                            </li>
                            <li className="m_top10">You can cancel a Direct Debit at any time by simply contacting your bank or building society.
                                Written
                                confirmation may be required. Please also notify us.</li>
                        </ul>
                    </div>
                </div>
            </Row>

        </Container>
    );
};
export default DDMandate
