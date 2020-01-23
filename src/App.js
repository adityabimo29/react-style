import React from 'react';
import './skeleton.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Reactstrap from './Reactstrap';
import ReactBootstrap from './ReactBootstrap';
import Styled from './Styled';

function App() {
  return (
    <Router>
        <div className='fixed-bottom text-center' style={{backgroundColor:"#20232A",padding:"10px"}}>
        <Link style={{marginRight:"20px"}} className=' button button-primary' to='/'>Styled</Link>
        <Link style={{marginRight:"20px"}} className=' button button-primary' to='/Reactstrap'>Reactstrap</Link>
        <Link className=' button button-primary' to='/ReactBootstrap'>React Bootstrap</Link>
        </div>
        <Switch>
        <Route exact  path="/" component={Styled} />
        <Route  path="/Reactstrap" component={Reactstrap} />
        <Route  path="/ReactBootstrap" component={ReactBootstrap} />
        </Switch>
        <h3 className='alert alert-info'>Select Your Style</h3>
    </Router>
    
  );
}

export default App;
