import React from 'react'
import { Row } from 'react-bootstrap'
import AcceptButton from './AcceptButton'
import JobTitle from './JobTitle'
import LastTitle from './LastTitle'
import LoanCostAmount from './LoanCostAmount'
import Search from './Search'
import TotalPayback from './TotalPayback'
import TotalPaybackAmnt from './TotalPaybackAmnt'
import YourEmp from './YourEmp'

function LoanCost() {
    return (
        <Row>
          <h6> The loan will cost you </h6>
          <LoanCostAmount/>
          <TotalPayback/>
          <TotalPaybackAmnt/>
          <LastTitle/>
          <YourEmp/>
          <JobTitle/>
          <Search/>
          <AcceptButton/>

        </Row>
        
    )
}

export default LoanCost
