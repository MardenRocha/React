import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import FormProduct from './FormProduct';
import ProductsPanel from './ProductsPanel';

class Products extends Component{
    constructor(props){
        super(props);
        
        this.state={
            list:props.list,
            product:'',
            count:0    
        };

        console.log(this.state.list);
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

    render(){
    return (
        <React.Fragment>
            <div className='row mt-4 pl-2'>
                <FormProduct 
                onSubmit={this.handleSubmit}
                value={this.state.product}
                onChange={this.onChangeProduct}
                />
            </div>
            <div className='row mt-3 mb-3'>
                <div className='col-md-6 font-weight-bold'>
                    Stored items{' '}
                <span className='font-weight-bold badge badge-dark'>
                    {this.state.list.length}
                </span> 
                </div>
            </div>
            <React.Fragment> 
            {this.state.list.length>0
                ?<ProductsPanel
                    list={this.state.list}
                    addItem={this.handleAdd} 
                    delItem={this.handleDelete} 
                    remItem={this.handleRemove}/>
                :null
                }
            </React.Fragment>
        </React.Fragment>
    )  
    }
}

export default Products;