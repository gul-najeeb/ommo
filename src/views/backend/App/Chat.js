import React,{ useState} from 'react'
import { Container, Row, Col,Nav,Tab} from 'react-bootstrap'
import Card from '../../../components/Card'

//Chatcomponents
import Chatitem from '../../../components/Chatitem'
import ChatContent from '../../../components/ChatContent'

//img
import User1 from '../../../assets/images/user/1.jpg'
import User2 from '../../../assets/images/user/2.jpg'
import User3 from '../../../assets/images/user/3.jpg'
import User4 from '../../../assets/images/user/4.jpg'
import User5 from '../../../assets/images/user/5.jpg'
import User6 from '../../../assets/images/user/6.jpg'
import User7 from '../../../assets/images/user/1.jpg'

const Chat = () => {

    const [active, setActive] = useState('1')
    
    return (
    <>
        <Container fluid>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col lg="4" className="chat-left-wrapper">
                        <div className="chat-list">
                            <Card>
                                <div className="card-header">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h4 className="card-title">Messages</h4>
                                        <button className="btn text-primary bg-primary-light btn-sm d-block d-lg-none" data-toggel-extra="side-nav-close" data-expand-extra=".chat-left-wrapper">
                                            <i className="las la-arrow-left"></i>
                                        </button>
                                    </div>
                                    <div className="form-group mb-0">
                                        <div className="input-group input-group-sm">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <svg className="svg-icon text-primary" id="search" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <input type="text" className="form-control form-control-sm" placeholder="Enter name" aria-label="Username" aria-describedby="basic-addon1" />
                                            <div className="input-group-append d-none">
                                                <span className="input-group-text">
                                                    <div className="spinner-border spinner-border-sm" role="status">
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <nav>
                                    <Nav as="ul" variant="tabs justify-content-around" className="" defaultActiveKey="/nav-home" role="tablist">
                                        <Nav.Item as="li">
                                            <Nav.Link  eventKey="nav-home" role="tab" active>Recent</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link  eventKey="nav-profile" role="tab">Archive</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link  eventKey="nav-contact" role="tab">New</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </nav>
                                <Card.Body className="item-list">
                                    <ul id="chat-list" style={{ padding:0, minHeight:"calc(100vh - 21rem)", maxHeight: "calc(100vh - 21rem)", overflowY: "scroll", overflowX: "hidden"}}>
                                        <Chatitem id="1" img={User1} name="Joan Duo" dateTime='Today' msg="I have share some media you can enjoy." onClick={() => setActive('1')} />
                                        <Chatitem id="2" img={User2} name="Jenifer Markus" dateTime='Yesterday' msg="What are you doing?" onClick={() => setActive('2')} />
                                        <Chatitem id="3" img={User3} name="Maria Daf" dateTime='2 Days Ago' msg="You have time for for my task?" onClick={() => setActive('3')} />
                                        <Chatitem id="4" img={User4} name="Joasaf Zurk" dateTime='10/01/2021' msg="How are you?" onClick={() => setActive('4')} />
                                        <Chatitem id="5" img={User5} name="Rock Musta" dateTime='11/05/2020' msg="I want some teachnic for fast code can you help?" onClick={() => setActive('5')} />
                                        <Chatitem id="6" img={User6} name="Joan Duo" dateTime='Today' msg="I have share some media you can enjoy." onClick={() => setActive('6')} />
                                        <Chatitem id="7" img={User7} name="Jenifer Markus" dateTime='Yesterday' msg="What are you doing?" onClick={() => setActive('7')} />
                                        <Chatitem id="8" img={User1} name="Maria Daf" dateTime='2 Days Ago' msg="You have time for for my task?" onClick={() => setActive('8')} />
                                        <Chatitem id="9" img={User2} name="Joasaf Zurk" dateTime='10/01/2021' msg="How are you?" onClick={() => setActive('9')} />
                                        <Chatitem id="10"img={User3} name="Rock Musta" dateTime='11/05/2020' msg="I want some teachnic for fast code can you help?" onClick={() => setActive('10')} />
                                    </ul>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg="8" className="chat-right-wrapper">
                        <ChatContent id="1" active={active === '1' ? true : false} img={User1} name="Joan Duo" nickName="Joan" about="Developer" gender="Male" dob="1 June 1997" lang="English" contact="0123456789" status="Online" activeclassName="active"/>
                        <ChatContent id="2" active={active === '2' ? true : false} img={User2} name="Jenifer Markus" nickName="Jenifer" about="Designer" gender="Female" dob="8 July 1997" lang="English" contact="0678912345" status="Online" />
                        <ChatContent id="3" active={active === '3' ? true : false} img={User3} name="Maria Daf" nickName="Maria" about="Planner" gender="Female" dob="16 August 1997" lang="English" contact="0345671289" status="Online" />
                        <ChatContent id="4" active={active === '4' ? true : false} img={User4} name="Joasaf Zurk" nickName="Joasaf" about="Content Writer" gender="Male" dob="22 December 1997" lang="English" contact="0678945123" status="Online" />
                        <ChatContent id="5" active={active === '5' ? true : false} img={User5} name="Rock Musta" nickName="Rock" about="Developer" gender="Male" dob="26 June 1997" lang="English" contact="0893456712" status="Online" />
                        <ChatContent id="6" active={active === '6' ? true : false} img={User6} name="Joan Duo" nickName="Joan" about="Developer" gender="Male" dob="1 June 1997" lang="English" contact="0123456789" status="Online" />
                        <ChatContent id="7" active={active === '7' ? true : false} img={User7} name="Jenifer Markus" nickName="Jenifer" about="Designer" gender="Female" dob="8 July 1997" lang="English" contact="0678912345" status="Online" />
                        <ChatContent id="8" active={active === '8' ? true : false} img={User1} name="Maria Daf" nickName="Maria" about="Planner" gender="Female" dob="16 August 1997" lang="English" contact="0345671289" status="Online" />
                        <ChatContent id="9" active={active === '9' ? true : false} img={User2} name="Joasaf Zurk" nickName="Joasaf" about="Content Writer" gender="Male" dob="22 December 1997" lang="English" contact="0678945123" status="Online" />
                        <ChatContent id="10" active={active === '10' ? true : false} img={User3} name="Rock Musta" nickName="Rock" about="Developer" gender="Male" dob="26 June 1997" lang="English" contact="0893456712" status="Online" />
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
     </>
    )
}

export default Chat