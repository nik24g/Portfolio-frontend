import React from 'react'
import '../css/resume.css'
import FadedHeading from './FadedHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import {educations, experiences, skills} from '../data/resumeData'
import { aboutData } from '../data/aboutData'

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
    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = 'resume';
        link.href = aboutData.resumePdf;
        link.click();
    };
    return (
        <div className='resume-body'>
            <FadedHeading heading="Summary" content="Resume" />
            <div className="resume-mid-body">
                <div className="resume-mid-box">
                    <h3>My Education</h3>
                    {educations.map((education, i) => (
                        <Card key={i} year={education.year} courseOrDesig={education.course} organisation={education.organisation} description={education.description} />
                    ))}
                </div>
                <div className="resume-mid-box">
                    <h3>My Experience</h3>
                    {experiences.map((experience, i) => (
                        <Card key={i} year={experience.year} courseOrDesig={experience.desig} organisation={experience.organisation} description={experience.description} />
                    ))}
                </div>
            </div>
            <div className="resume-bottom-body">
                <h2>My Skills</h2>
                <div className="bars-box">
                    {skills.map((skill, i)=>(
                        <ProgressBar key={i} skill={skill.skill} skillPercentage={skill.percentage}/>
                    ))}
                </div>
                <button className="cv-btn" onClick={handleDownload}>Download CV <FontAwesomeIcon icon={faDownload}/></button>
            </div>
        </div>
    )
}
