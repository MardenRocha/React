import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const Product = ({className,children})=>
    <div className={className}>{children}</div>


export default Product;