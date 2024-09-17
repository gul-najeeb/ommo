import React,{useState} from 'react'
import {Container,Row,Col,Collapse,Form,InputGroup,Button} from 'react-bootstrap'
import  Card from '../../../../components/Card'


const Validations = () => {
      // Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)

   //form validation
   const [validated, setValidated] = useState(false);

   const handleSubmit = (event) => {
     const form = event.currentTarget;
     if (form.checkValidity() === false) {
       event.preventDefault();
       event.stopPropagation();
     }
     setValidated(true);
   };
   const [validated1, setValidated1] = useState(false);

   const handleSubmit1 = (event) => {
     const form = event.currentTarget;
     if (form.checkValidity() === false) {
       event.preventDefault();
       event.stopPropagation();
     }
     setValidated1(true);
   };
    return (
        <>
             <Container fluid >
                <Row>
                    <Col sm="12" lg="12">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title"> Default Validation</h4>
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
    <Form.Row>
    <Col md="6" className="mb-3">
        <Form.Label htmlFor="validationDefault01">First name</Form.Label>
        <Form.Control type="text"  id="validationDefault01" required />
    </Col>
    <Col md="6" className="mb-3">
        <Form.Label htmlFor="validationDefault02">Last name</Form.Label>
        <Form.Control type="text"  id="validationDefault02" required />
    </Col>
    <Col md="6" className="mb-3">
        <Form.Label htmlFor="validationDefaultUsername">Username</Form.Label>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="text" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required />
        </InputGroup>
    </Col>
    <Col md="6" className="mb-3">
        <Form.Label htmlFor="validationDefault03">City</Form.Label>
        <Form.Control type="text"  id="validationDefault03" required />
    </Col>
    <Col md="6" className="mb-3">
        <Form.Label htmlFor="validationDefault04">State</Form.Label>
        <Form.Control as="select"  id="validationDefault04" required>
            <option  disabled defaultValue>Choose...</option>
            <option>...</option>
        </Form.Control>
    </Col>
    <Col md="6" className="mb-3">
        <Form.Label htmlFor="validationDefault05">Zip</Form.Label>
        <Form.Control type="text" id="validationDefault05" required />
    </Col>
    </Form.Row>
    <Form.Group>
    <Form.Check controlId="invalidCheck2">
        <Form.Check.Input  type="checkbox" defaultValue required />
        <Form.Check.Label>
        Agree to terms and conditions
        </Form.Check.Label>
    </Form.Check>
    </Form.Group>
    <Form.Group className="mb-0">
        <Button className="primary" type="submit">Submit form</Button>
    </Form.Group>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form>
                                    <Form.Row>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationDefault01">First name</Form.Label>
                                            <Form.Control type="text"  id="validationDefault01" required />
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationDefault02">Last name</Form.Label>
                                            <Form.Control type="text"  id="validationDefault02" required />
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationDefaultUsername">Username</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text>@</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="text" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required />
                                            </InputGroup>
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationDefault03">City</Form.Label>
                                            <Form.Control type="text"  id="validationDefault03" required />
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationDefault04">State</Form.Label>
                                            <Form.Control as="select"  id="validationDefault04" required>
                                                <option  disabled defaultValue>Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationDefault05">Zip</Form.Label>
                                            <Form.Control type="text" id="validationDefault05" required />
                                        </Col>
                                    </Form.Row>
                                    <Form.Group>
                                        <Form.Check controlId="invalidCheck2">
                                            <Form.Check.Input  type="checkbox" defaultValue required />
                                            <Form.Check.Label>
                                            Agree to terms and conditions
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </Form.Group>
                                    <Form.Group className="mb-0">
                                        <Button className="primary" type="submit">Submit form</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title"> Supported elements</h4>
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
<Form validated >
    <div className="mb-3">
    <Form.Label htmlFor="validationTextarea">Textarea</Form.Label>
    <Form.Control as="textarea" className="is-invalid" id="validationTextarea" placeholder="Required example textarea" required></Form.Control>
    <Form.Control.Feedback type="invalid">
        Please enter a message in the textarea.
    </Form.Control.Feedback>
    </div>
    <div className="custom-control custom-checkbox mb-3">
        <Form.Check.Input bsPrefix="custom-control-input" type="checkbox" id="customControlValidation1" required />
        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customControlValidation1">Check this custom checkbox</Form.Check.Label>
        <Form.Control.Feedback type="invalid">Example invalid feedback text</Form.Control.Feedback>
    </div>
    <div className="custom-control custom-radio">
        <Form.Check.Input type="radio" bsPrefix="custom-control-input" id="customControlValidation2" name="radio-stacked" required />
        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customControlValidation2">Toggle this custom radio</Form.Check.Label>
    </div>
    <div className="custom-control custom-radio mb-3">
        <Form.Check.Input type="radio" bsPrefix="custom-control-input" id="customControlValidation3" name="radio-stacked" required />
        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customControlValidation3">Or toggle this other custom radio</Form.Check.Label>
        <Form.Control.Feedback type="invalid">More example invalid feedback text</Form.Control.Feedback>
    </div>
    <Form.Group>
    <Form.Control as="select" custom  required>
        <option defaultValue>Open this select menu</option>
        <option defaultValue="1">One</option>
        <option defaultValue="2">Two</option>
        <option defaultValue="3">Three</option>
    </Form.Control>
    <Form.Control.Feedback type="invalid">Example invalid custom select feedback</Form.Control.Feedback>
    </Form.Group>
    <Form.File custom>
        <Form.File.Input   id="validatedCustomFile" required /> 
        <Form.File.Label htmlFor="validatedCustomFile">Choose file...</Form.File.Label>
        <Form.Control.Feedback type="invalid">Example invalid custom file feedback</Form.Control.Feedback>
    </Form.File>
</Form>`}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form validated >
                                    <div className="mb-3">
                                        <Form.Label htmlFor="validationTextarea">Textarea</Form.Label>
                                        <Form.Control as="textarea" className="is-invalid" id="validationTextarea" placeholder="Required example textarea" required></Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a message in the textarea.
                                        </Form.Control.Feedback>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <Form.Check.Input bsPrefix="custom-control-input" type="checkbox" id="customControlValidation1" required />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customControlValidation1">Check this custom checkbox</Form.Check.Label>
                                        <Form.Control.Feedback type="invalid">Example invalid feedback text</Form.Control.Feedback>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <Form.Check.Input type="radio" bsPrefix="custom-control-input" id="customControlValidation2" name="radio-stacked" required />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customControlValidation2">Toggle this custom radio</Form.Check.Label>
                                    </div>
                                    <div className="custom-control custom-radio mb-3">
                                        <Form.Check.Input type="radio" bsPrefix="custom-control-input" id="customControlValidation3" name="radio-stacked" required />
                                        <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customControlValidation3">Or toggle this other custom radio</Form.Check.Label>
                                        <Form.Control.Feedback type="invalid">More example invalid feedback text</Form.Control.Feedback>
                                    </div>
                                    <Form.Group>
                                    <Form.Control as="select" custom  required>
                                        <option defaultValue>Open this select menu</option>
                                        <option defaultValue="1">One</option>
                                        <option defaultValue="2">Two</option>
                                        <option defaultValue="3">Three</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">Example invalid custom select feedback</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.File custom>
                                        <Form.File.Input   id="validatedCustomFile" required /> 
                                        <Form.File.Label htmlFor="validatedCustomFile">Choose file...</Form.File.Label>
                                        <Form.Control.Feedback type="invalid">Example invalid custom file feedback</Form.Control.Feedback>
                                    </Form.File>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Custom Validation</h4>
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
<Form noValidate validated={validated} onSubmit={handleSubmit} className="needs-validation">
    <Form.Row>
        <Col md="6" className="mb-3">
            <Form.Label htmlFor="validationCustom01">First name</Form.Label>
            <Form.Control type="text" id="validationCustom01"  required />
            <Form.Control.Feedback type="valid">
                Looks good!
            </Form.Control.Feedback>
        </Col>
        <Col md="6" className="mb-3">
            <Form.Label htmlFor="validationCustom02">Last name</Form.Label>
            <Form.Control type="text"  id="validationCustom02"  required />
            <Form.Control.Feedback type="valid">
                Looks good!
            </Form.Control.Feedback>
        </Col>
        <Col md="6" className="mb-3">
            <Form.Label htmlFor="validationCustomUsername">Username</Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text  id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="text" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                <Form.Control.Feedback type="invalid">
                    Please choose a username.
                </Form.Control.Feedback>
            </InputGroup>
        </Col>
        <Col md="6" className="mb-3">
            <Form.Label htmlFor="validationCustom03">City</Form.Label>
            <Form.Control type="text" id="validationCustom03" required />
            <Form.Control.Feedback  type="invalid">
                Please provide a valid city.
            </Form.Control.Feedback>
        </Col>
        <Col md="6" className="mb-3">
            <Form.Label htmlFor="validationCustom04">State</Form.Label>
            <Form.Control as="select"  id="validationCustom04" required>
                <option  disabled defaultValue>Choose...</option>
                <option>...</option>
            </Form.Control>
            <Form.Control.Feedback type="valid">
                Please select a valid state.
            </Form.Control.Feedback>
        </Col>
        <Col md="6" className="mb-3">
            <Form.Label htmlFor="validationCustom05">Zip</Form.Label>
            <Form.Control type="text" id="validationCustom05" required />
            <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
            </Form.Control.Feedback>
        </Col>
    </Form.Row>
    <Form.Group controlId="invalidCheck">
        <Form.Check>
            <Form.Check.Input  type="checkbox" defaultValue  required />
            <Form.Check.Label>
            Agree to terms and conditions
            </Form.Check.Label>
            <div className="invalid-feedback">
                You must agree before submitting.
            </div>
        </Form.Check>
        </Form.Group>
    <Button varinat="primary" type="submit">Submit form</Button>
</Form>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form noValidate validated={validated} onSubmit={handleSubmit} className="needs-validation">
                                    <Form.Row>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationCustom01">First name</Form.Label>
                                            <Form.Control type="text" id="validationCustom01"  required />
                                            <Form.Control.Feedback type="valid">
                                                Looks good!
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationCustom02">Last name</Form.Label>
                                            <Form.Control type="text"  id="validationCustom02"  required />
                                            <Form.Control.Feedback type="valid">
                                                Looks good!
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationCustomUsername">Username</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text  id="inputGroupPrepend">@</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="text" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please choose a username.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationCustom03">City</Form.Label>
                                            <Form.Control type="text" id="validationCustom03" required />
                                            <Form.Control.Feedback  type="invalid">
                                                Please provide a valid city.
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationCustom04">State</Form.Label>
                                            <Form.Control as="select"  id="validationCustom04" required>
                                                <option  disabled defaultValue>Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                            <Form.Control.Feedback type="valid">
                                                Please select a valid state.
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationCustom05">Zip</Form.Label>
                                            <Form.Control type="text" id="validationCustom05" required />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid zip.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Row>
                                    <Form.Group controlId="invalidCheck">
                                        <Form.Check>
                                            <Form.Check.Input  type="checkbox" defaultValue  required />
                                            <Form.Check.Label>
                                            Agree to terms and conditions
                                            </Form.Check.Label>
                                            <div className="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                        </Form.Check>
                                        </Form.Group>
                                    <Button varinat="primary" type="submit">Submit form</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Tooltips</h4>
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
<Form  validated={validated1} onSubmit={handleSubmit1} className="needs-validation" noValidate>
    <Form.Row>
        <Col md="6" className="mb-3">
            <Form.Label htmlFor="validationTooltip01">First name</Form.Label>
            <Form.Control type="text" id="validationTooltip01" defaultValue="Mark" required />
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
        </Col>
        <Col md="6" className="mb-3">
            <Form.Label htmlFor="validationTooltip02">Last name</Form.Label>
            <Form.Control type="text"  id="validationTooltip02" defaultValue="Tech" required />
            <Form.Control.Feedback  tooltip>Looks good!</Form.Control.Feedback>
        </Col>
        <Col md="6" className="mb-3">
            <Form.Label htmlFor="validationTooltipUsername">Username</Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="validationTooltipUsernamePrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="text" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required />
                <Form.Control.Feedback tooltip type="invalid">Please choose a unique and valid username.</Form.Control.Feedback>
            </InputGroup>
        </Col>
        <Col md="6" className="mb-3">
            <Form.Label htmlFor="validationTooltip03">City</Form.Label>
            <Form.Control type="text"  id="validationTooltip03" required />
            <Form.Control.Feedback tooltip type="invalid">Please provide a valid city.</Form.Control.Feedback>
        </Col>
        <Col md="6" className="mb-3">
            <Form.Label htmlFor="validationTooltip04">State</Form.Label>
            <Form.Control as="select"  id="validationTooltip04" required>
                <option  disabled defaultValue="">Choose...</option>
                <option>...</option>
            </Form.Control>
            <Form.Control.Feedback tooltip type="invalid">Please select a valid state.</Form.Control.Feedback>
        </Col>
        <Col md="6" className="mb-3">
            <Form.Label htmlFor="validationTooltip05">Zip</Form.Label>
            <Form.Control type="text" id="validationTooltip05" required />
            <Form.Control.Feedback tooltip type="invalid">Please provide a valid zip.</Form.Control.Feedback>
        </Col>
    </Form.Row>
    <Button varinat="primary" type="submit">Submit form</Button>
</Form>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <Form  validated={validated1} onSubmit={handleSubmit1} className="needs-validation" noValidate>
                                    <Form.Row>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationTooltip01">First name</Form.Label>
                                            <Form.Control type="text" id="validationTooltip01" defaultValue="Mark" required />
                                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationTooltip02">Last name</Form.Label>
                                            <Form.Control type="text"  id="validationTooltip02" defaultValue="Tech" required />
                                            <Form.Control.Feedback  tooltip>Looks good!</Form.Control.Feedback>
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationTooltipUsername">Username</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="validationTooltipUsernamePrepend">@</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="text" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required />
                                                <Form.Control.Feedback tooltip type="invalid">Please choose a unique and valid username.</Form.Control.Feedback>
                                            </InputGroup>
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationTooltip03">City</Form.Label>
                                            <Form.Control type="text"  id="validationTooltip03" required />
                                            <Form.Control.Feedback tooltip type="invalid">Please provide a valid city.</Form.Control.Feedback>
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationTooltip04">State</Form.Label>
                                            <Form.Control as="select"  id="validationTooltip04" required>
                                                <option  disabled defaultValue="">Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                            <Form.Control.Feedback tooltip type="invalid">Please select a valid state.</Form.Control.Feedback>
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationTooltip05">Zip</Form.Label>
                                            <Form.Control type="text" id="validationTooltip05" required />
                                            <Form.Control.Feedback tooltip type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Row>
                                    <Button varinat="primary" type="submit">Submit form</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Validations;