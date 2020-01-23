import React , {useState, Fragment} from 'react';
import rb from './rb.svg';
import './main.css';
import {Container,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Dropdown,
    Button
} from 'reactstrap';



const Reactstrap = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle1 = () => setIsOpen(!isOpen);
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Fragment>
      <Navbar color="dark text-white" light expand="md" className='fixed-top'>
        <NavbarBrand href="/"><img alt='logo' style={{width:"50px"}} className='App-logo' src={rb} /></NavbarBrand>
        <NavbarToggler onClick={toggle1} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="text-white" href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/components/">Getting Started</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/components/">Components</NavLink>
            </NavItem>
          </Nav>
          <Dropdown isOpen={dropdownOpen} toggle={toggle} className='mr-4'>
            <DropdownToggle caret>
                V1.0.0-beta.16 (Bootstrap 4.3)
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>V0.3.24 (Bootstrap 3)</DropdownItem>
            </DropdownMenu>
           </Dropdown>
          <NavbarText><i className='text-white fa fa-github fa-2x mr-4'></i></NavbarText>
          <NavbarText><i className='text-white fa fa-dashcube fa-2x mr-4'></i></NavbarText>
        </Collapse>
      </Navbar>
      <div className='jumbo pt-5' >
        <Container style={{backgroundImage:"./bg.svg",height:"430px"}} className='bg-image'>
            <Row className='pt-5'>
                <Col md={{size:12}}>
                    <h1 style={{color:"#61DAFB",fontWeight:"bold"}} className='text-left'>React Bootstrap Reactstrap</h1>
                    <h2 className='text-white mt-4'>The most popular front-end framework</h2>
                    <h2 className='text-white'>Rebuilt for React.</h2>
                    <Button className='mr-3 mt-2' size="lg" outline color="info">Get Started</Button>
                    <Button size="lg" outline color="info">Components</Button>
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


export default  Reactstrap ;