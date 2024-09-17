import React,{useState} from 'react'
import {Container,Row,Col,Collapse} from 'react-bootstrap'
import  Card from '../../../../components/Card'
import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css';

// Quill component
// import Quill from '../../../../components/Quill'


const BasicQuill = (props) => {
    const { quillRef } = useQuill()
    return (
        <>
        <div ref={quillRef}>
            {props.children}
        </div>
        </>
    )
}


const LMTQuill = (props) => {
    const theme = 'snow';

    const modules = {
        toolbar: [
          ['bold', 'italic', 'underline','image','code-block'],
        ],
    };
    const formats = ['bold', 'italic', 'underline', 'image','code-block'];
    const {  quillRef } = useQuill({  modules, formats, theme});
    return (
        <>
        <div ref={quillRef}>
            {props.children}
        </div>
        </>
    )
}

const FormQuill = () => {
    // const theme = 'snow';

    // const modules = {
    //     toolbar: [
    //       ['bold', 'italic', 'underline','image','code-block'],
    //     ],
    // };
    // const formats = ['bold', 'italic', 'underline', 'image','code-block']; 

    // const {  quillRef } = useQuill({  modules, formats, theme});

    // Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
    return (
        <>
         <Container fluid>
            <Row>
                <Col lg="12">
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Basic Quill Editor</h4>
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
                                    
<BasicQuill></BasicQuill>
                                    
                                    `}

                                    </code></pre></kbd></Card>
                                </div>
                            </Collapse>
                            <BasicQuill></BasicQuill>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg="12">
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Custom Select</h4>
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
                                    <Card><kbd className="bg-dark"><pre  className="text-white"><code>{`
<LMTQuill>
    <h1>This is a heading text...</h1>
    <br/>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui arcu, pellentesque id mattis sed, mattis semper erat. Etiam commodo arcu a mollis consequat. Curabitur pretium auctor tortor, bibendum placerat elit feugiat et. Ut ac turpis nec dui ullamcorper ornare. Vestibulum finibus quis magna at accumsan. Praesent a purus vitae tortor fringilla tempus vel non purus. Suspendisse eleifend nibh porta dolor ullamcorper laoreet. Ut sit amet ipsum vitae lectus pharetra tincidunt. In ipsum quam, iaculis at erat ut, fermentum efficitur ipsum. Nunc odio diam, fringilla in auctor et, scelerisque at lorem. Sed convallis tempor dolor eu dictum. Cras ornare ornare imperdiet. Pellentesque sagittis lacus non libero fringilla faucibus. Aenean ullamcorper enim et metus vestibulum, eu aliquam nunc placerat. Praesent fringilla dolor sit amet leo pulvinar semper. </p>
</LMTQuill>
                                    `}
                                    </code></pre></kbd></Card>
                                </div>
                            </Collapse>
                            <LMTQuill>
                                <h1>This is a heading text...</h1>
                                <br/>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui arcu, pellentesque id mattis sed, mattis semper erat. Etiam commodo arcu a mollis consequat. Curabitur pretium auctor tortor, bibendum placerat elit feugiat et. Ut ac turpis nec dui ullamcorper ornare. Vestibulum finibus quis magna at accumsan. Praesent a purus vitae tortor fringilla tempus vel non purus. Suspendisse eleifend nibh porta dolor ullamcorper laoreet. Ut sit amet ipsum vitae lectus pharetra tincidunt. In ipsum quam, iaculis at erat ut, fermentum efficitur ipsum. Nunc odio diam, fringilla in auctor et, scelerisque at lorem. Sed convallis tempor dolor eu dictum. Cras ornare ornare imperdiet. Pellentesque sagittis lacus non libero fringilla faucibus. Aenean ullamcorper enim et metus vestibulum, eu aliquam nunc placerat. Praesent fringilla dolor sit amet leo pulvinar semper. </p>
                            </LMTQuill>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default FormQuill;