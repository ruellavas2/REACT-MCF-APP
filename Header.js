import { Container, Row, Col } from "react-bootstrap";
import header_logo from "../images/header_logo.png";
import phone from "../images/phone.svg";
 
const Header = (propsy) => {
  return (
    <>
      <Container className="borderd">
        <Row className="m_pad10">
          <Col xs={8}>
            <img width="200" src={header_logo} />
          </Col>
          <Col xs={4} className="mobileHide">
            <p className="help_text">Need some help?<br></br>
              <img src={phone} />&nbsp;&nbsp;0203 375 0221
            </p>
          </Col>
        </Row>
      </Container>
 
    </>
  );
};
 
Header.defaultProps = {
  value: "My Community finance",
};
 
export default Header;