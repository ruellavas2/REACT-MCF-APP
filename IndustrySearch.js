import { Row, Form, Col } from "react-bootstrap";
import React, {
  useState,
  useEffect
} from "react";
import * as Constants from "./utils/Constants";


function IndustrySearch(props) {

  const [sectors, setSectors] = useState([]);
  useEffect(() => {
    fetch(Constants.Headers.baseURL + "employers/business", {
      method: "GET",
      headers: new Headers({
        "X-API-KEY": Constants.Headers.apiKey,
        "Content-Type": "application/json",
      }),
    }
    )
      .then((res) => res.json())
      .then((response) => {
        console.info("sectors", response);
        const jt = response;
        let jtTemp = [];
        jt.map((a) => {
          jtTemp.push({
            name: a,
            value: a
          });
        });
        setSectors(jtTemp);
      })
      .catch((error) => console.log(error));
  }, [1]);

  return (
    <div>
      <Row>
        <Col md={5} >
          <Form.Control   
            as="select"
            defaultValue={props.sector}
            onChange={e => props.setFormValue(e.target.value, 'sector')}
            {...props.register("sector", { required: true })}

            className={
              props.errors.sector ? 'slds-select form-input-fail' : 'slds-select'
            } 
          >
            <option value="">Choose one...</option>
            {sectors.map((value) =>
              <option key={value.name} value={value.value}
                >
                {value.value}</option>)}

          </Form.Control>
          <p>{props.errors.sector && <span className="error">Enter your indutry/sector</span>}</p>



        </Col>
      </Row>
    </div>
  );
}

export default IndustrySearch;
