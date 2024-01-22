import React from 'react'
import '../css/contact.css'
import FadedHeading from './FadedHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import fbIcon from '../images/facebook-icon.png'
import twiIcon from '../images/twitter-icon.png'
import linkdinIcon from '../images/linkdin-icon.png'
import gitIcon from '../images/github-icon.png'
import {contactData} from '../data/contactData'

export default function Contact(props) {
    document.title = props.title
    const iconHeight = "18px"
    return (
        <div className='contact-body'>
            <FadedHeading heading="Contact" content="Get in touch" style={{margin: "48px 0px"}}/>
            <div className="contact-mid">
                <div className="left-contact">
                    <div className="address">
                        <h3>ADDRESS</h3>
                        <p>{contactData.addressLine1}<br />
                        {contactData.addressLine2}<br />
                        {contactData.addressLine3}
                        </p>
                    </div>
                    <div className="contact-details">
                        <p><span><FontAwesomeIcon icon={faPhone} style={{color: "#20c997", height: iconHeight}}/></span>{contactData.phoneNumber}</p>
                        <p><span><svg xmlns="http://www.w3.org/2000/svg" style={{fill: "#20c997", height: iconHeight, width: iconHeight}} height="1em" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></span>{contactData.whatsAppNumber}</p>
                        <p><span><FontAwesomeIcon icon={faEnvelope} style={{color: "#20c997", height: iconHeight}}/></span>{contactData.email}</p>
                    </div>
                    <div className="social-links">
                        <h2>FOLLOW ME</h2>
                        <a href={contactData.facebookProfileLink} target="_blank" rel="noopener noreferrer"><img src={fbIcon} alt="fb-icon" /></a>
                        <a href={contactData.twitterProfileLink} target="_blank" rel="noopener noreferrer"><img src={twiIcon} alt="twitter-icon" /></a>
                        <a href={contactData.githubProfileLink} target="_blank" rel="noopener noreferrer"><img src={gitIcon} alt="github-icon" /></a>
                        <a href={contactData.linkdinProfileLink} target="_blank" rel="noopener noreferrer"><img src={linkdinIcon} alt="linkdin-icon" /></a>
                        {/* <a href="/"><img src="" alt="" /></a> */}
                    </div>
                </div>
                <div className="right-contact">
                    <h2>Send us a note</h2>
                    <div className="info-inputs">
                        <div className="name-input">
                            <input type="text" name='name' id='name-input' placeholder='Name' required/>
                        </div>
                        <div className="email-input">
                            <input type="email" name="email" id="email-input" placeholder='Email' required/>
                        </div>
                    </div>
                    <div className="description">
                        <textarea name="description" id="description-textarea" rows="5" placeholder="Tell us more about your needs........" required></textarea>
                    </div>
                    <button className="submit-btn">Send Message</button>
                </div>
            </div>
        </div>
    )
}
