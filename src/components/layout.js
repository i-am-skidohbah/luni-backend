import React from 'react';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import  Tab  from 'react-bootstrap/Tab';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Product from '../pages/product';
import ProductList from '../pages/customers';
import Dashbaord from '../pages/dashboard';
import DbDisplay from './dashboard_display';
import ShowProduct from '../pages/customers';



 function Layout() {
    return (
        <div className='container-fluid ps-5 pe-5'>
       <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3} className='p-4'>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Product</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Customers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="forth">Blog</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first"><Dashbaord /></Tab.Pane>
            <Tab.Pane eventKey="second"><Product /></Tab.Pane>
            <Tab.Pane eventKey="third">
              customers 
            </Tab.Pane>
            <Tab.Pane eventKey="forth"></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
        </div>
    );
}


export default Layout;