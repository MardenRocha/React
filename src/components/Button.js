import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const Button = ({className,onClick,children})=>
    <button className={className} onClick={onClick}>{children}</button>

export default Button;