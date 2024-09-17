import React,{useState} from 'react'
import {Container,Row,Col,Collapse,Form} from 'react-bootstrap'
import  Card from '../../../../components/Card'

const Datepicker = () => {
     // Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)
   const[open4,setOpen4]=useState(false)
    return (
        <>
           <Container fluid >
                <Row>
                    <Col lg="12">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Basic</h4>
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
<Form.Group controlId="exampleInputdate">
    <Form.Label>Date Input</Form.Label>
    <Form.Control type="date" defaultValue="2019-12-18" />
</Form.Group>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form.Group controlId="exampleInputdate">
                                    <Form.Label>Date Input</Form.Label>
                                    <Form.Control type="date" defaultValue="2019-12-18" />
                                </Form.Group>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Month Date</h4>
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
<Form.Group controlId="exampleInputmonth">
    <Form.Label>Month Input</Form.Label>
    <Form.Control type="month" defaultValue="2019-12" />
</Form.Group>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form.Group controlId="exampleInputmonth">
                                    <Form.Label>Month Input</Form.Label>
                                    <Form.Control type="month" defaultValue="2019-12" />
                                </Form.Group>
                            </Card.Body>
                        </Card>            
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Time</h4>
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
<Form.Group controlId="exampleInputtime">
    <Form.Label>Time Input</Form.Label>
    <Form.Control type="time" defaultValue="13:45" />
</Form.Group>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form.Group controlId="exampleInputtime">
                                    <Form.Label>Time Input</Form.Label>
                                    <Form.Control type="time" defaultValue="13:45" />
                                </Form.Group>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Week</h4>
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
<Form.Group controlId="exampleInputweek">
    <Form.Label>Week Input</Form.Label>
    <Form.Control type="week"  defaultValue="2019-W46" />
</Form.Group> `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form.Group controlId="exampleInputweek">
                                    <Form.Label>Week Input</Form.Label>
                                    <Form.Control type="week" defaultValue="2019-W46" />
                                </Form.Group> 
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Date and Time</h4>
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
<Form.Group controlId="exampleInputdatetime">
    <Form.Label>Date and Time Input</Form.Label>
    <Form.Control type="datetime-local" defaultValue="2019-12-19T13:45:00" />
</Form.Group>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form.Group controlId="exampleInputdatetime">
                                    <Form.Label>Date and Time Input</Form.Label>
                                    <Form.Control type="datetime-local" defaultValue="2019-12-19T13:45:00" />
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Datepicker;