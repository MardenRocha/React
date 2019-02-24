//The Following code is my baby steps in REACT. 

import React, { Component } from 'react';
import './App.css';
import ProductsPanel from './components/ProductsPanel';
import 'bootstrap/dist/css/bootstrap.css'
import FormProduct from './components/FormProduct';


class App extends Component {

  constructor(props){

    super(props);
    this.state={list:[],product:''};
    this.count = 0;

  }

  handleAdd = (id) =>{
    
    const updateList = this.state.list;
    updateList[id].count++; 
    this.setState({list:updateList});  

  }

  handleDelete = (id) => {   
 
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
  
      const newProduct = {
        id:this.count++,
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

      this.setState({list:updateList,product:''});
    }


  }

  onChangeProduct = (event) => {

      this.setState({product:event.target.value});

  }

  render() {
    return (
      <div className='container border rounded col-lg-5 mt-4'> 
        <div className='row mt-4 pl-2'>
            <FormProduct 
              onSubmit={this.handleSubmit}
              value={this.state.product}
              onChange={this.onChangeProduct}
            />
        </div>
        <div className='row mt-3 mb-3'>
            <div className='col-md-6 font-weight-bold'>
              Cart Total{' '}
              <span className='font-weight-bold badge badge-dark'>
                {this.state.list.length}
              </span> 
            </div>
        </div>
            {this.state.list.length>0
              ?<ProductsPanel
                list={this.state.list}
                addItem={this.handleAdd} 
                delItem={this.handleDelete} 
                remItem={this.handleRemove}/>
              :null
            }
      </div>

    );
  }
}

export default App;
