//The Following code is my baby steps in REACT. 

import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Products from './components/Products';
import NavBar from './components/NavBar';
import Clients from './components/Clients';


class App extends Component {

  constructor(){
    super();
    this.state={list:[],product:'',count:0};
  }

  render() {
    return (    
        <div>
          <NavBar/>
        <div className = 'container'>
          <div className='border rounded col-lg-5 mt-4 mx-auto'> 
              <Products list={this.state.list} product={this.state.product}/> 
          </div>
          {
            //<Clients /> Testing the component created.
          }
        </div>
        </div>
    );
  }
}

export default App;
