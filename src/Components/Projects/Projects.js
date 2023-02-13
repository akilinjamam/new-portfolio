import React, { useState } from 'react';
import { useEffect } from 'react';
import websiteOne from '../../resource/website-1.png'
import websiteTwo from '../../resource/website-2.png'
import websitethree from '../../resource/website-3.png'

import Lottie from 'react-lottie';
import cyclerData from '../../cycler.json'
import './Projects.css';

import ProjectItems from './ProjectItems';
import ProjectItemsTwo from './ProjectItemsTwo';


const Projects = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: cyclerData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    let link1 = "https://the-royal-autoparts.web.app/"
    let link2 = "https://exertion-7d317.firebaseapp.com/"
    let link3 = "https://travelbea-80478.firebaseapp.com/"

    const [counter, setCounter] = useState(800);
    const [view, setView] = useState(true);
    let [seconds, setSeconds] = useState(1);
    const [secondsForRes, setSecondsForRes] = useState(1);
    const [stop, setStop] = useState(false)
    const [projectNo, setProjectNo] = useState(1)


    console.log(counter)

    if (seconds === 3) {
        setSeconds(1)
    }
    if (secondsForRes === 4) {
        setSecondsForRes(1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 4000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsForRes(seconds => seconds + 1);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleClick = (link) => {
        console.log(link)

        if (view) {
            setTimeout(() => {
                console.log('its working bro...');
                window.open(link, " '_blank'")
                setView(true)
            }, 3000)
            const intervalId = setInterval(() => {
                setCounter((t) => {
                    if (t >= 1200) {
                        clearInterval(intervalId)
                        setCounter(800)
                    };

                    return (t < 1200) ? t + 1 : t;
                });
            }, 1);
            return () => (clearInterval(intervalId))
        }
    }

    const handlDot = (data) => {
        setSeconds(data);
    }
    const handlDotRes = (data) => {
        setSecondsForRes(data);
    }

    const projectOne = <ProjectItems setSeconds={setSeconds} setProjectNo={setProjectNo} handleClick={handleClick} ></ProjectItems>
    const projectTwo = <ProjectItemsTwo setSeconds={setSeconds} setProjectNo={setProjectNo} handleClick={handleClick} ></ProjectItemsTwo>

    const handleHover = (data) => {
        setStop(data);
        if (data === true) {
            setSeconds(seconds)
        }
    }


    return (
        <div className='projects forBlock' id='projects'>
            <br />
            <div className='webProjects' >
                <div style={{ position: 'relative' }}>
                    <h2 className="projectsMain-title">PROJECTS</h2>
                    {counter > 800 && <div className='animation' style={{ position: "absolute", top: "-20px", left: `${counter}px` }}> <Lottie style={{ display: 'inline-block' }} options={defaultOptions} height={140} width={140} ></Lottie></div>}
                </div>
                <br />
                <div onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} >
                    {!stop ?
                        <div>
                            {seconds === 1 && projectOne}
                            {seconds === 2 && projectTwo}
                        </div>
                        :
                        <div>
                            {projectNo === 1 && projectOne}
                            {projectNo === 2 && projectTwo}
                        </div>
                    }

                </div>

                <div className='mainDot'>
                    <div className='dotIcon'>
                        {
                            !stop ?
                                <div>
                                    <span onClick={() => handlDot(1)} style={{ marginRight: '30px', paddingBottom: '10px', cursor: 'pointer' }} className={seconds === 1 && 'bigIcon'}>Long Projects</span>

                                    <span style={{ cursor: 'pointer', paddingBottom: '10px' }} onClick={() => handlDot(2)} className={seconds === 2 && 'bigIcon'} >Simple Projects</span>
                                </div>
                                :
                                <div>
                                    {<span onClick={() => handlDot(1)} style={{ marginRight: '30px', paddingBottom: '10px', cursor: 'pointer' }} className={projectNo === 1 && 'bigIcon'}>Long Projects</span>}

                                    {<span style={{ cursor: 'pointer', paddingBottom: '10px' }} onClick={() => handlDot(2)} className={projectNo === 2 && 'bigIcon'} >Simple Projects</span>}
                                </div>
                        }
                    </div>
                </div>
            </div>

            <div className='resProjects'>
                <div style={{ position: 'relative' }}>
                    <h2 className="projectsMain-title">PROJECTS</h2>
                    {counter > 800 && <div style={{ position: "absolute", top: "-20px", left: `${counter}px` }}> <Lottie style={{ display: 'inline-block' }} options={defaultOptions} height={140} width={140} ></Lottie></div>}
                </div>
                <br />
                <div className='projects-main'>
                    {
                        secondsForRes === 1 && <div className="project-container">

                            <img className="project-img" src={websiteOne} alt="" />

                            <div className="project-detail">
                                <h3>Royal Auto Parts</h3>
                                <p>The website is about manufactured car parts. where retailer can order their a maximum available parts with using online payment method. here is also a dashbord for controlling by admin. where the access is secured. visit website to more detail </p>

                                <button onClick={() => handleClick(link1)} className='project-button'> visit website </button>
                            </div>
                        </div>
                    }
                    {
                        secondsForRes === 2 && <div className="project-container">

                            <img className="project-img" src={websiteTwo} alt="" />

                            <div className="project-detail">
                                <h3>Exertion</h3>
                                <p>
                                    This website is for car wherehouse. where the buyer can order there car. He can store his order in his cart. and the admin can see remaining quantity after purchased. and can also include car quantites manually from website. tho know more visit website.
                                </p>
                                <button onClick={() => handleClick(link2)} className='project-button'> visit website </button>
                            </div>
                        </div>
                    }
                    {
                        secondsForRes === 3 && <div className="project-container">

                            <img className="project-img" src={websitethree} alt="" />

                            <div className="project-detail">
                                <h3>Travelbea</h3>
                                <p>
                                    This website is relating with Travel and Tourism where visitor can see and select their place where they want to visit. Also can choose different class for traveling with different facilities. To know more visit website with detail information.
                                </p>

                                <button onClick={() => handleClick(link3)} className='project-button'> visit website </button>
                            </div>
                        </div>
                    }

                    <div className='mainDot'>
                        <div className='dotIcon'>
                            <span onClick={() => handlDotRes(1)} style={{ marginRight: '10px', cursor: 'pointer' }} className={secondsForRes === 1 && 'bigIcon'}>.</span>

                            <span style={{ marginRight: '10px', cursor: 'pointer' }} onClick={() => handlDotRes(2)} className={secondsForRes === 2 && 'bigIcon'} >.</span>

                            <span style={{ marginRight: '10px', cursor: 'pointer' }} onClick={() => handlDotRes(3)} className={secondsForRes === 3 && 'bigIcon'} >.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;


// background: linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .5));