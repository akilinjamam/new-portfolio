import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <ul className='navBar'>
                <a href="#hero" title='home'>
                    <li><i class="uil uil-home"></i></li>
                </a>
                <a href="#about" title='about'>
                    <li><i class="uil uil-user"></i></li>
                </a>
                <a href="#projects" title='projects'>
                    <li><i class="uil uil-bag"></i></li>
                </a>
                <a href="#skills" title='skills'>
                    <li><i class="uil uil-sliders-v-alt"></i></li>
                </a>
                <a href="#contact" title='contact'>
                    <li><i class="uil uil-envelope-download"></i></li>
                </a>
            </ul>
        </div>
    );
};

export default Navbar;