import React,{useState} from 'react'
import {Container,Row,Col,Collapse,Form} from 'react-bootstrap'
import  Card from '../../../../components/Card'

const Switch = () => {
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
                                        <h4 className="card-title">Basic Switch</h4>
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
<div className="custom-control custom-switch custom-control-inline">
    <Form.Check.Input  bsPrefix="custom-control-input" id="customSwitch2" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch2">Active Switch</Form.Check.Label>
</div>
<div className="custom-control custom-switch custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input" id="customSwitch1" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch1">Inactive Switch </Form.Check.Label>
</div>
<div className="custom-control custom-switch custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input" disabled defaultChecked id="customSwitch3" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch3">Disabled Active Switch</Form.Check.Label>
</div>
<div className="custom-control custom-switch custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input" disabled id="customSwitch4" />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch4">Disabled Inactive Switch</Form.Check.Label>
</div>
                                            `}
                                            </code></pre></kbd></Card>
                                        </div>
                                    </Collapse>
                                    <div className="custom-control custom-switch custom-control-inline">
                                        <Form.Check.Input  bsPrefix="custom-control-input" id="customSwitch2" defaultChecked />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch2">Active Switch</Form.Check.Label>
                                    </div>
                                    <div className="custom-control custom-switch custom-control-inline">
                                        <Form.Check.Input bsPrefix="custom-control-input" id="customSwitch1" />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch1">Inactive Switch </Form.Check.Label>
                                    </div>
                                    <div className="custom-control custom-switch custom-control-inline">
                                        <Form.Check.Input bsPrefix="custom-control-input" disabled defaultChecked id="customSwitch3" />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch3">Disabled Active Switch</Form.Check.Label>
                                    </div>
                                    <div className="custom-control custom-switch custom-control-inline">
                                        <Form.Check.Input bsPrefix="custom-control-input" disabled id="customSwitch4" />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch4">Disabled Inactive Switch</Form.Check.Label>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Card.Header.Title>
                                        <h4 className="card-title">Text</h4>
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
<div className="custom-control custom-switch custom-switch-text custom-control-inline">
<div className="custom-switch-inner">
    <p className="mb-0"> Primary </p>
    <Form.Check.Input bsPrefix="custom-control-input" id="customSwitch-11" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-11" data-on-label="On" data-off-label="Off"></Form.Check.Label>
</div>
</div>
<div className="custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline">
<div className="custom-switch-inner">
    <p className="mb-0"> Success </p>
    <Form.Check.Input bsPrefix="custom-control-input bg-success" id="customSwitch-22" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-22" data-on-label="Tr" data-off-label="Fal"></Form.Check.Label>
</div>
</div>
<div className="custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline">
<div className="custom-switch-inner">
    <p className="mb-0"> Danger </p>
    <Form.Check.Input bsPrefix="custom-control-input bg-danger" id="customSwitch-33" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-33" data-on-label="Yes" data-off-label="No"></Form.Check.Label>
</div>
</div>
                                            `}
                                            </code></pre></kbd></Card>
                                        </div>
                                    </Collapse>
                                    <div className="custom-control custom-switch custom-switch-text custom-control-inline">
                                        <div className="custom-switch-inner">
                                            <p className="mb-0"> Primary </p>
                                            <Form.Check.Input bsPrefix="custom-control-input" id="customSwitch-11" defaultChecked />
                                            <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-11" data-on-label="On" data-off-label="Off"></Form.Check.Label>
                                        </div>
                                    </div>
                                    <div className="custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline">
                                        <div className="custom-switch-inner">
                                            <p className="mb-0"> Success </p>
                                            <Form.Check.Input bsPrefix="custom-control-input bg-success" id="customSwitch-22" defaultChecked />
                                            <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-22" data-on-label="Tr" data-off-label="Fal"></Form.Check.Label>
                                        </div>
                                    </div>
                                    <div className="custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline">
                                        <div className="custom-switch-inner">
                                            <p className="mb-0"> Danger </p>
                                            <Form.Check.Input bsPrefix="custom-control-input bg-danger" id="customSwitch-33" defaultChecked />
                                            <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-33" data-on-label="Yes" data-off-label="No"></Form.Check.Label>
                                        </div>
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
<div className="custom-control custom-switch custom-switch-color custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input bg-primary" id="customSwitch01" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch01">Primary</Form.Check.Label>
</div>
<div className="custom-control custom-switch custom-switch-color custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input bg-success" id="customSwitch02" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch02">Success</Form.Check.Label>
</div>
<div className="custom-control custom-switch custom-switch-color custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input bg-danger" id="customSwitch03" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch03">Danger</Form.Check.Label>
</div>
<div className="custom-control custom-switch custom-switch-color custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input bg-waring" id="customSwitch04" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch04">Waring</Form.Check.Label>
</div>
<div className="custom-control custom-switch custom-switch-color custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input bg-dark" id="customSwitch05" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch05">Dark</Form.Check.Label>
</div>
<div className="custom-control custom-switch custom-switch-color custom-control-inline">
    <Form.Check.Input bsPrefix="custom-control-input bg-info" id="customSwitch06" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch06">Info</Form.Check.Label>
</div>
                                            `}
                                            </code></pre></kbd></Card>
                                        </div>
                                    </Collapse>
                                    <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                                        <Form.Check.Input bsPrefix="custom-control-input bg-primary" id="customSwitch01" defaultChecked />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch01">Primary</Form.Check.Label>
                                    </div>
                                    <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                                        <Form.Check.Input bsPrefix="custom-control-input bg-success" id="customSwitch02" defaultChecked />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch02">Success</Form.Check.Label>
                                    </div>
                                    <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                                        <Form.Check.Input bsPrefix="custom-control-input bg-danger" id="customSwitch03" defaultChecked />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch03">Danger</Form.Check.Label>
                                    </div>
                                    <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                                        <Form.Check.Input bsPrefix="custom-control-input bg-waring" id="customSwitch04" defaultChecked />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch04">Waring</Form.Check.Label>
                                    </div>
                                    <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                                        <Form.Check.Input bsPrefix="custom-control-input bg-dark" id="customSwitch05" defaultChecked />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch05">Dark</Form.Check.Label>
                                    </div>
                                    <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                                        <Form.Check.Input bsPrefix="custom-control-input bg-info" id="customSwitch06" defaultChecked />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch06">Info</Form.Check.Label>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Card.Header.Title>
                                        <h4 className="card-title">Icon</h4>
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
<div className="custom-control custom-switch custom-switch-icon custom-control-inline">
<div className="custom-switch-inner">
    <p className="mb-0"> Primary </p>
    <Form.Check.Input  bsPrefix="custom-control-input" id="customSwitch-1" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-1">
        <span className="switch-icon-left"><i className="fa fa-check"></i></span>
        <span className="switch-icon-right"><i className="fa fa-check"></i></span>
    </Form.Check.Label>
</div>
</div>
<div className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
<div className="custom-switch-inner">
    <p className="mb-0"> Success </p>
    <Form.Check.Input  bsPrefix="custom-control-input bg-success" id="customSwitch-2" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-2">
        <span className="switch-icon-left"><i className="fa fa-check"></i></span>
        <span className="switch-icon-right"><i className="fa fa-check"></i></span>
    </Form.Check.Label>
</div>
</div>
<div className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
<div className="custom-switch-inner">
    <p className="mb-0"> Danger </p>
    <Form.Check.Input  bsPrefix="custom-control-input bg-danger" id="customSwitch-3" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-3">
        <span className="switch-icon-left"><i className="fa fa-times"></i></span>
        <span className="switch-icon-right"><i className="fa fa-times"></i></span>
    </Form.Check.Label>
</div>
</div>
<div className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
<div className="custom-switch-inner">
    <p className="mb-0"> Warning </p>
    <Form.Check.Input  bsPrefix="custom-control-input bg-warning" id="customSwitch-4" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-4">
        <span className="switch-icon-left"><i className="fa fa-exclamation-triangle"></i></span>
        <span className="switch-icon-right"><i className="fa fa-exclamation-triangle"></i></span>
    </Form.Check.Label>
</div>
</div>
<div className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
<div className="custom-switch-inner">
    <p className="mb-0"> Dark </p>
    <Form.Check.Input  bsPrefix="custom-control-input bg-dark" id="customSwitch-5" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-5">
        <span className="switch-icon-left"><i className="fa fa-thumb-tack"></i></span>
        <span className="switch-icon-right"><i className="fa fa-thumb-tack"></i></span>
    </Form.Check.Label>
</div>
</div>
<div className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
<div className="custom-switch-inner">
    <p className="mb-0"> Info </p>
    <Form.Check.Input  bsPrefix="custom-control-input bg-info" id="customSwitch-6" defaultChecked />
    <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-6">
        <span className="switch-icon-left"><i className="fa fa-info"></i></span>
        <span className="switch-icon-right"><i className="fa fa-info"></i></span>
    </Form.Check.Label>
</div>
</div>
                                            `}
                                            </code></pre></kbd></Card>
                                        </div>
                                    </Collapse>
                                    <div className="custom-control custom-switch custom-switch-icon custom-control-inline">
                                        <div className="custom-switch-inner">
                                            <p className="mb-0"> Primary </p>
                                            <Form.Check.Input  bsPrefix="custom-control-input" id="customSwitch-1" defaultChecked />
                                            <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-1">
                                                <span className="switch-icon-left"><i className="fa fa-check"></i></span>
                                                <span className="switch-icon-right"><i className="fa fa-check"></i></span>
                                            </Form.Check.Label>
                                        </div>
                                    </div>
                                    <div className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                                        <div className="custom-switch-inner">
                                            <p className="mb-0"> Success </p>
                                            <Form.Check.Input  bsPrefix="custom-control-input bg-success" id="customSwitch-2" defaultChecked />
                                            <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-2">
                                                <span className="switch-icon-left"><i className="fa fa-check"></i></span>
                                                <span className="switch-icon-right"><i className="fa fa-check"></i></span>
                                            </Form.Check.Label>
                                        </div>
                                    </div>
                                    <div className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                                        <div className="custom-switch-inner">
                                            <p className="mb-0"> Danger </p>
                                            <Form.Check.Input  bsPrefix="custom-control-input bg-danger" id="customSwitch-3" defaultChecked />
                                            <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-3">
                                                <span className="switch-icon-left"><i className="fa fa-times"></i></span>
                                                <span className="switch-icon-right"><i className="fa fa-times"></i></span>
                                            </Form.Check.Label>
                                        </div>
                                    </div>
                                    <div className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                                        <div className="custom-switch-inner">
                                            <p className="mb-0"> Warning </p>
                                            <Form.Check.Input  bsPrefix="custom-control-input bg-warning" id="customSwitch-4" defaultChecked />
                                            <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-4">
                                                <span className="switch-icon-left"><i className="fa fa-exclamation-triangle"></i></span>
                                                <span className="switch-icon-right"><i className="fa fa-exclamation-triangle"></i></span>
                                            </Form.Check.Label>
                                        </div>
                                    </div>
                                    <div className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                                        <div className="custom-switch-inner">
                                            <p className="mb-0"> Dark </p>
                                            <Form.Check.Input  bsPrefix="custom-control-input bg-dark" id="customSwitch-5" defaultChecked />
                                            <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-5">
                                                <span className="switch-icon-left"><i className="fa fa-thumb-tack"></i></span>
                                                <span className="switch-icon-right"><i className="fa fa-thumb-tack"></i></span>
                                            </Form.Check.Label>
                                        </div>
                                    </div>
                                    <div className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                                        <div className="custom-switch-inner">
                                            <p className="mb-0"> Info </p>
                                            <Form.Check.Input  bsPrefix="custom-control-input bg-info" id="customSwitch-6" defaultChecked />
                                            <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customSwitch-6">
                                                <span className="switch-icon-left"><i className="fa fa-info"></i></span>
                                                <span className="switch-icon-right"><i className="fa fa-info"></i></span>
                                            </Form.Check.Label>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </>
    )
}
export default Switch;