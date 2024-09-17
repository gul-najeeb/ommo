import React from 'react'
import { Container ,Row, Col,Form,Button } from 'react-bootstrap'
import  Card from '../../../../components/Card'

const UserAccountSetting = () => {
    return (
    <>
    <Container fluid>
        <Row>
            <Col lg="6">
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Account Setting</h4>
                        </Card.Header.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="acc-edit">
                            <Form>
                                <Form.Group controlId="uname">
                                    <Form.Check.Label>User Name:</Form.Check.Label>
                                    <Form.Control type="text"   defaultValue="Barry@01" />
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Check.Label>Email Id:</Form.Check.Label>
                                    <Form.Control type="email" defaultValue="Barryjohn@gmail.com" />
                                </Form.Group>
                                <Form.Group controlId="altemail">
                                    <Form.Check.Label>Alternate Email:</Form.Check.Label>
                                    <Form.Control type="email"  defaultValue="designtemplate@gmail.com" />
                                </Form.Group>
                                <Form.Group controlId="altemail">
                                    <Form.Check.Label className="d-block">Language Known:</Form.Check.Label>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <Form.Check.Input  bsPrefix="custom-control-input" id="english" defaultChecked="true" />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="english">English</Form.Check.Label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <Form.Check.Input bsPrefix="custom-control-input" id="french" defaultChecked="true" />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="french">French</Form.Check.Label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <Form.Check.Input bsPrefix="custom-control-input" id="hindi" />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="hindi">Hindi</Form.Check.Label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <Form.Check.Input bsPrefix="custom-control-input" id="spanish" defaultChecked="true" />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="spanish">Spanish</Form.Check.Label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <Form.Check.Input bsPrefix="custom-control-input" id="arabic" />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="arabic">Arabic</Form.Check.Label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <Form.Check.Input bsPrefix="custom-control-input" id="italian" />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="italian">Italian</Form.Check.Label>
                                    </div>
                                </Form.Group>
                                <Button type="submit">Submit</Button>
                                <Button type="reset" variant=" mm-bg-danger">Cancel</Button>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="6">
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Social Media</h4>
                        </Card.Header.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="acc-edit">
                            <Form>
                                <Form.Group controlId="facebook">
                                    <Form.Check.Label>Facebook:</Form.Check.Label>
                                    <Form.Control type="text"  defaultValue="www.facebook.com" />
                                </Form.Group>
                                <Form.Group controlId="twitter">
                                    <Form.Check.Label>Twitter:</Form.Check.Label>
                                    <Form.Control type="text" defaultValue="www.twitter.com" />
                                </Form.Group>
                                <Form.Group controlId="google">
                                    <Form.Check.Label>Google +:</Form.Check.Label>
                                    <Form.Control type="text" defaultValue="www.google.com" />
                                </Form.Group>
                                <Form.Group controlId="instagram">
                                    <Form.Check.Label>Instagram:</Form.Check.Label>
                                    <Form.Control type="text" defaultValue="www.instagram.com" />
                                </Form.Group>
                                <Form.Group controlId="youtube">
                                    <Form.Check.Label>You Tube:</Form.Check.Label>
                                    <Form.Control type="text" defaultValue="www.youtube.com" />
                                </Form.Group>
                                <Button type="submit">Submit</Button>
                                <Button type="reset" variant=" mm-bg-danger">Cancel</Button>
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

export default UserAccountSetting