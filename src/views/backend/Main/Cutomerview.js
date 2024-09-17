import  React from 'react'
import {Container,Row,Col,Button,ListGroup,Tab,Nav} from 'react-bootstrap'
import  Card from '../../../components/Card'
import {Link} from 'react-router-dom'
import Chart from "react-apexcharts";
// img
import user1 from '../../../assets/images/user/1.jpg'


const Customerview =()=>{
    const chart1={
        series: [{
          data: [91, 82, 90, 88, 105, 99]
        }],
         options : {
          chart: {
        //   height: 265,
        //   type: 'bar',
          toolbar:{
            show: false,
          },
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },        
        plotOptions: {
          bar: {
            columnWidth: '35%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          xaxis: {
              lines: {
                  show: false
              }
          },
          yaxis: {
              lines: {
                  show: true
              }
          }
        },
        legend: {
          show: false
        },
        yaxis: {
          labels: {
          offsetY:0,
          minWidth: 20,
          maxWidth: 20
          },
        },
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'June', 
          ],
          labels: {
            minHeight: 22,
            maxHeight: 22,
            style: {              
              fontSize: '12px'
            }
          }
        }
        }

    }
   
    return(
        <>
           <Container fluid>
        <Row>            
            <Col lg="12">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                   <div className="d-flex align-items-center justify-content-between">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb p-0 mb-0">
                                <li className="breadcrumb-item"><Link to="/customer">Customers</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Customer View</li>
                            </ol>
                        </nav>
                    </div>    
                    <Link to="/customer" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2">Back</span>
                    </Link>                               
                </div>
            </Col>
            <Col lg="12" className="mb-3 d-flex justify-content-between">
                <h4 className="font-weight-bold d-flex align-items-center">Customer View</h4>
            </Col>
        </Row>
       
        <Row>
            <Col lg="4">
                <Card>
                    <ListGroup as="ul" className="list-group-flush">
                        <ListGroup.Item as="li">
                            <div>
                                <ListGroup as="ul"  className="list-style-1 mb-0">
                                    <ListGroup.Item as="li" className="d-flex justify-content-start align-items-center">
                                        <div className="avatar">
                                            <img className="avatar avatar-img avatar-60 rounded-circle" src={user1} alt="01.jpg" />                        
                                        </div>
                                        <div className="list-style-detail ml-4 mr-2">
                                            <h5 className="font-weight-bold">Kate Smith</h5>
                                            <p className="mb-0 mt-1 text-muted">Botsford and Sons</p>
                                        </div>                                        
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                            <Row className="mt-3">
                                <Col xs="6" className="text-center mb-2">
                                    <Button variant="btn btn-block btn-sm btn-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                        <span className="">Message</span>
                                    </Button>
                                </Col>
                                <Col xs="6" className="text-center">
                                    <Button variant="btn btn-block btn-sm btn-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                        <span className="">Edit Profile</span>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <table className="table table-borderless mb-0">
                            <tbody>
                                <tr>
                                    <td className="p-0">
                                        <p className="mb-0 text-muted">Email ID</p>                                        
                                    </td>
                                    <td>
                                        <p className="mb-0 ">kate@yahoo.com</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-0">
                                        <p className="mb-0 text-muted">Birthday</p>                                        
                                    </td>
                                    <td>
                                        <p className="mb-0 ">01 Feb 1990</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-0">
                                        <p className="mb-0 text-muted">Phone</p>                                        
                                    </td>
                                    <td>
                                        <p className="mb-0 ">+99 8756214524</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-0">
                                        <p className="mb-0 text-muted">Country</p>                                        
                                    </td>
                                    <td>
                                        <p className="mb-0 ">USA</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-0">
                                        <p className="mb-0 text-muted">State/Region</p>                                        
                                    </td>
                                    <td>
                                        <p className="mb-0 ">West Virginia</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-0">
                                        <p className="mb-0 text-muted">Address</p>                                        
                                    </td>
                                    <td>
                                        <p className="mb-0 ">Baker Street, no. 7</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" >
                            <h6 className="font-weight-bold">Total Spending</h6>
                            <Chart  options={chart1.options} series={chart1.series} type="bar"  height="250px" />
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col lg="8">
                <Card>
                    <Card.Body className="p-0">
                        <Tab.Container defaultActiveKey="first">
                        <Nav as="ul" variant="nav tab-nav-pane nav-tabs pt-2 mb-0">
                            <Nav.Item as="li" className="pb-2 mb-0 nav-item"><Nav.Link data-toggle="tab" eventKey="first" bsPrefix="font-weight-bold text-uppercase px-5 py-2 " >Invoices</Nav.Link></Nav.Item>
                            <Nav.Item as="li" className="pb-2 mb-0 nav-item"><Nav.Link data-toggle="tab" eventKey="second" bsPrefix="font-weight-bold text-uppercase px-5 py-2" >Activity</Nav.Link></Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="first" className=" fade show  ">
                                <div className="d-flex justify-content-between align-items-center p-3">
                                    <h5>Invoice List</h5>
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
                                            <tr className="text-muted">
                                            <th scope="col">ID</th>
                                            <th scope="col">Date </th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" className="text-right">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>IN-902559</td>
                                                <td>12 Jan 2020</td>
                                                <td>
                                                    Order OR-561488
                                                </td>
                                                <td>
                                                    <p className="mb-0 text-success d-flex justify-content-start align-items-center">
                                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">                                                
                                                            <circle cx="12" cy="12" r="8" fill="#3cb72c"></circle></svg>
                                                            Paid
                                                    </p>
                                                </td>
                                                <td className="text-right">$104.98</td>
                                            </tr>
                                            <tr>
                                                <td>IN-552149</td>
                                                <td>15 Jan 2020</td>
                                                <td>
                                                    Order OR-568842
                                                </td>
                                                <td>
                                                    <p className="mb-0 text-warning d-flex justify-content-start align-items-center">
                                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">                                                
                                                        <circle cx="12" cy="12" r="8" fill="#db7e06"></circle></svg>
                                                        Pending
                                                    </p>
                                                </td>
                                                <td className="text-right">$99.98</td>
                                            </tr>
                                            <tr>
                                                <td>IN-941529</td>
                                                <td>12 Jan 2020</td>
                                                <td>
                                                    Order OR-598550
                                                </td>
                                                <td>
                                                    <p className="mb-0 text-success d-flex justify-content-start align-items-center">
                                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">                                                
                                                        <circle cx="12" cy="12" r="8" fill="#3cb72c"></circle></svg>
                                                        Paid
                                                    </p>
                                                </td>
                                                <td className="text-right">$966.12</td>
                                            </tr>
                                            <tr>
                                                <td>IN-125623</td>
                                                <td>16 Jan 2020</td>
                                                <td>
                                                    Order OR-325548
                                                </td>
                                                <td>
                                                    <p className="mb-0 text-success d-flex justify-content-start align-items-center">
                                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">                                                
                                                        <circle cx="12" cy="12" r="8" fill="#3cb72c"></circle></svg>
                                                        Completed
                                                    </p>
                                                </td>
                                                <td className="text-right">$65.00</td>
                                            </tr>
                                            <tr>
                                                <td>IN-911211</td>
                                                <td>18 Jan 2020</td>
                                                <td>
                                                    Order OR-125475
                                                </td>
                                                <td>
                                                    <p className="mb-0 text-danger d-flex justify-content-start align-items-center">
                                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">                                                
                                                        <circle cx="12" cy="12" r="8" fill="#F42B3D"></circle></svg>Cancelled
                                                    </p>
                                                </td>
                                                <td className="text-right">$108.99</td>
                                            </tr>
                                            <tr>
                                                <td>IN-902210</td>
                                                <td>19 Jan 2020</td>
                                                <td>
                                                    Order OR-595508
                                                </td>
                                                <td>
                                                    <p className="mb-0 text-success d-flex justify-content-start align-items-center">
                                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">                                                
                                                        <circle cx="12" cy="12" r="8" fill="#3cb72c"></circle></svg>
                                                        Paid
                                                    </p>
                                                </td>
                                                <td className="text-right">$199.99</td>
                                            </tr>
                                            <tr>
                                                <td>IN-902445</td>
                                                <td>20 Jan 2020</td>
                                                <td>
                                                    Order OR-884155
                                                </td>
                                                <td>
                                                    <p className="mb-0 text-warning d-flex justify-content-start align-items-center">
                                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">                                                
                                                        <circle cx="12" cy="12" r="8" fill="#db7e06"></circle></svg>
                                                        Pending
                                                    </p>
                                                </td>
                                                <td className="text-right">$99.99</td>
                                            </tr>
                                            <tr>
                                                <td>IN-901020</td>
                                                <td>22 Jan 2020</td>
                                                <td>
                                                    Order OR-500008
                                                </td>
                                                <td>
                                                    <p className="mb-0 text-success d-flex justify-content-start align-items-center">
                                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">                                                
                                                        <circle cx="12" cy="12" r="8" fill="#3cb72c"></circle></svg>
                                                        Paid
                                                    </p>
                                                </td>
                                                <td className="text-right">$449.00</td>
                                            </tr>
                                            <tr>
                                                <td>IN-9036510</td>
                                                <td>22 Jan 2020</td>
                                                <td>
                                                    Order OR-489523
                                                </td>
                                                <td>
                                                    <p className="mb-0 text-danger d-flex justify-content-start align-items-center">
                                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">                                                
                                                        <circle cx="12" cy="12" r="8" fill="#F42B3D"></circle></svg>Cancelled
                                                    </p>
                                                </td>
                                                <td className="text-right">$1,299.05</td>
                                            </tr>
                                            <tr>
                                                <td>IN-120010</td>
                                                <td>23 Jan 2020</td>
                                                <td>
                                                    Order OR-965508
                                                </td>
                                                <td>
                                                    <p className="mb-0 text-success d-flex justify-content-start align-items-center">
                                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">                                                
                                                        <circle cx="12" cy="12" r="8" fill="#3cb72c"></circle></svg>
                                                        Paid
                                                    </p>
                                                </td>
                                                <td className="text-right">$6,325.99</td>
                                            </tr>
                                            <tr>
                                                <td>IN-302240</td>
                                                <td>15 Jan 2020</td>
                                                <td>
                                                    Order OR-654412
                                                </td>
                                                <td>
                                                    <p className="mb-0 text-success d-flex justify-content-start align-items-center">
                                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">                                                
                                                        <circle cx="12" cy="12" r="8" fill="#3cb72c"></circle></svg>
                                                        Paid
                                                    </p>
                                                </td>
                                                <td className="text-right">$699.00</td>
                                            </tr>
                                            <tr>
                                                <td>IN-662210</td>
                                                <td>26 Jan 2020</td>
                                                <td>
                                                    Order OR-965508
                                                </td>
                                                <td>
                                                    <p className="mb-0 text-danger d-flex justify-content-start align-items-center">
                                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">                                                
                                                        <circle cx="12" cy="12" r="8" fill="#F42B3D"></circle></svg>Cancelled
                                                    </p>
                                                </td>
                                                <td className="text-right">$150.03</td>
                                            </tr>                                            
                                        </tbody>
                                    </table>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" className="  fade p-3">                                
                                <h3 className="mb-3">Activity</h3>
                                <div className="iq-timeline0 m-0 d-flex align-items-center justify-content-between position-relative">
                                <ul className="list-inline p-0 m-0">
                                        <li>
                                            <div className="pt-3">
                                                <p className="mb-0 text-muted font-weight-bold text-uppercase">13, September 2020</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                                            <h6 className="float-left mb-1 font-weight-bold">Signed Out</h6>                                            
                                            <div className="d-inline-block w-100">
                                                <p className="mb-0">Santander crea una sociedad para gestionar las sucursales que cierra</p>
                                                <div className="d-inline-block w-100">
                                                    <p>Probablemente, la bodega más sostenible de españa</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                                            <h6 className="float-left mb-1 font-weight-bold">Create Invoice IN-302240</h6>
                                            <div className="d-inline-block w-100">
                                                <p>Repsol sopesa elegir primero un socio para su área de renovables y después sacarla a Bolsa</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                                            <h6 className="float-left mb-1 font-weight-bold">Signed In</h6>
                                            <div className="d-inline-block w-100">
                                                <p>El Ibex busca nuevos máximos en la última jornada de abril</p>
                                            </div>
                                            <div className="pt-3">
                                                <p className="mb-0 text-muted font-weight-bold text-uppercase">14, September 2020</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                                            <h6 className="float-left mb-1 font-weight-bold">Signed Out</h6>                                            
                                            <div className="d-inline-block w-100">
                                                <p>Ecoener se atreve con la Bolsa y se estrenará con una valoración de 336 millones</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                                            <h6 className="float-left mb-1 font-weight-bold">Create Invoice IN-662210</h6>
                                            <div className="d-inline-block w-100">
                                                <p className="mb-0">BBVA supera la crisis del Covid y gana 1.210 millones en el primer trimestre</p>
                                            </div>
                                            <div className="d-inline-block w-100">
                                                <p>Probablemente, la bodega más sostenible de españa</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                                            <h6 className="float-left mb-1 font-weight-bold">Signed In</h6>
                                            <div className="d-inline-block w-100">
                                                <p className="mb-0">El mercado se prepara para una corrección en mayo tras el rally bursátil</p>
                                            </div>
                                            <div className="d-inline-block w-100">
                                                <p>Repsol sopesa elegir primero un socio para su área de renovables y después sacarla a Bolsa</p>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
        </>
    )
}
export default Customerview;