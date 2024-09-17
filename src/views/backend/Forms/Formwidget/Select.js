import React,{useState} from 'react'
import {Container,Row,Col,Collapse,Form,InputGroup} from 'react-bootstrap'
import  Card from '../../../../components/Card'

const Select = () => {
    // Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)
   const[open4,setOpen4]=useState(false)
   const[open5,setOpen5]=useState(false)
   const[open6,setOpen6]=useState(false)
   const[open7,setOpen7]=useState(false)
   const[open8,setOpen8]=useState(false)
    return (
        <>
          <Container fluid >
                <Row>
                    <Col lg="12">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Basic select boxes</h4>
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
<Form.Control as="select"  id="sel1" name="sellist1">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
</Form.Control>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form.Control as="select"  id="sel1" name="sellist1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </Form.Control>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Mutiple select</h4>
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
<Form.Control as="select" multiple  id="sel2" name="sellist2">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
</Form.Control>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form.Control as="select" multiple  id="sel2" name="sellist2">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Basic Select with Input Group</h4>
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
<InputGroup className="mb-3">
    <InputGroup.Prepend>
        <InputGroup.Text htmlFor="inputGroupSelect01">Options</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control as="select"  id="inputGroupSelect01">
        <option defaultValue="">Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Control>
    </InputGroup>
    <InputGroup>
    <Form.Control as="select"  id="inputGroupSelect02">
        <option defaultValue="">Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Control>
    <InputGroup.Append>
        <InputGroup.Text htmlFor="inputGroupSelect02">Options</InputGroup.Text>
    </InputGroup.Append>
</InputGroup>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text htmlFor="inputGroupSelect01">Options</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control as="select"  id="inputGroupSelect01">
                                        <option defaultValue="">Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Control>
                                    </InputGroup>
                                    <InputGroup>
                                    <Form.Control as="select"  id="inputGroupSelect02">
                                        <option defaultValue="">Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Control>
                                    <InputGroup.Append>
                                        <InputGroup.Text htmlFor="inputGroupSelect02">Options</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Single Select2</h4>
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
<Form.Group className="mb-0">
    <Form.Control as="select">
    <option>Java</option>
    <option>Javascript</option>
    <option>PHP</option>
    <option>Visual Basic</option>
    </Form.Control>
</Form.Group>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form.Group className="mb-0">
                                    <Form.Control as="select">
                                    <option>Java</option>
                                    <option>Javascript</option>
                                    <option>PHP</option>
                                    <option>Visual Basic</option>
                                    </Form.Control>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Multiple Select2</h4>
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
<Form.Control as="select" id="multiple" className="js-states" multiple>
    <option>Red</option>
    <option>Green</option>
    <option>Blue</option>
    <option>Yellow</option>
</Form.Control>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form.Control as="select" id="multiple" className="js-states" multiple>
                                    <option>Red</option>
                                    <option>Green</option>
                                    <option>Blue</option>
                                    <option>Yellow</option>
                                </Form.Control>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Custom Select</h4>
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
<Form.Control as="select">
    <option defaultValue="">Open this menu</option>
    <option value="IT">IT</option>
    <option value="Blade Runner">Blade Runner</option>
    <option value="Thor Ragnarok">Thor Ragnarok</option>
</Form.Control>
                                `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form.Control as="select">
                                    <option defaultValue="">Open this menu</option>
                                    <option value="IT">IT</option>
                                    <option value="Blade Runner">Blade Runner</option>
                                    <option value="Thor Ragnarok">Thor Ragnarok</option>
                                </Form.Control>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Disabled Select</h4>
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
<Form.Control as="select" disabled id="disabledSelect">
    <option>Disabled select</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
</Form.Control>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form.Control as="select" disabled id="disabledSelect">
                                    <option>Disabled select</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Control>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Custome Select with Input Group</h4>
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
                                        <Card><kbd className="bg-dark"><pre  className="text-white"><code>{`
<InputGroup className="mb-3">
    <InputGroup.Prepend>
        <InputGroup.Text  htmlFor="inputGroupSelect03">Options</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control as="select" custom  id="inputGroupSelect03">
        <option defaultValue>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Control>
</InputGroup>
<InputGroup>
    <Form.Control as="select" custom id="inputGroupSelect04">
        <option defaultValue>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Control>
    <InputGroup.Append>
        <InputGroup.Text htmlFor="inputGroupSelect04">Options</InputGroup.Text>
    </InputGroup.Append>
</InputGroup>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text  htmlFor="inputGroupSelect03">Options</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control as="select" custom  id="inputGroupSelect03">
                                        <option defaultValue>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Control>
                                </InputGroup>
                                <InputGroup>
                                    <Form.Control as="select" custom id="inputGroupSelect04">
                                        <option defaultValue>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Control>
                                    <InputGroup.Append>
                                        <InputGroup.Text htmlFor="inputGroupSelect04">Options</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Custom Select Menu Sizing</h4>
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
                                        <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<Form>
    <Form.Control size="sm" as="select" custom className="mb-3">
        <option defaultValue>Small Custom Select Menu</option>
        <option value="volvo">Volvo</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
    </Form.Control>
    <Form.Control as="select" name="cars" custom className="mb-3">
        <option defaultValue>Default Custom Select Menu</option>
        <option value="volvo">Volvo</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
    </Form.Control>
    <Form.Control as="select" size="lg" custom name="cars" className="mb-0">
        <option defaultValue>Large Custom Select Menu</option>
        <option value="volvo">Volvo</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
    </Form.Control>
</Form>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form>
                                    <Form.Control size="sm" as="select" custom className="mb-3">
                                        <option defaultValue>Small Custom Select Menu</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="fiat">Fiat</option>
                                        <option value="audi">Audi</option>
                                    </Form.Control>
                                    <Form.Control as="select" name="cars" custom className="mb-3">
                                        <option defaultValue>Default Custom Select Menu</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="fiat">Fiat</option>
                                        <option value="audi">Audi</option>
                                    </Form.Control>
                                    <Form.Control as="select" size="lg" custom name="cars" className="mb-0">
                                        <option defaultValue>Large Custom Select Menu</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="fiat">Fiat</option>
                                        <option value="audi">Audi</option>
                                    </Form.Control>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Select;