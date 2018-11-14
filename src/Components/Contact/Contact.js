import React, { Component } from 'react';
import './Contact.css'

export default class Contact extends Component {
    render () {
        return (
            <div className="Page" >
                <div className="Background" id="ContactBackground" >
                    <div className="Content" id="ContactContent" >
                        <header>
                            <h1>Silk Road International</h1>
                            <h3>Contact</h3>
                        </header>
                        <div className="HorizontalDivide" ></div>
                        <div className="Body" id="ContactBody">
                            <div className="ContactItem" >
                                <h3>Greater China</h3>
                                Greg Bryant
                                <br />
                                Shenzhen, China
                                <br />
                                86.133.6097.7107
                                <br />
                                Greg@silkroadintl.net
                                <br />
                            </div>
                            <div className="VerticalDivide"></div>
                            <div className="ContactItem" >
                                <h3>Southeast Asia</h3>
                                Nathan Draper
                                <br />
                                Bangkok, Thailand
                                <br />
                                66.093.146.5619
                                <br />
                                Nathan@silkroadintl.net
                            </div>
                            <div className="VerticalDivide"></div>
                            <div className="ContactItem" >
                                <h3>USA</h3>
                                David A. Dayton, Ph.D
                                <br />
                                Salt Lake City, UT, USA
                                <br />
                                1.801.542.9458
                                <br />
                                David@silkroadintl.net
                                <br />
                                Skype/WeChat/Line: dvdd8n
                            </div>
                        </div>
                        <div className="HorizontalDivide" ></div>
                        <p className="CopyRight" >© 2006 Silk Road International.</p>
                    </div>
                </div>
            </div>
        )
    }
}