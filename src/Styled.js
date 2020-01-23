import React , {Fragment} from 'react';
import rb from './rb.svg';
import styled from "styled-components";
import './normalize.css';
import './skeleton.css';
import './main.css';


const Styled = (props) => {

    const Pici = styled.div`
    background-color:#20232A;
    height:70px;
    `;

    const Poyo = styled.a`
    color:white;
    margin-top:10px;
    display:inline;
    margin-right:10px;
    font-size:18px
    `;
    const Poci = styled.select`
    margin-top:15px;
    margin-right:20px;
    margin-left:25px;
    `;

    const Ikon = styled.i`
    margin-right:20px;
    color:white
    `;

  return (
    <Fragment>
      <Pici>
          <div className='container'>
              <div className='row'>
                  <div className='two columns'>
                  <img alt='logo' style={{width:"50px",marginTop:"10px"}} className='App-logo' src={rb} />
                  
                  </div>
                  <div className='five columns' style={{marginTop:"20px"}}>
                  <Poyo href='#'>Home</Poyo>
                  <Poyo href='#'>Getting Started</Poyo>
                  <Poyo href='#'>Components</Poyo>
                  </div>
                  <div className='five columns'>
                      <Poci >
                          <option>V1.0.0-beta.16 (Bootstrap 4.3)</option>
                          <option>V0.3.24 (Bootstrap 3)</option>
                      </Poci>
                      <Ikon className='fa fa-github fa-2x'></Ikon>
                      <Ikon className='fa fa-drupal fa-2x'></Ikon>
                  </div>
              </div>
          </div>
      </Pici>
      <div className='jumbo pt-5' >
        <div style={{backgroundImage:"./bg.svg",height:"430px"}} className='bg-image container'>
            <div className='row pt-5'>
                <div className='twelve columns' md={{size:12}}>
                    <h1 style={{color:"#61DAFB",fontWeight:"bold"}} className='text-left'>React Bootstrap Styled</h1>
                    <h4 className='text-white mt-4'>The most popular front-end framework</h4>
                    <h4 className='text-white'>Rebuilt for React.</h4>
                    <a style={{marginRight:"20px"}} className="button button-primary" href="https://google.com">Get Started</a>
                    <a className="button button-primary" href="https://bing.com">Components</a>
                    <p className='text-white mt-2'>Current version: 1.0.0-beta.16</p>
                </div>
            </div>
        </div>
      </div>

      <div className='container mt-4 pb-4'>
          <div className='row'>
              <div className='four columns' >
                <h4>Rebuilt with React</h4>
                <p>React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.</p>
              </div>
              <div className='four columns' >
                  <h4>Bootstrap at its core</h4>
                  <p>Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem.By relying entirely on the Bootstrap stylesheet, React- Bootstrap just works with the thousands of bootstrap themes you already love.</p>
              </div>
              <div className='four columns' >
                  <h4>Accessible by default</h4>
                  <p>The React component model gives us more control over form and function of each component.Each component is implemented with accessibility in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap.</p>
              </div>
          </div>
      </div>
      

    </Fragment>
  );
}


export default  Styled ;