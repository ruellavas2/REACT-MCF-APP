
import React, { useState, useEffect } from "react";
import * as Constants from "./utils/Constants";
import { Row, Col, Container } from "react-bootstrap";
import PrevAddressProps from "./PrevAddressProps";
import "./styles.css";


const PrevAddress = () => {
    const [application, setApplication] = useState({});
  
    const [prevAddress, setPrevAddress] = useState({});

    console.log(
        "This is the token=== " + window.location.href.split("iHubId=")[1]
    );

    useEffect(() => {
        setApplication({ loading: true });
        console.info(Constants);
        fetch(Constants.Headers.baseURL + "loanapplications/validateoffertoken", {
            method: "POST",
            headers: new Headers({
                "X-API-KEY": Constants.Headers.apiKey,
                "X-Auth-Token": Constants.Headers.authToken,
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                token: window.location.href.split("iHubId=")[1],
                source: "CREATE",
            }),
        })
            .then((res) => res.json())
            .then((response) => {
                setApplication(response);

                setPrevAddressFunc(response);

            });
    }, [setApplication]);



    const setPrevAddressFunc = (response) => {
        setPrevAddress({
            abodeNumber: response.prevAbodeNumber,
            buildingNumber: response.prevBuildingNumber,
            buildingName: response.prevBuildingName,
            city: response.prevCity,
            street: response.prevStreet,
            postcode: response.prevPostcode,
            
            moveInDate: typeof Response.prevmoveInDate != 'undefined' ? Response.prevmoveInDate.split(' ')[0] : '',
            type: "Previous",
        });
    };

    return (
      
            
            
            <Row>
            {prevAddress.postcode != '' ? 
            ( 
             <>    <span className="quesCSS1">Is this your previous address?    </span>
             <PrevAddressProps prevAddress={prevAddress} />
             </>) 
            :(  <span  className="quesCSS1"> Do you want to enter your previous address?</span>  )} 
         
        
        </Row>


    );
};


export default PrevAddress;
