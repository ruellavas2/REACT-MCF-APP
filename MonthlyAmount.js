import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function MonthlyAmount() {
    return (
       <Container>
        <Row> 
        <Col>
         <h3>£125.57</h3>  
         </Col> 

         <Col>
         <h3>20.3%</h3>
         </Col>
        </Row>
        </Container>
    )
}

export default MonthlyAmount
