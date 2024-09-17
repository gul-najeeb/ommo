import  React from 'react'
import {Container,Row,Col,Form,Button,OverlayTrigger,Tooltip} from 'react-bootstrap'
import  Card from '../../../components/Card'
import {Link} from 'react-router-dom'
// import { formatIsoTimeString } from '@fullcalendar/react'

const Orders=[
    {
        id:'OR-325548',
        date:'01 Jan 2021',
        cust:'Jack Ryan',
        total:'$104.98',
        status:'Completed',
        color:'text-success'
    },
    {
        id:'OR-223544',
        date:'02 Jan 2021',
        cust:'Matt Damon',
        total:'$99.00',
        status:'Completed',
        color:'text-success'
    },
    {
        id:'OR-125623',
        date:'02 Jan 2021',
        cust:'Caitriona Balfe',
        total:'$249.49',
        status:'Pending',
        color:'text-warning'
    },
    {
        id:'OR-662210',
        date:'02 Jan 2021',
        cust:'Josh Lucas',
        total:'$9.99',
        status:'Completed',
        color:'text-success'
    },
    {
        id:'OR-901020',
        date:'03 Jan 2021',
        cust:'Jon Bernthal',
        total:'$90.49',
        status:'Cancelled',
        color:'text-danger'
    },
    {
        id:'OR-902210',
        date:'05 Jan 2021',
        cust:'Noah Jupe',
        total:'$39.99',
        status:'Completed',
        color:'text-success'
    },
    {
        id:'OR-902559',
        date:'06 Jan 2021',
        cust:'Tracy Letts',
        total:'$19.22',
        status:'Pending',
        color:'text-warning'
    },
    {
        id:'OR-253524',
        date:'09 Jan 2021',
        cust:'Ray McKinnon',
        total:'$102.9',
        status:'Cancelled',
        color:'text-danger'
    },
    {
        id:'OR-902559',
        date:'10 Jan 2021',
        cust:'Remo Girone',
        total:'$13.99',
        status:'Completed',
        color:'text-success'
    },
    {
        id:'OR-302240',
        date:'	12 Jan 2021',
        cust:'Jack McMullen',
        total:'$25.99',
        status:'Completed',
        color:'text-success'
    },

]


const Order = ()=>{
    return(
        <>
          
    <Container fluid>
        <Row>
            
            <Col lg="12">
                <div className="d-flex flex-wrap align-items-center justify-content-between my-schedule mb-4">
                   <div className="d-flex align-items-center justify-content-between">
                        <h4 className="font-weight-bold">All Orders</h4>
                    </div>  
                    <div className="create-workform">
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <div className="modal-product-search d-flex">
                                <Form className="mr-3 position-relative">
                                    <Form.Group className="mb-0">
                                    <input type="text" className="form-control" id="exampleInputText"  placeholder="Search Order"/>
                                    <Link className="search-link" to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </Link>
                                    </Form.Group>
                                </Form>
                                <Link to="/order-new" className="btn btn-primary position-relative d-flex align-items-center justify-content-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Add Order
                                </Link>
                            </div>
                        </div>
                    </div>                    
                </div>
                
                <Row>
                    <Col lg="12">
                        <Card className="card-block card-stretch">
                            <Card.Body className="p-0">
                                <div className="d-flex justify-content-between align-items-center p-3">
                                    <h5 className="font-weight-bold">Orders List</h5>
                                    <Button variant="btn btn-secondary btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Export
                                    </Button>
                                </div>
                                <div className="table-responsive">
                                    <table className="table data-table mb-0">
                                        <thead className="table-color-heading">
                                            <tr className="text-light">                                                
                                                <th scope="col" className="w-01 pr-0">
                                                    <div className="d-flex justify-content-start align-items-end mb-1">
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input m-0" id="customCheck"/>
                                                        <label className="custom-control-label" htmlFor="customCheck"></label>
                                                        </div>
                                                    </div>                                                    
                                                </th>
                                                <th scope="col">
                                                    <label className="text-muted m-0" >ID</label>
                                                     {/* <input type="text" className="form-control mt-2" id="text1" aria-describedby="textHelp" placeholder="ID"/>  */}
                                                </th>
                                                <th scope="col" className="dates">
                                                    <label className="text-muted mb-0" >Date</label>
                                                    {/* <input type="text" className="form-control" id="usr1" name="event_date" placeholder="Enter Date" autocomplete="off" aria-describedby="basic-addon2"/> */}
                                                </th>
                                                <th scope="col">
                                                    <label className="text-muted mb-0">Customer</label>
                                                    {/* <input type="text" className="form-control mt-2" id="text2" aria-describedby="textHelp" placeholder="Customer"/> */}
                                                </th>
                                                <th scope="col" className="text-right">
                                                    <label className="text-muted mb-0">Total</label>
                                                    {/* <input type="text" className="form-control mt-2" id="text3" aria-describedby="textHelp" placeholder="Total"/>  */}
                                                </th>
                                                <th scope="col">
                                                    <label className="text-muted mb-0" >Status</label>
                                                    {/* <select id="validationServer02" className="custom-select custom-select-sm mt-2">
                                                        <option selected>Status</option>
                                                        <option value="1">Completed</option>
                                                        <option value="2">Pending</option>
                                                        <option value="3">Rejected</option>
                                                    </select>  */}
                                                </th>
                                                <th scope="col" className="text-right">
                                                    <span className="text-muted" >Action</span>
                                                     {/* <p className="text-muted"></p>  */}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                                    Orders.map( (item) => (
                                            <tr key={item.cust} className="white-space-no-wrap">
                                                <td className="pr-0">
                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input type="checkbox" className="custom-control-input m-0" id="customCheck1"/>
                                                    <label className="custom-control-label" htmlFor="customCheck1"></label>
                                                    </div>                                    
                                                </td>
                                                <td>
                                                    {item.id}
                                                </td>
                                                <td>{item.date}</td>
                                                <td>
                                                    {item.cust}
                                                </td>
                                                <td className="text-right">
                                                   {item.total}
                                                </td>
                                                <td>
                                                    <p className={`mb-0 ${item.color} font-weight-bold d-flex justify-content-start align-items-center`}>
                                                        <small><svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">                                                
                                                        <circle cx="12" cy="12" r="8" fill="#3cb72c"></circle></svg>
                                                        </small>{item.status}
                                                    </p>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-end align-items-center">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
                                                       <Link className=""  to="/order-details">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mx-4" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </Link>
                                                    </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>} >
                                                        <Link className="" to="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                            </svg>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    </div>
                                                </td>
                                            </tr>
                                             ))

                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
        </>
    )
}
export default Order;
