import { useState } from "react";
import Navbar from "../Navbar";
import Hero from "../Hero/Hero";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Warning from "../../Warning";
import Admin from "../admin/Admin";
import ShowBlog from "../showBlog/ShowBlog";

const Home = () => {

    let [theme, setTheme] = useState(1);
    const [colors, setColors] = useState('');
    console.log(theme)
    const blue = 'blue';
    const pumpkin = 'pumpkin';
    const winterGreen = 'winterGreen';
    const gray = 'gray';
    const crimson = 'crimson'

    const handleColors = (e) => {

        e.preventDefault()


        setTheme(++theme)
        console.log(theme)
        if (theme === 5) {
            setTheme(0)
        }

        if (theme === 1) {
            setColors(blue)
        } else if (theme === 2) {
            setColors(pumpkin);
        } else if (theme === 3) {
            setColors(winterGreen)
        } else if (theme === 4) {
            setColors(gray)
        } else if (theme === 5) {
            setColors(crimson)
        }
    }


    const [makeInvisible, setMakeInvisible] = useState(false)
    const [timer, setTimer] = useState(59)
    const [controlPanel, setControlPanel] = useState(false)

    console.log(colors);


    return (
        <div className={colors ? colors : 'blue'}>
            <div className={makeInvisible ? 'none' : 'block'}>
                <Navbar timer={timer} setTimer={setTimer} makeInvisible={makeInvisible} setMakeInvisible={setMakeInvisible} theme={theme} setTheme={setTheme} handleColors={handleColors} ></Navbar>
                <div >

                    <Navbar timer={timer} setTimer={setTimer} makeInvisible={makeInvisible} setMakeInvisible={setMakeInvisible} theme={theme} setTheme={setTheme} handleColors={handleColors} ></Navbar>
                </div>
                <Hero colors={colors}></Hero>
                <AboutMe colors={colors}></AboutMe>
                <Projects></Projects>
                <Skills></Skills>
                <Contact></Contact>
                <ShowBlog />
                <Warning></Warning>
            </div>
            <div className={makeInvisible ? 'block' : 'none'}>
                <Admin controlPanel={controlPanel} setControlPanel={setControlPanel} timer={timer} makeInvisible={makeInvisible} setMakeInvisible={setMakeInvisible}></Admin>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;