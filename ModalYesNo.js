import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./styles.css";

class RadioButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: "Yes",
    };

    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleRadioChange(event) {
    this.setState({
      options: event.target.value,
    });
  }

  render() {
    return (
      <ul className="radio-now" >
        <li>
          <input type="radio" id="b60" name="options" value="Y" checked={this.state.options === "Yes"}
            onChange={this.handleRadioChange} />
          <label for="b25">Yes</label>
        </li>
        <li>
          <input type="radio" id="b50" name="options" value="N"
            checked={this.state.options === "No"}
            onChange={this.handleRadioChange}
          />

          <label for="b50">No</label>
        </li>
      </ul>
    );
  }
}
export default RadioButtons;
