import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import Warning from './Warning';

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



  console.log(colors);

  return (
    <div className='App'>
      <div className={colors ? colors : 'blue'}>
        <Navbar theme={theme} setTheme={setTheme} handleColors={handleColors} ></Navbar>
        <Hero colors={colors}></Hero>
        <AboutMe colors={colors}></AboutMe>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
        <Warning></Warning>
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