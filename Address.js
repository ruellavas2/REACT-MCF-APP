import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./styles.css";
const Address = (props) => (
            <>
          <span className="quesCSS1">Your {props.address.type} address</span>
                <p className="normal_style">
                    {props.address.buildingNumber} {props.address.abodeNumber}{" "}
                    {props.address.buildingName}
                    <br></br>
                    {props.address.street}
                    <br></br>
                    {props.address.city}
                    <br></br>
                    
                    {props.address.postcode} {props.address.country}
                    <br></br>
                    <br></br>
                    Moved in :{props.address.moveInDate}
                </p>
            </>
);

export default Address;
