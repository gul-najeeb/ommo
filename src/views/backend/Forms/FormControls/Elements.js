import React,{useState} from 'react'
import {Container,Row,Col,Collapse,Form,Button} from 'react-bootstrap'
import  Card from '../../../../components/Card'
const Elements = () => {
    //Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)
   const[open4,setOpen4]=useState(false)
   const[open5,setOpen5]=useState(false)
   const[open6,setOpen6]=useState(false)
   const[open7,setOpen7]=useState(false)
   const[open8,setOpen8]=useState(false)
   const[open9,setOpen9]=useState(false)
   const[open10,setOpen10]=useState(false)
   const[open11,setOpen11]=useState(false)
   const[open12,setOpen12]=useState(false)
   const[open13,setOpen13]=useState(false)
   const[open14,setOpen14]=useState(false)
    return (
        <>
        <Container fluid >
            <Row>
                <Col sm="12" lg="12" >
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Basic Form</h4>
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
<Form>
    <Form.Group controlId="email">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" />
    </Form.Group>
    <Form.Group controlId="pwd">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password"/>
    </Form.Group>
    <Form.Check type="checkbox" label="Remember me" className="mb-3" id="checkbox" />
    <Button variant="primary mr-2">Submit</Button>
    <Button variant="danger">Cancel</Button>
</Form>
                                `}
                                </code></pre></kbd></Card>
                            </div>
                        </Collapse>
                        <Form>
                            <Form.Group controlId="email">
                                <Form.Label>Email address:</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Group controlId="pwd">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password"/>
                            </Form.Group>
                            <Form.Check type="checkbox" label="Remember me" className="mb-3" id="checkbox" />
                            <Button variant="primary mr-2">Submit</Button>
                            <Button variant="danger">Cancel</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Form Grid</h4>
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
<Form>
    <Row>
    <Col>
        <Form.Control type="text"  placeholder="First name" />
    </Col>
    <Col>
        <Form.Control type="text"  placeholder="Last name" />
    </Col>
    </Row>
</Form>
                                `}
                                </code></pre></kbd></Card>
                            </div>
                        </Collapse>
                        <Form>
                            <Row>
                            <Col>
                                <Form.Control type="text"  placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control type="text"  placeholder="Last name" />
                            </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Textarea</h4>
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
<Form>
    <Form.Group controlId="exampleFormControlTextarea1">
    <Form.Label> textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <Button variant="primary mr-2">Submit</Button>
    <Button variant="danger">Cancel</Button>
</Form>
                                `}
                                </code></pre></kbd></Card>
                            </div>
                        </Collapse>
                        <Form>
                            <Form.Group controlId="exampleFormControlTextarea1">
                            <Form.Label> textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary mr-2">Submit</Button>
                            <Button variant="danger">Cancel</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Input Telephone</h4>
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
<Form>
    <Form.Group controlId="exampleInputphone">
    <Form.Label>Teliphone Input</Form.Label>
    <Form.Control type="tel" defaultValue="1-(555)-555-5555" />
    </Form.Group>
    <Button type="button" variant="primary mr-2">Submit</Button>
    <Button type="button" variant="danger">Cancel</Button>
</Form>
                                `}
                                </code></pre></kbd></Card>
                            </div>
                        </Collapse>
                        <Form>
                            <Form.Group controlId="exampleInputphone">
                            <Form.Label>Teliphone Input</Form.Label>
                            <Form.Control type="tel" defaultValue="1-(555)-555-5555" />
                            </Form.Group>
                            <Button type="button" variant="primary mr-2">Submit</Button>
                            <Button type="button" variant="danger">Cancel</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Input Search</h4>
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
<Form>
    <Form.Group controlId="search-text">
    <Form.Label>Search</Form.Label>
    <Form.Control type="search"  required />
    </Form.Group>
    <Button type="button" variant="primary mr-2">Submit</Button>
    <Button type="button" variant="danger">Cancel</Button>
</Form>
                                `}
                                </code></pre></kbd></Card>
                            </div>
                        </Collapse>
                        <Form>
                            <Form.Group controlId="search-text">
                            <Form.Label>Search</Form.Label>
                            <Form.Control type="search"  required />
                            </Form.Group>
                            <Button type="button" variant="primary mr-2">Submit</Button>
                            <Button type="button" variant="danger">Cancel</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Input</h4>
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
                                <Card><kbd className="bg-dark"><pre className="text-white"><code>
    {`
<Form>
    <Form.Group controlId="exampleInputPassword1">
        <Form.Label>Input Text </Form.Label>
        <Form.Control type="text" defaultValue="Mark Tech"
            placeholder="Enter Name" />
    </Form.Group>
    <Form.Group controlId="exampleInputPassword2">
        <Form.Label>Email Input</Form.Label>
        <Form.Control type="email" defaultValue="markTech@gmail.com"
            placeholder="Enter Email" />
    </Form.Group>
    <Form.Group controlId="exampleInputPassword3">
        <Form.Label>Number Input</Form.Label>
        <Form.Control type="number" defaultValue="123456" />
    </Form.Group>
    <Form.Group controlId="exampleInputPassword4">
        <Form.Label>Password Input</Form.Label>
        <Form.Control type="password" defaultValue="example123"
            placeholder="Enter Password" />
    </Form.Group>
    <Button type="button" variant="primary mr-2">Submit</Button>
    <Button type="button" variant="danger">Cancel</Button>
</Form>
    `}
                                </code></pre></kbd></Card>
                            </div>
                        </Collapse>
                        <Form>
                            <Form.Group controlId="exampleInputPassword1">
                                <Form.Label>Input Text </Form.Label>
                                <Form.Control type="text" defaultValue="Mark Tech"
                                    placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group controlId="exampleInputPassword2">
                                <Form.Label>Email Input</Form.Label>
                                <Form.Control type="email" defaultValue="markTech@gmail.com"
                                    placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group controlId="exampleInputPassword3">
                                <Form.Label>Number Input</Form.Label>
                                <Form.Control type="number" defaultValue="123456" />
                            </Form.Group>
                            <Form.Group controlId="exampleInputPassword4">
                                <Form.Label>Password Input</Form.Label>
                                <Form.Control type="password" defaultValue="example123"
                                    placeholder="Enter Password" />
                            </Form.Group>
                            <Button type="button" variant="primary mr-2">Submit</Button>
                            <Button type="button" variant="danger">Cancel</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Input Size</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                            <i  type="button" onClick={() => setOpen6(!open6)}>
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </i>
                        </Card.Header.Action>
                    </Card.Header>
                    <Card.Body>
                        <Collapse in={open6}>
                            <div>
                                <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<Form>
    <Form.Group controlId="colFormLabelSm">
        <Form.Label>Small</Form.Label>
        <Form.Control type="email" size="sm" placeholder="form-control-sm" />
    </Form.Group>
    <Form.Group controlId="colFormLabel">
        <Form.Label>Default</Form.Label>
        <Form.Control type="email" placeholder="form-control" />
    </Form.Group>
    <Form.Group controlId="colFormLabelLg" className="mb-0">
        <Form.Label className="pb-0">Large</Form.Label>
        <Form.Control type="email" size="lg" placeholder="form-control-lg" />
    </Form.Group>
</Form>
                                `}
                                </code></pre></kbd></Card>
                            </div>
                        </Collapse>
                        <Form>
                            <Form.Group controlId="colFormLabelSm">
                                <Form.Label>Small</Form.Label>
                                <Form.Control type="email" size="sm" placeholder="form-control-sm" />
                            </Form.Group>
                            <Form.Group controlId="colFormLabel">
                                <Form.Label>Default</Form.Label>
                                <Form.Control type="email" placeholder="form-control" />
                            </Form.Group>
                            <Form.Group controlId="colFormLabelLg" className="mb-0">
                                <Form.Label className="pb-0">Large</Form.Label>
                                <Form.Control type="email" size="lg" placeholder="form-control-lg" />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Horizontal Form</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                            <i  type="button" onClick={() => setOpen7(!open7)}>
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </i>
                        </Card.Header.Action>
                    </Card.Header>
                    <Card.Body>
                        <Collapse in={open7}>
                            <div>
                                <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<Form className="form-horizontal" action="/action_page.php">
<Form.Group as={Row} controlId="email1">
    <Form.Label column sm="3" className="align-self-center">Email:</Form.Label>
    <Col sm="9">
        <Form.Control type="email" placeholder="Enter Your  email" />
    </Col>
</Form.Group>
<Form.Group as={Row} controlId="pwd1">
    <Form.Label column sm="3" className="align-self-center">Password:</Form.Label>
    <Col sm="9">
        <Form.Control type="password" placeholder="Enter Your password" />
    </Col>
</Form.Group>
<Form.Group>
    <Form.Check id="checkbox1" type="checkbox" label="Remember me" />
</Form.Group>
<Form.Group className="mb-0">
    <Button type="button" variant="primary mr-2">Submit</Button>
    <Button type="button" variant="danger">Cancel</Button>
</Form.Group>
</Form>
                                `}
                                </code></pre></kbd></Card>
                            </div>
                        </Collapse>
                        <Form className="form-horizontal" action="/action_page.php">
                            <Form.Group as={Row} controlId="email1">
                                <Form.Label column sm="3" className="align-self-center">Email:</Form.Label>
                                <Col sm="9">
                                    <Form.Control type="email" placeholder="Enter Your  email" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="pwd1">
                                <Form.Label column sm="3" className="align-self-center">Password:</Form.Label>
                                <Col sm="9">
                                    <Form.Control type="password" placeholder="Enter Your password" />
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Check id="checkbox1" type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Form.Group className="mb-0">
                                <Button type="button" variant="primary mr-2">Submit</Button>
                                <Button type="button" variant="danger">Cancel</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Form row</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                            <i  type="button" onClick={() => setOpen8(!open8)}>
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </i>
                        </Card.Header.Action>
                    </Card.Header>
                    <Card.Body>
                        <Collapse in={open8}>
                            <div>
                                <Card><kbd className="bg-dark"><pre id="form-now" className="text-white"><code>
    {`
    <Form>
    <Form.Row>
    <Col>
        <Form.Control type="text" placeholder="First name" />
    </Col>
    <Col>
        <Form.Control type="text" placeholder="Last name" />
    </Col>
    </Form.Row>
    </Form>
    `}
                                </code></pre></kbd></Card>
                            </div>
                        </Collapse>
                        <Form>
                            <Form.Row>
                            <Col>
                                <Form.Control type="text" placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Last name" />
                            </Col>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Input Url</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                            <i  type="button" onClick={() => setOpen9(!open9)}>
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </i>
                        </Card.Header.Action>
                    </Card.Header>
                    <Card.Body>
                        <Collapse in={open9}>
                            <div>
                                <Card><kbd className="bg-dark"><pre className="text-white"><code>
    {`
<Form>
    <Form.Group controlId="exampleInputurl">
        <Form.Label>Url Input</Form.Label>
        <Form.Control type="url" defaultValue="https://getbootstrap.com" placeholder="Enter Url" />
    </Form.Group>
    <Button type="button" variant="primary mr-2">Submit</Button>
    <Button type="button" variant="danger">Cancel</Button>
</Form>
    `}
                                </code></pre></kbd></Card>
                            </div>
                        </Collapse>
                        <Form>
                            <Form.Group controlId="exampleInputurl">
                                <Form.Label>Url Input</Form.Label>
                                <Form.Control type="url" defaultValue="https://getbootstrap.com" placeholder="Enter Url" />
                            </Form.Group>
                            <Button type="button" variant="primary mr-2">Submit</Button>
                            <Button type="button" variant="danger">Cancel</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Input Range</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                            <i  type="button" onClick={() => setOpen10(!open10)}>
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </i>
                        </Card.Header.Action>
                    </Card.Header>
                    <Card.Body>
                        <Collapse in={open10}>
                            <div>
                                <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<Form>
    <Form.Group controlId="formControlRange">
        <Form.Label>Range input</Form.Label>
        <Form.Control type="range" />
    </Form.Group>
    <Button type="button" variant="primary mr-2">Submit</Button>
    <Button type="button" variant="danger">Cancel</Button>
</Form>
                                `}
                                </code></pre></kbd></Card>
                            </div>
                        </Collapse>
                        <Form>
                            <Form.Group controlId="formControlRange">
                                <Form.Label>Range input</Form.Label>
                                <Form.Control type="range" />
                            </Form.Group>
                            <Button type="button" variant="primary mr-2">Submit</Button>
                            <Button type="button" variant="danger">Cancel</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Input Custom Range</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                            <i  type="button" onClick={() => setOpen11(!open11)}>
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </i>
                        </Card.Header.Action>
                    </Card.Header>
                    <Card.Body>
                        <Collapse in={open11}>
                            <div>
                                <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<Form>
    <Form.Group controlId="customRange1">
    <Form.Label>Range Input</Form.Label>
    <Form.Control type="range" className="custom-range"  />
    </Form.Group>
    <Button type="button" variant="primary mr-2">Submit</Button>
    <Button type="button" variant="danger">Cancel</Button>
</Form>
                                `}
                                </code></pre></kbd></Card>
                            </div>
                        </Collapse>
                        <Form>
                            <Form.Group controlId="customRange1">
                            <Form.Label>Range Input</Form.Label>
                            <Form.Control type="range" className="custom-range"  />
                            </Form.Group>
                            <Button type="button" variant="primary mr-2">Submit</Button>
                            <Button type="button" variant="danger">Cancel</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Input Choose file</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                            <i  type="button" onClick={() => setOpen12(!open12)}>
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </i>
                        </Card.Header.Action>
                    </Card.Header>
                    <Card.Body>
                        <Collapse in={open12}>
                            <div>
                                <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<Form>
    <Form.Group controlId="customFile">
    <div className="custom-file">
        <Form.File  />
        <Form.Label className="custom-file-label">Choose file</Form.Label>
    </div>
    </Form.Group>
    <Button type="button" variant="primary mr-2">Submit</Button>
    <Button type="button" variant="danger">Cancel</Button>
</Form>
                                `}
                                </code></pre></kbd></Card>
                            </div>
                        </Collapse>
                        <Form>
                            <Form.Group controlId="customFile">
                            <div className="custom-file">
                                <Form.File  />
                                <Form.Label className="custom-file-label">Choose file</Form.Label>
                            </div>
                            </Form.Group>
                            <Button type="button" variant="primary mr-2">Submit</Button>
                            <Button type="button" variant="danger">Cancel</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Input</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                            <i  type="button" onClick={() => setOpen13(!open13)}>
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </i>
                        </Card.Header.Action>
                    </Card.Header>
                    <Card.Body>
                        <Collapse in={open13}>
                            <div>
                                <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<Form>
    <Form.Group controlId="exampleInputDisabled5">
        <Form.Label>Disabled Input</Form.Label>
        <Form.Control type="text" disabled defaultValue="Mark Tech" />
    </Form.Group>
    <Form.Group controlId="exampleInputPlaceholder">
        <Form.Label>Placeholder</Form.Label>
        <Form.Control type="text" placeholder="This is Placeholder" />
    </Form.Group>
    <Form.Group controlId="exampleInputReadonly">
        <Form.Label>Readonly</Form.Label>
    <Form.Control type="text" readOnly defaultValue="Mark Tech" />
    </Form.Group>
    <Form.Group controlId="exampleInputcolor">
        <Form.Label>Input Color </Form.Label>
        <Form.Control type="color"  defaultValue="#4788ff" />
    </Form.Group>
    <Button type="button" variant="primary mr-2">Submit</Button>
    <Button type="button" variant="danger">Cancel</Button>
</Form>
                                `}
                                </code></pre></kbd></Card>
                            </div>
                        </Collapse>
                        <Form>
                            <Form.Group controlId="exampleInputDisabled5">
                                <Form.Label>Disabled Input</Form.Label>
                                <Form.Control type="text" disabled defaultValue="Mark Tech" />
                            </Form.Group>
                            <Form.Group controlId="exampleInputPlaceholder">
                                <Form.Label>Placeholder</Form.Label>
                                <Form.Control type="text" placeholder="This is Placeholder" />
                            </Form.Group>
                            <Form.Group controlId="exampleInputReadonly">
                                <Form.Label>Readonly</Form.Label>
                            <Form.Control type="text" readOnly defaultValue="Mark Tech" />
                            </Form.Group>
                            <Form.Group controlId="exampleInputcolor">
                                <Form.Label>Input Color </Form.Label>
                                <Form.Control type="color"  defaultValue="#4788ff" />
                            </Form.Group>
                            <Button type="button" variant="primary mr-2">Submit</Button>
                            <Button type="button" variant="danger">Cancel</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>
                            <h4 className="card-title">Select Size</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                            <i  type="button" onClick={() => setOpen14(!open14)}>
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </i>
                        </Card.Header.Action>
                    </Card.Header>
                    <Card.Body>
                        <Collapse in={open14}>
                            <div>
                                <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<Form.Group>
    <Form.Label>Small</Form.Label>
    <Form.Control as="select" size="sm" className="mb-3">
    <option defaultValue="">Open this select menu</option>
    <option defaultValue="1">One</option>
    <option defaultValue="2">Two</option>
    <option defaultValue="3">Three</option>
    </Form.Control>
</Form.Group>
<Form.Group>
    <Form.Label>Default</Form.Label>
    <Form.Control as="select" className="mb-3">
    <option defaultValue="">Open this select menu</option>
    <option defaultValue="1">One</option>
    <option defaultValue="2">Two</option>
    <option defaultValue="3">Three</option>
    </Form.Control>
</Form.Group>
<Form.Group >
    <Form.Label>Large</Form.Label>
    <Form.Control as="select" size="lg">
    <option defaultValue="">Open this select menu</option>
    <option defaultValue="1">One</option>
    <option defaultValue="2">Two</option>
    <option defaultValue="3">Three</option>
    </Form.Control>
</Form.Group>
                                `}
                                </code></pre></kbd></Card>
                            </div>
                        </Collapse>
                        <Form.Group>
                            <Form.Label>Small</Form.Label>
                            <Form.Control as="select" size="sm" className="mb-3">
                            <option defaultValue="">Open this select menu</option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Default</Form.Label>
                            <Form.Control as="select" className="mb-3">
                            <option defaultValue="">Open this select menu</option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Large</Form.Label>
                            <Form.Control as="select" size="lg">
                            <option defaultValue="">Open this select menu</option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Elements;