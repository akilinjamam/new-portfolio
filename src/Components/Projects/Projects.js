import React from 'react';
import './Projects.css';
import websiteOne from '../../resource/website-1.png'
import websiteTwo from '../../resource/website-2.png'
import websitethree from '../../resource/website-3.png'

const Projects = () => {
    return (
        <div className='projects forBlock' id='projects'>
            <br />
            <h2 className="projectsMain-title">PROJECTS</h2>
            <br />
            <div className='projects-main'>
                <div data-aos="flip-right" data-aos-duration="1000" className="project-container">

                    <img className="project-img" src={websiteOne} alt="" />

                    <div className="project-detail">
                        <h3>Royal Auto Parts</h3>
                        <p>The website is about manufactured car parts. where retailer can order their a maximum available parts with using online payment method. here is also a dashbord for controlling by admin. where the access is secured. visit website to more detail </p>

                        <button className='project-button'> <a target="_blank" href="https://the-royal-autoparts.web.app/">visit website</a> </button>
                    </div>
                </div>
                <div data-aos="flip-up" data-aos-duration="1000" className="project-container">

                    <img className="project-img" src={websiteTwo} alt="" />

                    <div className="project-detail">
                        <h3>Exertion</h3>
                        <p>
                            This website is for car wherehouse. where the buyer can order there car. He can store his order in his cart. and the admin can see remaining quantity after purchased. and can also include car quantites manually from website. tho know more visit website.
                        </p>

                        <button className='project-button'><a target="_blank" href="https://exertion-7d317.firebaseapp.com/">visit website</a> </button>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-duration="1000" className="project-container">

                    <img className="project-img" src={websitethree} alt="" />

                    <div className="project-detail">
                        <h3>Travelbea</h3>
                        <p>
                            This website is relating with Travel and Tourism where visitor can see and select their place where they want to visit. Also can choose different class for traveling with different facilities. To know more visit website with detail information.
                        </p>

                        <button className='project-button'> <a target="_blank" href="https://travelbea-80478.firebaseapp.com/">visit website</a> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;


// background: linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .5));