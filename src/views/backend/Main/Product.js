import  React from 'react'
import {Container,Row,Col,Form,Button,OverlayTrigger,Tooltip} from 'react-bootstrap'
import  Card from '../../../components/Card'
import {Link} from 'react-router-dom'

// img
import product1 from '../../../assets/images/products/1.jpg'
import product15 from '../../../assets/images/products/15.jpg'
import product2 from '../../../assets/images/products/2.jpg'
import product4 from '../../../assets/images/products/4.jpg'

import product8 from '../../../assets/images/products/8.jpg'

import product5 from '../../../assets/images/products/5.jpg'

import product7 from '../../../assets/images/products/7.jpg'
import product16 from '../../../assets/images/products/16.jpg'
import product6 from '../../../assets/images/products/6.jpg'
import product12 from '../../../assets/images/products/12.jpg'

const Products=[
    {
        Pname:'Bassheads 220 Wired Headset ',
        des:'Molten Orange, In the Ear',
        product:`${product1}`,
        Cat:'Headset',
        Price:'$74.98',
        Quantity:'45',
        Inventory:'In Stock',
        color:'text-success'

    },
    {
        Pname:'SDDDC2-256G-I35 256 GB OTG',
        des:'Black, Type A to Type C',
        product:`${product15}`,
        Cat:'OTG Pendrive',
        Price:'$109.00',
        Quantity:'25',
        Inventory:'In Stock',
        color:'text-success'
    },
    {
        Pname:'360 Deg 1080p Security Camera',
        des:'Wifi Smart',
        product:`${product2}`,
        Cat:'Camera',
        Price:'$749.49',
        Quantity:'02',
        Inventory:'Limited',
        color:'text-warning'
    },
    {
        Pname:'Ryzen 5 Quad Core 3500U Thin Laptop',
        des:'8 GB/512 GB SSD/Windows 10 Home',
        product:`${product4}`,
        Cat:'Laptop',
        Price:'$2,499.99',
        Quantity:'10',
        Inventory:'In Stock',
        color:'text-success'
    },
    {
        Pname:'M10 FHD Plus with Active Pen Tablet',
        des:'(2nd Gen) 10.3 inches',
        product:`${product8}`,
        Cat:'Tablet',
        Price:'$962.49',
        Quantity:'00',
        Inventory:'Out Of Stock',
        color:'text-danger'
    },
    {
        Pname:'Stone Portable Bluetooth Speaker',
        des:'Black, Stereo Channel',
        product:`${product5}`,
        Cat:'Speaker',
        Price:'$599.99',
        Quantity:'80',
        Inventory:'In Stock',
        color:'text-success'
    },
    {
        Pname:'EO Wooden Card Pen Drive',
        des:'16 GB, White',
        product:`${product7}`,
        Cat:'Pendrive',
        Price:'$89.22',
        Quantity:'05',
        Inventory:'Limited',
        color:'text-warning'
    },
    {
        Pname:'Airpods With Wireless Charging Case',
        des:'Noise Cancellation, True Wireless',
        product:`${product16}`,
        Cat:'Headset',
        Price:'$229.9',
        Quantity:'00',
        Inventory:'Out Of Stock',
        color:'text-danger'
    },
    {
        Pname:'HP v150W PENDRIVE',
        des:'64 GB (Blue, Black)',
        product:`${product6}`,
        Cat:'Pendrive',
        Price:'$39.99',
        Quantity:'30',
        Inventory:'In Stock',
        color:'text-success'
    },
    {
        Pname:'FivePlus Nord 5G',
        des:'(12GB RAM, 256GB Storage)',
        product:`${product12}`,
        Cat:'Mobile',
        Price:'$2,399.99',
        Quantity:'80',
        Inventory:'In Stock',
        color:'text-success'
    },
]


const Product =()=>{
    return(
        <>
        <Container fluid>
        <Row>
            
            <Col lg="12">
                <div className="d-flex flex-wrap align-items-center justify-content-between my-schedule mb-4">
                   <div className="d-flex align-items-center justify-content-between">
                        <h4 className="font-weight-bold">Product</h4>
                    </div>  
                    <div className="create-workform">
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <div className="modal-product-search d-flex">
                                <Form className="mr-3 position-relative">
                                    <div className="form-group mb-0">
                                    <Form.Control type="text" className="form-control" id="exampleInputText"  placeholder="Search Product"/>
                                    <Link className="search-link" to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </Link>
                                    </div>
                                </Form>
                                <Link to="/product-add" className="btn btn-primary position-relative d-flex align-items-center justify-content-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Add Product
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
                                    <h5 className="font-weight-bold">Products List</h5>
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
                                                <th scope="col">
                                                    <label className="text-muted m-0" >Product Name</label>
                                                    {/* <input type="text" className="form-control mt-2" id="text1" aria-describedby="textHelp" placeholder="Search Product">  */}
                                                </th>
                                                <th scope="col">
                                                    <label className="text-muted mb-0" >Category</label>
                                                    {/* <select className="custom-select custom-select-sm mt-2 choicesjs" id="validationServer01">
                                                        <option selected>Select Category</option>
                                                        <option value="1">Tablet</option>
                                                        <option value="2">Speaker</option>
                                                        <option value="3">Pendrive</option>
                                                        <option value="4">Mobile</option>
                                                        <option value="5">Laptop</option>
                                                        <option value="6">Headset</option>
                                                    </select>  */}
                                                </th>
                                                <th scope="col" className="text-right">
                                                    <label className="text-muted mb-0" >Price</label>
                                                     {/* <input type="text" className="form-control mt-2" id="text2" aria-describedby="textHelp" placeholder="Price">  */}
                                                </th>
                                                <th scope="col">
                                                    <label className="text-muted mb-0" >Quantity</label>
                                                     {/* <input type="text" className="form-control mt-2" id="text3" aria-describedby="textHelp" placeholder="Quantity"> */}
                                                </th>
                                                <th scope="col">
                                                    <label className="text-muted mb-0" >Inventory</label>
                                                     {/* <select className="custom-select custom-select-sm mt-2" id="validationServer02">
                                                        <option selected>Select Inventory</option>
                                                        <option value="1">In Stock</option>
                                                        <option value="2">Limited</option>
                                                        <option value="3">Out Of Stock</option>
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
                                                    Products.map( (item) => (
                                            <tr key={item.Price} className="white-space-no-wrap">
                                                <td className="">
                                                    <div className="active-project-1 d-flex align-items-center mt-0 ">
                                                        <div className="h-avatar is-medium">
                                                            <img className="avatar rounded" alt="user-icon" src={item.product}/>
                                                        </div>
                                                        <div className="data-content">
                                                            <div>
                                                            <span className="font-weight-bold">{item.Pname}</span>                           
                                                            </div>
                                                            <p className="m-0 mt-1">
                                                            {item.des}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{item.Cat}</td>
                                                <td className="text-right">
                                                    {item.Price}
                                                </td>
                                                <td>
                                                  {item.Quantity}
                                                </td>
                                                <td>
                                                    <p className={`mb-0 ${item.color} font-weight-bold d-flex justify-content-start align-items-center`}>
                                                        <small><svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none">                                                
                                                        <circle cx="12" cy="12" r="8" fill="#3cb72c"></circle></svg>
                                                        </small>{item.Inventory}
                                                    </p>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-end align-items-center">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>} >
                                                            <Link className="" to="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mx-4" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                </svg>
                                                            </Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>} >
                                                            <Link className="badge bg-danger" to="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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

export default Product;
