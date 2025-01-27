import React from 'react';



import './Projects.css';
import ProjectItems from './ProjectItems';
import { useNavigate } from 'react-router';

const NewProjects = () => {
    const navigate = useNavigate();
    return (
        <div className='projects forBlock' id='projects'>
            <br />

            <div style={{ position: 'relative' }}>
                <h2 className="projectsMain-title">PROJECTS</h2>
            </div>
            <div>
                <ProjectItems />
                <br />
                <p onClick={() => navigate('/allProjectClient')} style={{ textAlign: 'center', marginBottom: '50px', }} >
                    <p style={{ border: '2px solid orange', width: '130px', margin: 'auto', padding: '5px 10px', borderRadius: '10px', cursor: 'pointer' }}>View All Projects</p>
                </p>
            </div>
        </div>

    );
};

export default NewProjects;
