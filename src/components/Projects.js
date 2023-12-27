import React from 'react';
import "../css/projects.css";
import FadedHeading from './FadedHeading';
import { NavLink, Routes, Route } from 'react-router-dom';
import projectImg1 from '../images/demo-project.jpeg'
import projectImg2 from '../images/demo-project2.jpg'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const images = [projectImg1, projectImg2];
const AutoplaySlider = withAutoplay(AwesomeSlider);
const projectsData = [
    {
        year: 2022,
        name: "Resume Builder",
        title: "Resume Builder Web Application",
        stack: "HTML, CSS, Java Script on front end and Node.Js, Express.Js and EJS for Backend",
        repo: "",
        description: "A Simple and attractive dynamic website including backend where user can generate their resume or CV by filling a simple form with all the personal details, skills, exeperiance and projects details. Skills and Project details will come up in a selector so user needs to create project and save its skills seperatly. Basically it was developed for an institude so that their sells team can create resumes for their personals.",
        images: []
    },
    {
        year: 2023,
        name: "Appointment",
        title: "Salon and Appointment Management system",
        stack: "NodeJs, Express.Js And MongoDb",
        repo: "",
        description: "A Simple and attractive dynamic website including backend where user can generate their resume or CV by filling a simple form with all the personal details, skills, exeperiance and projects details. Skills and Project details will come up in a selector so user needs to create project and save its skills seperatly. Basically it was developed for an institude so that their sells team can create resumes for their personals.",
        images: []
    }
]
function Project(props) {
    return (
        <div className="project-body">
            <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000} className="project-carousel">
                {images.map((image, i) => (
                    <div key={i} data-src={image} />
                ))}
            </AutoplaySlider>
            <div className="project-info-box">
                <div className="year-container">{props.project.year}</div>
                <h3>{props.project.title}</h3>
                <h4>{props.project.stack}</h4>
                <p>Repo: {props.project.repo}</p>
                <p>{props.project.description}</p>
            </div>
        </div>
    )
}

export default function Projects(props) {
    document.title = props.title;

    return (
        <div className='projects-body'>
            <FadedHeading heading="Projects" content="My Work" />
            <div className="projects-nav">
                <ul>
                    {projectsData.map((project, i) => 
                        <NavLink to={`${i}`}><li>{project.name}</li></NavLink>
                    )}
                </ul>
            </div>
            <div className="projects-box">
                <Routes path="/">
                    {projectsData.map((project, i) => {
                        if(i===0){
                            return (
                                <>
                                    <Route path={``} element={<Project project={project}/>} />
                                    <Route path={`/${i}`} element={<Project project={project}/>} />
                                </>
                            )
                        }
                        else{
                            return (
                                <Route path={`/${i}`} element={<Project project={project}/>} />
                            )
                        }
                    })}
                </Routes>
            </div>
        </div>
    );
}

