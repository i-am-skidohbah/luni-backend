import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import  Tab  from 'react-bootstrap/Tab';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import AddProduct from '../pages/pinput';
import ProductList from '../pages/poutput';
import Dashbaord from '../pages/dashboard';



export default function Layout (){
    return (
        <Container>
    <Tab.Container id="left-tabs-example " defaultActiveKey="first">
      <Row>
        <Col sm={2} >
          <Nav variant="pills" className="flex-column ">
            <Nav.Item >
              <Nav.Link className='p-3' eventKey="first">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='p-3' eventKey="second">Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='p-3' eventKey="third">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='p-3' eventKey="fourth">Customers</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10} >
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Dashbaord />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <AddProduct />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <ProductList />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">Second tab content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </Container>
    );
}


