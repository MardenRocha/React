import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FormProduct from './FormProduct';
import ProductsPanel from './ProductsPanel';

class Products extends Component{    

    render(){
    return (
      <div className = 'container'>
        <div className='border rounded col-lg-5 mt-4 mx-auto'> 
              <div className='row mt-4 pl-2'>
                  <FormProduct 
                  onSubmit={this.props.subm}
                  value={this.props.product}
                  onChange={this.props.change}
                  />
              </div>
              <div className='row mt-3 mb-3'>
                  <div className='col-md-6 font-weight-bold'>
                      Stored items{' '}
                  <span className='font-weight-bold badge badge-dark'>
                      {this.props.list.length}
                  </span> 
                  </div>
              </div>
              <React.Fragment> 
              {this.props.list.length>0
                  ?<ProductsPanel
                      list={this.props.list}
                      addItem={this.props.add} 
                      delItem={this.props.del} 
                      remItem={this.props.rem}/>
                  :null
                  }
              </React.Fragment>
          </div>
        </div>
    )  
    }
}

export default Products;