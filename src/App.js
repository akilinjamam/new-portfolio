import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;


// ssl ecommerec server side link:
// https://github.com/ProgrammingHero1/ssl-commerz-server-side

// ssl ecommerce client side link:
// https://github.com/ProgrammingHero1/ssl-commerz-client-side