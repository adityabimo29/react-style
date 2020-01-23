import React , {Fragment} from 'react';
import './main.css';
import rb from './rb.svg';
import { Navbar,Nav,Dropdown,DropdownButton,Row,Container,Col,Button } from 'react-bootstrap';

const ReactBootstrap = (props) => {


  return (
    <Fragment>
      <Navbar bg="dark" expand="lg" className='darko fixed-top'>
        <Navbar.Brand href="#home"><img alt='logo' style={{width:"50px"}} className='App-logo' src={rb} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='text-white'  href="#link">Getting Started</Nav.Link>
            <Nav.Link className='text-white' href="#home">Component</Nav.Link>
          </Nav>
          <DropdownButton className='mr-4'  id="dropdown-basic-button" title="V1.0.0-beta.16 (Bootstrap 4.3)">
            <Dropdown.Item href="#/action-1">V0.3.24 (Bootstrap 3)</Dropdown.Item>
          </DropdownButton>
          <i className='fa fa-github fa-2x text-white mr-4'></i>
          <i className='fa fa-drupal fa-2x text-white mr-4'></i>
        </Navbar.Collapse>
      </Navbar>
      <div className='jumbo pt-5' >
        <Container style={{backgroundImage:"./bg.svg",height:"430px"}} className='bg-image'>
            <Row className='pt-5'>
                <Col md={{size:12}}>
                    <h1 style={{color:"#61DAFB",fontWeight:"bold"}} className='text-left'>React-Bootstrap</h1>
                    <h2 className='text-white mt-4'>The most popular front-end framework</h2>
                    <h2 className='text-white'>Rebuilt for React.</h2>
                    <Button className='mr-3 mt-2' size="lg" variant="outline-info" color="info">Get Started</Button>
                    <Button className='mt-2' size="lg" variant="outline-info" color="info">Components</Button>
                    <p className='text-white mt-2'>Current version: 1.0.0-beta.16</p>
                </Col>
            </Row>
        </Container>
      </div>
      <Container className='mt-4 pb-4'>
          <Row>
              <Col md={4}>
                <h3>Rebuilt with React</h3>
                <p>React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.</p>
              </Col>
              <Col md={4}>
                  <h3>Bootstrap at its core</h3>
                  <p>Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem.By relying entirely on the Bootstrap stylesheet, React- Bootstrap just works with the thousands of bootstrap themes you already love.</p>
              </Col>
              <Col md={4}>
                  <h3>Accessible by default</h3>
                  <p>The React component model gives us more control over form and function of each component.Each component is implemented with accessibility in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap.</p>
              </Col>
          </Row>
      </Container>
      
    </Fragment>
  );
}


export default  ReactBootstrap ;