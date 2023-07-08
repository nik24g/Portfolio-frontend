import React from 'react'
import '../css/about.css'
import FadedHeading from './FadedHeading'

export default function AboutUs(props) {
    document.title = props.title
    return (
        <div className='about-section'>
            <FadedHeading heading="About me" content="Know Me More"/>
            <div className="about-mid">
                <div className="left-content">
                    <h2 style={{fontSize: "30px"}}>I'm <span>Nitin Goswami, </span> a Web Developer</h2>
                    <p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Delivering work within time and budget which meets client's requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
                </div>
                <div className="right-content">
                    <ul className="about-details">
                        <li>Name: <span id='name-span'>Nitin Goswami</span></li>
                        <li>Email: <span id="email-span">nitingoswami1900@gmail.com</span> </li>
                        <li>Age: <span id="age-span">23</span></li>
                        <li>From: <span id="from-span">Gwalior, Madhaya Pradesh</span></li>
                    </ul>
                    <button className="download-btn">Download CV</button>
                </div>
            </div>
            <div className="state">
                <div className="state-child-box">
                    <p className='state-number'>10</p>
                    <span className="plus-mark">+</span>
                    <p>Years Experiance</p>
                </div>
                <div className="state-child-box">
                    <p className='state-number'>250</p>
                    <span className="plus-mark">+</span>
                    <p>Happy Clients</p>
                </div>
                <div className="state-child-box">
                    <p className='state-number'>650</p>
                    <span className="plus-mark">+</span>
                    <p>Projects Done</p>
                </div>
                <div className="state-child-box">
                    <p className='state-number'>38</p>
                    <span className="plus-mark">+</span>
                    <p>Get Awards</p>
                </div>
            </div>
        </div>
    )
}
