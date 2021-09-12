import React, { useState, useEffect } from "react";
import Address from "./Address";
import LoanQuote from "./LoanQuote";
import TypeToSearch from "./utils/TypeToSearch";

import * as Constants from "./utils/Constants";
import { Container, Row, Col } from "react-bootstrap";
import EmployerName from "./EmployerName";
import IndustrySearch from "./IndustrySearch";
import PhoneNumber from "../PhoneNumber";
import Email from "./Email";
import RadioButtons from "./RadioButtons";
import BankDetails from "./BankDetails";
import NotMyAddress from "./NotMyAddress";
import { useForm } from "react-hook-form";
import useFullPageLoader from "./useFullPageLoader";
import congo from "../images/MCF_Congratulation.png";
import MarketingPreferences from "./MarketingPreferences"


import {
  useLocation
} from "react-router-dom";



const AcceptOffer = () => {


  const [application, setApplication] = useState({});
  const [address, setAddress] = useState({});
  const [prevAddress, setPrevAddress] = useState({});
  const [aggLogo, setAggLogo] = useState({});



  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const { register, handleSubmit, setError, clearErrors, focusErrorField, formState: { errors }, setValue } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur"
  });
  const onError = (errors, e) => console.log(errors, e);
  let [formData] = useState({});
  const { onBlur } = register("employmentPosition");

  let isDupesApp = false;

  let location = useLocation();


  const updateAPI = (data) => {
    console.log(" In Update API");
    showLoader();
     userAction(); // get ipaddress
     console.info(JSON.stringify(data));
      var obj = {
        "token": new URLSearchParams(location.search).get("iHubId"),
        "phonenumber": data.phoneNumber,
        "accountNumber": data.accountNumber,
        "sortCode": data.sortCode,
        "sector": data.sector,
        "employmentPosition": data.employmentPosition,
        "association": data.association,
        "employerName": data.employerName,
        "aggregator": data.aggregator,
        "mEmail":data.mEmail,
        "mSMS":data.mSMS,
        "mTelephone":data.mTelephone,
      }
      console.info(JSON.stringify(obj));
    fetch(Constants.Headers.baseURL + "loanapplications/update", {
      method: "PUT",
      headers: new Headers({
        "X-API-KEY": Constants.Headers.apiKey,
        "X-Auth-Token": Constants.Headers.authToken,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("data.diffInHours=", data.diffInHours);
        console.info("update response is ", response);
        if (data.diffInHours > 24)
          engine1API();
        else
          AcceptAPI();
          
      });
  }
  const engine1API = () => {
    alert("engine1API");
    showLoader();

    fetch(Constants.Headers.baseURL + "loanapplications/wrapper/engine1", {
      method: "POST",
      headers: new Headers({
        "X-API-KEY": Constants.Headers.apiKey,
        "X-Auth-Token": Constants.Headers.authToken,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        "token": new URLSearchParams(location.search).get("iHubId"),
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.info("wrapper/engine1 ", response);
        if (response.status == "REJECTED") {
          var url = "/loans/reject?name=" + response.firstName;
          window.location.assign(url);
        } else if (response.status == "APPROVED") {
          AcceptAPI();
        } else {
          var url = "/loans/reviewPage?name=" + response.firstName;
          window.location.assign(url);
        }
      });
  }
  /** Ivoation changes */
  const userAction = async () => {
    const response = await fetch('https://api.bigdatacloud.net/data/ip-geolocation?key=132da9e216ec4e88a5c06414e19adfe6');
    const myJson = await response.json();
    //alert('myJson'+myJson.ip);
    document.getElementById('ipAdd').value = myJson.ip;
    console.log(document.getElementById('ipAdd').value);
  }
  /***/
  const AcceptAPI = () => {
    showLoader();
    
    /** blackbox code */
    var blackbox_info = window.IGLOO.getBlackbox();
    console.info(blackbox_info);
    var bb_field = blackbox_info.blackbox;
    var ip = document.getElementById('ipAdd').value;
    console.log("ip=",document.getElementById('ipAdd').value);

    /**  */

    fetch(Constants.Headers.baseURL + "loanapplications/wrapper/accept", {
      method: "PUT",
      headers: new Headers({
        "X-API-KEY": Constants.Headers.apiKey,
        "X-Auth-Token": Constants.Headers.authToken,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        "token": new URLSearchParams(location.search).get("iHubId"),
        "state": "ACCEPTED",
        "queryID": new URLSearchParams(location.search).get("queryID"),
        "brandID": new URLSearchParams(location.search).get("brandID"),
        "blackbox": bb_field,
        "ipaddress": ip,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        hideLoader();

        console.info("Accept response ", response);
        var name = response.applicant.split(" ");
        if (response.status == "APPR") {
          var url = "/loans/acceptPage?name=" + name[1];
          window.location.assign(url);
        }else{
          var url = "/loans/reject?name="  + name[1];
          window.location.assign(url);
        }
        
      });
  }
  const onSubmit = (data) => {
    //alert(JSON.stringify(data));
    if (data.employmentPosition == '') {
      setError('employmentPosition', { message: 'select job tittle', type: 'required', shouldFocus: true });
      console.info('data', JSON.stringify(data));
      var j = document.getElementById("employmentPosition");
      j.scrollIntoView();
      j.focus();
      return;
    } else {
      clearErrors('employmentPosition');
    }
    console.info(JSON.stringify(data));
    console.log("onSubmit");
    updateAPI(data);
  };


  {/*console.log(
    "This is the token=== " + new URLSearchParams(location.search).get("iHubId")
  );*/}
  const setFormValue = (valueofElement, name) => {
    //alert(valueofElement + name);
    formData[name] = valueofElement;
    console.info('Main componennt ');
    setValue('employmentPosition', valueofElement)
  }

  const setAddresses = (val) => {
    console.info('I am callign this method from child NotMyAddress ', val);
    setAddressFunc(val);
  }

  const setPrevAddresses = (val) => {
    console.info('I am callign this method from child NotMyAddress ', val);
    setPrevAddressFunc(val);
  }




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
        token: new URLSearchParams(location.search).get("iHubId"),
        source: "CREATE",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.info("response is ", response);
        console.log("diffInHours" + response.diffInHours);
        if (response.isValid) {
          setApplication(response);
          setAddress(response);
          setAddressFunc(response)
          setPrevAddress(response)
          setPrevAddressFunc(response);
          setAggLogo("/images/aggLogo/" + response.aggregator + ".svg");



          if (response.diffInHours > 24) {
            isDupesApp = true;
            console.log("dupesapp true");
          }
          if (null != response.iHubId) setValue('iHubId', response.iHubId);
          if (null != response.phoneNumber) setValue('phoneNumber', response.phoneNumber);
          if (null != response.employerName) setValue('employerName', response.employerName);
          if (null != response.employmentPosition) setValue('employmentPosition', response.employmentPosition);
          if (null != response.sector) setValue('sector', response.sector);
          if (null != response.accountNumber) setValue('accountNumber', response.accountNumber);
          if (null != response.sortCode) setValue('sortCode', response.sortCode);
          if (null != response.association) setValue('association', response.association);
          if (null != response.diffInHours) setValue('diffInHours', response.diffInHours);
          if (null != response.aggregator) setValue('aggregator', response.aggregator);


        } else {
          alert("Your link is expired");
          window.location.assign("/expired");

        }



      });
  }, [setApplication]);





  const setAddressFunc = (curResponse) => {
    setAddress({
      abodeNumber: curResponse.abodeNumber,
      buildingNumber: curResponse.buildingNumber,
      buildingName: curResponse.buildingName,
      city: curResponse.city,
      street: curResponse.street,
      postcode: curResponse.postcode,
      moveInDate: typeof curResponse.moveInDate != 'undefined' ? curResponse.moveInDate.split(' ')[0] : '',
      type: "Current",
    });
    console.info("response for cur add is ", address);
  };

  const setPrevAddressFunc = (preResponse) => {
    setPrevAddress({
      abodeNumber: preResponse.prevAbodeNumber,
      buildingNumber: preResponse.prevBuildingNumber,
      buildingName: preResponse.prevBuildingName,
      city: preResponse.prevCity,
      street: preResponse.prevStreet,
      postcode: preResponse.prevPostcode,
      country: preResponse.prevcountry,
      moveInDate: typeof preResponse.prevmoveInDate != 'undefined' ? preResponse.prevmoveInDate.split(' ')[0] : '',
      type: "Previous"
    });
    console.info("response for prev add is ", prevAddress);
  };



  return (
    <>

      <Row className="banner" >
        <Col xs={1}></Col>
        <Col xs={0} lg={8} md={5}>
          <div className="banner-text" > Complete your quote below </div>          </Col>
        <Col xs={1}></Col>
      </Row>

      <Container>
        <form onSubmit={handleSubmit(onSubmit, onError)}>

          <Row>
            <Col xs={12} md={8} lg={6}>
              <p className="header_style m_top50">Great news {application.firstName}, you’ve been conditionally approved for a loan!</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} xs={12}>
              <p className="partner">
                In partnership with<br></br>


                <img
                  src={aggLogo}
                  width="50%"
                  height="50%"
                  alt={application.aggregator}
                />


              </p>
              <p className="normal_style">
                Your application has been
                <span className="approvedCss"> conditionally approved </span>
                based on the details you’ve provided. As a responsible lender, we
                still need to verify all the information in your application.
              </p>
              <Row>
                <p className="normal_style">Here’s a summary of your loan offer </p>
                <Col xs={12} md={8}>
                  <LoanQuote application1={application} />
                </Col>
              </Row>
            </Col>
            <Col lg={6} className="mobileHide tabhide">
              <img src={congo} />
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <p className="normal_style m_2top15">
                The rate we’ve offered will <b> not </b> change.
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <p className="header_style">What next? </p>
              <p className="normal_style">Almost there, we just need a little more information from you to process your loan application.</p>
            </Col>
            <Row>
              <Col>
                <p className="quesCSS1">Your email address</p>
                <Email application={application} />


                {prevAddress.postcode != '' ? (
                  <Address address={prevAddress} />) : null}
                <Address address={address} />

                <NotMyAddress setAddresses={setAddresses} setPrevAddresses={setPrevAddresses} />
                <p className="quesCSS1 m_top15">Your UK mobile number</p>
                <PhoneNumber phoneNumber={application.phoneNumber} register={register} errors={errors} />
                <p className="quesCSS1 m_top15">Your employment</p>
                <p className="normal_style m_top15">What’s your job title?</p>
                <TypeToSearch employmentPosition={application.employmentPosition} setFormValue={setFormValue} register={register} errors={errors} />
                <p className="normal_style m_top15">What’s your employer’s name?</p>
                <EmployerName employerName={application.employerName} register={register} errors={errors} />
                <p className="normal_style m_top15">What industry or sector do you work in?</p>
                <IndustrySearch sector={application.sector} register={register} errors={errors} />
                <RadioButtons association={application.association} register={register} errors={errors} />
                <p></p>

              </Col>
            </Row>
            <p></p>
            <p></p>
            <BankDetails bankDetails={application} register={register} errors={errors} />
            <MarketingPreferences markDetails={application} register={register} errors={errors}></MarketingPreferences>
            <Row>
              <Col>
                <input type="hidden" id="ipAdd"></input>
                <input type="submit" value="Accept my quote"
                  className="accept" />
              </Col>
            </Row>
            <Row>
              <p></p>
              <Col xs={12} md={6} lg={3}>
                <div className="trustpilot-widget" data-locale="en-GB" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="5d5eac75a5e46b00015f590a" data-style-height="150px" data-style-width="100%" data-theme="light" data-tags="SelectedReview">
                  <a href="https://uk.trustpilot.com/review/www.mycommunityfinance.co.uk" target="_blank" rel="noopener">Trustpilot</a>
                </div>
              </Col>
              <p></p>
            </Row>
          </Row>
        </form>
      </Container>
    </>

  );
};
export default AcceptOffer;
