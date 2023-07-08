import React from 'react'
import FadedHeading from './FadedHeading'
import "../css/services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faDesktop, faPenRuler, faPaintbrush, faChartArea, faBullhorn } from '@fortawesome/free-solid-svg-icons'

export default function Services(props) {
    const iconHeight = "30px"
    document.title = props.title
    return (
        <div className='services-body'>
            <FadedHeading heading="Services" content="What I Do?" />
            <div className="services-mid">
                <div className="service-box">
                    <div className="service-icon">
                    <FontAwesomeIcon icon={faPalette} style={{color: "#20c997", height: iconHeight}} />
                    </div>
                    <div className="service-details">
                        <h3>Graphic Design</h3>
                        <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                </div>
                <div className="service-box">
                    <div className="service-icon">
                    <FontAwesomeIcon icon={faDesktop} style={{color: "#20c997", height: iconHeight}}/>
                    </div>
                    <div className="service-details">
                        <h3>Web Design</h3>
                        <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                </div>
                <div className="service-box">
                    <div className="service-icon">
                    <FontAwesomeIcon icon={faPenRuler} style={{color: "#20c997", height: iconHeight}}/>
                    </div>
                    <div className="service-details">
                        <h3>UI/UX Design</h3>
                        <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                </div>
                <div className="service-box">
                    <div className="service-icon">
                    <FontAwesomeIcon icon={faPaintbrush} style={{color: "#20c997", height: iconHeight}}/>
                    </div>
                    <div className="service-details">
                        <h3>App Design & Develop</h3>
                        <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                </div>
                <div className="service-box">
                    <div className="service-icon">
                    <FontAwesomeIcon icon={faChartArea} style={{color: "#20c997", height: iconHeight}}/>
                    </div>
                    <div className="service-details">
                        <h3>Business Analysis</h3>
                        <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                </div>
                <div className="service-box">
                    <div className="service-icon">
                    <FontAwesomeIcon icon={faBullhorn} style={{color: "#20c997", height: iconHeight}}/>
                    </div>
                    <div className="service-details">
                        <h3>SEO Marketing</h3>
                        <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}