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
                            Silk Road International (SRI) is an international consulting company that helps clients work to solve problems and overcome cultural issues that often attend transnational business. Focusing on cross-cultural understandings and communications as a basis for resolving the sources of conflicts, SRI’s philosophy is that the recognition of culturally based motivations  allows for both a deeper appreciation of similarities and better understanding of differences. Cultural evaluations and audits centering on the daily habits of individuals informs SRI’s behavior-centered solutions.
                            <br />
                            <br />
                            SRI offers a cultural focus in East and Southeast Asia and a professional specialization in issues associated with globalization. SRI assists companies and individuals recognize competing cultural influences and improve cross-cultural communications and negotiations, problem solving and maximizing individual capabilities. SRI supports not just an understanding of regional corporate cultures but local legal and political cultures and helps facilitate professional competences in international situations. With more than 50 years of collective management and consulting experience in Asia, SRI’s managing partners have worked with large domestic corporations, start-ups, MNCs, factories, SOEs, individuals and with government bureaucracies in multiple countries in Southeast Asia and greater China.
                            </p>
                        </div>
                        <div className="HorizontalDivide" ></div>
                        <p className="CopyRight" >© 2006 Silk Road International. Designed by <a href={'https://jacobdayton.com/'} target="_blank" >JacobDayton.com</a></p>
                    </div>
                </div>
            </div>
        )
    }
}