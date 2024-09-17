import React from 'react'
import { Container,Col,Row} from 'react-bootstrap'
import  Card from '../../../components/Card'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {getDarkMode} from '../../../store/mode'
//img
import logo from '../../../assets/images/logo.png'
import darklogo from '../../../assets/images/logo-dark.png'


function mapStateToProps(state) {
   return {
       darkMode: getDarkMode(state)
   };
}
const ConfirmMail = (props) => {
    return (
        <>
        <section className="login-content">
         <Container fluid className="h-100">
            <Row className="align-items-center justify-content-center h-100">
               <Col md="5" className="col-md-5">
                  <Card>
                     <Card.Body>
                        <Row className="align-items-center">
                           <Col lg="12" className="text-center">
                           <img src={logo} className={`img-fluid  rounded-normal  ${!props.darkMode ? 'd-none' : ''}`} width="80" alt="logo"/>
                           <img src={darklogo} className={`img-fluid  rounded-normal  ${props.darkMode ? 'd-none' : ''}`} width="80" alt="logo"/>
                              <h2 className="mt-3 mb-0">Success !</h2>
                              <p className="mb-1">A email has been send to youremail@domain.com. Please check for an
                                 email from company and click
                                 on the included link to reset your password.</p>
                              <div className="d-inline-block w-100">
                                 <Link to="/"  className="btn btn-primary mt-3">
                                    <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span>Back to Home</span>
                                 </Link>
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </section>
        </>
    )
}


export default connect(mapStateToProps)(ConfirmMail)