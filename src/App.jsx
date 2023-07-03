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
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <>
    <div className="App">
    <div className="stars"></div>
      <Navbar/>
      <Home/>
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
