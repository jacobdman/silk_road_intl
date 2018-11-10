import React, { Component } from 'react';
import './Nav.css'

export default class Nav extends Component {
    render () {
        return (
            <div className="Nav" >
                <div className="NavLogo" >
                    <img src={require('../../Assets/sri_logo.eps')} alt=""/>
                </div>
                <div className="NavItems" >
                    <p>Home</p>
                    <p>Another Page</p>
                    <p>About us</p>
                    <p>Products</p>
                    <p>Contact</p>
                </div>
            </div>
        )
    }
}