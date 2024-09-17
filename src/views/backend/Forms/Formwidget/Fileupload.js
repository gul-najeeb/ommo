import React,{useState} from 'react'
import {Container,Row,Col,Collapse,Form,Button} from 'react-bootstrap'
import  Card from '../../../../components/Card'

const Fileupload = () => {
     // Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
    return (
        <>
         <Container fluid >
            <Row>
                <Col lg="12">
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
<Form.File custom className="mb-3">
    <Form.File.Input  id="customFile" name="filename" />
    <Form.File.Label  htmlFor="customFile">Choose file</Form.File.Label>
    </Form.File>
    <p>Default file:</p>
    <Form.File.Input  id="myFile" name="filename2" />
    <div className="mt-3">
    <Button type="submit">Submit</Button>
</div>
</Form>
                                    `}
                                    </code></pre></kbd></Card>
                                </div>
                            </Collapse>
                            <Form action="/action_page.php">
                                <p>Custom file:</p>
                                <Form.File custom className="mb-3">
                                    <Form.File.Input  id="customFile" name="filename" />
                                    <Form.File.Label  htmlFor="customFile">Choose file</Form.File.Label>
                                    </Form.File>
                                    <p>Default file:</p>
                                    <Form.File.Input  id="myFile" name="filename2" />
                                    <div className="mt-3">
                                    <Button type="button">Submit</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title"> file input</h4>
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
<Form id="file-upload-form" className="uploader-file ">
    <Form.File.Input id="file-upload" type="file" name="fileUpload" accept="image/*" />
    <label id="file-drag" className="mb-0">
    <img id="file-image" src="#" alt="Preview" className="hidden" />
    <span id="start-one">
        <i className="fa fa-download" aria-hidden="true"></i>
        <span className="d-block">Select a file or drag here</span>
        <span id="notimage" className="hidden d-block">Please select image</span>
        <span id="file-upload-btn" className="btn btn-primary">Select a file</span>
    </span>
    <span id="response" className="hidden">
    <span id="messages"></span>
    <progress className="progress" id="file-progress" value="0">
        <span>0</span>%
    </progress>
    </span>
    </label>
</Form>
                                    `}
                                    </code></pre></kbd></Card>
                                </div>
                            </Collapse>
                            <Form id="file-upload-form" className="uploader-file ">
                                <Form.File.Input id="file-upload" type="file" name="fileUpload" accept="image/*" />
                                <label id="file-drag" className="mb-0">
                                <img id="file-image" src="#" alt="Preview" className="hidden" />
                                <span id="start-one">
                                    <i className="fa fa-download" aria-hidden="true"></i>
                                    <span className="d-block">Select a file or drag here</span>
                                    <span id="notimage" className="hidden d-block">Please select image</span>
                                    <span id="file-upload-btn" className="btn btn-primary">Select a file</span>
                                </span>
                                <span id="response" className="hidden">
                                <span id="messages"></span>
                                <progress className="progress" id="file-progress" value="0">
                                    <span>0</span>%
                                </progress>
                                </span>
                                </label>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Fileupload;