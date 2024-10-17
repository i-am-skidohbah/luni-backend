import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
// import { Icon } from 'react-bootstrap';


function DbDisplay(){
    const span = {
        display:'inline-block',
        width: '70px',
        height:'70px',
        margin: '6px',
        // backgroundColor: '#555'
    }

    return (
        <>
            <div className="border-start border-bottom border-success shadow bg-white rounded">
                <Container>
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-center">
                                <div className="p-3">
                                    <span className="rounded-circle border border-success" style={span}>
                                    <i className="bi bi-heart-fill"></i>
                                    </span>
                                </div>
                                <div>
                                    <div className="d-flex flex-column">
                                        
                                        <div>
                                            <p>Products</p>
                                        </div>
                                        <div>
                                            <p>hello</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <div className="d-flex justify-content-center">
                                <div className="p-3">
                                <span className="rounded-circle" style={span}>

</span>
                                </div>
                                <div>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <p>hello</p>
                                        </div>
                                        <div>
                                            <p>hello</p>
                                        </div>
                                        <div>
                                            <p>hello</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <div className="d-flex justify-content-center">
                                <div className="p-3">
                                <span className="rounded-circle" style={span}>

</span>
                                </div>
                                <div>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <p>hello</p>
                                        </div>
                                        <div>
                                            <p>hello</p>
                                        </div>
                                        <div>
                                            <p>hello</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default DbDisplay;