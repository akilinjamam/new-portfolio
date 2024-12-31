import React from 'react';

import websiteOne from '../../imagesProjectsTwo/avatar-from-daisy-bear.png'
import websiteTwo from '../../imagesProjectsTwo/watch-gallery.png'
import websitethree from '../../imagesProjectsTwo/simple-calculator.png'
import websiteFour from '../../resource/Screenshot 2023-02-27 064604.png'

const ProjectItemsTwo = ({ handleClick, setProjectNo, setSeconds }) => {

    let link1 = "https://lambent-torrone-f7e51d.netlify.app/"
    let link2 = "https://heroic-croissant-3591cc.netlify.app/"
    let link3 = "https://friendly-marigold-ce415b.netlify.app/"
    return (
        <div onMouseEnter={() => setProjectNo(2)} onMouseLeave={() => setSeconds(2)}>
            <div className='projects-main'>
                <div data-aos="fade-right" data-aos-duration="1000" className="project-container">

                    <img className="project-img" src={websiteFour} alt="" />

                    <div className="project-detail">
                        <h3>online MCQ test center</h3>
                        <p>here you can give mcq test where you can customize subject time and quantity of questions</p>

                        <button onClick={() => handleClick(link1)} className='project-button'> visit website </button>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="project-container">

                    <img className="project-img" src={websiteTwo} alt="" />

                    <div className="project-detail">
                        <h3>Watch Gallery</h3>
                        <p>
                            This is very small project where you can choose four watch and if you click on the button choose one for me then it will pick one from four.
                        </p>
                        <button onClick={() => handleClick(link2)} className='project-button'> visit website </button>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className="project-container">

                    <img className="project-img" src={websitethree} alt="" />

                    <div className="project-detail">
                        <h3>Simple calculator</h3>
                        <p>
                            this is a simple calculator where you can do basic calculations.
                        </p>

                        <button onClick={() => handleClick(link3)} className='project-button'> visit website </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItemsTwo;