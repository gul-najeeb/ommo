import React,{useState} from 'react'
import {Container,Row,Col,Collapse,Form} from 'react-bootstrap'
import  Card from '../../../../components/Card'
const Checkbox = () => {
      // Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)
   const[open4,setOpen4]=useState(false)
   const[open5,setOpen5]=useState(false)
    return (
        <>
           <Container fluid>
                <Row>
                    <Col sm="12" lg="12">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Basic Checkbox</h4>
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
<div className="checkbox d-inline-block mr-3">
    <Form.Check.Input  bsPrefix="checkbox-input" id="checkbox1" />
    <Form.Check.Label htmlFor="checkbox1">Primary-Inactive</Form.Check.Label>
</div>
<div className="checkbox d-inline-block mr-3">
    <Form.Check.Input  bsPrefix="checkbox-input" id="checkbox2" defaultChecked="true" />
    <Form.Check.Label htmlFor="checkbox2">Primary / Active</Form.Check.Label>
</div>
<div className="checkbox d-inline-block mr-3">
    <Form.Check.Input  bsPrefix="checkbox-input" id="checkbox3" disabled />
    <Form.Check.Label htmlFor="checkbox3">Disable / Inactive</Form.Check.Label>
</div>
<div className="checkbox d-inline-block mr-3">
    <Form.Check.Input  bsPrefix="checkbox-input" id="checkbox4" defaultChecked disabled />
    <Form.Check.Label htmlFor="checkbox4">Active / Disable</Form.Check.Label>
</div>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <div className="checkbox d-inline-block mr-3">
                                    <Form.Check.Input  bsPrefix="checkbox-input" id="checkbox1" />
                                    <Form.Check.Label htmlFor="checkbox1">Primary-Inactive</Form.Check.Label>
                                </div>
                                <div className="checkbox d-inline-block mr-3">
                                    <Form.Check.Input  bsPrefix="checkbox-input" id="checkbox2" defaultChecked="true" />
                                    <Form.Check.Label htmlFor="checkbox2">Primary / Active</Form.Check.Label>
                                </div>
                                <div className="checkbox d-inline-block mr-3">
                                    <Form.Check.Input  bsPrefix="checkbox-input" id="checkbox3" disabled />
                                    <Form.Check.Label htmlFor="checkbox3">Disable / Inactive</Form.Check.Label>
                                </div>
                                <div className="checkbox d-inline-block mr-3">
                                    <Form.Check.Input  bsPrefix="checkbox-input" id="checkbox4" defaultChecked disabled />
                                    <Form.Check.Label htmlFor="checkbox4">Active / Disable</Form.Check.Label>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Custom Checkbox</h4>
                                </Card.Header.Title>
                                <Card.Header.Action>
                                    <i  type="button"  onClick={() => setOpen1(!open1)}>
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
<div className="custom-control custom-checkbox custom-control-inline">
    <Form.Check.Input  bsPrefix="custom-control-input" id="customCheck5" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck5">Primary / Inactive</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox custom-control-inline">
    <Form.Check.Input  bsPrefix="custom-control-input" id="customCheck6" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck6">Primary - active</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox custom-control-inline">
    <Form.Check.Input  bsPrefix="custom-control-input" id="customCheck7"  disabled />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck7">Primary - inactive - disabled</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox custom-control-inline">
    <Form.Check.Input  bsPrefix="custom-control-input" id="customCheck8"  defaultChecked disabled />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck8">Primary - active - disabled</Form.Check.Label>
</div>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <Form.Check.Input  bsPrefix="custom-control-input" id="customCheck5" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck5">Primary / Inactive</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <Form.Check.Input  bsPrefix="custom-control-input" id="customCheck6" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck6">Primary - active</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <Form.Check.Input  bsPrefix="custom-control-input" id="customCheck7"  disabled />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck7">Primary - inactive - disabled</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <Form.Check.Input  bsPrefix="custom-control-input" id="customCheck8"  defaultChecked disabled />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck8">Primary - active - disabled</Form.Check.Label>
                                </div>
                            </Card.Body>
                        </Card>                    
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Color</h4>
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
<div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input bg-primary" id="customCheck-1" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-1"> Primary</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input bg-success" id="customCheck-2" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-2">Success</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input bg-danger" id="customCheck-3" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-3">Danger</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input bg-warning" id="customCheck-4" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-4">Warning</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input bg-dark" id="customCheck-5" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-5">Dark</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input bg-info" id="customCheck-6" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-6">Info</Form.Check.Label>
</div>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                    <Form.Check.Input bsPrefix="custom-control-input bg-primary" id="customCheck-1" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-1"> Primary</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                    <Form.Check.Input bsPrefix="custom-control-input bg-success" id="customCheck-2" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-2">Success</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                    <Form.Check.Input bsPrefix="custom-control-input bg-danger" id="customCheck-3" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-3">Danger</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                    <Form.Check.Input bsPrefix="custom-control-input bg-warning" id="customCheck-4" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-4">Warning</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                    <Form.Check.Input bsPrefix="custom-control-input bg-dark" id="customCheck-5" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-5">Dark</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                    <Form.Check.Input bsPrefix="custom-control-input bg-info" id="customCheck-6" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-6">Info</Form.Check.Label>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Custom Color</h4>
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
<div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
    <Form.Check.Input  bsPrefix="custom-control-input bg-primary" id="customCheck-11" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-11">Primary </Form.Check.Label>
</div>
<div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
    <Form.Check.Input  bsPrefix="custom-control-input bg-success" id="customCheck-22" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-22">Success</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
    <Form.Check.Input  bsPrefix="custom-control-input bg-danger" id="customCheck-33" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-33">Danger</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
    <Form.Check.Input  bsPrefix="custom-control-input bg-warning" id="customCheck-44" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-44">Warning</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
    <Form.Check.Input  bsPrefix="custom-control-input bg-dark" id="customCheck-55" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-55">Dark</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
    <Form.Check.Input  bsPrefix="custom-control-input bg-info" id="customCheck-66" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-66"> Info</Form.Check.Label>
</div>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                                    <Form.Check.Input  bsPrefix="custom-control-input bg-primary" id="customCheck-11" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-11">Primary </Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                                    <Form.Check.Input  bsPrefix="custom-control-input bg-success" id="customCheck-22" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-22">Success</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                                    <Form.Check.Input  bsPrefix="custom-control-input bg-danger" id="customCheck-33" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-33">Danger</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                                    <Form.Check.Input  bsPrefix="custom-control-input bg-warning" id="customCheck-44" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-44">Warning</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                                    <Form.Check.Input  bsPrefix="custom-control-input bg-dark" id="customCheck-55" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-55">Dark</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                                    <Form.Check.Input  bsPrefix="custom-control-input bg-info" id="customCheck-66" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-66"> Info</Form.Check.Label>
                                </div>
                            </Card.Body>
                        </Card> 
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Change Icon</h4>
                                </Card.Header.Title>
                                <Card.Header.Action>
                                    <i  type="button" onClick={() => setOpen4(!open4)}>
                                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </i>
                                </Card.Header.Action>
                            </Card.Header>
                            <Card.Body>
                                <Collapse in={open4}>
                                    <div>
                                        <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input" id="customCheck-10" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-10"><i className="fa fa-music"></i>Music</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input" id="customCheck-20" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-20"><i className="fa fa-commenting-o"></i>SMS</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input" id="customCheck-30" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-30"><i className="fa fa-times"></i>Cancel</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input" id="customCheck-40" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-40"><i className="fa fa-file"></i>File</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input" id="customCheck-50" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-50"><i className="fa fa-bold"></i>Bold</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input" id="customCheck-60" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-60"><i className="fa fa-map-marker"></i>Location</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input" id="customCheck-70" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-70"><i className="fa fa-camera"></i>Camera</Form.Check.Label>
</div>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                    <Form.Check.Input bsPrefix="custom-control-input" id="customCheck-10" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-10"><i className="fa fa-music"></i>Music</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                    <Form.Check.Input bsPrefix="custom-control-input" id="customCheck-20" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-20"><i className="fa fa-commenting-o"></i>SMS</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                    <Form.Check.Input bsPrefix="custom-control-input" id="customCheck-30" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-30"><i className="fa fa-times"></i>Cancel</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                    <Form.Check.Input bsPrefix="custom-control-input" id="customCheck-40" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-40"><i className="fa fa-file"></i>File</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                    <Form.Check.Input bsPrefix="custom-control-input" id="customCheck-50" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-50"><i className="fa fa-bold"></i>Bold</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                    <Form.Check.Input bsPrefix="custom-control-input" id="customCheck-60" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-60"><i className="fa fa-map-marker"></i>Location</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                    <Form.Check.Input bsPrefix="custom-control-input" id="customCheck-70" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-70"><i className="fa fa-camera"></i>Camera</Form.Check.Label>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Boolean Checkbox</h4>
                                </Card.Header.Title>
                                <Card.Header.Action>
                                    <i  type="button" onClick={() => setOpen5(!open5)}>
                                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </i>
                                </Card.Header.Action>
                            </Card.Header>
                            <Card.Body>
                                <Collapse in={open5}>
                                    <div>
                                        <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<div className="custom-control custom-checkbox custom-control-inline">
    <Form.Check.Input  bsPrefix="custom-control-input" id="customCheck-t" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-t">True</Form.Check.Label>
</div>
<div className="custom-control custom-checkbox custom-control-inline">
    <Form.Check.Input  bsPrefix="custom-control-input" id="customCheck-f" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-f">False</Form.Check.Label>
</div>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <Form.Check.Input  bsPrefix="custom-control-input" id="customCheck-t" defaultChecked />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-t">True</Form.Check.Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <Form.Check.Input  bsPrefix="custom-control-input" id="customCheck-f" />
                                    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customCheck-f">False</Form.Check.Label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Checkbox;