import React, { Component } from 'react';
import './Home.css'

export default class Home extends Component {
    render () {
        return (
            <div className="Page" >
                <div className="Background" id="HomeBackground" >
                    <div className="Content" >
                        <header>
                            <h1>Silk Road International</h1>
                            <h3>Your Branch Office In Asia</h3>
                        </header>
                        <div className="HorizontalDivide" ></div>
                        <div className="Body" >
                            <p>
                                SRI is a multi-national consulting company with a cultural focus in East and Southeast Asia and a professional specialization in issues associated with globalization. SRI assists companies and individuals recognize competing cultural influences and improve cross-cultural communications and negotiations, problem solving and maximizing individual capabilities. SRI supports not just an understanding of regional corporate cultures but local and regional legal political cultures and helps facilitates cultural and professional competence in international situations. With more than 50 years of collective management and consulting experience in Asia, SRI’s managing partners have worked with large domestic corporations, start-ups, MNCs, factories, SOEs, and with government bureaucracies in multiple countries in Southeast Asia and greater China.
                            </p>
                        </div>
                        <div className="HorizontalDivide" ></div>
                        <p>© 2006 Silk Road International</p>
                    </div>
                </div>
            </div>
        )
    }
}