import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { Row, Col } from 'react-bootstrap';
import Product from '../pages/product';
import Dashboard from '../pages/dashboard';
import Customers from '../pages/customers';
import Blog from '../pages/blog';
import './css/Layout.css'

function Layout() {
  return (
    <>
      <div className='container-fluid ps-5 pe-5 bg-light' style={{ height: '100vh', overflow: 'hidden' }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className='h-100'>
            <Col sm={3} className='p-5' >
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first" className='m-2'>Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className='m-2'>Product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className='m-2'>Customers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="forth" className='m-2'>Blog</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className='content-column' style={{ height: '100vh', overflowY: 'auto' }}>
              <Tab.Content>
                <Tab.Pane eventKey="first"><Dashboard /></Tab.Pane>
                <Tab.Pane eventKey="second"><Product /></Tab.Pane>
                <Tab.Pane eventKey="third"><Customers /></Tab.Pane>
                <Tab.Pane eventKey="forth"><Blog /></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}

export default Layout;
