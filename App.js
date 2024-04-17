

import React from "react";
import Footer from "./components/Footer/Footer";
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import AboutMe from "./components/AboutMe/AboutMe";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar/> 
      <Profile/>
      <AboutMe/>
     <Skills/>
     <Projects/>
    <Footer/>
    </div>
  );
}

export default App;
