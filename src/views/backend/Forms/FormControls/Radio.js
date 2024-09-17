import React,{useState} from 'react'
import {Container,Row,Col,Collapse,Form} from 'react-bootstrap'
import  Card from '../../../../components/Card'

const Radio = () => {
    // Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)
    return (
        <>
            <Container fluid >
                <Row>
                    <Col sm="12" lg="12">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Default Radio Buttons</h4>
                                </Card.Header.Title>
                                <Card.Header.Action>
                                    <i  type="button" onClick={() => setOpen(!open)}>
                                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </i>
                                </Card.Header.Action>
                            </Card.Header>
                            <Card.Body>
                                <Collapse in={open}>
                                    <div>
                                        <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<div className="radio d-inline-block mr-2">
    <Form.Check.Input bsPrefix="mr-1" type="radio" name="bsradio" id="radio1" defaultChecked />
    <Form.Check.Label  htmlFor="radio1">Active</Form.Check.Label>
</div>
<div className="radio d-inline-block mr-2">
    <Form.Check.Input bsPrefix="mr-1" type="radio" name="bsradio" id="radio2" />
    <Form.Check.Label htmlFor="radio2">Inactive</Form.Check.Label>
</div>
<div className="radio d-inline-block mr-2">
    <Form.Check.Input bsPrefix="mr-1" type="radio" name="bsradio1" id="radio3" disabled defaultChecked />
    <Form.Check.Label htmlFor="radio3">Active - Disabled</Form.Check.Label>
</div>
<div className="radio d-inline-block mr-2">
    <Form.Check.Input bsPrefix="mr-1" type="radio" name="bsradio1" id="radio4" disabled />
    <Form.Check.Label htmlFor="radio3">Inactive - Disabled</Form.Check.Label>
</div>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <div className="radio d-inline-block mr-2">
                                    <Form.Check.Input bsPrefix="mr-1" type="radio" name="bsradio" id="radio1" defaultChecked />
                                    <Form.Check.Label  htmlFor="radio1">Active</Form.Check.Label>
                                </div>
                                <div className="radio d-inline-block mr-2">
                                    <Form.Check.Input bsPrefix="mr-1" type="radio" name="bsradio" id="radio2" />
                                    <Form.Check.Label htmlFor="radio2">Inactive</Form.Check.Label>
                                </div>
                                <div className="radio d-inline-block mr-2">
                                    <Form.Check.Input bsPrefix="mr-1" type="radio" name="bsradio1" id="radio3" disabled defaultChecked />
                                    <Form.Check.Label htmlFor="radio3">Active - Disabled</Form.Check.Label>
                                </div>
                                <div className="radio d-inline-block mr-2">
                                    <Form.Check.Input bsPrefix="mr-1" type="radio" name="bsradio1" id="radio4" disabled />
                                    <Form.Check.Label htmlFor="radio3">Inactive - Disabled</Form.Check.Label>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Custom Colored Radio Buttons</h4>
                                </Card.Header.Title>
                                <Card.Header.Action>
                                    <i  type="button" onClick={() => setOpen1(!open1)}>
                                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </i>
                                </Card.Header.Action>
                            </Card.Header>
                            <Card.Body>
                                <Collapse in={open1}>
                                    <div>
                                        <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<div className="custom-control custom-radio custom-radio-color custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio01" name="customRadio-11" bsPrefix="custom-control-input bg-primary" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio01"> Primary </Form.Check.Label>
</div>
<div className="custom-control custom-radio custom-radio-color custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio02" name="customRadio-11" bsPrefix="custom-control-input bg-success" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio02"> Success </Form.Check.Label>
</div>
<div className="custom-control custom-radio custom-radio-color custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio03" name="customRadio-11" bsPrefix="custom-control-input bg-danger" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio03"> Danger </Form.Check.Label>
</div>
<div className="custom-control custom-radio custom-radio-color custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio04" name="customRadio-11" bsPrefix="custom-control-input bg-warning" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio04"> Warning </Form.Check.Label>
</div>
<div className="custom-control custom-radio custom-radio-color custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio05" name="customRadio-11" bsPrefix="custom-control-input bg-dark" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio05"> Dark </Form.Check.Label>
</div>
<div className="custom-control custom-radio custom-radio-color custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio06" name="customRadio-11" bsPrefix="custom-control-input bg-info" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio06"> Info </Form.Check.Label>
</div>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio01" name="customRadio-11" bsPrefix="custom-control-input bg-primary" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio01"> Primary </Form.Check.Label>
                                </div>
                                <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio02" name="customRadio-11" bsPrefix="custom-control-input bg-success" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio02"> Success </Form.Check.Label>
                                </div>
                                <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio03" name="customRadio-11" bsPrefix="custom-control-input bg-danger" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio03"> Danger </Form.Check.Label>
                                </div>
                                <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio04" name="customRadio-11" bsPrefix="custom-control-input bg-warning" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio04"> Warning </Form.Check.Label>
                                </div>
                                <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio05" name="customRadio-11" bsPrefix="custom-control-input bg-dark" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio05"> Dark </Form.Check.Label>
                                </div>
                                <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio06" name="customRadio-11" bsPrefix="custom-control-input bg-info" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio06"> Info </Form.Check.Label>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Custom Radio Buttons</h4>
                                </Card.Header.Title>
                                <Card.Header.Action>
                                    <i  type="button" onClick={() => setOpen2(!open2)}>
                                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </i>
                                </Card.Header.Action>
                            </Card.Header>
                            <Card.Body>
                                <Collapse in={open2}>
                                    <div>
                                        <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
 <div className="custom-control custom-radio custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio6" name="customRadio-1"  bsPrefix="custom-control-input" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio6"> One </Form.Check.Label>
</div>
<div className="custom-control custom-radio custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio7" name="customRadio-1"  bsPrefix="custom-control-input" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio7"> Two </Form.Check.Label>
</div>
<div className="custom-control custom-radio custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio8" name="customRadio-1"  bsPrefix="custom-control-input" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio8"> Three </Form.Check.Label>
</div>
<div className="custom-control custom-radio custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio-8" name="customRadio-2" bsPrefix="custom-control-input" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio-8"> Four Checked </Form.Check.Label>
</div>
<div className="custom-control custom-radio custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio9" name="customRadio-3"  bsPrefix="custom-control-input" disabled />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio9"> Five disabled</Form.Check.Label>
</div>
<div className="custom-control custom-radio custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio10" name="customRadio-4" bsPrefix="custom-control-input" disabled defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio10"> Six Selected and  disabled</Form.Check.Label>
</div>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio6" name="customRadio-1"  bsPrefix="custom-control-input" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio6"> One </Form.Check.Label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio7" name="customRadio-1"  bsPrefix="custom-control-input" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio7"> Two </Form.Check.Label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio8" name="customRadio-1"  bsPrefix="custom-control-input" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio8"> Three </Form.Check.Label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio-8" name="customRadio-2" bsPrefix="custom-control-input" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio-8"> Four Checked </Form.Check.Label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio9" name="customRadio-3"  bsPrefix="custom-control-input" disabled />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio9"> Five disabled</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio10" name="customRadio-4" bsPrefix="custom-control-input" disabled defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio10"> Six Selected and  disabled</Form.Check.Label>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Colored Radio Buttons</h4>
                                </Card.Header.Title>
                                <Card.Header.Action>
                                    <i  type="button" onClick={() => setOpen3(!open3)}>
                                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </i>
                                </Card.Header.Action>
                            </Card.Header>
                            <Card.Body>
                                <Collapse in={open3}>
                                    <div>
                                        <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio-1" name="customRadio-10" bsPrefix="custom-control-input bg-primary" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio-1"> Primary </Form.Check.Label>
</div>
<div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio-2" name="customRadio-10" bsPrefix="custom-control-input bg-success" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio-2"> Success </Form.Check.Label>
</div>
<div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio-3" name="customRadio-10" bsPrefix="custom-control-input bg-danger" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio-3"> Danger </Form.Check.Label>
</div>
<div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio-4" name="customRadio-10" bsPrefix="custom-control-input bg-warning" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio-4"> Warning </Form.Check.Label>
</div>
<div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio-5" name="customRadio-10" bsPrefix="custom-control-input bg-dark" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio-5"> Dark </Form.Check.Label>
</div>
<div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
    <Form.Check.Input type="radio" id="customRadio-6" name="customRadio-10" bsPrefix="custom-control-input bg-info" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio-6"> Info </Form.Check.Label>
</div>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio-1" name="customRadio-10" bsPrefix="custom-control-input bg-primary" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio-1"> Primary </Form.Check.Label>
                                </div>
                                <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio-2" name="customRadio-10" bsPrefix="custom-control-input bg-success" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio-2"> Success </Form.Check.Label>
                                </div>
                                <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio-3" name="customRadio-10" bsPrefix="custom-control-input bg-danger" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio-3"> Danger </Form.Check.Label>
                                </div>
                                <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio-4" name="customRadio-10" bsPrefix="custom-control-input bg-warning" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio-4"> Warning </Form.Check.Label>
                                </div>
                                <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio-5" name="customRadio-10" bsPrefix="custom-control-input bg-dark" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio-5"> Dark </Form.Check.Label>
                                </div>
                                <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio-6" name="customRadio-10" bsPrefix="custom-control-input bg-info" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio-6"> Info </Form.Check.Label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Radio;