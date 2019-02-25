//The Following code is my baby steps in REACT. 

import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Products from './components/Products';


class App extends Component {

  constructor(){
    super();
    this.state={list:[],product:'',count:0};
  }

  render() {
    return (
      <div className='container border rounded col-lg-5 mt-4'> 
          <Products list={this.state.list} product={this.state.product} count={this.state.count}/>
      </div>

    );
  }
}

export default App;
