import React from "react";
import { Row, Form, Col } from "react-bootstrap";
import "./styles.css";


const EmployerName = (props) => (

  <Row>
    <Col md={5} >
      <Form.Control placeholder="Employer Name" defaultValue={props.employerName}
        onBlur={e => props.setFormValue(e.target.value, 'employerName')}
        className={
          props.errors.employerName ? 'select-search form-input-fail' : 'select-search'
        }
        {...props.register("employerName", { required: true })} />
      <p>{props.errors.employerName && <span className="error">Enter your employer name</span>}
      </p>
    </Col>
  </Row>

);


export default EmployerName;
