import React, { Component } from 'react';
import { withRouter } from "react-router";
import './PhoneNav.css';

class PhoneNav extends Component {
    
    constructor () {
        super()
        this.PhoneNavMenu = React.createRef();
        this.PhoneNavTop = React.createRef();
        this.ButtDiv1 = React.createRef();
        this.ButtDiv2 = React.createRef();
        this.ButtDiv3 = React.createRef();
        this.state = {
            open: false
        }
    }


    handleClick = (type) => {
        if (type === 'home') {
            this.props.history.push("/");
            this.handleClick('close')
        } else if (type === 'blog') {
            this.handleClick('close')
            window.location.href = "http://silkroadintl.net/blog/#sthash.Gz7NWtQ2.dpbs";
        } else if (type === 'about') {
            this.props.history.push("/about")
            this.handleClick('close')
        } else if (type === 'open') {
            this.PhoneNavMenu.current.style.bottom = '0' 
            this.PhoneNavTop.current.style.top = '0' 
            this.PhoneNavTop.current.classList.add('Selected')
            this.ButtDiv1.current.style.border = '1px solid white'
            this.ButtDiv1.current.style.transform = 'rotate(45deg)'
            this.ButtDiv1.current.style.top = '9px'
            this.ButtDiv2.current.style.top = '-9px'
            this.ButtDiv2.current.style.transform = 'rotate(315deg)'
            this.ButtDiv2.current.style.border = '1px solid white' 
            this.ButtDiv3.current.style.display = 'none' 
            this.setState({ open: !this.state.open })
        } else if (type === 'close') {
            this.PhoneNavMenu.current.style.bottom = '100%' 
            this.PhoneNavTop.current.style.top = '100%' 
            this.PhoneNavTop.current.classList.remove('Selected')
            this.ButtDiv1.current.style.border = '1px solid black'
            this.ButtDiv1.current.style.transform = 'rotate(0deg)'
            this.ButtDiv1.current.style.top = '0'
            this.ButtDiv2.current.style.top = '0'
            this.ButtDiv2.current.style.transform = 'rotate(0deg)'
            this.ButtDiv2.current.style.border = '1px solid black' 
            this.ButtDiv3.current.style.display = 'block' 
            this.setState({ open: !this.state.open })
        }
    }

    render () {
        return (
            <div className="PhoneNav" ref={this.PhoneNavMenu} >
                <div className="PhoneNavTop" ref={this.PhoneNavTop} >
                    <div className="RedDiv"></div>
                    <img className="PhoneNavSVG" src={require('../../Assets/Untitled.svg')} alt=""/>
                    <div className="NavButt" onClick={() => this.state.open ? this.handleClick('open') : this.handleClick('close') }>
                        <div ref={this.ButtDiv1}></div>
                        <div ref={this.ButtDiv2}></div>
                        <div ref={this.ButtDiv3}></div>
                    </div>
                </div>
                <div className="PhoneNavItems" >
                    <div className="PhoneNavDivide"></div>
                    <a onClick={() => this.handleClick('home')} >Home</a>
                    <div className="PhoneNavDivide"></div>
                    <a onClick={() => this.handleClick('about')} >About us</a>
                    <div className="PhoneNavDivide"></div>
                    <a onClick={() => this.handleClick('blog')} >Blog</a>
                    <div className="PhoneNavDivide"></div>
                </div>
            </div>
        )
    }
}

export default withRouter(PhoneNav);