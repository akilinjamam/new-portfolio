import React, { useState } from 'react';
import Lottie from 'react-lottie';
import cyclerData from '../../cycler.json'
import './Projects.css';
import websiteOne from '../../resource/website-1.png'
import websiteTwo from '../../resource/website-2.png'
import websitethree from '../../resource/website-3.png'
import { useEffect } from 'react';

const Projects = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: cyclerData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const [counter, setCounter] = useState(800);
    const [view, setView] = useState(true)
    console.log('counter:', counter)

    useEffect(() => {


    }, []);


    console.log(view)

    let link1 = "https://the-royal-autoparts.web.app/"
    let link2 = "https://exertion-7d317.firebaseapp.com/"
    let link3 = "https://travelbea-80478.firebaseapp.com/"


    const handleClick = (link) => {
        console.log(link)


        if (view) {
            setTimeout(() => {
                console.log('its working bro...');
                window.open(link, " '_blank'")
                setView(true)
            }, 6000)

            const intervalId = setInterval(() => {
                setCounter((t) => {
                    if (t >= 1000) {
                        clearInterval(intervalId)
                        setCounter(800)
                    };

                    return (t < 1000) ? t + 1 : t;
                });
            }, 1);
            return () => (clearInterval(intervalId))
        }
    }


    return (
        <div className='projects forBlock' id='projects'>
            <br />
            <div style={{ position: 'relative' }}>
                <h2 className="projectsMain-title">PROJECTS</h2>
                {counter > 800 && <div style={{ position: "absolute", top: "-20px", left: `${counter}px` }}> <Lottie style={{ display: 'inline-block' }} options={defaultOptions} height={140} width={140} ></Lottie></div>}
            </div>
            <br />
            <div className='projects-main'>
                <div data-aos="flip-right" data-aos-duration="1000" className="project-container">

                    <img className="project-img" src={websiteOne} alt="" />

                    <div className="project-detail">
                        <h3>Royal Auto Parts</h3>
                        <p>The website is about manufactured car parts. where retailer can order their a maximum available parts with using online payment method. here is also a dashbord for controlling by admin. where the access is secured. visit website to more detail </p>

                        <button onClick={() => handleClick(link1)} className='project-button'> visit website </button>
                    </div>
                </div>
                <div data-aos="flip-up" data-aos-duration="1000" className="project-container">

                    <img className="project-img" src={websiteTwo} alt="" />

                    <div className="project-detail">
                        <h3>Exertion</h3>
                        <p>
                            This website is for car wherehouse. where the buyer can order there car. He can store his order in his cart. and the admin can see remaining quantity after purchased. and can also include car quantites manually from website. tho know more visit website.
                        </p>
                        <button onClick={() => handleClick(link2)} className='project-button'> visit website </button>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-duration="1000" className="project-container">

                    <img className="project-img" src={websitethree} alt="" />

                    <div className="project-detail">
                        <h3>Travelbea</h3>
                        <p>
                            This website is relating with Travel and Tourism where visitor can see and select their place where they want to visit. Also can choose different class for traveling with different facilities. To know more visit website with detail information.
                        </p>

                        <button onClick={() => handleClick(link3)} className='project-button'> visit website </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;


// background: linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .5));