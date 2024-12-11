import React, { useState, useEffect } from "react";
import Stack from 'react-bootstrap/Stack';
import {Carousel, Container, Row, Col, Button, ListGroup, Badge } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import DbProduct from "../components/dashboard_product";
import DbCustomers from "../components/dashboard_customers";
import DbDisplay from "../components/dashboard_display";
import './css/Dashboard.css';
import Img1 from '../assets/sl1.jpg'




function Dashbaord() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);

  }, []);

  const getTimeOfDay = () => {
    const hours = time.getHours();
    if (hours >= 0 && hours < 12) {
      return 'Morning';
    } else if (hours >= 12 && hours < 18) {
      return 'Afternoon';
    } else {
      return 'Evening';
    }
  };

  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };




  return (
    <>
      <div className="scrollable-container mt-5">

       <div className="bg-danger rounded " style={{height: '100px', width: '200px'}}>
       <h3 className=""><b>Hello, Admin </b></h3>
       </div>
        <h4>Good {getTimeOfDay()}</h4>
        <p>Current Time: {time.toLocaleTimeString()}</p>


        <hr />
        <DbDisplay />
        <br />
        <div className="">


          

          <Container >
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col className="rounded bg-light" xs={12} md={6} lg={8} >
        <div>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="Second slide"
        />
        <Carousel.Caption className="text-white">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </div>
        </Col>
        <Col xs={6} md={6} lg={4}>
        <div>
        <Card className="text-center" border="success" >
                  <Card.Header>
                    <Stack direction="horizontal" gap={2}>
                      <div className="p-1">Tasks</div>
                      <div className="p-1 ms-auto"><Button variant="outline-success" size="sm">
                        <i class="bi bi-plus-lg"></i></Button>
                      </div>
                      <div className="p-1">show all</div>
                    </Stack>
                  </Card.Header>
                  <Card.Body style={{ overflow: 'auto' }}>
                    <ListGroup as="ol" numbered>
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Name</div>
                          task
                        </div>
                        <p>12:42</p>

                      </ListGroup.Item>
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Subheading</div>
                          Cras justo odio
                        </div>
                        <Badge bg="primary" pill>
                          14
                        </Badge>
                      </ListGroup.Item>
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Subheading</div>
                          Cras justo odio
                        </div>
                        <Badge bg="primary" pill>
                          14
                        </Badge>
                      </ListGroup.Item>
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Subheading</div>
                          Cras justo odio
                        </div>
                        <Badge bg="primary" pill>
                          14
                        </Badge>
                      </ListGroup.Item>
                    </ListGroup>

                  </Card.Body>
                </Card>
        </div>
        </Col>
      </Row>
      </Container>

        </div>



      </div>
    </>
  );
}


export default Dashbaord;




    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
