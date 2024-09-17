import  React from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import  Card from '../../../components/Card'
import {Link} from 'react-router-dom'
// img
import  user1  from  '../../../assets/images/user/1.jpg'

const Customeredit =()=>{
    return(
        <>
        <Container fluid>
        <Row>
            <Col lg="12">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                   <div className="d-flex align-items-center justify-content-between">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb p-0 mb-0">
                                <li className="breadcrumb-item"><Link to="/customer">Customers</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Edit Customer</li>
                            </ol>
                        </nav>
                    </div>
                    <Link to="/customer" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2">Back</span>
                    </Link>
                </div>
            </Col>
            <Col lg="12" className="mb-3 d-flex justify-content-between">
                <h4 className="font-weight-bold d-flex align-items-center">Edit Customer</h4>
            </Col>
            <Col lg="12">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md="3" className="mb-3">
                                <Card.Body className="rounded bg-light">
                                    <div className="d-flex justify-content-center">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" height="80px" x="0px" y="0px" viewBox="0 0 419.2 419.2" style="enable-background:new 0 0 419.2 419.2;" xml:space="preserve" stroke="currentColor">
                                            <g>
                                                <g>
                                                    <g>
                                                        <circle cx="158" cy="144.4" r="28.8"/>
                                                        <path d="M394.4,250.4c-13.6-12.8-30.8-21.2-49.6-23.6V80.4c0-15.6-6.4-29.6-16.4-40C318,30,304,24,288.4,24h-232     c-15.6,0-29.6,6.4-40,16.4C6,50.8,0,64.8,0,80.4v184.4V282v37.2c0,15.6,6.4,29.6,16.4,40c10.4,10.4,24.4,16.4,40,16.4h224.4     c14.8,12,33.2,19.6,53.6,19.6c23.6,0,44.8-9.6,60-24.8c15.2-15.2,24.8-36.4,24.8-60C419.2,286.8,409.6,265.6,394.4,250.4z      M21.2,80.4c0-9.6,4-18.4,10.4-24.4c6.4-6.4,15.2-10.4,24.8-10.4h232c9.6,0,18.4,4,24.8,10.4c6.4,6.4,10.4,15.2,10.4,24.8v124.8     l-59.2-59.2c-4-4-10.8-4.4-15.2,0L160,236l-60.4-60.8c-4-4-10.8-4.4-15.2,0l-63.2,64V80.4z M56,355.2v-0.8     c-9.6,0-18.4-4-24.8-10.4c-6-6.4-10-15.2-10-24.8V282v-12.4L92,198.4l60.4,60.4c4,4,10.8,4,15.2,0l89.2-89.6l58.4,58.8     c-1.2,0.4-2.4,0.8-3.6,1.2c-1.6,0.4-3.2,0.8-5.2,1.6c-1.6,0.4-3.2,1.2-4.8,1.6c-1.2,0.4-2,0.8-3.2,1.6c-1.6,0.8-2.8,1.2-4,2     c-2,1.2-4,2.4-6,3.6c-1.2,0.8-2,1.2-3.2,2c-0.8,0.4-1.2,0.8-2,1.2c-3.6,2.4-6.8,5.2-9.6,8.4c-15.2,15.2-24.8,36.4-24.8,60     c0,6,0.8,11.6,2,17.6c0.4,1.6,0.8,2.8,1.2,4.4c1.2,4,2.4,8,4,12v0.4c1.6,3.2,3.2,6.8,5.2,9.6H56z M378.8,355.2     c-11.6,11.6-27.2,18.4-44.8,18.4c-16.8,0-32.4-6.8-43.6-17.6c-1.6-1.6-3.2-3.6-4.8-5.2c-1.2-1.2-2.4-2.8-3.6-4     c-1.6-2-2.8-4.4-4-6.8c-0.8-1.6-1.6-2.8-2.4-4.4c-0.8-2-1.6-4.4-2-6.8c-0.4-1.6-1.2-3.6-1.6-5.2c-0.8-4-1.2-8.4-1.2-12.8     c0-17.6,7.2-33.2,18.4-44.8c11.2-11.6,27.2-18.4,44.8-18.4s33.2,7.2,44.8,18.4c11.6,11.6,18.4,27.2,18.4,44.8     C397.2,328,390,343.6,378.8,355.2z"/>
                                                        <path d="M341.6,267.6c-0.8-0.8-2-1.6-3.6-2.4c-1.2-0.4-2.4-0.8-3.6-0.8c-0.4,0-0.4,0-0.4,0c-0.4,0-0.4,0-0.4,0     c-1.2,0-2.4,0.4-3.6,0.8c-1.2,0.4-2.4,1.2-3.6,2.4l-24.8,24.8c-4,4-4,10.8,0,15.2c4,4,10.8,4,15.2,0l6.4-6.4v44     c0,6,4.8,10.8,10.8,10.8s10.8-4.8,10.8-10.8v-44l6.4,6.4c4,4,10.8,4,15.2,0c4-4,4-10.8,0-15.2L341.6,267.6z"/>
                                                    </g>
                                                </g>
                                            </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                        </svg> */}

                                        <img src={user1} className="img-fluid" alt="profile"/>
                                    </div>
                                    <div className="d-flex justify-content-center mt-2 mb-3">
                                        
                                        <p className="mb-0 text-muted font-weight-bold">Upload Image</p>
                                    </div>
                                </Card.Body>
                            </Col>
                            <Col md="9">
                                <Form className="row g-3 date-icon-set-modal">
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Full Name</Form.Label>
                                        <Form.Control type="text"  id="Text1" placeholder="Enter Full Name" defaultValue="Christian Bale"/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label className="font-weight-bold text-muted text-uppercase mb-3">Gender</Form.Label><br/>
                                        <div className="form-check form-check-inline">
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <Form.Control type="radio" id="inlineRadio1" name="customRadio-1" className="custom-control-input"/>
                                                <Form.Label className="custom-control-label" htmlFor="inlineRadio1"> Male </Form.Label>
                                            </div>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <Form.Control type="radio" id="inlineRadio2" name="customRadio-1" className="custom-control-input" defaultChecked/>
                                                <Form.Label className="custom-control-label" htmlFor="inlineRadio2"> Female </Form.Label>
                                            </div>
                                        </div>
                                        <div className="form-check form-check-inline mt-2">
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <Form.Control type="radio" id="inlineRadio3" name="customRadio-1" className="custom-control-input"/>
                                                <Form.Label className="custom-control-label" htmlFor="inlineRadio3"> Other </Form.Label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3  position-relative">
                                        <Form.Label htmlFor="Text2" className="font-weight-bold text-muted text-uppercase">Birth Day</Form.Label>
                                        <Form.Control type="text" className="form-control vanila-datepicker" id="Text2" name="event_date" placeholder="Enter Birth Day" autoComplete="off" defaultValue="05/15/2021"/>
                                        <span className="search-link">                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text3" className="font-weight-bold text-muted text-uppercase">Company Name</Form.Label>
                                        <Form.Control type="text"  id="Text3" placeholder="Enter Company Name" defaultValue="AB Nexa"/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text4" className="font-weight-bold text-muted text-uppercase">Email</Form.Label>
                                        <Form.Control type="text"  id="Text4" placeholder="Enter Email" defaultValue="christian.Bale@blueberrye.com"/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text5" className="font-weight-bold text-muted text-uppercase">Phone</Form.Label>
                                        <Form.Control type="text"  id="Text5" placeholder="Enter Phone" defaultValue="+1 (021) 145-2256"/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="inputState" className="font-weight-bold text-muted text-uppercase">Country</Form.Label>
                                        <select  defaultValue="USA" id="inputcountry" className="form-select form-control choicesjs" >
                                            <option className="">Select Country</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="France">France</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="inputState" className="font-weight-bold text-muted text-uppercase">State/Region</Form.Label>
                                        <select defaultValue="Ohio" id="inputState" className="form-select form-control choicesjs">
                                            <option className="">Select State/Region</option>
                                            <option value="Ohio">Ohio</option>
                                            <option value="Briston">Briston</option>
                                            <option value="Nevada">Nevada</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Texas">Texas</option>
                                            <option value="California">California</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text6" className="font-weight-bold text-muted text-uppercase">Address</Form.Label>
                                        <Form.Control type="text"  id="Text6" placeholder="Enter Address" defaultValue="Lane & High, 2124 North High Street, Columbus"/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text7" className="font-weight-bold text-muted text-uppercase">Zipcode</Form.Label>
                                        <Form.Control type="text"  id="Text7" placeholder="Enter Zipcode" defaultValue="43201"/>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <Form.Label htmlFor="Text9" className="font-weight-bold text-muted text-uppercase">Bio</Form.Label>
                                        {/* <textarea className="form-control" id="Text9" rows="2" placeholder="Enter Bio">Brolin uploaded a picture of Christian Bale next to his own father James Brolin. ... He commented on how similar the two looked in the photographs proving that they really were father and son.
                                        </textarea> */}
                                        <Form.Control as="textarea" id="Text9" rows="2"  defaultValue="Brolin uploaded a picture of Christian Bale next to his own father James Brolin. ... He commented on how similar the two looked in the photographs proving that they really were father and son." />

                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <Form.Label className="font-weight-bold text-muted text-uppercase mb-3">Notification Type</Form.Label><br/>
                                        <div className="form-check form-check-inline">
                                            <div className="custom-control custom-checkbox custom-control-inline">
                                                <Form.Control type="checkbox" className="custom-control-input m-0" id="inlineCheckbox1"/>
                                                <Form.Label className="custom-control-label" htmlFor="inlineCheckbox1">Email</Form.Label>
                                            </div>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <div className="custom-control custom-checkbox custom-control-inline">
                                                <Form.Control type="checkbox" className="custom-control-input m-0" id="inlineCheckbox2" defaultChecked/>
                                                <Form.Label className="custom-control-label" htmlFor="inlineCheckbox2">SMS</Form.Label>
                                            </div>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <div className="custom-control custom-checkbox custom-control-inline">
                                                <Form.Control type="checkbox" className="custom-control-input m-0" id="inlineCheckbox3"/>
                                                <Form.Label className="custom-control-label" htmlFor="inlineCheckbox3">Phone</Form.Label>
                                            </div>
                                        </div>
                                    </div>                                    
                                </Form>
                                <div className="d-flex flex-wrap justify-content-between mt-3">
                                    <Button variant="btn btn-secondary font-weight-bold btn-sm">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            Delete Customer
                                        </div>                                        
                                    </Button>
                                    <Button variant="btn btn-primary font-weight-bold btn-sm">
                                        Save Customer
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>                
            </Col>
        </Row>
    </Container>
        </>
    )
}

export default Customeredit;
