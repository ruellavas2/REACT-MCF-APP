import { Component } from "react";
import "./styles.css";
import EnterAddressManually from "./EnterAddressManually"
import PrevAddress from "./PrevAddress";
import ModalYesNo from "./ModalYesNo";
import { Modal, Button, Row, Col, Container, Form } from 'react-bootstrap';
import Save from "./Save";



class FindAddress extends Component {
    constructor(props) {
        super(props);
        this.state = { postcode: '' };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });

    };

    myChangeHandler = (event) => {

        this.setState({ postcode: event.target.value });
    }

    render() {
        return (<>
            <Form>

                <input type="text" onChange={this.myChangeHandler} maxlength="8" placeholder="Enter postcode" className="slds-input"></input> <> </>

                <button type="submit" onClick={this.showModal} className="find_address">Find address</button></Form>

            <main >
                <Container className="Modal-fade-in-open">
                    <Modal show={this.state.show} handleClose={this.hideModal} aria-labelledby="contained-modal-title-vcenter"
                        centered >
                        <Modal.Header className="EnterAddManually" >
                            <Modal.Title id="contained-modal-title-vcenter" className="modal_title" >
                                <Row >
                                    <Col>
                                        <h4 className="EnterAddManuallyTitle">  Add a new address</h4>
                                    </Col>
                                    <Col md={7} sm={5}>
                                        <button onClick={this.hideModal} className="x">x</button>
                                    </Col>
                                </Row>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="EnterAddressBody">
                            <Form>
                            <Row>
                                <p></p>

                                <h5  >What's your current address?</h5>
                                <p></p>

                                <h5>Postcode</h5>

                                <Row>

                                    <Col>    <h5>{this.state.postcode}</h5></Col>
                                     <Col> <h5 style={{ color: "#1d7d7b" }}>Change</h5></Col>

                                </Row>
                                <Row>
                                    <p></p>
                                    <EnterAddressManually></EnterAddressManually>

                                    <p></p>

                                </Row>
                                <p>When did you move in?</p>
                                <Row >
                                    <Col md={2} ld={7}>
                                        <input type="text" aria-invalid="true" maxlength="2" placeholder="MM" name="MM" className="EnterAddressMonth" style={{ width: "4rem", paddingLeft: "1rem" }}></input>
                                    </Col>
                                    <Col>
                                        <input type="text" aria-invalid="true" maxlength="4" placeholder="YYYY" name="YYYY" className="EnterAddressMonth" style={{ width: "4rem" }}></input>
                                    </Col> </Row>
                                <p></p>

                                <Row>
                                    <PrevAddress></PrevAddress>
                                </Row>
                                <p></p>
                                <Row>
                                    <ModalYesNo />
                                </Row>
                                <p></p>
                                <p></p>

                                <Save />

                            </Row>
                            <p></p>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </Container>
            </main></>
        );
    }
}

export default FindAddress
