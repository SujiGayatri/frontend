import { useState } from 'react'
// import './App.css'
import Header from './header';
import Home from './home';
import Certifications from './certifications';
import AboutMe from './AboutMe';
import ContactUs from './Contact';
import ProjectCard from './Projects';
import { BrowserRouter as Router,Routes,Route,Link,NavLink } from "react-router-dom";
// import ContactSample from './pages/email';
function MainPage() {
  const smoothScrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <Router>
      <Header/>
      <nav>
          <ul>
              <Link to="/" onClick={() => smoothScrollToSection('about')}></Link>
              <Link to="/" onClick={() => smoothScrollToSection('projects')}></Link>
              <Link to="/" onClick={() => smoothScrollToSection('certificates')}></Link>
              <Link to="/" onClick={() => smoothScrollToSection('contact')}></Link>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/projects" element={<ProjectCard />}></Route>
          <Route path="/certificates" element={<Certifications />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>

        {/* Sections with IDs */}
        <div id="about">
          <AboutMe />
        </div>
        <div id="projects">
          <ProjectCard />
        </div>
        <div id="certificates">
          <Certifications />
        </div>
        <div id="contact">
          {/* <ContactUs /> */}
        </div>

      </Router>
    </>
  )
}

export default MainPage
