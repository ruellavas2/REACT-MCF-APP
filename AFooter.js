import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import footer_logo from "../images/footer_logo.png";
import Path from "../images/Path.png";
import FB from "../images/FB.png";


const AFooter = () => {
    return (
<Container fluid>
  <div className="row bg-dark">
    <div className="col-md-12">
      <div className="container footer-content">
        <div className="row m_top50 m_top40_tb m_top45_mb">
          <div className="col-6">
          <img className="img_style_mob" alt="My Community Finance Logo" src={footer_logo} />
          </div>
          <div className="col-6">
            <a href="#" className="back-to-top" >Back to top</a>
          </div>
        </div>
        <div className="row light_text reverse">
          <div className="col-md-7 col-lg-8 float_right_mb">
            <div className="row">
              <div className="col-md-7 col-lg-5 m_top15_mb">
                <div className="row">
                  <div className="col-md-12 m_top50 m_top40_tb m_top35_mb">
                    <p className="title">My Community Finance</p>
                  </div>
 
                  <div className="col-md-12 m_top30">
                  <a href="https://www.mycommunityfinance.co.uk/about" rel="noopener noreferrer" target="_blank" className="sub_section_type"  >About Us</a>
                  </div>
                  <div className="col-md-12 m_top10">
                  <a href="https://www.mycommunityfinance.co.uk/saving-products" className="sub_section_type" target="_blank" >Savings</a>
                  </div>
                  <div className="col-md-12 m_top10">
                  <a href="https://mycommunityfinance.force.com/MCFPortal/s/mcf-public-landing-page" className="sub_section_type" target="_blank"   >Loans</a>
                  </div>
                  <div className="col-md-12 m_top10">
                  <a href="https://www.mycommunityfinance.co.uk/faq" className="sub_section_type" target="_blank">FAQ</a>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
                <div className="row">
                  <div className="col-md-12 m_top50 m_top40_tb m_top35_mb">
                    <p className="title">Legal</p>
                  </div>

                  <div className="col-md-12 m_top30">
                  <a href="https://uat.mycommunityfinance.co.uk/legal/terms" rel="noopener noreferrer" target="_blank" className="sub_section_type" > Website Terms  </a>
                  </div>
                  
                  <div className="col-md-12 m_top10">
                  <a href="https://uat.mycommunityfinance.co.uk/legal/privacy-policy" rel="noopener noreferrer" target="_blank" className="sub_section_type" >Privacy Policy</a>
                  </div>

                  <div className="col-md-12 m_top10">
                  <a href="https://uat.mycommunityfinance.co.uk/legal/cookie-policy" rel="noopener noreferrer" target="_blank" className="sub_section_type" >Cookie Policy</a>
                  </div>
                  
                  <div className="col-md-12 m_top10">
                  <a  className="sub_section_type"  href="https://www.mycommunityfinance.co.uk/complaints" rel="noopener noreferrer" target="_blank" className="sub_section_type" >Complaints</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m_top90">
              <div className="col-md-12">
                <p className="uiOutputText">
                  My Community Finance is the registered trading name of Amplifi Capital (UK) Ltd [Amplifi] with UK
                  company number 08641995 and registered address 30 Churchill Place, Canary Wharf, London E14 5EU.
                  Amplifi Capital (U.K.) is authorised and regulated by the Financial Conduct Authority with FRN 718749.
                  Amplifi is registered with the Information Commissioner’s Office with
                  registration number ZA040320. Amplifi partners with the Community Finance Network; the Community
                  Finance
                  Network is a group of Credit Unions and CDFIs committed to providing fair and ethical loans.
                  Participating Credit Unions are authorised by the Prudential Regulation Authority (Bank of England)
                  and
                  regulated by the Financial Conduct Authority. Participating CDFIs are regulated by the Financial
                  Conduct
                  Authority. Their respective details, including registration numbers with both regulatory bodies, can
                  be
                  found on the Community Finance Network website.
                </p>
                <p className="decription_style m_top25">Website by Gojoko Marketing Ltd</p>
                <p className="decription_style m_top25 m_bottom75 m_bottom55_tb m_bottom55_mb lighten_text">
                  © My Community Finance. All rights reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="row">
              <div className="col-md-2"></div>

              <div className="col-md-10  col-md-10 border border-light border-top-0 border-right-0
                border-bottom-0 text_light border_left_none_mb m_top50 m_top40_tb">
                <div className="row">
                  <div className="col-md-12">
                   
                    <h4 className="title m_bottom0">Contact Us</h4>
                  </div>
                </div>

                <div className="row m_top35">
                  <div className="col-md-12">
                  <a className="secondary_link" href="tel:0203 375 0221" >0203 375 0221</a>
                    <p className="m_bottom0 font-size-subhead"> 9am - 5pm</p>
                    <p className="m_bottom0 font-size-subhead"> Monday to Friday</p>
                  </div>
                </div>
                <div className="row m_top25 m_top35_tb m_top20_mb">
                  <div className="col-md-12">
                  <a className="secondary_link" href="mailto:info@mycommunityfinance.co.uk" >info@mycommunityfinance.co.uk</a>
                  </div>
                </div>
                <div className="row m_top25">
                  <div className="col-md-12">
                  <a href="https://www.facebook.com/mycommunityfinance/" target="_blank"  className="fb">
                        <span >
                            <img src={FB} alt="Our Facebook link" className="img-fluid"/>
                        </span>
                    </a>

                    <a href="https://twitter.com/MCommunityFinan" target="_blank" >
                        <span >
                            <img src={Path} className="TwitterImage ml-4 twitter img-fluid" alt="Our Twitter link"/>
                        </span>
                    </a>
                 
                  </div>
                </div>
                <div className="row m_top40 m_top25_mb">
                  <div className="col-md-12">
                    <p className="font-size-subhead">
                      30 Churchill Place,<br />
                      Canary Wharf,<br />
                      London E14 5EU,<br />
                      UK<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


	   </Container>

    )
}

export default AFooter
