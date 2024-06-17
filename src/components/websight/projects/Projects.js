import { React, useState, useEffect } from 'react';
import { FetchProjects } from './FetchProjects';
import Project from './DisplayProject.js';

const Projects = (props) => {
    const [Projects, setProjects] = useState([]);
    const [configAPI, setConfigAPI] = useState(props);
    
    useEffect(() => {
        FetchProjects(configAPI).then(retProjects => {
            setProjects(retProjects)
          });
    }, []);

    return ( 
        <div className="aboutme-container">
        <div className="pagename-container">
            <h1> Projects</h1>
        </div>
        <div className="aboutinfo-container">
            <div className="aboutinfo-inner-container">
                <div className="list-container">
                    <ul>
                        {Projects.map((project) => {
                            return (
                                <Project
                                    key={project.project_id} props={project}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="aboutinfo-inner-container">
                <div className="list-container">
                    <ul>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Projects;