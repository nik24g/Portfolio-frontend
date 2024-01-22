import React from 'react';
import "../css/projects.css";
import FadedHeading from './FadedHeading';
import { NavLink, Routes, Route } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import {projectsData} from "../data/projectData"

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Project(props) {
    return (
        <div className="project-body">
            <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000} className="project-carousel">
                {props.project.images.map((image, i) => (
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

