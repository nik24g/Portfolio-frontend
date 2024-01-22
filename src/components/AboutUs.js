import React from 'react'
import '../css/about.css'
import FadedHeading from './FadedHeading'
import { aboutData } from '../data/aboutData';

export default function AboutUs(props) {
    document.title = props.title
    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = 'Nitin-resume';
        link.href = aboutData.resumePdf;
        link.click();
    };
    return (
        <div className='about-section'>
            <FadedHeading heading="About me" content="Know Me More"/>
            <div className="about-mid">
                <div className="left-content">
                    <h2 style={{fontSize: "30px"}}>I'm <span>{aboutData.name}, </span> a {aboutData.designation}</h2>
                    <p>{aboutData.aboutPara1}</p>
                    <p>{aboutData.aboutPara2}</p>
                </div>
                <div className="right-content">
                    <ul className="about-details">
                        <li>Name: <span id='name-span'>{aboutData.name}</span></li>
                        <li>Email: <span id="email-span">{aboutData.email}</span> </li>
                        <li>Age: <span id="age-span">{aboutData.age}</span></li>
                        <li>From: <span id="from-span">{aboutData.fromLocation}</span></li>
                    </ul>
                    <button className="download-btn" onClick={handleDownload}>Download CV</button>
                </div>
            </div>
            <div className="state">
                <div className="state-child-box">
                    <p className='state-number'>{aboutData.noOfExperience}</p>
                    <span className="plus-mark">+</span>
                    <p>Years Experiance</p>
                </div>
                <div className="state-child-box">
                    <p className='state-number'>{aboutData.noOfHappyClients}</p>
                    <span className="plus-mark">+</span>
                    <p>Happy Clients</p>
                </div>
                <div className="state-child-box">
                    <p className='state-number'>{aboutData.noOfProjects}</p>
                    <span className="plus-mark">+</span>
                    <p>Projects Done</p>
                </div>
                <div className="state-child-box">
                    <p className='state-number'>{aboutData.noOfAwards}</p>
                    <span className="plus-mark">+</span>
                    <p>Get Awards</p>
                </div>
            </div>
        </div>
    )
}
