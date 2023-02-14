import React from 'react';
import './Navbar.css'

const Navbar = ({ handleColors, setMakeInvisible, makeInvisible, timer, setTimer }) => {



    const handleCounter = () => {

        if (!makeInvisible) {
            setMakeInvisible(true);
            console.log('hello')
        }
        setTimeout(() => {
            setMakeInvisible(false)
        }, 60000)
        const intervalId = setInterval(() => {
            setTimer((t) => {
                if (t < 1) {
                    clearInterval(intervalId)
                    setTimer(59)
                };

                return (t < 60) ? t - 1 : t;
            });
        }, 1000);
        return () => (clearInterval(intervalId))


    }
    return (
        <div id='navbar'>
            <ul className='navBar'>
                <a href="#hero" title='home'>
                    <li><i className="uil uil-home"></i></li>
                </a>
                <a href="#about" title='about'>
                    <li><i className="uil uil-user"></i></li>
                </a>
                <a href="#projects" title='projects'>
                    <li><i className="uil uil-bag"></i></li>
                </a>
                <a href="#skills" title='skills'>
                    <li><i className="uil uil-sliders-v-alt"></i></li>
                </a>
                <a href="#contact" title='contact'>
                    <li><i className="uil uil-envelope-download"></i></li>
                </a>
                <a className='noneForRes' href="#admin">
                    <a className={timer < 59 && 'none'} onClick={handleCounter} href="#admin" title='admin'>
                        <li><i className="uil uil-dashboard"></i></li>
                    </a>
                </a>
                <a onClick={handleColors} href=" " title='theme'>
                    <li><i className="uil uil-palette"></i></li>
                </a>

            </ul>
        </div>
    );
};

export default Navbar;