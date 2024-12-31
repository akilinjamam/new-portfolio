import React from 'react';

import websiteOne from '../../resource/website-1.png'
import websiteTwo from '../../resource/website-2.png'
import websitethree from '../../resource/website-3.png'
import { useGetProjectData } from '../fetch-middleware-data/useFetchData';



const ProjectItems = ({ handleClick, setProjectNo, setSeconds }) => {


    const { projectData } = useGetProjectData()


    let link1 = "https://the-royal-autoparts.web.app/"
    let link2 = "https://exertion-7d317.firebaseapp.com/"
    let link3 = "https://travelbea-80478.firebaseapp.com/"

    return (

        <div onMouseEnter={() => setProjectNo(1)} onMouseLeave={() => setSeconds(1)} >
            <div className='projects-main'>
                {
                    projectData?.data?.slice(0, 3).map(item => {
                        return (
                            <div data-aos="flip-right" data-aos-duration="1000" className="project-container">

                                <img className="project-img" src={item?.img} alt="" />

                                <div className="project-detail">
                                    <h3>{item?.title}</h3>
                                    <p>{item?.description}</p>

                                    <button onClick={() => handleClick(item?.link)} className='project-button'> visit website </button>
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