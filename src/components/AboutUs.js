import React from 'react'
import '../css/about.css'
import FadedHeading from './FadedHeading'
import resumePdf from '../document/Nitin-resume.pdf';

export default function AboutUs(props) {
    document.title = props.title
    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = 'Nitin-resume';
        link.href = resumePdf;
        link.click();
    };
    return (
        <div className='about-section'>
            <FadedHeading heading="About me" content="Know Me More"/>
            <div className="about-mid">
                <div className="left-content">
                    <h2 style={{fontSize: "30px"}}>I'm <span>Nitin Goswami, </span> a Web Developer</h2>
                    <p>I help you build brand for your business at an affordable price. We listen attentively to our clients' needs, providing tailored solutions that align with their vision. Through clear communication and regular updates, we involve our clients in every step of the process, ensuring their requirements are met effectively. </p>
                    <p>Delivering work within time and budget which meets client's requirements is our moto.  I am committed to providing a seamless and satisfying experience, ensuring on-time delivery, meticulous attention to detail, and fulfilling all client requirements with precision to bring their visions to life.</p>
                </div>
                <div className="right-content">
                    <ul className="about-details">
                        <li>Name: <span id='name-span'>Nitin Goswami</span></li>
                        <li>Email: <span id="email-span">nitingoswami1900@gmail.com</span> </li>
                        <li>Age: <span id="age-span">23</span></li>
                        <li>From: <span id="from-span">Gwalior, Madhaya Pradesh</span></li>
                    </ul>
                    <button className="download-btn" onClick={handleDownload}>Download CV</button>
                </div>
            </div>
            <div className="state">
                <div className="state-child-box">
                    <p className='state-number'>1</p>
                    <span className="plus-mark">+</span>
                    <p>Years Experiance</p>
                </div>
                <div className="state-child-box">
                    <p className='state-number'>5</p>
                    <span className="plus-mark">+</span>
                    <p>Happy Clients</p>
                </div>
                <div className="state-child-box">
                    <p className='state-number'>10</p>
                    <span className="plus-mark">+</span>
                    <p>Projects Done</p>
                </div>
                <div className="state-child-box">
                    <p className='state-number'>2</p>
                    <span className="plus-mark">+</span>
                    <p>Get Awards</p>
                </div>
            </div>
        </div>
    )
}
