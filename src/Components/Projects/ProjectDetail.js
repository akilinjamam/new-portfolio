import React from 'react';
import { useGetProjectData } from '../fetch-middleware-data/useFetchData';
import { Link, useNavigate, useParams } from 'react-router';
import './ProjectDetail.css'

const ProjectDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const { projectData } = useGetProjectData();

    const project = projectData?.data?.find(item => item._id === id);



    return (
        <div className='blue' style={{ height: '100vh', width: '100vw' }}>
            <div className='project-detail-container'>
                <div className='project-detail-img'>
                    <img width={600} height={600} src={project?.img} alt="" />
                </div>
                <div className='project-detail-info blue'>
                    <br />
                    <h2>{project?.title}</h2>
                    <div style={{ width: '100%', height: '450px', overflowX: 'hidden', overflowY: 'scroll', border: '1px solid gray', borderRadius: '5px', padding: '5px' }}>
                        <p dangerouslySetInnerHTML={{ __html: project?.description }}></p>
                    </div>
                    <br />
                    <Link target="_blank" to={project?.link} className='project-detail-button'>
                        <p style={{ textAlign: 'center', marginBottom: '50px', }} >
                            <p style={{ border: '2px solid orange', width: '130px', margin: 'auto', padding: '5px 10px', borderRadius: '10px', cursor: 'pointer' }}>Visite Website</p>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;