import React from 'react'
import {  Col } from 'react-bootstrap';

const Legal = () => {
    return (

        <Col className="m_top50">
         <h5 className="title ">Legal</h5>
      
              <p className="m_top40"> <a href="https://uat.mycommunityfinance.co.uk/legal/terms" rel="noopener noreferrer" target="_blank" className="sub_section_type" > Website Terms  </a> </p>
              <p> <a href="https://uat.mycommunityfinance.co.uk/legal/privacy-policy" rel="noopener noreferrer" target="_blank" className="sub_section_type" >Privacy Policy</a></p> 
                <p ><a href="https://uat.mycommunityfinance.co.uk/legal/cookie-policy" rel="noopener noreferrer" target="_blank" className="sub_section_type" >Cookie Policy</a></p>
               <a  className="sub_section_type"  href="https://www.mycommunityfinance.co.uk/complaints" rel="noopener noreferrer" target="_blank" className="sub_section_type" >Complaints</a>
                </Col>

       
    )
}

export default Legal