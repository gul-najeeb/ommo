import  React from 'react'
import {Container,Row,Col,Form,Button,ListGroup} from 'react-bootstrap'
import  Card from '../../../components/Card'
import {Link} from 'react-router-dom'

// img
import product1 from '../../../assets/images/products/1.jpg'
import product12 from '../../../assets/images/products/12.jpg'



const Ordernew =()=>{
    return(
        <>
       <Container fluid>
        <Row>
            <Col lg="12">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                   <div className="d-flex align-items-center justify-content-between">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb p-0 mb-0">
                                <li className="breadcrumb-item"><Link to="/order">Orders</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Add Order</li>
                            </ol>
                        </nav>
                    </div>
                    <Link to="/order" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2">Back</span>
                    </Link>
                </div>
            </Col>
            <Col lg="12" className="mb-3 d-flex justify-content-between">
                <h4 className="font-weight-bold d-flex align-items-center">New Order</h4>
            </Col>            
        </Row>
        <Card>
            <Card.Body>
                <Row>
                    <Col lg="6">
                        <h5 className="font-weight-bold pb-3">Customer Details</h5>
                        <Form className="row g-3">
                            <div className="col-md-12 mb-3">
                                <Form.Label htmlFor="Text1" className="form-label font-weight-bold text-muted text-uppercase">Customer</Form.Label>
                                <Form.Control type="text" className="form-control" id="Text1" placeholder="Search Customer"/>
                            </div>
                            <div className="col-md-12 mb-3">
                                <Form.Label htmlFor="Text2" className="form-label font-weight-bold text-muted text-uppercase">Phone</Form.Label>
                                <Form.Control type="text" className="form-control" id="Text2" placeholder="Enter Phone"/>
                            </div>
                            <div className="col-md-12 mb-3">
                                <Form.Label htmlFor="Text3" className="form-label font-weight-bold text-muted text-uppercase">Email</Form.Label>
                                <Form.Control type="text" className="form-control" id="Text3" placeholder="Enter Email"/>
                            </div>
                            <div className="col-md-12 mb-3">
                                <Form.Label htmlFor="Text4" className="form-label font-weight-bold text-muted text-uppercase">Address</Form.Label>
                                <Form.Control type="text" className="form-control" id="Text4" placeholder="Enter Address"/>
                            </div>
                        </Form>
                    </Col>
                    <Col lg="6">
                        <h5 className="font-weight-bold pb-3">Order Details</h5>
                        <Form className="row g-3">
                            <div className="col-md-6 mb-3">
                                <Form.Label htmlFor="Text5" className="form-label font-weight-bold text-muted text-uppercase">Date</Form.Label>
                                <Form.Control  type="text" className="form-control vanila-datepicker datepicker-input" id="Text5" placeholder="DD MM YYYY"/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <Form.Label htmlFor="Text6" className="form-label font-weight-bold text-muted text-uppercase">Time</Form.Label>
                                <Form.Control  type="text" className="form-control" id="Text6" placeholder="00:00"/>
                            </div>
                            <div className="col-md-12 mb-3">
                                <Form.Label  className="form-label font-weight-bold text-muted text-uppercase">Payment Method</Form.Label><br/>
                                <div className="btn-group" role="group" aria-label="Basic outlined example">
                                    <Button type="button" variant="btn btn-outline-primary active">Credit Card</Button>
                                    <Button type="button" variant="btn btn-outline-primary">PayPal</Button>
                                    <Button type="button" variant="btn btn-outline-primary">Apple Pay</Button>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <Form.Label htmlFor="Text8" className="form-label font-weight-bold text-muted text-uppercase">Comment</Form.Label>
                                <Form.Control as="textarea"  id="Text8" rows="3" placeholder="Enter your comment"/>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body className="p-0">
                <ListGroup as="ul" className="list-group-flush">
                    <ListGroup.Item as="li"  className="p-3">
                        <h5 className="font-weight-bold mb-3">Order Items</h5>
                        <div className="modal-product-search d-flex">
                                <Form className="mr-3 position-relative">
                                    <Form.Group className="mb-0">
                                    <Form.Control type="text"  id="exampleInputText"  placeholder="Search Product"/>
                                    <Link className="search-link" to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </Link>
                                    </Form.Group>
                                </Form>	 
                            </div>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="p-0">
                        <div className="table-responsive">
                            <table className="table mb-0">
                                <thead>
                                    <tr className="text-muted">
                                    <th scope="col">Product</th>
                                    <th scope="col" className="text-center">Quantity</th>
                                    <th scope="col" className="text-center">Price</th>
                                    <th scope="col" className="text-center"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="active-project-1 d-flex align-items-center mt-0 ">
                                                <div className="h-avatar is-medium">
                                                    <img className="avatar avatar-60 rounded" alt="user-icon" src={product12}/>
                                                </div>
                                                <div className="data-content">
                                                    <div>
                                                    <span className="font-weight-bold">FivePlus Nord 5G</span>                           
                                                    </div>
                                                    <p className="m-0 mt-1">
                                                    (12GB RAM, 256GB Storage)
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <div className="d-flex align-items-center justify-content-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                1 
                                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>                                            
                                        </td>
                                        <td className="text-center">
                                            $2,399.99
                                        </td>
                                        <td className="text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="active-project-1 d-flex align-items-center mt-0 ">
                                                <div className="h-avatar is-medium">
                                                    <img className="avatar avatar-60 rounded" alt="user-icon" src={product1}/>
                                                </div>
                                                <div className="data-content">
                                                    <div>
                                                    <span className="font-weight-bold">Bassheads 220 Wired Headset</span>                           
                                                    </div>
                                                    <p className="m-0 mt-1">
                                                    Molten Orange, In the Ear
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <div className="d-flex align-items-center justify-content-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                1 
                                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            $74.98
                                        </td>
                                        <td className="text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> 
                    </ListGroup.Item>
                    <ListGroup.Item as="li"  className="p-3">
                        <div className="d-flex justify-content-end align-items-center">
                            Total: <p className="ml-2 mb-0 font-weight-bold">$2,474.97</p>
                            <Button variant="btn btn-primary ml-5 btn-sm">Create Order</Button>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    </Container>
        </>
    )
}

export default Ordernew;