import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import About from './About'
import AcceptOffer from './AcceptOffer'
import RejectOffer from './RejectOffer'
import LinkExpire from "./LinkExpire";
import AcceptPage from "./AcceptPage";
import ReviewPage from "./ReviewPage";
import Explanations from "./LegalDocs/Explanations";
import CreditInformation  from "./LegalDocs/CreditInformation";
import Agreement from "./LegalDocs/Agreement";
import DDMandate from "./DDMandate"; 


const Body = () => {
    return (
        <div>
          <Switch> 
                <Route path="/loans/offer">
                    <AcceptOffer />
                </Route>
                <Route path="/loans/reject">
                    <RejectOffer />
                </Route>
                <Route path="/expired">
                    <LinkExpire />
                </Route>
                <Route path="/loans/acceptPage">
                    <AcceptPage />
                </Route>
                <Route path="/loans/reviewPage">
                    <ReviewPage />
                </Route>
                <Route path="/loans/explanations">
                    <Explanations />
                </Route>
                <Route path="/loans/credit-information">
                    <CreditInformation />
                </Route>
                <Route path="/loans/agreement">
                    <Agreement/>
                </Route>
                <Route path="/loans/direct-debit-mandate">
                    <DDMandate/>
                </Route>
            </Switch>  
        </div>
    )
}

export default Body
