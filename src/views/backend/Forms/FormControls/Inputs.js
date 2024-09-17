import React,{useState} from 'react'
import {Container,Row,Col, Collapse,InputGroup,Form,DropdownButton,Dropdown,Button,ButtonGroup} from 'react-bootstrap'
import  Card from '../../../../components/Card'

const Inputs = () => {
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
   const[open9,setOpen9]=useState(false)
   const[open10,setOpen10]=useState(false)
   const[open11,setOpen11]=useState(false)
   const[open12,setOpen12]=useState(false)
   const[open13,setOpen13]=useState(false)
   const[open14,setOpen14]=useState(false)
    return (
        <>
          <Container fluid>
         <Row >
            <Col sm="12" lg="12" md="12">
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
                           <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<InputGroup className="mb-4">
   <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
   </InputGroup.Prepend>
   <Form.Control type="text"  placeholder="Username"/>
</InputGroup>
                           `}
                           </code></pre></kbd></Card>
                        </div>
                     </Collapse>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text"  placeholder="Username"/>
                     </InputGroup>
                     <InputGroup className="mb-4">
                        <Form.Control type="text"  placeholder="Recipient's username"
                           aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <InputGroup.Append>
                           <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                        </InputGroup.Append>
                     </InputGroup>
                     <Form.Label htmlFor="basic-url">Your URL</Form.Label>
                     <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                           <InputGroup.Text id="basic-addon3">https://example.com/users/</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text"  id="basic-url" aria-describedby="basic-addon3" />
                     </InputGroup>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Append>
                           <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup.Append>
                     </InputGroup>
                     <InputGroup>
                        <InputGroup.Prepend>
                           <InputGroup.Text className="text-area">With textarea</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control as="textarea"  aria-label="With textarea"></Form.Control>
                     </InputGroup>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <Card.Header.Title>
                        <h4 className="card-title">Simple Icon</h4>
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
<InputGroup className="mb-4">
   <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon4"><i className="las la-bell font-size-20"></i></InputGroup.Text>
   </InputGroup.Prepend>
   <Form.Control type="text" placeholder="Notification" aria-label="notification" aria-describedby="basic-addon4" />
</InputGroup>
<p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
<InputGroup>
   <Form.Control type="text" placeholder="Notification" aria-label="notification" aria-describedby="basic-addon5" />
   <InputGroup.Append>
      <InputGroup.Text  id="basic-addon5"><i className="las la-bell font-size-20"></i></InputGroup.Text>
   </InputGroup.Append>
</InputGroup>
                           `}
                           </code></pre></kbd></Card>
                        </div>
                     </Collapse>
                     <p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <InputGroup.Text id="basic-addon4"><i className="las la-bell font-size-20"></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" placeholder="Notification" aria-label="notification" aria-describedby="basic-addon4" />
                     </InputGroup>
                     <p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <InputGroup>
                        <Form.Control type="text" placeholder="Notification" aria-label="notification" aria-describedby="basic-addon5" />
                        <InputGroup.Append>
                           <InputGroup.Text  id="basic-addon5"><i className="las la-bell font-size-20"></i></InputGroup.Text>
                        </InputGroup.Append>
                     </InputGroup>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <Card.Header.Title>
                        <h4 className="card-title">Spinning Icon</h4>
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
<InputGroup className="mb-4">
   <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon6"><i className="fa fa-spinner fa-spin"></i></InputGroup.Text>
   </InputGroup.Prepend>
   <Form.Control type="text" placeholder="Spinners" aria-label="spinners" aria-describedby="basic-addon6" />
</InputGroup>
                           `}
                           </code></pre></kbd></Card>
                        </div>
                     </Collapse>
                     <p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <InputGroup.Text id="basic-addon6"><i className="fa fa-spinner fa-spin"></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" placeholder="Spinners" aria-label="spinners" aria-describedby="basic-addon6" />
                     </InputGroup>
                     <p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <InputGroup>
                        <Form.Control type="text"  placeholder="Spinners" aria-label="spinners" aria-describedby="basic-addon7" />
                        <InputGroup.Append>
                           <InputGroup.Text id="basic-addon7"><i className="fa fa-spinner fa-spin"></i></InputGroup.Text>
                        </InputGroup.Append>
                     </InputGroup>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <Card.Header.Title>
                        <h4 className="card-title">Switch</h4>
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
                           <Card><kbd className="bg-dark"><pre  className="text-white"><code>{`
<InputGroup className="mb-4">
   <InputGroup.Prepend>
      <InputGroup.Text>
         <Form.Check className="custom-control custom-switch custom-switch-color">
            <input type="checkbox" className="custom-control-input bg-primary" id="customSwitch01"
               defaultChecked="true" />
            <label className="custom-control-label" htmlFor="customSwitch01"></label>
         </Form.Check>
      </InputGroup.Text>
   </InputGroup.Prepend>
   <Form.Control type="text" placeholder="Switch" aria-label="switch" />
</InputGroup>
                           `}
                           </code></pre></kbd></Card>
                        </div>
                     </Collapse>
                     <p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <InputGroup.Text>
                              <Form.Check className="custom-control custom-switch custom-switch-color">
                                 <input type="checkbox" className="custom-control-input bg-primary" id="customSwitch01"
                                    defaultChecked="true" />
                                 <label className="custom-control-label" htmlFor="customSwitch01"></label>
                              </Form.Check>
                           </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" placeholder="Switch" aria-label="switch" />
                     </InputGroup>
                     <p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <InputGroup>
                        <input type="text" className="form-control" placeholder="Switch" aria-label="switch" />
                        <InputGroup.Append>
                           <InputGroup.Text>
                              <div className="custom-control custom-switch custom-switch-color">
                                 <input type="checkbox" className="custom-control-input bg-success" id="customSwitch02"
                                    defaultChecked="true" />
                                 <label className="custom-control-label" htmlFor="customSwitch02"></label>
                              </div>
                           </InputGroup.Text>
                        </InputGroup.Append>
                     </InputGroup>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <Card.Header.Title>
                        <h4 className="card-title">Buttons with dropdowns</h4>
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
<InputGroup className="mb-4">
   <InputGroup.Prepend>
      <DropdownButton variant="primary" title="Dropdown"  >
         <Dropdown.Item>Action</Dropdown.Item>
         <Dropdown.Item>Another action</Dropdown.Item>
         <Dropdown.Item>Something else here</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item>Separated link</Dropdown.Item>
         </DropdownButton>
   </InputGroup.Prepend>
   <Form.Control type="text" aria-label="Text input with dropdown button" />
</InputGroup>
                           `}
                           </code></pre></kbd></Card>
                        </div>
                     </Collapse>
                     <p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <DropdownButton variant="primary" title="Dropdown"  >
                              <Dropdown.Item>Action</Dropdown.Item>
                              <Dropdown.Item>Another action</Dropdown.Item>
                              <Dropdown.Item>Something else here</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item>Separated link</Dropdown.Item>
                              </DropdownButton>
                        </InputGroup.Prepend>
                        <Form.Control type="text" aria-label="Text input with dropdown button" />
                     </InputGroup>
                     <p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <InputGroup>
                        <Form.Control type="text"  aria-label="Text input with dropdown button" />
                           <DropdownButton  type="button" title="Dropdown " as={InputGroup.Append}>
                              <Dropdown.Item>Action</Dropdown.Item>
                              <Dropdown.Item>Another action</Dropdown.Item>
                              <Dropdown.Item>Something else here</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item>Separated link</Dropdown.Item>
                           </DropdownButton>
                     </InputGroup>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <Card.Header.Title>
                        <h4 className="card-title">Segmented buttons</h4>
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
                           <Card><kbd className="bg-dark"><pre id="segmented-buttons" className="text-white"><code>
{`
<InputGroup className="mb-4">
<InputGroup.Prepend>
 <Dropdown as={ButtonGroup}>
 <Button>Action</Button>
   <Dropdown.Toggle split variant="outline-primary dropone" id="dropdown-custom-2" >
      <i className="las la-angle-down"></i>
   </Dropdown.Toggle>
   <Dropdown.Menu>
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Item>Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Separated link</Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>
</InputGroup.Prepend>
<Form.Control type="text"  aria-label="Text input with segmented dropdown button" />
</InputGroup>
`}                         </code></pre></kbd></Card>
                        </div>
                     </Collapse>
                     <p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                         <Dropdown as={ButtonGroup}>
                         <Button>Action</Button>
                           <Dropdown.Toggle split variant="outline-primary dropone" id="dropdown-custom-2" >
                              <i className="las la-angle-down"></i>
                           </Dropdown.Toggle>
                           <Dropdown.Menu>
                              <Dropdown.Item>Action</Dropdown.Item>
                              <Dropdown.Item>Another action</Dropdown.Item>
                              <Dropdown.Item>Something else here</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item>Separated link</Dropdown.Item>
                           </Dropdown.Menu>
                         </Dropdown>
                        </InputGroup.Prepend>
                        <Form.Control type="text"  aria-label="Text input with segmented dropdown button" />
                     </InputGroup>
                     <p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <InputGroup>
                        <Form.Control type="text" aria-label="Text input with segmented dropdown button" />
                        <InputGroup.Append>
                        <Dropdown as={ButtonGroup}>
                           <Button variant="outline-secondary">Action</Button>
                           <Dropdown.Toggle split variant="secondary dropone" id="dropdown-custom-3" > 
                              <i className="las la-angle-down"></i>
                           </Dropdown.Toggle>
                           <Dropdown.Menu>
                              <Dropdown.Item>Action</Dropdown.Item>
                              <Dropdown.Item>Another action</Dropdown.Item>
                              <Dropdown.Item>Something else here</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item>Separated link</Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                        </InputGroup.Append>
                     </InputGroup>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <Card.Header.Title>
                        <h4 className="card-title">Custom select</h4>
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
                           <Card><kbd className="bg-dark"><pre className="text-white"><code>
{`
<InputGroup className="mb-4">
<InputGroup.Prepend>
   <InputGroup.Text htmlFor="inputGroupSelect01">Options</InputGroup.Text>
</InputGroup.Prepend>
<select className="custom-select" id="inputGroupSelect01">
   <option defaultValue>Choose...</option>
   <option defaultValue="1">One</option>
   <option defaultValue="2">Two</option>
   <option defaultValue="3">Three</option>
</select>
</InputGroup>
<InputGroup className="mb-4">
<InputGroup.Prepend>
   <Button variant="outline-secondary">Button</Button>
</InputGroup.Prepend>
<select className="custom-select" id="inputGroupSelect03">
   <option defaultValue>Choose...</option>
   <option defaultValue="1">One</option>
   <option defaultValue="2">Two</option>
   <option defaultValue="3">Three</option>
</select>
</InputGroup>
`}                         </code></pre></kbd></Card>
                        </div>
                     </Collapse>
                     <p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <InputGroup.Text htmlFor="inputGroupSelect01">Options</InputGroup.Text>
                        </InputGroup.Prepend>
                        <select className="custom-select" id="inputGroupSelect01">
                           <option defaultValue>Choose...</option>
                           <option defaultValue="1">One</option>
                           <option defaultValue="2">Two</option>
                           <option defaultValue="3">Three</option>
                        </select>
                     </InputGroup>
                     <p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <InputGroup className="mb-4">
                        <select className="custom-select" id="inputGroupSelect02">
                           <option defaultValue>Choose...</option>
                           <option defaultValue="1">One</option>
                           <option defaultValue="2">Two</option>
                           <option defaultValue="3">Three</option>
                        </select>
                        <InputGroup.Append>
                           <InputGroup.Text htmlFor="inputGroupSelect02">Options</InputGroup.Text>
                        </InputGroup.Append>
                     </InputGroup>
                     <p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <Button variant="outline-secondary">Button</Button>
                        </InputGroup.Prepend>
                        <select className="custom-select" id="inputGroupSelect03">
                           <option defaultValue>Choose...</option>
                           <option defaultValue="1">One</option>
                           <option defaultValue="2">Two</option>
                           <option defaultValue="3">Three</option>
                        </select>
                     </InputGroup>
                     <p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <InputGroup>
                        <select className="custom-select" id="inputGroupSelect04">
                           <option defaultValue>Choose...</option>
                           <option defaultValue="1">One</option>
                           <option defaultValue="2">Two</option>
                           <option defaultValue="3">Three</option>
                        </select>
                        <InputGroup.Append>
                           <Button variant="outline-secondary">Button</Button>
                        </InputGroup.Append>
                     </InputGroup>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <Card.Header.Title>
                        <h4 className="card-title">Sizing</h4>
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
<InputGroup size="sm" className="mb-4">
   <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
   </InputGroup.Prepend>
   <Form.Control type="text" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
</InputGroup>
<InputGroup className="mb-4">
   <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
   </InputGroup.Prepend>
   <Form.Control type="text" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
</InputGroup>
<InputGroup size="lg">
   <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
   </InputGroup.Prepend>
   <Form.Control type="text"  aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
</InputGroup>
                           `}
                           </code></pre></kbd></Card>
                        </div>
                     </Collapse>
                     <InputGroup size="sm" className="mb-4">
                        <InputGroup.Prepend>
                           <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                     </InputGroup>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                     </InputGroup>
                     <InputGroup size="lg">
                        <InputGroup.Prepend>
                           <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text"  aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                     </InputGroup>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <Card.Header.Title>
                        <h4 className="card-title">Dropdown Icon</h4>
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
<InputGroup className="mb-4">
   <InputGroup.Prepend>
      <DropdownButton  variant="primary dropone" title={<i className="las la-cog font-size-20"></i>} >
         <Dropdown.Item href="#">Action</Dropdown.Item>
         <Dropdown.Item href="#">Another action</Dropdown.Item>
         <Dropdown.Item href="#">Something else here</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item href="#">Separated link</Dropdown.Item>
      </DropdownButton>
   </InputGroup.Prepend>
   <Form.Control type="text" className="form-control" placeholder="Dropdown" aria-label="dropdown" />
</InputGroup>
<p className="text-right"><i className="las la-long-arrow-alt-right mr-1 "></i>Right </p>
<InputGroup>
   <Form.Control type="text"  aria-label="Text input with dropdown button" />
      <DropdownButton as={InputGroup.Append} variant="success dropone" title={<i className="las la-cog font-size-20"></i>} >
         <Dropdown.Item href="#">Action</Dropdown.Item>
         <Dropdown.Item href="#">Another action</Dropdown.Item>
         <Dropdown.Item href="#">Something else here</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item href="#">Separated link</Dropdown.Item>
      </DropdownButton>
   </InputGroup> 
                           `}
                           </code></pre></kbd></Card>
                        </div>
                     </Collapse>
                     <p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <DropdownButton  variant="primary dropone" title={<i className="las la-cog font-size-20"></i>} >
                              <Dropdown.Item href="#">Action</Dropdown.Item>
                              <Dropdown.Item href="#">Another action</Dropdown.Item>
                              <Dropdown.Item href="#">Something else here</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item href="#">Separated link</Dropdown.Item>
                           </DropdownButton>
                        </InputGroup.Prepend>
                        <Form.Control type="text" className="form-control" placeholder="Dropdown" aria-label="dropdown" />
                     </InputGroup>
                     <p className="text-right"><i className="las la-long-arrow-alt-right mr-1 "></i>Right </p>
                     <InputGroup>
                        <Form.Control type="text"  aria-label="Text input with dropdown button" />
                           <DropdownButton as={InputGroup.Append} variant="success dropone" title={<i className="las la-cog font-size-20"></i>} >
                              <Dropdown.Item href="#">Action</Dropdown.Item>
                              <Dropdown.Item href="#">Another action</Dropdown.Item>
                              <Dropdown.Item href="#">Something else here</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item href="#">Separated link</Dropdown.Item>
                           </DropdownButton>
                        </InputGroup> 
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <Card.Header.Title>
                        <h4 className="card-title">Checkboxes</h4>
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
                           <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<InputGroup className="mb-4">
   <InputGroup.Prepend>
         <InputGroup.Checkbox  aria-label="Text input with checkbox" />
   </InputGroup.Prepend>
   <Form.Control type="text" placeholder="Checkbox" />
</InputGroup>
                           `}
                           </code></pre></kbd></Card>
                        </div>
                     </Collapse>
                     <p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                              <InputGroup.Checkbox  aria-label="Text input with checkbox" />
                        </InputGroup.Prepend>
                        <Form.Control type="text" placeholder="Checkbox" />
                     </InputGroup>
                     <p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <InputGroup>
                        <Form.Control type="text"  placeholder="Checkbox" aria-label="checkbox" aria-describedby="basic-addon5" />
                        <InputGroup.Append>
                           <InputGroup.Checkbox  aria-label="Text input with checkbox" defaultChecked />
                        </InputGroup.Append>
                     </InputGroup>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <Card.Header.Title>
                        <h4 className="card-title">Radios</h4>
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
<InputGroup className="mb-4">
   <InputGroup.Prepend>
      <InputGroup.Radio aria-label="Radio button for following text input" />
   </InputGroup.Prepend>
   <Form.Control  type="text" placeholder="Checkbox" />
</InputGroup>
                           `}
                           </code></pre></kbd></Card>
                        </div>
                     </Collapse>
                     <p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <InputGroup.Radio aria-label="Radio button for following text input" />
                        </InputGroup.Prepend>
                        <Form.Control  type="text" placeholder="Checkbox" />
                     </InputGroup>
                     <p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <InputGroup>
                        <Form.Control  type="text" placeholder="Checkbox" />
                        <InputGroup.Append>
                           <InputGroup.Radio aria-label="Radio button for following text input" defaultChecked />
                        </InputGroup.Append>
                     </InputGroup>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <Card.Header.Title>
                        <h4 className="card-title">Multiple inputs</h4>
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
<InputGroup>
   <InputGroup>
      <InputGroup.Prepend>
         <InputGroup.Text id="first">First and last name</InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control type="text" />
      <Form.Control type="text" />
   </InputGroup>
</InputGroup>
                           `}
                           </code></pre></kbd></Card>
                        </div>
                     </Collapse>
                     <InputGroup>
                        <InputGroup>
                           <InputGroup.Prepend>
                              <InputGroup.Text id="first">First and last name</InputGroup.Text>
                           </InputGroup.Prepend>
                           <Form.Control type="text" />
                           <Form.Control type="text" />
                        </InputGroup>
                     </InputGroup>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <Card.Header.Title>
                        <h4 className="card-title">Multiple addons</h4>
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
<InputGroup className="mb-4">
   <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
      <InputGroup.Text>0.00</InputGroup.Text>
   </InputGroup.Prepend>
   <Form.Control type="text" aria-label="Amount (to the nearest dollar)" />
</InputGroup>
                           `}
                           </code></pre></kbd></Card>
                        </div>
                     </Collapse>
                     <p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <InputGroup.Text>$</InputGroup.Text>
                           <InputGroup.Text>0.00</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" aria-label="Amount (to the nearest dollar)" />
                     </InputGroup>
                     <p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <InputGroup>
                        <Form.Control type="text" aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Append>
                           <InputGroup.Text>$</InputGroup.Text>
                           <InputGroup.Text>0.00</InputGroup.Text>
                        </InputGroup.Append>
                     </InputGroup>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <Card.Header.Title>
                        <h4 className="card-title">Custom select</h4>
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
<InputGroup className="mb-4">
   <InputGroup.Prepend>
      <Button variant="primary" type="button">Button</Button>
   </InputGroup.Prepend>
   <Form.Control type="text" />
</InputGroup>
<p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
<InputGroup className="mb-4">
   <Form.Control type="text"  placeholder="Recipient's username" aria-label="Recipient's username" />
   <InputGroup.Append>
      <Button variant="primary" type="button">Button</Button>
   </InputGroup.Append>
</InputGroup>
<p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
<InputGroup className="mb-4">
   <InputGroup.Prepend>
      <Button variant="outline-primary">Button</Button>
      <Button variant="outline-primary">Button</Button>
   </InputGroup.Prepend>
   <Form.Control type="text" />
</InputGroup>
<p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
<InputGroup>
   <Form.Control type="text"  placeholder="Recipient's username" aria-label="Recipient's username" />
   <InputGroup.Append>
      <Button variant="outline-primary">Button</Button>
      <Button variant="outline-primary">Button</Button>
   </InputGroup.Append>
</InputGroup>
                           `}
                           </code></pre></kbd></Card>
                        </div>
                     </Collapse>
                     <p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <Button variant="primary" type="button">Button</Button>
                        </InputGroup.Prepend>
                        <Form.Control type="text" />
                     </InputGroup>
                     <p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <InputGroup className="mb-4">
                        <Form.Control type="text"  placeholder="Recipient's username" aria-label="Recipient's username" />
                        <InputGroup.Append>
                           <Button variant="primary" type="button">Button</Button>
                        </InputGroup.Append>
                     </InputGroup>
                     <p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <Button variant="outline-primary">Button</Button>
                           <Button variant="outline-primary">Button</Button>
                        </InputGroup.Prepend>
                        <Form.Control type="text" />
                     </InputGroup>
                     <p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <InputGroup>
                        <Form.Control type="text"  placeholder="Recipient's username" aria-label="Recipient's username" />
                        <InputGroup.Append>
                           <Button variant="outline-primary">Button</Button>
                           <Button variant="outline-primary">Button</Button>
                        </InputGroup.Append>
                     </InputGroup>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <Card.Header.Title>
                        <h4 className="card-title">Custom file input</h4>
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
<InputGroup className="mb-4">
   <InputGroup.Prepend>
      <InputGroup.Text>Upload</InputGroup.Text>
   </InputGroup.Prepend>
   <div className="custom-file">
      <input type="file" className="custom-file-input" id="inputGroupFile01" />
      <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
   </div>
</InputGroup>
<p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
<InputGroup className="mb-4">
   <div className="custom-file">
      <input type="file" className="custom-file-input" id="inputGroupFile02" />
      <label className="custom-file-label" htmlFor="inputGroupFile02">Choose file</label>
   </div>
   <InputGroup.Append>
      <InputGroup.Text id="upload">Upload</InputGroup.Text>
   </InputGroup.Append>
</InputGroup>
<p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
<InputGroup className="mb-4">
   <InputGroup.Prepend>
      <Button variant="outline-secondary">Button</Button>
   </InputGroup.Prepend>
   <div className="custom-file">
      <input type="file" className="custom-file-input" id="inputGroupFile03" />
      <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
   </div>
</InputGroup>
<p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
<InputGroup>
   <div className="custom-file">
      <input type="file" className="custom-file-input" id="inputGroupFile04" />
      <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
   </div>
   <InputGroup.Append>
      <Button variant="outline-secondary">Button</Button>
   </InputGroup.Append>
</InputGroup>
                           `}
                           </code></pre></kbd></Card>
                        </div>
                     </Collapse>
                     <p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <InputGroup.Text>Upload</InputGroup.Text>
                        </InputGroup.Prepend>
                        <div className="custom-file">
                           <input type="file" className="custom-file-input" id="inputGroupFile01" />
                           <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                     </InputGroup>
                     <p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <InputGroup className="mb-4">
                        <div className="custom-file">
                           <input type="file" className="custom-file-input" id="inputGroupFile02" />
                           <label className="custom-file-label" htmlFor="inputGroupFile02">Choose file</label>
                        </div>
                        <InputGroup.Append>
                           <InputGroup.Text id="upload">Upload</InputGroup.Text>
                        </InputGroup.Append>
                     </InputGroup>
                     <p><i className="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                           <Button variant="outline-secondary">Button</Button>
                        </InputGroup.Prepend>
                        <div className="custom-file">
                           <input type="file" className="custom-file-input" id="inputGroupFile03" />
                           <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
                        </div>
                     </InputGroup>
                     <p className="text-right"><i className="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <InputGroup>
                        <div className="custom-file">
                           <input type="file" className="custom-file-input" id="inputGroupFile04" />
                           <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                        </div>
                        <InputGroup.Append>
                           <Button variant="outline-secondary">Button</Button>
                        </InputGroup.Append>
                     </InputGroup>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
       </>
    )
}
export default Inputs;