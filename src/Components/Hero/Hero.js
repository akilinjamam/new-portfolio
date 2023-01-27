import React from 'react';
import './Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Hero = ({ colors }) => {
    return (
        <div className='heroMain forBlock' id='hero'>
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
                            <button className={colors ? colors : 'blue'} >Say Hello <i class="uil uil-location-arrow"></i> </button>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down-left" data-aos-duration="1000" className='hero-img'>

                </div>

            </div>
        </div>
    );
};

export default Hero;