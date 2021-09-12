import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import footer_logo from "../images/footer_logo.png";
import "./styles.css";
import ContactUs from "./ContactUs";
import RightsRes from "./RightsRes";
import About from "./About";
import Legal from "./Legal";


const Footer = () => {
	return (
		
		<Container fluid className="footer " >
		<div className="Foot_Margin" sm={8} md={7} lg={8}>
		
						<Row  >
							<Col >
								
								<img className="img_style_mob" alt="My Community Finance Logo" src={footer_logo} />
							</Col>
							<Col md={2} sd={5} xs={2} >
							<a className="back-to-top" href="#">Back to top</a>
							</Col>
						</Row>

						<Row >
							<Col>
							<About/>
							</Col>
							<Col>
							<Legal/>
							</Col>
							
						 	
							<Col>
							
							<ContactUs/>
							</Col>
					   </Row>
                   
						
						
							
			
			          <Row   >
						  <Col md={8}  sm={0}>
							<RightsRes  /></Col>
							
					   </Row>		
			 		
		</div>
	   </Container>

	);
};
export default Footer;
