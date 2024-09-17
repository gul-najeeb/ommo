import React from 'react'
import { Link } from 'react-router-dom'
import { Container ,Row, Col,Form,Button} from 'react-bootstrap'
import  Card from '../../../../components/Card'

//img
import user1 from '../../../../assets/images/user/1.jpg'

const UserAdd = () => {
       return (
            <>
                <Container fluid>
                        <Row>
                            <Col xl="3" lg="4">
                                <Card>
                                    <Card.Header>
                                        <Card.Header.Title>
                                        <h4 className="card-title">Add New User</h4>
                                        </Card.Header.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form>
                                            <Form.Group>
                                                <div className="crm-profile-img-edit position-relative">
                                                    <img className="crm-profile-pic rounded-circle avatar-100" src={user1} alt="profile-pic" />
                                                    <div className="crm-p-image bg-primary">
                                                        <i className="las la-pen upload-button"></i>
                                                        <Form.File.Input bsPrefix="file-upload" type="file" accept="image/*" />
                                                    </div>
                                                </div>
                                                <div className="img-extension mt-3">
                                                    <div className="d-inline-block align-items-center">
                                                        <span>Only</span>
                                                        <Link to="#">.jpg</Link>
                                                        <Link to="#">.png</Link>
                                                        <Link to="#">.jpeg</Link>
                                                        <span>allowed</span>
                                                    </div>
                                                </div>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Check.Label>User Role:</Form.Check.Label>
                                                <Form.Control as="select"  id="selectuserrole">
                                                    <option>Select</option>
                                                    <option>Web Designer</option>
                                                    <option>Web Developer</option>
                                                    <option>Tester</option>
                                                    <option>Php Developer</option>
                                                    <option>Ios Developer </option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="furl">
                                                <Form.Check.Label>Facebook Url:</Form.Check.Label>
                                                <Form.Control type="text" placeholder="Facebook Url" />
                                            </Form.Group>
                                            <Form.Group controlId="turl">
                                                <Form.Check.Label htmlFor="turl">Twitter Url:</Form.Check.Label>
                                                <Form.Control type="text" placeholder="Twitter Url" />
                                            </Form.Group>
                                            <Form.Group controlId="instaurl">
                                                <Form.Check.Label>Instagram Url:</Form.Check.Label>
                                                <Form.Control type="text" placeholder="Instagram Url" />
                                            </Form.Group>
                                            <Form.Group controlId="lurl">
                                                <Form.Check.Label>Linkedin Url:</Form.Check.Label>
                                                <Form.Control type="text" placeholder="Linkedin Url" />
                                            </Form.Group>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl="9" lg="8">
                                <Card>
                                    <Card.Header>
                                        <Card.Header.Title>
                                        <h4 className="card-title">New User Information</h4>
                                        </Card.Header.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="new-user-info">
                                        <Form>
                                            <Row>
                                                <Form.Group as={Col} md="6" controlId="fname">
                                                    <Form.Check.Label>First Name:</Form.Check.Label>
                                                    <Form.Control type="text" placeholder="First Name" />
                                                </Form.Group>
                                                <Form.Group as={Col} md="6" controlId="lname">
                                                    <Form.Check.Label>Last Name:</Form.Check.Label>
                                                    <Form.Control type="text" placeholder="Last Name" />
                                                </Form.Group>
                                                <Form.Group as={Col} md="6" controlId="add1">
                                                    <Form.Check.Label>Street Address 1:</Form.Check.Label>
                                                    <Form.Control type="text" placeholder="Street Address 1" />
                                                </Form.Group>
                                                <Form.Group as={Col} md="6" controlId="add2">
                                                    <Form.Check.Label>Street Address 2:</Form.Check.Label>
                                                    <Form.Control type="text" placeholder="Street Address 2" />
                                                </Form.Group>
                                                <Form.Group as={Col} md="12" controlId="cname">
                                                    <Form.Check.Label>Company Name:</Form.Check.Label>
                                                    <Form.Control type="text" placeholder="Company Name" />
                                                </Form.Group>
                                                <Form.Group as={Col} sm="12" controlId="selectcountry">
                                                    <Form.Check.Label>Country:</Form.Check.Label>
                                                    <Form.Control as="select">
                                                        <option>Select Country</option>
                                                        <option>Caneda</option>
                                                        <option>Noida</option>
                                                        <option >USA</option>
                                                        <option>India</option>
                                                        <option>Africa</option>
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group as={Col} md="6" controlId="mobno">
                                                    <Form.Check.Label>Mobile Number:</Form.Check.Label>
                                                    <Form.Control  type="text"  placeholder="Mobile Number" />
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="altconno">
                                                    <Form.Check.Label>Alternate Contact:</Form.Check.Label>
                                                    <Form.Control  type="text"  placeholder="Alternate Contact" /> 
                                                </Form.Group>
                                                <Form.Group as={Col} md="6" controlId="email">
                                                    <Form.Check.Label>Email:</Form.Check.Label>
                                                    <Form.Control type="email"  placeholder="Email" />
                                                </Form.Group>
                                                <Form.Group as={Col} md="6" controlId="pno">
                                                    <Form.Check.Label>Pin Code:</Form.Check.Label>
                                                    <Form.Control  type="text"  placeholder="Pin Code" />
                                                </Form.Group>
                                                <Form.Group as={Col} md="12" controlId="city">
                                                    <Form.Check.Label>Town/City:</Form.Check.Label>
                                                    <Form.Control  type="text"  placeholder="Town/City" />
                                                </Form.Group>
                                            </Row>
                                            <hr />
                                            <h5 className="mb-3">Security</h5>
                                            <Row>
                                                <Form.Group as={Col} md="12" controlId="uname">
                                                    <Form.Check.Label>User Name:</Form.Check.Label>
                                                    <Form.Control type="text" placeholder="User Name" />
                                                </Form.Group>
                                                <Form.Group as={Col} md="6" controlId="pass">
                                                    <Form.Check.Label>Password:</Form.Check.Label>
                                                    <Form.Control type="password" placeholder="Password" />
                                                </Form.Group>
                                                <Form.Group as={Col} md="4" controlId="rpass">
                                                    <Form.Check.Label>Repeat Password:</Form.Check.Label>
                                                    <Form.Control type="password" placeholder="Repeat Password " />
                                                </Form.Group>
                                            </Row>
                                            <div className="checkbox">
                                                <Form.Check.Label><Form.Check.Input bsPrefix="mr-2" />Enable Two-Factor-Authentication</Form.Check.Label>
                                            </div>
                                            <Button type="submit">Add New User</Button>
                                        </Form>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
            </>
       )
}

export default UserAdd