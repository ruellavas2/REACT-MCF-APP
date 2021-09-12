
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const MarketingPreferences = (props) => {
    return (
        <Container fluid>
             <Row className="m_top20">
      <Col md={5}>
            
                <div className="m_bottom15 card">
                    <p><label className="gheader">Marketing preferences</label></p>
                    <p className="text-justify">I agree to My Community Finance keeping me informed with personalised news, offers, products and promotions it believes would interest me. For more information on how we use your data, please refer to our <a data-target="#privacy_policy" data-toggle="modal" className="link primary_link font-weight-bold"
                        href="#privacy_policy">Privacy Policy.</a></p>
                    <div className="m_top30">
                        <span className="m_left25 custom-checkbox">
                            <input type="checkbox" id="mEmail" {...props.register("mEmail")} 
 className="custom-control-input" />
                            <label  className="custom-control-label">Email</label>
                        </span>
                        <span className="m_left50 custom-checkbox">
                            <input type="checkbox" id="mSMS" {...props.register("mSMS")} className="custom-control-input" />
                            <label  className="custom-control-label">SMS</label>
                        </span>
                        <span className="m_left50 custom-checkbox">
                            <input type="checkbox" id="mTelephone" {...props.register("mTelephone")} className="custom-control-input" />
                            <label  className="custom-control-label">Telephone</label>
                        </span>
                    </div>
                </div>
            </Col>
            </Row>
	</Container >

    )
}

export default MarketingPreferences