import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import { useState } from 'react';
import Warning from './Warning';
import Admin from './Components/admin/Admin';
import ControlPanel from './Components/admin/ControlPanel';

function App() {

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
    <div className='App'>
      <div className={colors ? colors : 'blue'}>
        <div className={makeInvisible ? 'none' : 'block'}>
          <Navbar timer={timer} setTimer={setTimer} makeInvisible={makeInvisible} setMakeInvisible={setMakeInvisible} theme={theme} setTheme={setTheme} handleColors={handleColors} ></Navbar>
          <div >
            {
              controlPanel && <ControlPanel setControlPanel={setControlPanel} timer={timer} ></ControlPanel>
            }
            <Navbar timer={timer} setTimer={setTimer} makeInvisible={makeInvisible} setMakeInvisible={setMakeInvisible} theme={theme} setTheme={setTheme} handleColors={handleColors} ></Navbar>
          </div>
          <Hero colors={colors}></Hero>
          <AboutMe colors={colors}></AboutMe>
          <Projects></Projects>
          <Skills></Skills>
          <Contact></Contact>
          <Warning></Warning>
        </div>
        <div className={makeInvisible ? 'block' : 'none'}>
          <Admin controlPanel={controlPanel} setControlPanel={setControlPanel} timer={timer} makeInvisible={makeInvisible} setMakeInvisible={setMakeInvisible}></Admin>
        </div>
        {/* <Footer></Footer> */}
      </div>
    </div>
  );
}

export default App;


// ssl ecommerec server side link:
// https://github.com/ProgrammingHero1/ssl-commerz-server-side

// ssl ecommerce client side link:
// https://github.com/ProgrammingHero1/ssl-commerz-client-side