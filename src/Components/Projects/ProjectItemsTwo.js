import React from 'react';
import { useEffect } from 'react';
import websiteOne from '../../imagesProjectsTwo/avatar-from-daisy-bear.png'
import websiteTwo from '../../imagesProjectsTwo/watch-gallery.png'
import websitethree from '../../imagesProjectsTwo/simple-calculator.png'


const ProjectItemsTwo = ({ handleClick }) => {

    let link1 = "https://super-froyo-9cd0c4.netlify.app/"
    let link2 = "https://exertion-7d317.firebaseapp.com/"
    let link3 = "https://travelbea-80478.firebaseapp.com/"
    return (
        <div>
            <div className='projects-main'>
                <div data-aos="fade-right" data-aos-duration="1000" className="project-container">

                    <img className="project-img" src={websiteOne} alt="" />

                    <div className="project-detail">
                        <h3>Avatar from Dicebear</h3>
                        <p>Here you can see different avatars which is taken from Dice bear API</p>

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