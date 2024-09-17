import React,{useState} from 'react'
import {Container,Row,Col,Table,Collapse} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'

const BasicTable = () => {
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
  return(
        <>
          <Container fluid>
                <Row>
                    <Col lg="12" sm="12">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Tables</h4>
                                </Card.Header.Title>
                                <Card.Header.Action>
                                    <i  type="button" onClick={() =>setOpen(!open)}>
                                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </i>
                                </Card.Header.Action>
                            </Card.Header>
                            <Card.Body>
                                <Collapse in={open}>
                                    <div>
                                        <Card>
                                            <kbd className="bg-dark"><pre  className="text-white"><code>{`
    <Table>
    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
    </tr>
    </tbody>
</Table>
                                            `}
                                                </code></pre>
                                            </kbd>
                                        </Card>
                                    </div>
                                </Collapse>
                                <p>The <code>.table </code> class adds basic styling to a table.</p>
                                <Table>
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Table Head Options</h4>
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
                                        <Card>
                                            <kbd className="bg-dark"><pre className="text-white"><code>{`
<Table>
<thead className="thead-dark">
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
    </tr>
</tbody>
</Table>
<Table>
<thead className="thead-light">
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
    </tr>
</tbody>
</Table>
                                            `}
                                            </code></pre>
                                            </kbd>
                                        </Card>
                                    </div>
                                </Collapse>
                                <p>Similar to tables and dark tables, use the modifier classes <code className="highlighter-rouge">.thead-light</code> or <code className="highlighter-rouge">.thead-dark</code> to make <code className="highlighter-rouge">&lt;thead&gt;</code>s appear light or dark gray.</p>
                                <Table>
                                    <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <Table>
                                    <thead className="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Borderless table</h4>
                                </Card.Header.Title>
                                <Card.Header.Action>
                                    <i  type="button" onClick={() =>setOpen2(!open2)}>
                                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </i>
                                </Card.Header.Action>
                            </Card.Header>
                            <Card.Body>
                                <Collapse in={open2}>
                                    <div>
                                        <Card>
                                            <kbd className="bg-dark"><pre className="text-white"><code>{`
<Table borderless>
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
    </tr>
</tbody>
</Table>
                                            `}
                                            </code></pre></kbd>
                                        </Card>
                                    </div>
                                </Collapse>
                                <p>Add <code className="highlighter-rouge">.table-borderless</code> for a table without borders.</p>
                                <Table borderless>
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <p><code className="highlighter-rouge">.table-borderless</code> can also be used on dark tables.</p>
                                <Table borderless variant="dark">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Small table</h4>
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
<Table size="sm">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
    </tr>
</tbody>
</Table >
<Table size="sm" variant="dark">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
    </tr>
</tbody>
</Table>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <p>Add <code className="highlighter-rouge">.table-sm</code> to make tables more compact by cutting cell padding in half.</p>
                                <Table size="sm">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table >
                                <Table size="sm" variant="dark">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Captions</h4>
                                </Card.Header.Title>
                                <Card.Header.Action>
                                    <i  type="button" onClick={() =>setOpen4(!open4)}>
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
<Table>
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
    </tr>
</tbody>
</Table>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <p>A <code className="highlighter-rouge">&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.</p>
                                <Table>
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Table Dark</h4>
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
<Table variant="dark">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
    </tr>
</tbody>
</Table>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <p>You can also invert the colors—with light text on dark backgrounds—with <code className="highlighter-rouge">.table-dark</code>.</p>
                                <Table variant="dark">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Striped Rows</h4>
                                </Card.Header.Title>
                                <Card.Header.Action>
                                    <i  type="button" onClick={() =>setOpen6(!open6)}>
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
<Table striped>
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
    </tr>
</tbody>
</Table>
<Table striped variant="dark">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
    </tr>
</tbody>
</Table>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <p>Use <code className="highlighter-rouge">.table-striped</code> to add zebra-striping to any table row within the <code className="highlighter-rouge">&lt;tbody&gt;</code>.</p>
                                <Table striped>
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <Table striped variant="dark">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Hoverable rows</h4>
                                </Card.Header.Title>
                                <Card.Header.Action>
                                    <i  type="button" onClick={() =>setOpen7(!open7)}>
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
<Table hover >
    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
    </Table>
    <Table hover variant="dark">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
</Table>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <p>Add <code className="highlighter-rouge">.table-hover</code> to enable a hover state on table rows within a <code className="highlighter-rouge">&lt;tbody&gt;</code>.</p>
                                <Table hover >
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <Table hover variant="dark">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Contextual classes</h4>
                                </Card.Header.Title>
                                <Card.Header.Action>
                                    <i  type="button" onClick={() =>setOpen8(!open8)}>
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
<Table>
<thead>
    <tr>
        <th scope="col">Class</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
    </tr>
</thead>
<tbody>
    <tr className="table-active">
        <th scope="row">Active</th>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
    <tr>
        <th scope="row">Default</th>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
    <tr className="table-primary">
        <th scope="row">Primary</th>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
    <tr className="table-secondary">
        <th scope="row">Secondary</th>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
    <tr className="table-success">
        <th scope="row">Success</th>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
    <tr className="table-danger">
        <th scope="row">Danger</th>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
    <tr className="table-warning">
        <th scope="row">Warning</th>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
    <tr className="table-info">
        <th scope="row">Info</th>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
</tbody>
</Table>
                                        `}
                                        </code></pre></kbd></Card>      
                                    </div>
                                </Collapse>
                                <p>Use contextual classes to color table rows or individual cells.</p>
                                <Table>
                                    <thead>
                                    <tr>
                                        <th scope="col">Class</th>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Heading</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="table-active">
                                        <th scope="row">Active</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Default</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="table-primary">
                                        <th scope="row">Primary</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="table-secondary">
                                        <th scope="row">Secondary</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="table-success">
                                        <th scope="row">Success</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="table-danger">
                                        <th scope="row">Danger</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="table-warning">
                                        <th scope="row">Warning</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="table-info">
                                        <th scope="row">Info</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <p>Regular table background variants are not available with the dark table, however, you may use <Link to="https://getbootstrap.com/"  target="_blank">text or background utilities</Link> to achieve similar styles.</p>
                                <Table variant="dark">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Heading</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="bg-primary">
                                        <th scope="row">1</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="bg-success">
                                        <th scope="row">3</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="bg-info">
                                        <th scope="row">5</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="bg-warning">
                                        <th scope="row">7</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="bg-danger">
                                        <th scope="row">9</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Responsive tables</h4>
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
<Table responsive>
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
</tbody>
</Table>
                                        `}
                                        </code></pre></kbd></Card>
                                    </div>
                                </Collapse>
                                <p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a <code className="highlighter-rouge">.table</code> with <code className="highlighter-rouge">.table-responsive</code>. Or, pick a maximum breakpoint with which to have a responsive table up to by using <code className="highlighter-rouge">.table-responsive|-sm|-md|-lg|-xl</code>.</p>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Heading</th>
                                                <th scope="col">Heading</th>
                                                <th scope="col">Heading</th>
                                                <th scope="col">Heading</th>
                                                <th scope="col">Heading</th>
                                                <th scope="col">Heading</th>
                                                <th scope="col">Heading</th>
                                                <th scope="col">Heading</th>
                                                <th scope="col">Heading</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                                <td>Cell</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default BasicTable;