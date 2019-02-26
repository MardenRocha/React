//The Following code is my baby steps in REACT. 

import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Products from './components/Products';
import NavBar from './components/NavBar';
import Clients from './components/Clients';
import {BrowserRouter,Route} from  'react-router-dom';


class App extends Component {

  constructor(){
    super();
    this.state={list:[],product:'',count:0};
  }

  handleAdd = (id) =>{
        
    const updateList = this.state.list;
    updateList[id].count++; 
    this.setState({list:updateList});  

  }

  handleDelete = (id) => {   
 
    console.log(this.state.list);
    const updateList = this.state.list.filter(item=>item.id!==id);
    this.setState({list:updateList});

  }

  handleRemove = (id) => {

     if(this.state.list[id].count>0){
      
      let updateList = this.state.list;
      updateList[id].count--;
      this.setState({list:updateList}); 
      
    } 

  }

  handleSubmit = (event) => {

    event.preventDefault();

    if(this.state.product!==''){
  
      let countUp = this.state.count+1;
      const newProduct = {
        id:countUp,
        description:this.state.product,
        count:0
      };

      let updateList = [];

      if(this.state.list.length>0){

        updateList=this.state.list;
        updateList.push(newProduct);
      
      }else{
        
        updateList=[newProduct];
      
      }

      this.setState({list:updateList,product:'',count:countUp});
    }


  }

  onChangeProduct = (event) => {

      this.setState({product:event.target.value});

  }

  render() {
    return (
      
      <BrowserRouter>
        <div>
          <NavBar/>
                <Route 
                  exact path='/' 
                  render={(props)=><Products add={this.handleAdd} rem={this.handleRemove} del={this.handleDelete} subm = {this.handleSubmit} change = {this.onChangeProduct}
                  list={this.state.list} product={this.state.product} count={this.state.count}/>}
                />
                <Route 
                  path='/products' 
                  render={(props)=><Products add={this.handleAdd} rem={this.handleRemove} del={this.handleDelete} subm = {this.handleSubmit} change = {this.onChangeProduct}
                  list={this.state.list} product={this.state.product} count={this.state.count}/>}
                />
                <Route
                  path='/clients' component={Clients}
                />
            </div>
      </BrowserRouter>
    );
  }
}

export default App;
