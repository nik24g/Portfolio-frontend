import React from 'react'
import '../css/resume.css'
import FadedHeading from './FadedHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

// sub-component for card 
// sub-component using props --> year, courseOrDesig, organisation, description
function Card(props) {
    return (
        <div className="resume-card">
            <div className="year-container">{props.year}</div>
            <h3>{props.courseOrDesig}</h3>
            <h4>{props.organisation}</h4>
            <p>{props.description}</p>
        </div>
    )
}

// sub-component for Progress bar 
// sub-component using props --> skill, skillPercentage
function ProgressBar(props) {
    return (
        <div className="bars">
            <p className='skill-name'>{props.skill}<span className="percentage">{props.skillPercentage}%</span></p>
            <div className="progress">
                <div className="current-progress" style={{width: `${props.skillPercentage}%`}}></div>
            </div>
        </div>
    )
}

export default function Resume(props) {
    document.title = props.title
    // education details array 
    const educationCartDetails = [
        {
            year: "2015-2016",
            course: "High School",
            organisation: "Madhya Pradesh State Board",
            description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
        },
        {
            year: "2017-2018",
            course: "Higher Secondary",
            organisation: "Madhya Pradesh State Board",
            description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
        },
        {
            year: "2019-2023",
            course: "B.tech Computer Science",
            organisation: "ShriRam College of Engineering & Management (SRCEM)",
            description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
        },
    ]

    // experience details array 
    const experienceCartDetails = [
        {
            year: "2021-2022",
            desig: "Server Manager",
            organisation: "Crimzen Red Studios Pvt.Ltd",
            description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
        },
        {
            year: "2021-2022",
            desig: "NodeJs developer",
            organisation: "Stoneman Multiverse Media",
            description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
        },
        {
            year: "2022-2023",
            desig: "NodeJs developer",
            organisation: "Webvillee technology PVT LTD",
            description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
        },
    ]

    // skill details array 
    const skillDetails = [
        {
            skill: "Web Design",
            percentage: 85
        },
        {
            skill: "HTML/CSS/JavaScript",
            percentage: 95
        },
        {
            skill: "Python/Django",
            percentage: 90
        },
        {
            skill: "NodeJs",
            percentage: 90
        },
        {
            skill: "React Js",
            percentage: 70
        },
        {
            skill: "Bootstrap",
            percentage: 99
        }
    ]
    return (
        <div className='resume-body'>
            <FadedHeading heading="Summary" content="Resume" />
            <div className="resume-mid-body">
                <div className="resume-mid-box">
                    <h3>My Education</h3>
                    {educationCartDetails.map((education, i) => (
                        <Card key={i} year={education.year} courseOrDesig={education.course} organisation={education.organisation} description={education.description} />
                    ))}
                </div>
                <div className="resume-mid-box">
                    <h3>My Experience</h3>
                    {experienceCartDetails.map((experience, i) => (
                        <Card key={i} year={experience.year} courseOrDesig={experience.desig} organisation={experience.organisation} description={experience.description} />
                    ))}
                </div>
            </div>
            <div className="resume-bottom-body">
                <h2>My Skills</h2>
                <div className="bars-box">
                    {skillDetails.map((skill, i)=>(
                        <ProgressBar key={i} skill={skill.skill} skillPercentage={skill.percentage}/>
                    ))}
                </div>
                <button className="cv-btn">Download CV <FontAwesomeIcon icon={faDownload}/></button>
            </div>
        </div>
    )
}
