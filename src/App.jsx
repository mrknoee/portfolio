import "./styles.css";
import "./effects.css";
import "./mediaqueries.css";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {

  const [navbarEnabled, setNavbarEnabled] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);


  return (
    <>
    <div className="App">
    <div className="stars"></div>
      <Navbar navbarEnabled={navbarEnabled}/>
      <Home setNavbarEnabled={setNavbarEnabled}/>
      <About/>
      <Skills/>
      <Projects/> 
      <Contact/> 
      <Footer/> 

    </div>
 
 
    </>
  )
}

export default App
