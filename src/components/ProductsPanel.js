import React, { Component } from 'react';
import Button from './Button';
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.css'


class ProductsPanel extends Component {

    render() { 
        const {list,addItem,delItem,remItem}=this.props;
        return ( 
            list.map((item,index)=>
                <div key={index}>
                    <div className='row mt-2 mb-4'>
                        <div className='col-md-1 font-weight-bold'>
                            {item.count}
                        </div>
                        <div className='col-md-1 p-auto'>
                            <Button 
                                className='btn btn-dark font-weight-bold' 
                                onClick={()=>addItem(index)}>
                                +
                            </Button>
                        </div>
                        <div className='col-md-1 p-auto'>
                            <Button 
                                className='btn btn-dark'
                                onClick={()=>remItem(index)}>
                                -
                            </Button>
                        </div>
                        <Product 
                            className='col-md-5 font-weight-bold'>
                            {item.description}
                        </Product>
                        <div className='col-md-2'>
                        <Button 
                            className='btn btn-danger rounded-circle font-weight-bold' 
                            onClick={()=>delItem(item.id)}>
                            X
                        </Button>
                        </div>
                    </div>
                </div>
            )
            
        );
    }
}
 
export default ProductsPanel;