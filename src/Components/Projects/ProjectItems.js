import React from 'react';
import { useGetProjectData } from '../fetch-middleware-data/useFetchData';
import { useNavigate } from 'react-router';



const ProjectItems = () => {

    const navigate = useNavigate();
    const { projectData } = useGetProjectData()

    return (

        <div  >
            <div className='projects-main'>
                {
                    projectData?.data?.slice(0, 3).map(item => {
                        return (
                            <div data-aos="flip-right" data-aos-duration="1000" className="project-container">

                                <img className="project-img" src={item?.img} alt="" />

                                <div className="project-detail">
                                    <h3>{item?.title}</h3>
                                    <br />
                                    <br />
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'end', width: '100%' }}>
                                        <button onClick={() => navigate(`project-detail/${item?._id}`)} className='project-button'> visit website </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className='projects-main-res'>
                {
                    projectData?.data?.slice(0, 3).map(item => {
                        return (
                            <div style={{ margin: 'auto', marginTop: "20px" }} className="project-container">

                                <img className="project-img" src={item?.img} alt="" />

                                <div className="project-detail">
                                    <h3>{item?.title}</h3>
                                    <br />
                                    <br />
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'end', width: '100%' }}>
                                        <button onClick={() => navigate(`project-detail/${item?._id}`)} className='project-button'> visit website </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default ProjectItems;