import React, { useState, useEffect } from "react";

import SelectSearch from "react-select-search";
import "./styles.css";
import Constants from "./utils/Constants";
import fuzzySearch from "./utils/fuzzySearch";
import Select from "react-select";


const countries = [
  { name: "Swedish", value: "sv" },
  { name: "English", value: "en" },
];

const TypeToSearch = (props) => {
  const [jobTitle, setJobTitle] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.mycommunityfinance.co.uk/loanapplications/address?postcode=tw59pr",
      {
        method: "GET",
        headers: new Headers({
          "X-API-KEY": "8ab7c59b5843653401584365625a0000",
          "Content-Type": "application/json",
        }),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        console.info("response", response);
        const jt = response.address;
        let jtTemp = [];
        jt.map((a) => {
          jtTemp.push({ name: a, value: a });
        });
        setJobTitle(jtTemp);
      })
      .catch((error) => console.log(error));
  }, 1);
  return (

    <SelectSearch
      options={jobTitle}
      search
      filterOptions={fuzzySearch}
      placeholder="Start typing to search..."
      value={props.address}
    />

   
  );
};

export default TypeToSearch;