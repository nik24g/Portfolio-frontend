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
            <p className='skill-name'>{props.skill}<span className="percentage">{props.skillPercentage}</span></p>
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
            year: "2000-2004",
            course: "Computer Science",
            organisation: "International University",
            description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
        },
        {
            year: "2005-2008",
            course: "Bachelor Degree",
            organisation: "University of California",
            description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
        },
        {
            year: "2009-2012",
            course: "Master Degree",
            organisation: "Harvard University",
            description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
        },
    ]

    // experience details array 
    const experienceCartDetails = [
        {
            year: "2012-2013",
            desig: "Jr. UI UX Designere",
            organisation: "Themeforest",
            description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
        },
        {
            year: "2014-2016",
            desig: "Jr. Product Designer",
            organisation: "Dribbble",
            description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
        },
        {
            year: "2017-2019",
            desig: "Product Designer",
            organisation: "Adobe",
            description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
        },
    ]

    // skill details array 
    const skillDetails = [
        {
            skill: "Web Design",
            percentage: 65
        },
        {
            skill: "HTML/CSS",
            percentage: 95
        },
        {
            skill: "JavaScript",
            percentage: 80
        },
        {
            skill: "React JS",
            percentage: 70
        },
        {
            skill: "Angular Js",
            percentage: 60
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
