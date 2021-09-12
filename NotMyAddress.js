import { useState } from "react";
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import PrevAddress from "./PrevAddress";
import EnterAddressManually from "./EnterAddressManually";

import { useForm } from "react-hook-form";
import "./styles.css";

const NotMyAddress = (props) => {
  const [show, setShow] = useState(false);
  const [postcode, setPostcode] = useState(false);
  const [manualAddress, setIsManualAddress] = useState(false);
  const [prevManualAddress, setIsPrevManualAddress] = useState(false);
  const [prevpostcode, setPrevPostcode] = useState(false);
  const [addressFound, setAddressFound] = useState(false);
  const [prevAddressFound, setPrevAddressFound] = useState(false);
  const [isNewPrevAddress, setIsNewPrevAddress] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noAddressFound, setNoAddressFound] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [prevAddresses, setPrevAddresses] = useState([]);
  const handleClose = () => setShow(false);
  const handleClick = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddressFoundFalse = () => setAddressFound(false);
  const handlePrevAddressFound = () => setPrevAddressFound(false);


  /*---- Validations--- */
  const {register, handleSubmit, errors} = useForm ();
  /* --------- */

  const onSubmit = (data) =>{
console.log(data)
  }



  const [enterMonth, setEnterMonth] = useState("");
  const [enterYear, setEnterYear] = useState("");
  const [enterMonthErr, setEnterMonthErr] = useState({});
  const [enterYearErr, setEnterYearErr] = useState({});




  const findAddress = (addList, addFound, pcode) => {
    console.info('postcode is', postcode);
    setLoading(true);
    fetch(
      "https://api.mycommunityfinance.co.uk/loanapplications/address?postcode=" + pcode, {
      method: "GET",
      headers: new Headers({
        "X-API-KEY": "8ab7c59b5843653401584365625a0000",
        "Content-Type": "application/json",
      }),
    }
    )
      .then((res) => res.json())
      .then((curResponse) => {
        console.info('list of addresss', curResponse);
        let addressList = [];
        curResponse.possibleMatches.map((value) => {
          addressList.push({
            "value": value.flatNumber + ' ' + value.buildingNumber + ' ' + value.buildingName + ' ' + curResponse.address.address1,
            "key": value.flatNumber + ',' + value.buildingNumber + ',' + value.buildingName + ',' + curResponse.address.address1 + ',' + curResponse.address.Bodyaddress1 + ',' + curResponse.address.town
          });
        });
        addList(addressList);
        addFound(true);
      })
      .then((res) => res.json())
      .then((preResponse) => {
        console.info('list of addresss', preResponse);
        let addressList = [];
        preResponse.possibleMatches.map((value) => {
          addressList.push({
            "value": value.flatNumber + ' ' + value.buildingNumber + ' ' + value.buildingName + ' ' + preResponse.address.address1,
            "key": value.flatNumber + ',' + value.buildingNumber + ',' + value.buildingName + ',' + preResponse.address.address1 + ',' + preResponse.address.Bodyaddress1 + ',' + preResponse.address.town
          });
        });
        addList(addressList);
        addFound(true);
      })
      .catch((error) => {
        console.log(error);
      })

      .finally(() => {
        setLoading(false);
      })

  }




  let curResponse = {};

  const selectCurAddressValue = (val) => {                                       //select this is  address
    console.info('selected address is ', val.split(',')[0]);
    console.info('selected address is ', val.split(',')[1]);
    console.info('selected address is ', val.split(',')[2]);
    console.info('selected address is ', val.split(',')[3]);
    console.info('selected address is ', val.split(',')[4]);
    console.info('selected address is ', val.split(',')[5]);

    curResponse = {
      'abodeNumber': val.split(',')[0],
      'buildingNumber': val.split(',')[1],
      'buildingName': val.split(',')[2],
      'city': val.split(',')[3],
      'street': val.split(',')[4],
      'postcode': val.split(',')[5]

    }

  }

  let preResponse = {};

  const selectPreAddressValue = (val) => {                                       //select this is  address
    console.info('selected address is ', val.split(',')[0]);
    console.info('selected address is ', val.split(',')[1]);
    console.info('selected address is ', val.split(',')[2]);
    console.info('selected address is ', val.split(',')[3]);
    console.info('selected address is ', val.split(',')[4]);
    console.info('selected address is ', val.split(',')[5]);

    preResponse = {
      'abodeNumber': val.split(',')[0],
      'buildingNumber': val.split(',')[1],
      'buildingName': val.split(',')[2],
      'city': val.split(',')[3],
      'street': val.split(',')[4],
      'postcode': val.split(',')[5]

    }
  }

  /* 
    const handleRadioChange = (event)=> {
      props.setState({
        options: event.target.value,
      });
    }
   */
  /* const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
  } */

  /* const formValidation = () => {
    const enterMonthErr = [];
    const enterYearErr = [];
    let isValid = true;

    if (enterMonth.trim().length < 2) {
      enterMonthErr.enterMonthShort = "Entered month is too short";
      isValid = false;
    }


    if (enterMonth.trim().length > 2) {
      enterMonthErr.enterMonthLong = "Entered month is too long";
      isValid = false;
    }

    if (!enterMonth.includes("1234567890")) {
      enterMonthErr.enterMonth123 = "Let us know the month and year you moved in to this address. Enter an estimate month if you're not sure.";
      isValid = false;
    }

    if (enterYear.trim().length < 2) {
      enterYearErr.enterYearShort = "Entered year is too short";
      isValid = false;
    }


    if (enterYear.trim().length > 2) {
      enterYearErr.enterYearLong = "Entered year is too long";
      isValid = false;
    }

    if (!enterYear.includes("1234567890")) {
      enterYearErr.enterYear123 = "Let us know the month and year you moved in to this address. Enter an estimate month if you're not sure.";
      isValid = false;
    }
    setEnterMonthErr(enterMonthErr);
    setEnterYearErr(enterYearErr);
    return isValid;

  }
*/
  const saveAddress = () => {                                              //save address button
    props.setAddresses(curResponse);
    console.log('You clicked submit.');
  }

  const savePrevAddress = () => {
    props.setPrevAddresses(preResponse);
    console.log('You clicked submit.');
  }

  const handleChange = (event) => {
    props.setState({ value: event.target.value });
  };


  if (findAddress == loading) {
    return console.log("Loading");
  }

  return (

    <>

      <a role="button" onClick={handleShow} className="five">
        This is not my current address
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="EnterAddManually" >
          <Modal.Title id="contained-modal-title-vcenter" className="modal_title" >
            <Row >
              <Col>
                <h4 className="EnterAddManuallyTitle">  Add a new address</h4>
              </Col>
              <Col md={7} sm={5}>
                <button onClick={handleClose} className="x">x</button>
              </Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="EnterAddressBody">

        

            <h5>What's your current address?</h5>


            {
              manualAddress ?
                (
                  <>
                    <EnterAddressManually />
                    <p>When did you move in?</p>
                    <Row className="m_top10" >
                      <Col md={2} ld={7}>
                        <input type="text"  maxlength="2" placeholder="MM" name="MM" className="EnterAddressMonth"  ref={register}></input>
                      </Col>
                    
                      <Col>
                        <input type="text"  maxlength="4" placeholder="YYYY" name="YYYY" className="EnterAddressYear"  ref={register}  ></input>
                      </Col>
                    </Row>
                    <p></p>
                    <Row>
                      <PrevAddress ></PrevAddress>


                    </Row>

                    <Row>
                      <Col>
                        <p>  <button className="YesOrNo btn-work" type="button" onClick={() => setIsNewPrevAddress(true)} >Yes </button></p>
                      </Col>
                      <Col>
                        <p>  <button className="YesOrNo btn-work m_left8" onClick={() => setIsNewPrevAddress(false)} type="button"  >No</button></p>

                      </Col>
                    </Row>



                    <Row>




                      {
                        isNewPrevAddress ?
                          (
                            <>
                              <h5 className="m_top40">Add previous address</h5>
                              {
                                !prevManualAddress ?
                                  (
                                    <>
                                      {
                                        !prevAddressFound ?
                                          (
                                            <Row>

                                              <Row className="m_top15"> <Col> <p> <input className="EnterPrevAddPostcode" id="prevpostcode" placeholder="Enter postcode" onBlur={(e) => setPrevPostcode(e.target.value.split(' ').join('').trim())} /></p>    </Col>


                                                <Col>  <p><button type="button" onClick={() => findAddress(setPrevAddresses, setPrevAddressFound, prevpostcode)} className="PrevFindAdd">Find address</button> </p></Col> </Row>



                                              <p><Button variant="link" className="AddPrevAddManually" onClick={() => setIsPrevManualAddress(true)}>Enter address manually</Button></p>

                                            </Row>
                                          )
                                          :
                                          (
                                            <>
                                              <p></p>
                                              <h4>Postcode</h4>
                                              <Row>  <Col> <span>{prevpostcode}</span></Col>
                                                <Col> <Button variant="link" className="change" onClick={handlePrevAddressFound}>Change</Button></Col></Row>
                                              <Row className="dropdown">
                                                <Form.Control className="dropdown-down"
                                                  as="select"  >
                                                  {prevAddresses.map((obj) =>
                                                    <option key={obj.key} value={obj.value}>
                                                      {obj.value}</option>)}
                                                </Form.Control></Row>
                                              <Row>
                                                <p>
                                                  <Button variant="link" className="Manually" onClick={() => setIsPrevManualAddress(true)}>I can’t find my address in the list</Button></p>
                                              </Row>
                                              <p>When did you move in?</p>
                                              <Row >
                                                <Col md={2} ld={7}>
                                                  <p> <input type="text" value={enterMonth} maxlength="2" placeholder="MM" name="MM" className="EnterAddressMonth" onChange={(e) => { setEnterMonth(e.target.value) }} required ></input></p>
                                                </Col>
                                                {Object.keys(enterMonthErr).map((key) => {
                                                  return <div style={{ color: "red" }}> {enterMonthErr[key]} </div>
                                                })}
                                                <Col>
                                                  <p> <input type="text" value={enterYear} maxlength="4" placeholder="YYYY" name="YYYY" className="EnterAddressYear" onChange={(e) => { setEnterYear(e.target.value) }} required></input></p>
                                                </Col>
                                              </Row>
                                              <p></p>

                                            </>
                                          )
                                      }
                                    </>
                                  )
                                  :
                                  (
                                    <>
                                      <EnterAddressManually />
                                      <p>When did you move in?</p>
                                      <Row >

                                        <Col md={2} ld={7}>
                                          <input type="text" value={enterMonth} maxlength="2" placeholder="MM" name="MM" className="EnterAddressMonth" onChange={(e) => { setEnterMonth(e.target.value) }} required ></input>
                                        </Col>
                                        {Object.keys(enterMonthErr).map((key) => {
                                          return <div style={{ color: "red" }}> {enterMonthErr[key]} </div>
                                        })}
                                        <Col>
                                          <input type="text" value={enterYear} maxlength="4" placeholder="YYYY" name="YYYY" className="EnterAddressYear" onChange={(e) => { setEnterYear(e.target.value) }} required></input>
                                        </Col>
                                      </Row>

                                    </>
                                  )
                              }
                            </>
                          )
                          :
                          (
                            <>
                            </>
                          )
                      }
                    </Row>
                    <Row>
                      <Row  >
                        <Col>
                          <button type="Submit" className="Save" onClick={() => {
                            saveAddress();
                            handleClose();
                            savePrevAddress();



                          }}>Save</button>
                        </Col>  </Row>
                    </Row>
                  </>
                )
                :
                (
                  <>
                    {
                      !addressFound ? // first find address when clicked not my address when  clicked on it
                        (
                          <>
                            <input className="slds-input" id="postcode" placeholder="Enter postcode" onBlur={(e) => setPostcode(e.target.value.split(' ').join('').trim())} />
                            <button type="button" onClick={() => findAddress(setAddresses, setAddressFound, postcode)} className="find_address">Find address</button>
                            <p>
                              <Button variant="link" className="Manually" onClick={() => setIsManualAddress(true)}>Enter address manually</Button>
                            </p>
                          </>
                        )
                        :
                        (
                          <>
                            <h4>Postcode</h4>
                            <span>{postcode}</span>
                            <Button variant="link" className="change" onClick={handleAddressFoundFalse}>Change</Button>
                            <Row className="dropdown">
                              <Form.Control className="dropdown-down"
                                as="select"
                                onChange={(e) => selectCurAddressValue(e.target.value)}
                              >
                                {addresses.map((obj) =>
                                  <option key={obj.key} value={obj.key}>
                                    {obj.value}</option>)}
                              </Form.Control></Row>
                            <Row>
                              <p>
                                <Button variant="link" className="Manually" onClick={() => setIsManualAddress(true)}>I can’t find my address in the list</Button></p>
                            </Row>
                            <p>When did you move in?</p>
                            
                            <form onSubmit={handleSubmit (onSubmit)} >
                            <Row >
                              <Col md={2} ld={7}>
                                <p> <input type="text" value={enterMonth} maxlength="2" placeholder="MM" name="month" 
                                className="EnterAddressMonth"  ></input></p>
                              </Col>
                             
                              <Col>
                                <p> <input type="text" value={enterYear} maxlength="4" placeholder="YYYY" name="YYYY" 
                                className="EnterAddressYear"  ></input></p>
                              </Col>
                            </Row>
                           
                            </form>

                            <Row>

                              <PrevAddress></PrevAddress>

                            </Row>
                            <Row></Row>
                             
                            <Row>
                              <Col>
                                <button type="button" className="YesOrNo btn-work" onClick={() => setIsNewPrevAddress(true)} >Yes </button>
                              </Col>
                              <Col>
                                <button type="button" className="YesOrNo btn-work m_left8" onClick={() => setIsNewPrevAddress(false)}  >No</button>
                                <Row className="m_bottom15">
                                </Row>
                              </Col>
                            </Row>

                            {
                              isNewPrevAddress &&
                              <>
                                <Row>
                                  <p className="AddPrevAddHeader">  <h5 className="m_top20" >Add previous address</h5></p> </Row>
                                {
                                  !prevManualAddress ?
                                    (
                                      <>
                                        {
                                          !prevAddressFound ? //this is the previous address shown on click of Find address
                                            (
                                              <Row>

                                                <Row> <Col> <p> <input className="EnterPrevAddPostcode" id="prevpostcode" placeholder="Enter postcode" onBlur={(e) => setPrevPostcode(e.target.value.split(' ').join('').trim())} /></p>    </Col>


                                                  <Col>  <p><button type="button" onClick={() => findAddress(setPrevAddresses, setPrevAddressFound, prevpostcode)} className="PrevFindAdd">Find address</button> </p></Col> </Row>


                                                <p><Button variant="link" className="AddPrevAddManually" onClick={() => setIsPrevManualAddress(true)}>Enter address manually</Button></p>
                                       
                                              </Row>
                                            )
                                            :
                                            (
                                              <>
                                                <p></p>
                                                <h4>Postcode</h4>
                                                <span>{prevpostcode}</span>
                                                <Button variant="link" className="change" onClick={handlePrevAddressFound}>Change</Button>
                                                <Row className="dropdown">
                                                  <Form.Control className="dropdown-down"
                                                    as="select"
                                                    onChange={(e) => selectPreAddressValue(e.target.value)}>
                                                    {prevAddresses.map((obj) =>
                                                      <option key={obj.key} value={obj.value}>
                                                        {obj.value}</option>)}
                                                  </Form.Control></Row>
                                                <Row>
                                                  <p>
                                                    <Button variant="link" className="Manually" onClick={() => setIsPrevManualAddress(true)}>I can’t find my address in the list</Button></p>
                                                </Row>
                                                <p>When did you move in?</p>
                                                <Row >
                                                  <Col md={2} ld={7}>
                                                    <p> <input type="text" value={enterMonth} maxlength="2" placeholder="MM" name="MM" className="EnterAddressMonth" onChange={(e) => { setEnterMonth(e.target.value) }} required ></input></p>
                                                  </Col>
                                                  {Object.keys(enterMonthErr).map((key) => {
                                                    return <div style={{ color: "red" }}> {enterMonthErr[key]} </div>
                                                  })}
                                                  <Col>
                                                    <p> <input type="text" value={enterYear} maxlength="4" placeholder="YYYY" name="YYYY" className="EnterAddressYear" onChange={(e) => { setEnterYear(e.target.value) }} required ></input></p>
                                                  </Col>
                                                </Row>
                                                <p></p>

                                              </>


                                            )

                                        }
                                      </>
                                    )
                                    :
                                    (
                                      <>
                                        <EnterAddressManually />
                                        <p>When did you move in?</p>
                                        <Row >
                                          <Col md={2} ld={7}>
                                            <input type="text" value={enterMonth} maxlength="2" placeholder="MM" name="MM" className="EnterAddressMonth" onChange={(e) => { setEnterMonth(e.target.value) }} required></input>
                                          </Col>
                                          {Object.keys(enterMonthErr).map((key) => {
                                            return <div style={{ color: "red" }}> {enterMonthErr[key]} </div>
                                          })}
                                          <Col>
                                            <input type="text" value={enterYear} maxlength="4" placeholder="YYYY" name="YYYY" className="EnterAddressYear" onChange={(e) => { setEnterYear(e.target.value) }} required ></input>
                                          </Col>
                                        </Row>
                                      </>
                                    )
                                }
                              </>
                            }
                            <Row >
                              <Col>
                                <button type="button" className="Save" onClick={() => {
                                  saveAddress();
                                  handleClose();
                                  savePrevAddress();
                                  handleClick();


                                }}>Save</button>
                              </Col>
                            </Row>


                          </>
                        )}
                  </>
                )
            }
         
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NotMyAddress