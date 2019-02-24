import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap';
import Button from './Button';

class FormProduct extends Component {
    render() { 
        const{onSubmit,value,onChange} = this.props;
        
        return ( 

            <form onSubmit={onSubmit} className='col'>
                <div className="form-group">
                    <label className="font-weight-bold">Product</label>
                    <input 
                        type="text"
                        className="form-control font-weight-bold" 
                        placeholder="Describe the product" 
                        value={value} 
                        onChange={onChange}/>
                </div>
                <div className ="form-group">
                    <button 
                        type="submit" 
                        className="btn btn-primary font-weight-bold" >
                        Add Product
                    </button>
                </div>

            </form>   
         );
    }
}
 
export default FormProduct;