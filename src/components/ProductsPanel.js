import React, { Component } from 'react';
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
                            <button 
                                className='btn btn-dark font-weight-bold' 
                                onClick={()=>addItem(index)}>
                                +
                            </button>
                        </div>
                        <div className='col-md-1 p-auto'>
                            <button 
                                className='btn btn-dark'
                                onClick={()=>remItem(index)}>
                                -
                            </button>
                        </div>
                        <div 
                            className='col-md-5 font-weight-bold'>
                            {item.description}
                        </div>
                        <div className='col-md-2'>
                        <button 
                            className='btn btn-danger rounded-circle font-weight-bold' 
                            onClick={()=>delItem(item.id)}>
                            X
                        </button>
                        </div>
                    </div>
                </div>
            )
            
        );
    }
}
 
export default ProductsPanel;