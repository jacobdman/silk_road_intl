import React, { Component } from 'react';
import './CaseStudies.css'
import Greg from './Greg';
import David from './David';

export default class CaseStudies extends Component {

    handleClick = (name) => {
        this.props.history.push(`/casestudies/?${name}`)
    }

    render () {
        var str = this.props.location.search
        if (str.length === 0) {
            return (
                <div className="Page" >
                    <div className="Background" id="CaseBackground" >
                        <div className="Content" >
                            <header>
                                <h1>Silk Road International</h1>
                                <h3>Case Studies</h3>
                            </header>
                            <div className="HorizontalDivide" ></div>
                            <div className="Body" id="CaseBody" >
                                <div className="CaseStudyLink" onClick={() => this.handleClick('Greg')} >
                                    <img src={require('../../Assets/GregBryant.jpg')} />
                                    <h3>A Plot Twist Worthy of a Hollywood Film</h3>
                                </div>
                                <div className="CaseStudyLink" onClick={() => this.handleClick('David')} >
                                    <img src={require('../../Assets/DavidDayton.jpg')} />
                                    <h3>The Presentation of Who vs The Presentation of What</h3>
                                </div>
                                <div className="CaseStudyLink" onClick={() => this.handleClick('Nathan')} >
                                    <img src={require('../../Assets/NathanDraper.jpeg')} />
                                    <h3>TBD</h3>
                                </div>
                            </div>
                            <div className="HorizontalDivide" ></div>
                            <p className="CopyRight" >© 2006 Silk Road International. Designed by <a href={'https://jacobdayton.com/'} target="_blank" >JacobDayton.com</a></p>
                        </div>
                    </div>
                </div>
            )
        } else if (str === '?Greg') {
            return (
                <Greg />
            )
        } else if (str === '?David') {
            return (
                <David />
            )
        } else {
                        return (
                <div className="Page" >
                    <div className="Background" id="CaseBackground" >
                        <div className="Content" >
                            <header>
                                <h1>TBD</h1>
                            </header>
                            <div className="HorizontalDivide" ></div>
                            <div className="Body StoryBody" >
                                This is a placeholder
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}