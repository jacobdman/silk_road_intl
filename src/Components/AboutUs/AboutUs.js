import React, { Component } from 'react';
import './AboutUs.css'

export default class About extends Component {
    render () {
        return (
            <div className="Page" >
                <div className="Background" id="AboutBackground" >
                    <div className="Content" >
                        <header>
                            <h1>Silk Road International</h1>
                            <h3>About Us</h3>
                        </header>
                        <div className="HorizontalDivide" ></div>
                        <div className="Body" id="AboutBody" >
                            <div className="Profile" id="Greg">
                                <img src={require('../../Assets/GregBryant.jpg')} alt="" />
                                <h2>Greg Bryant</h2>
                                <div className="TitleDivide"></div>
                                <p>
                                    Greg Bryant has 15 years of experience in international trade, immigrant investment, international real estate investment, international business development and consulting, and television media broadcasting, all centered on the China market. Greg has native fluency in Mandarin Chinese, and Chinese culture and business practices.
                                    <br />
                                    <br />
                                    Greg holds a bachelors degree from Beijing Language and Culture University (BLCU), and a Masters degree from Florida International University. The Chinese government selected Greg to represent Americans in Beijing during President Obama’s first state visit to China and in 2008 Greg, was the first and only Mandarin-speaking American talk show host in China. Through his extensive media experience Greg has acquire a widespread personal network of leading figures in Chinese government, business, real estate and media.
                                    <br />
                                    <br />
                                    Greg specializes in providing culturally-informed comprehensive consulting solutions for entities working in or dealing with the China market.
                                </p>
                            </div>
                            <div className="HorizontalDivide" ></div>
                            <div className="Profile" id="Nathan">
                                <img src={require('../../Assets/NathanDraper.jpeg')} alt="" />
                                <h2>Nathan Draper</h2>
                                <div className="TitleDivide"></div>
                                <p>
                                    Nathan Draper grew up in California, and obtained degrees in International Relations and Global Business Management. He’s married, with one child, and currently resides in Thailand, where he has worked for more than a decade. For the past 3 years Nathan has worked at a multinational NGO as a facilitator for educational advancement and small business development for locals in Thailand, Myanmar and Vietnam. He has thirty years experience dealing with Thai businesses and culture, and speaks the language fluently.
                                    <br />
                                    <br />
                                    Nathan’s work experience includes providing training workshops, manufacturing and product development and management, stints in finance and accounting and has managed HR, accounting, and logistics departments for companies based in China, Thailand and the US. He is a professional trainer, translator, and entrepreneur and his hobbies include deltiology and collecting folk art; he is an avid traveler and relishes putting his talents to work in new and challenging environments.
                                </p>
                            </div>
                            <div className="HorizontalDivide" ></div>
                            <div className="Profile" id="David">
                                <img src={require('../../Assets/DavidDayton.jpg')} alt="" />
                                <h2>David Dayton</h2>
                                <div className="TitleDivide"></div>
                                <p>
                                    David Dayton is a sought after speaker and consultant, on topics centering on Thai and Chinese corporate cultures and practices. He and has been the keynote speaker in events in Chinese and English in China, Hong Kong, Thailand, UAE and the United States. He has given hundreds of professional and academic presentations and managed QA, logistics, and human resources for both his own companies and others in China and Thailand. He has been published in academic and professional journals and been interviewed by CNN, CBS, BBC, 60 Minutes, EuroBiz and others. David speaks Thai and Mandarin and has two MAs focusing on Thai Urban and Corporate Cultures and a PhD (ABD) with a focus on Chinese Corporate Cultural Anthropology.
                                    <br />
                                    <br />
                                    David has more than 25 years of practical experience working in Thailand and greater China. He has started his own companies in Taiwan, China and Thailand as well as worked for consulting firms, gas-companies, media groups, schools, NGO’s and factories. For the last decade he has regularly been asked to consult with banks, airlines, factories, SMEs and MNCs working to better their operations in Southeast and East Asia.
                                    <br />
                                    <br />
                                    David is also the father of 6 wonderful children and the husband to the beautiful Jessica. His hobbies include travel, ethnography, Buddhism, eating, and triathlons.g specializes in providing culturally-informed comprehensive consulting solutions for entities working in or dealing with the China market.
                                </p>
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