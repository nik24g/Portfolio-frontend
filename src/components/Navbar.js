import React from 'react'
// import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import profile from '../images/nitin.png'
import fbIcon from '../images/facebook-icon.png'
import twiIcon from '../images/twitter-icon.png'
import linkdinIcon from '../images/linkdin-icon.png'
import gitIcon from '../images/github-icon.png'

export default function Navbar() {
    const iconHeight = "30px"
    function handleNavToggle(){
        document.getElementById("navbar-elements").classList.toggle("nav-toggle-elements")
    }
    function removeNav(){
        const element = document.getElementById("navbar-elements")
        if (element.classList.contains('nav-toggle-elements')) {
            element.classList.remove("nav-toggle-elements")
        }
    }
    return (

        <div className="nav-bar">
            <div className="personal-info">
                <div className="dp-img">
                    <img src={profile} alt="profile" />
                </div>
                <h2 className="name">Nitin Goswami</h2>
            </div>

            <div className="nav-elements" id='navbar-elements'>
                <ul>
                    <NavLink to="/"  onClick={removeNav}><li>Home</li></NavLink>
                    <NavLink to="/about" onClick={removeNav}><li >About Me</li></NavLink>
                    <NavLink to="/services" onClick={removeNav}><li>What I Do</li></NavLink>
                    <NavLink to="/resume" onClick={removeNav}><li>Resume</li></NavLink>
                    {/* <NavLink to="/" onClick={removeNav}><li>Portfolio</li></NavLink>
                    <NavLink to="/" onClick={removeNav}><li>Testimonial</li></NavLink> */}
                    <NavLink to="/contact" onClick={removeNav}><li>Contact</li></NavLink>
                </ul>
            </div>
            <div className="nav-social-links">
                <ul>
                    <a href="https://www.facebook.com/profile.php?id=100004814653531" target="_blank" rel="noopener noreferrer"><li><img src={fbIcon} alt="facebook-icon" /></li></a>
                    <a href="https://twitter.com/Nikgoswami24" target="_blank" rel="noopener noreferrer"><li><img src={twiIcon} alt="twitter-icon" /></li></a>
                    <a href="https://github.com/nik24g" target="_blank" rel="noopener noreferrer"><li><img src={gitIcon} alt="github-icon" /></li></a>
                    <a href="https://www.linkedin.com/in/nitin-goswami-064734218/" target="_blank" rel="noopener noreferrer"><li><img src={linkdinIcon} alt="linkdin-icon" /></li></a>
                </ul>
            </div>
            <div className='navbar-toggle' onClick={handleNavToggle}>
                <FontAwesomeIcon icon={faBars} style={{height: iconHeight}}/>
            </div>
        </div>
    )
}
