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
    this.state={list:[],product:'',count:0,users:[],isLoading:true,modalShow:false,newUser:{}};
  }

  handleAddList = (id) =>{
        
    const updateList = this.state.list;
    updateList[id].count++; 
    this.setState({list:updateList});  

  }

  handleSubmitClient = (event) =>{

    event.preventDefault();

    let user = this.state.newUser;
    user['id'] = this.state.users.length+1;
    let updateUsers = this.state.users;
    updateUsers.push(user);
    this.setState({users:updateUsers,modalShow:false,newUser:{}});


  }

  onBlurField = (event) => {

    //event.preventDefault();

    const field = event.target.name;
    
    let user = this.state.newUser;

    if(field==='company')
        user[field]={name:event.target.value};
    else 
        user[field] = event.target.value;

    this.setState({newUser:user});

  }

  handleDeleteList = (id) => {
    
      const updateList = this.state.list.filter(item=>item.id!==id);
      this.setState({list:updateList});

  }

  handleDeleteUsers = (id) => {

    if(window.confirm('Are you sure?')){

      const updateUsers = this.state.users.filter(item=>item.id!==id);
      this.setState({users:updateUsers});

    }

  }

  handleRemoveList = (id) => {

     if(this.state.list[id].count>0){
      
      let updateList = this.state.list;
      updateList[id].count--;
      this.setState({list:updateList}); 
      
    } 

  }

  handleSubmitList = (event) => {

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

  setUsers=(props)=>{

    this.setState({users:props.users,isLoading:props.isLoading});
    
  }

  toggleModal = () => {

      this.setState({modalShow:!this.state.modalShow});

  }

  render() {
    return (
      
      <BrowserRouter>
        <div>
          <NavBar/>
                <Route 
                  exact path='/' 
                  render={(props)=><Products add={this.handleAddList} rem={this.handleRemoveList} del={this.handleDeleteList} subm = {this.handleSubmitList} change = {this.onChangeProduct}
                  list={this.state.list} product={this.state.product} count={this.state.count}/>}
                />
                <Route 
                  path='/products' 
                  render={(props)=><Products add={this.handleAddList} rem={this.handleRemoveList} del={this.handleDeleteList} subm = {this.handleSubmitList} change = {this.onChangeProduct}
                  list={this.state.list} product={this.state.product} count={this.state.count}/>}
                />
                <Route
                  path='/clients' 
                  render={(props)=><Clients users={this.state.users} isLoading = {this.state.isLoading}setUsers={this.setUsers} del={this.handleDeleteUsers} setModal = {this.toggleModal} modalShow = {this.state.modalShow} handleSubmitClient = {this.handleSubmitClient}
                  onBlurField = {this.onBlurField}/>}
                />
            </div>
      </BrowserRouter>
    );
  }
}

export default App;
