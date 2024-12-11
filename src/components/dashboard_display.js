import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, Stack } from "react-bootstrap";
// import { Icon } from 'react-bootstrap';


function DbDisplay() {
    // const span = {
    //     display: 'inline-block',
    //     width: '70px',
    //     height: '70px',
    //     margin: '6px',
    //     // backgroundColor: '#555'
    // }

    const bigtext = {
        fontSize: '50px'
    }
     const body = { 
        backgroundColor: '#71BC78', 
        color: 'white',
     }
     
    return (
        <>
           
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ background: 'linear-gradient(90deg, #9ebd13 0%, #008552 100%)', color: 'whitesmoke' }}
 
                             border="success" className="m-1 shadow bg-sucesss" >
                                <Card.Header><h4>Products</h4></Card.Header>
                                <Card.Body>
                                    <Card.Title>In Stock</Card.Title>
                                    <Card.Text>
                                        <h3 className="display-1" style={bigtext}>290</h3>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ background: 'linear-gradient(90deg, #9ebd13 0%, #008552 100%)', color: 'whitesmoke' }}
                             border="success" className="m-1 shadow bg-sucesss" >
                                <Card.Header><h4 style={{}}>Products</h4></Card.Header>
                                <Card.Body>
                                    <Card.Title><h5>Out of Stock</h5></Card.Title>
                                    <Card.Text>
                                        <h3 className="display-1" style={bigtext}>290</h3>
                                    </Card.Text>
                                    {/* <p>helllo</p> */}
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>
                            <Card style={{ background: 'linear-gradient(90deg, #9ebd13 0%, #008552 100%)', color: 'whitesmoke' }}
                             border="success" className="m-1 shadow bg-sucesss" >
                            <Card.Header><h4 style={{}}>Orders</h4></Card.Header>
                                <Card.Body>
                                    <Card.Title style={{color: 'transparent'}}>in stock</Card.Title>
                                    <Card.Text>
                                        <h3 className="display-1" style={bigtext}><i class="bi bi-cart-check"></i> 90</h3>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            
        </>
    )
}

export default DbDisplay;