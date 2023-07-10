import React from 'react'
import FadedHeading from './FadedHeading'
import "../css/services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faDesktop, faPenRuler, faPaintbrush, faChartArea, faServer } from '@fortawesome/free-solid-svg-icons'

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
                        <p>Graphic design service delivering visually stunning and impactful designs tailored to meet client's needs.</p>
                    </div>
                </div>
                <div className="service-box">
                    <div className="service-icon">
                    <FontAwesomeIcon icon={faPenRuler} style={{color: "#20c997", height: iconHeight}}/>
                    </div>
                    <div className="service-details">
                        <h3>UI/UX Design</h3>
                        <p>Transforming user experiences through intuitive and visually appealing designs, ensuring seamless interactions and user satisfaction.</p>
                    </div>
                </div>
                <div className="service-box">
                    <div className="service-icon">
                    <FontAwesomeIcon icon={faDesktop} style={{color: "#20c997", height: iconHeight}}/>
                    </div>
                    <div className="service-details">
                        <h3>Web Design & Development</h3>
                        <p>Crafting visually stunning websites with seamless functionality, providing tailored solutions that engage users and drive online success.</p>
                    </div>
                </div>
                <div className="service-box">
                    <div className="service-icon">
                    <FontAwesomeIcon icon={faPaintbrush} style={{color: "#20c997", height: iconHeight}}/>
                    </div>
                    <div className="service-details">
                        <h3>App Design & Development</h3>
                        <p>Creating captivating and user-friendly mobile applications, merging compelling design with robust functionality for an exceptional user experience.</p>
                    </div>
                </div>
                <div className="service-box">
                    <div className="service-icon">
                    <FontAwesomeIcon icon={faServer} style={{color: "#20c997", height: iconHeight}}/>
                    </div>
                    <div className="service-details">
                        <h3>Server Managing</h3>
                        <p>Expertly managing and optimizing server infrastructure, ensuring reliable performance, security, and scalability for seamless operations and business continuity.</p>
                    </div>
                </div>
                <div className="service-box">
                    <div className="service-icon">
                    <FontAwesomeIcon icon={faChartArea} style={{color: "#20c997", height: iconHeight}}/>
                    </div>
                    <div className="service-details">
                        <h3>Business Analysis</h3>
                        <p>Offering insightful expertise to identify and analyze business needs, providing strategic recommendations for improved efficiency and growth.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}