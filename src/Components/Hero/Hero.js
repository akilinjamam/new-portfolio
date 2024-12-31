/* eslint-disable react/jsx-no-target-blank */
import Lottie from 'react-lottie';
import smileData from '../../smile.json';
import hiData from '../../hiData.json';
import emoji1 from '../../emoji1.json';
import emoji2 from '../../emoji2.json';
import emoji3 from '../../emoji3.json';

import './Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useState } from 'react';
// ..
AOS.init();

const Hero = ({ colors }) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: smileData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: hiData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: emoji1,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions4 = {
        loop: true,
        autoplay: true,
        animationData: emoji2,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions5 = {
        loop: true,
        autoplay: true,
        animationData: emoji3,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const [view, setView] = useState(false);

    let [answer, setAnswer] = useState(0)
    console.log(view)

    const handleClick = () => {
        if (!view) {
            setTimeout(() => {
                setView(false)
                console.log('Initial timeout!')
            }, 4000)

            setAnswer(++answer)
            console.log(answer)
            if (answer === 6) {
                setAnswer(1)
            }
        }
    }


    return (
        <div>
            <div className='heroMain webHero' id='hero'>
                <div className='heroContainer'>

                    <div data-aos="fade-right" data-aos-duration="1000" className='hero-detail'>

                        <div className='hero-link'>
                            <ul>
                                <a target="_blank" href="https://www.facebook.com/akil.injamam/">
                                    <li>
                                        <i class=" uil-facebook-f"></i>
                                    </li>
                                </a>
                                <a target="_blank" href="https://github.com/akilinjamam">
                                    <li>
                                        <i class=" uil-github-alt"></i>
                                    </li>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/injamam-islam-chowdhury-482574158/">
                                    <li>
                                        <i class="uil-linkedin-alt"></i>
                                    </li>
                                </a>
                            </ul>
                        </div>

                        <div className='hero-documents'>
                            <h1 className='hero-documents-h1'>Injamam Islam Chowdhury</h1>
                            <br /><br />
                            <p className='hero-documents-p'>______Full Stack Developer </p>
                            <br />
                            <p className='hero-documents-p'>I am working as a Full-Stack developer. I am very passionate and dedicated to my work.</p>
                            <br /><br />
                            <div className='hero-Button'>
                                <button onClick={() => handleClick(setView(true))} className={colors ? colors : 'blue'} >Say Hello <i class="uil uil-location-arrow"></i> </button>

                            </div>

                            <div className='hello'>
                                <div className={view && answer === 1 ? 'block' : 'none'}>
                                    <Lottie style={{ display: 'inline-block' }} options={defaultOptions2} height={200} width={200} ></Lottie>
                                </div>
                                <div className={view && answer === 2 ? 'block' : 'none'}>
                                    <Lottie style={{ display: 'inline-block' }} options={defaultOptions} height={200} width={200} ></Lottie>
                                </div>
                                <div className={view && answer === 3 ? 'block' : 'none'}>
                                    <Lottie style={{ display: 'inline-block' }} options={defaultOptions3} height={200} width={200} ></Lottie>
                                </div>
                                <div className={view && answer === 4 ? 'block' : 'none'}>
                                    <Lottie style={{ display: 'inline-block' }} options={defaultOptions4} height={200} width={200} ></Lottie>
                                </div>
                                <div className={view && answer === 5 ? 'block' : 'none'}>
                                    <Lottie style={{ display: 'inline-block' }} options={defaultOptions5} height={200} width={200} ></Lottie>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-down-left" data-aos-duration="1000" className='hero-img'>

                    </div>

                </div>
            </div>

            <div className='heroMain resHero' id='hero'>
                <div className='heroContainer'>

                    <div data-aos="fade-right" data-aos-duration="1000" className='hero-detail'>

                        <div className='hero-link'>
                            <ul>
                                <a target="_blank" href="https://www.facebook.com/akil.injamam/">
                                    <li>
                                        <i class=" uil-facebook-f"></i>
                                    </li>
                                </a>
                                <a target="_blank" href="https://github.com/akilinjamam">
                                    <li>
                                        <i class=" uil-github-alt"></i>
                                    </li>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/injamam-islam-chowdhury-482574158/">
                                    <li>
                                        <i class="uil-linkedin-alt"></i>
                                    </li>
                                </a>
                            </ul>
                        </div>

                        <div className='hero-documents'>
                            <h1 className='hero-documents-h1'>Injamam Islam Chowdhury</h1>
                            <br /><br />
                            <p className='hero-documents-p'>______MERN Stack Developer </p>
                            <br />
                            <p className='hero-documents-p'>I am working as a MERN-Stack developer. I am very passionate and dedicated to my work.</p>
                            <br /><br />
                            <div className='hero-Button'>
                                <button onClick={() => handleClick(setView(true))} className={colors ? colors : 'blue'} >Say Hello <i class="uil uil-location-arrow"></i> </button>

                            </div>

                            <div className='hello'>
                                <div className={view && answer === 1 ? 'block' : 'none'}>
                                    <Lottie style={{ display: 'inline-block' }} options={defaultOptions2} height={100} width={100} ></Lottie>
                                </div>
                                <div className={view && answer === 2 ? 'block' : 'none'}>
                                    <Lottie style={{ display: 'inline-block' }} options={defaultOptions} height={100} width={100} ></Lottie>
                                </div>
                                <div className={view && answer === 3 ? 'block' : 'none'}>
                                    <Lottie style={{ display: 'inline-block' }} options={defaultOptions3} height={100} width={100} ></Lottie>
                                </div>
                                <div className={view && answer === 4 ? 'block' : 'none'}>
                                    <Lottie style={{ display: 'inline-block' }} options={defaultOptions4} height={100} width={100} ></Lottie>
                                </div>
                                <div className={view && answer === 5 ? 'block' : 'none'}>
                                    <Lottie style={{ display: 'inline-block' }} options={defaultOptions5} height={100} width={100} ></Lottie>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-down-left" data-aos-duration="1000" className='hero-img'>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;