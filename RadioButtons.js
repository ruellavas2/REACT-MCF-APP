import React, { Component } from "react";
import { Row, Form, Col, Container } from "react-bootstrap";
import * as Constants from "./utils/Constants";


class RadioButtons extends Component {
  constructor(props) {
    super(props);
    if(props.association !== null){
      this.state = {
        options: "Yes",
        values: [],
        association: props.association
      };
    }else{
      this.state = {
        options: "",
        values: [],
        association: props.association
      };
    }
    

    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleAssoChange = this.handleAssoChange.bind(this);

  }

  componentDidMount() {
    fetch(Constants.Headers.baseURL + "association", {
      method: "GET",
      headers: new Headers({
        "X-API-KEY": Constants.Headers.apiKey,
        "Content-Type": "application/json",
      }),
    }
    )
      .then(function (res) {
        return res.json();
      }).then((response) => {
        this.association = response.Association;
        console.log("ass", this.association);
        this.setState({
          values: this.association
        })
      });
  }
  handleRadioChange(event) {
    this.setState({
      options: event.target.value,
    });
  }
  handleAssoChange(event) {
    this.setState({
      association: event.target.value,
    });
    this.props.setFormValue(event.target.value, 'association');
  }


  render() {
    return (
      <>
        <Row>
          <Col md={12} >
            <p className="normal_style m_top15">Are you a member of a trade union or association? E.g. Co-op, National Trust</p>

            <ul className="radio-now" >
              <li>
                <input type="radio" id="a25" name="options" value="Yes" checked={this.state.options === "Yes"}
                  onChange={this.handleRadioChange} />
                <label>Yes</label>
              </li>
              <li>
                <input type="radio" id="a50" name="options" value="No"
                  checked={this.state.options === "No"}
                  onChange={this.handleRadioChange}
                />

                <label>No</label>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <p></p>
          <p></p>
          <Col md={5} >

            {this.state.options === "Yes" ? // If the expression is true, render this
              <div>
                <p className="normal_style m_top15">Which trade union or association?
                </p>
                <Form.Control
                  as="select"
                  defaultValue={this.state.association}
                  className={
                    this.props.errors.accountNumber ? 'slds-selecth form-input-fail' : 'slds-select'
                  }
                
                  onChange={e => this.props.setFormValue(e.target.value, 'association')}
                  {...this.props.register("association", { required: true })}
                >
                  <option value="">Choose one...</option>
                  {this.state.values.map((value) =>
                    <option key={value.associationName} value={value.associationName} >{value.associationName}</option>)}

                </Form.Control>
                <p>          {this.props.errors.association && <span className="error">Let us know if you’re a member
</span>}
</p>
              </div>
              : null}
          </Col>
        </Row>
      </>
    );
  }
}
export default RadioButtons;
