import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Path from "../images/Path.png";
import FB from "../images/FB.png";
const ContactUs = () => {
    return (


        <Container>



            <Col className="m_top50" >
            <p className="line"></p> 
                <h5 className="title">Contact Us</h5>
             
                <div>
                    <div className="m_top40">
                    <a className="secondary_link" href="tel:0203 375 0221" >0203 375 0221</a>  </div>
                    <div className="font-size-subhead" >9am - 5pm</div>
                    <div className="font-size-subhead">Monday to Friday</div>
                    <div className="m_top20">  <a className="secondary_link" href="mailto:info@mycommunityfinance.co.uk" >info@mycommunityfinance.co.uk</a></div>
                </div>
                <p></p>
                <div className="m_top20" >
                    <a href="https://www.facebook.com/mycommunityfinance/" target="_blank"  className="fb">
                        <span >
                            <img src={FB} />
                        </span>
                    </a>

                    <a href="https://twitter.com/MCommunityFinan" target="_blank" >
                        <span >
                            <img className="TwitterImage" src={Path} />
                        </span>
                    </a>

                </div>
                <p className="m_top50"/>
                
                <div className="font-size-subhead" >My Community Finance</div>
                <div className="font-size-subhead">30 Churchill Place</div>
                <div className="font-size-subhead">Canary Wharf</div>
                <div className="font-size-subhead">London E14 5EU</div>


            </Col>

        </Container>

    )
}

export default ContactUs
