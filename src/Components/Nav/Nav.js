import React, { Component } from 'react';
import { withRouter } from "react-router";
import './Nav.css';

class Nav extends Component {
    
    handleClick = (type) => {
        if (type === 'home') {
            this.props.history.push("/");
        } else if (type === 'blog') {
            window.location.href = "http://blog.silkroadintl.net/#sthash.2V1LBlli.dpbs";
        } else if (type ==='about') {
            this.props.history.push("/about")
        } else if (type ==='contact') {
            this.props.history.push("/contact")
        } else if (type ==='case') {
            this.props.history.push(`/casestudies`)
        }
    }

    render () {
        return (
            <div className="Nav" >
                <div className="NavLogo" >
                    <img className="NavSVG" src={require('../../Assets/Untitled.svg')} alt=""/>
                </div>
                <div className="NavItems" >
                    <div className="NavDivide"></div>
                    <a onClick={() => this.handleClick('home')} >Home</a>
                    <div className="NavDivide"></div>
                    <a onClick={() => this.handleClick('about')} >About us</a>
                    <div className="NavDivide"></div>
                    <a onClick={() => this.handleClick('contact')} >Contact</a>
                    <div className="NavDivide"></div>
                    <a onClick={() => this.handleClick('case')} >Case Studies</a>
                    <div className="NavDivide"></div>
                    <a onClick={() => this.handleClick('blog')} >Blog</a>
                    <div className="NavDivide"></div>
                </div>
            </div>
        )
    }
}

export default withRouter(Nav);