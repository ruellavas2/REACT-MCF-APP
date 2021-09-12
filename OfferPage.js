import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import * as Constants from './utils/Constants'


const OfferPage = () => {
  const [application, setApplication] = useState({});


  useEffect(() => {
    console.info(Constants);
    fetch(
      Constants.Headers.baseURL+'loanapplications/viewall',
      {
        method: 'POST',
        headers: new Headers({
          'X-API-KEY' : Constants.Headers.apiKey,
          'X-Auth-Token' : Constants.Headers.authToken,
          'Content-Type' : 'application/json'
        }),
        body : JSON.stringify({ "fromDate":"2021-06-01", "toDate":"2021-06-07", "page":{ "pageNo":1, "pageSize":5 }, "loanId":"1135293" })
      }
    )
      .then(res => res.json())
      .then(response => {
        setApplication(response);
      })
      .catch(error => console.log(error));
  }, 1);

  return (
    <div>
       {JSON.stringify(application.loanApplications[0])}
       {JSON.stringify(application.loanApplications[0].loanId)}
    </div>
  );
}

export default OfferPage
