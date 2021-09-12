import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./styles.css";
const PrevAddressProps = (props) => (
    

    
            <>
         
                <p className="normal_style">
                    {props.prevAddress.buildingNumber} {props.prevAddress.abodeNumber}{" "}
                    {props.prevAddress.buildingName}
                    <br></br>
                    {props.prevAddress.street}
                    <br></br>
                    {props.prevAddress.city}
                    <br></br>
                    
                    {props.prevAddress.postcode} {props.prevAddress.country}
                    <br></br>
                    <br></br>
                    Moved in :{props.prevAddress.moveInDate}
                </p>
            </>
);

export default PrevAddressProps;
