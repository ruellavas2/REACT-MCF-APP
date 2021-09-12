
import React, { useState, useEffect,  Component  } from "react";
import { Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import SelectSearch from "react-select-search";
import "./styles.css";
import Constants from "./utils/Constants";
import fuzzySearch from "./utils/fuzzySearch";
import Select from "react-select";






const countries = [
  { name: "tw59pr", value: "11" },
  { name: "English", value: "en" },
];

const AddressDrop = (props) => {
  const [addressDrop, setAddressDrop] = useState([]);
  const [application, setApplication] = useState({});

  useEffect(() => {
    fetch(
        "https://api.mycommunityfinance.co.uk/loanapplications/address?postcode=Hu114AJ", {
          method: "GET",
          headers: new Headers({
            "X-API-KEY": "8ab7c59b5843653401584365625a0000",
            "X-Auth-Token": "Constants.Headers.authToken",
          }),
        }
      )
      .then((res) => res.json())
      .then((response) => {
        console.info("response", response);
        const jt = response.address1;
        let jtTemp = [];
        jt.map((a) => {
          jtTemp.push({ name: a, value: a });
        });
        setAddressDrop(jtTemp);
      })
      .catch((error) => console.log(error));
  }, 1);
  return (

    <
    SelectSearch options = {
      addressDrop
    }
    search filterOptions = {
      fuzzySearch
    }
    placeholder = "Select to Search"
    value = {
      props.buildingNumber
    }
    onChange = {
      e => props.setFormValue(e.target.value, 'buildingNumber')
    }

    />
   
  );
};
      
 
export default AddressDrop;