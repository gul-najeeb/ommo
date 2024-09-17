import React , {useState} from 'react'
import {Container,Row,Col,Collapse} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'

const EditTable = () => {
   const data =[{
    "id": 1,
    "Name": "Gio Metric",
    "Age": "25",
    "Company": "Deepends",
    "Country": "Spain",
    "City":"Madrid",
  },
  {
    "id": 2,
    "Name": "Manny Petty",
    "Age": "45",
    "Company": "Insectus",
    "Country": "France",
    "City":"San Francisco",
  },
  {
    "id": 3,
    "Name": "Lucy Tania",
    "Age": "35",
    "Company": "Isotronic",
    "Country": "Germany",
    "City":"Frankfurt am Main",
  },
  {
    "id": 4,
    "Name": "Anna Mull",
    "Age": "35",
    "Company": "Portica",
    "Country": "USA",
    "City":"Oregon",
    
  },

  ]
    const [Add, setAdd] = useState(data)
    const [addFormData] = useState({
        id: "",
        Name:"",
        Age:"",
        Company:"",
        Country:"",
        City:"",
        
    })

    const handleAddFormChanges=(event)=>{
        event.preventDefault();
        const id = event.target.closest('tr').getAttribute('dataid')
        const tdElem = event.target.closest('tr').querySelectorAll('td')
        const obj = {
            id: Number(id)
        }
        Array.from(tdElem, (elem) => {
            if (elem.getAttribute('name') !== null) {
                obj[elem.getAttribute('name')] = elem.innerText
            }
            return null
        })
        const newArrIndex = Add.findIndex(item => {
            if (item.id === Number(id)) {
                return item
            }else{
                return null
            }
        })
        Add[newArrIndex] = obj
        setAdd(Add)
        
    };
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
    
        let newContact = {
            id:Add.length+1,
            Name: addFormData.Name,
            Age: addFormData.Age,
            Company: addFormData.Company,
            Country:addFormData.Country,
            City: addFormData.City
        };
        // Add.push(newContact)
        const newContacts = [...Add, newContact];
        setAdd(newContacts);
        
    };
    const handleDeleteClick = (addId) => {
        const newContacts = [...Add];
        const index = Add.findIndex((adds) => adds.id === addId);
        newContacts.splice(index,1);
        setAdd(newContacts);
        
    }
    //collapsed state
    const[open,setOpen]=useState(false)




  return(
        <>
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Editable Table</h4>
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
                                    <Card><kbd className="bg-dark"><pre id="editable" className="text-white"><code>{`
<div id="table" className="table-editable">
<span className="table-add float-right mb-3 mr-2">
<button onClick={handleAddFormSubmit} className="btn btn-sm bg-primary"><i
className="ri-add-fill"><span className="pl-1">Add New</span></i>
</button>
</span>
<table className="table table-bordered table-responsive-md table-striped text-center">
<thead>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Company Name</th>
        <th>Country</th>
        <th>City</th>
        <th>Sort</th>
        <th>Remove</th>
    </tr>
</thead>
<tbody>
{Add.map((adds,props) => (
        
        <tr key={props} dataid={adds.id}>
        
        <td name="Name"    contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.Name}</td>
        <td name="Age"     contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.Age}</td>
        <td name="Company" contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.Company}</td>
        <td name="Country" contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.Country}</td>
        <td name="City"    contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.City}</td>
        <td>
            <span className="table-up"><Link to="#"  className="indigo-text"><i className="fas fa-long-arrow-alt-up" aria-hidden="true"></i></Link></span>
            <span className="table-down"><Link to="#" className="indigo-text"><i className="fas fa-long-arrow-alt-down" aria-hidden="true"></i></Link></span>
        </td>
        <td>
            <span className="table-remove"><button onClick={() => handleDeleteClick(adds.id)} type="button"
            className="btn bg-danger-light btn-rounded btn-sm my-0">Remove</button></span>
        </td>
    </tr>
    
))}
</tbody>
</table>
</div>
                                    `}
                                            </code></pre>
                                        </kbd>
                                    </Card>
                                    </div>
                                </Collapse>
                                <div id="table" className="table-editable">
                                    <span className="table-add float-right mb-3 mr-2">
                                    <button onClick={handleAddFormSubmit} className="btn btn-sm bg-primary"><i
                                    className="ri-add-fill"><span className="pl-1">Add New</span></i>
                                    </button>
                                    </span>
                                    <table className="table table-bordered table-responsive-md table-striped text-center">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Company Name</th>
                                            <th>Country</th>
                                            <th>City</th>
                                            <th>Sort</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {Add.map((adds,props) => (
                                              
                                            <tr key={props} dataid={adds.id}>
                                            
                                            <td name="Name"    contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.Name}</td>
                                            <td name="Age"     contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.Age}</td>
                                            <td name="Company" contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.Company}</td>
                                            <td name="Country" contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.Country}</td>
                                            <td name="City"    contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.City}</td>
                                            <td>
                                                <span className="table-up"><Link to="#"  className="indigo-text"><i className="fas fa-long-arrow-alt-up" aria-hidden="true"></i></Link></span>
                                                <span className="table-down"><Link to="#" className="indigo-text"><i className="fas fa-long-arrow-alt-down" aria-hidden="true"></i></Link></span>
                                            </td>
                                            <td>
                                                <span className="table-remove"><button onClick={() => handleDeleteClick(adds.id)} type="button"
                                                className="btn bg-danger-light btn-rounded btn-sm my-0">Remove</button></span>
                                            </td>
                                        </tr>
                                        
                                      ))}
                                    </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default EditTable;