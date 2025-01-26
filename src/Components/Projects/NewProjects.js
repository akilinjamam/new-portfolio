import React from 'react';



import './Projects.css';
import ProjectItems from './ProjectItems';

const NewProjects = () => {

    return (
        <div className='projects forBlock' id='projects'>
            <br />

            <div style={{ position: 'relative' }}>
                <h2 className="projectsMain-title">PROJECTS</h2>
            </div>
            <div>
                <ProjectItems />
            </div>
        </div>

    );
};

export default NewProjects;
