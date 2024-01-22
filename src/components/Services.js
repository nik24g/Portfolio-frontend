import React from 'react'
import FadedHeading from './FadedHeading'
import "../css/services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPalette, faDesktop, faPenRuler, faPaintbrush, faChartArea, faServer } from '@fortawesome/free-solid-svg-icons'
import { servicesData } from '../data/servicesData'

export default function Services(props) {
    const iconHeight = "30px"
    document.title = props.title
    return (
        <div className='services-body'>
            <FadedHeading heading="Services" content="What I Do?" />
            <div className="services-mid">
                {
                    servicesData && servicesData.map((service, i) => (
                        <div className="service-box">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={service.icon} style={{ color: "#20c997", height: iconHeight }} />
                            </div>
                            <div className="service-details">
                                <h3>{service.service}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}