import React,{useState} from 'react'
import {Container,Row,Col,Collapse,Form} from 'react-bootstrap'
import  Card from '../../../../components/Card'
const TextArea = () => {
    // Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)
    return (
        <>
           <Container fluid >
                <Row>
                    <Col md="12" sm="12" lg="12">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Default</h4>
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
                                        <Card><kbd className="bg-dark"><pre  className="text-white"><code>{`<Form.Group className="mb-0" controlId="exampleFormControlTextarea1">
<Form.Label>textarea</Form.Label>
    <Form.Control as="textarea"  rows="3"></Form.Control>
</Form.Group>`}
                                            </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form.Group className="mb-0" controlId="exampleFormControlTextarea1">
                                    <Form.Label>textarea</Form.Label>
                                    <Form.Control as="textarea"   rows={3}></Form.Control>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Horizontal Input</h4>
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
<Form.Group className="mb-0 row align-items-center">
    <div className="col-sm-3 col-4">
    <Form.Label className="col-form-label">Description</Form.Label>
    </div>
    <div className="col-sm-9 col-8">
    <Form.Control as="textarea" id="horizontalTextarea" rows="3" placeholder="Textarea"></Form.Control>
    </div>
</Form.Group>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form.Group className="mb-0 row align-items-center">
                                    <div className="col-sm-3 col-4">
                                    <Form.Label className="col-form-label">Description</Form.Label>
                                    </div>
                                    <div className="col-sm-9 col-8">
                                    <Form.Control as="textarea" id="horizontalTextarea" rows="3" placeholder="Textarea"></Form.Control>
                                    </div>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                        
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Floating Label</h4>
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
<Form.Group controlId="exampleFormControlTextarea2" className="form-label-group mb-0">
    <Form.Control as="textarea"  rows="4"
    placeholder="Label in Textarea"></Form.Control>
    <Form.Label>Textarea</Form.Label>
</Form.Group>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form.Group controlId="exampleFormControlTextarea2" className="form-label-group mb-0">
                                    <Form.Control as="textarea"  rows="4"
                                    placeholder="Label in Textarea"></Form.Control>
                                    <Form.Label>Textarea</Form.Label>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Counter</h4>
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
<Form.Group controlId="exampleFormControlTextarea3" className="form-label-group mb-0">
    <Form.Control as="textarea" data-length="20"  rows="3"
    placeholder="Counter"></Form.Control>
    <Form.Label>Counter</Form.Label>
</Form.Group>
<small className="counter-value-text float-right"><span className="char-count">0</span> / 20 </small>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form.Group controlId="exampleFormControlTextarea3" className="form-label-group mb-0">
                                    <Form.Control as="textarea" data-length="20"  rows="3"
                                    placeholder="Counter"></Form.Control>
                                    <Form.Label>Counter</Form.Label>
                                </Form.Group>
                                <small className="counter-value-text float-right"><span className="char-count">0</span> / 20 </small>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default TextArea;