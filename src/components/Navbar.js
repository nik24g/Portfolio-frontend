import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'
import profile from '../images/Nik.jpg'
import fbIcon from '../images/facebook-icon.png'
import twiIcon from '../images/twitter-icon.png'
import linkdinIcon from '../images/linkdin-icon.png'
import gitIcon from '../images/github-icon.png'
export default function Navbar() {
    return (

        <div className="nav-bar">
            <div className="personal-info">
                <div className="dp-img">
                    <img src={profile} alt="profile" />
                </div>
                <h2 className="name">Nitin Goswami</h2>
            </div>

            <div className="nav-elements">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About Me</li></Link>
                    <Link to="/services"><li>What I Do</li></Link>
                    <Link to="/"><li>Resume</li></Link>
                    <Link to="/"><li>Portfolio</li></Link>
                    <Link to="/"><li>Testimonial</li></Link>
                    <Link to="/"><li>Contact</li></Link>
                </ul>
            </div>
            <div className="social-links">
                <ul>
                    <li><img src={fbIcon} alt="facebook-icon" /></li>
                    <li><img src={twiIcon} alt="twitter-icon" /></li>
                    <li><img src={gitIcon} alt="github-icon" /></li>
                    <li><img src={linkdinIcon} alt="linkdin-icon" /></li>
                </ul>
            </div>
        </div>

    )
}
