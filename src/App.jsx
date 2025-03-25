import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import Services from "./Components/Services/Service";
import Projects from "./Components/Projects/Projects";
import Follow from "./Components/Follow/Follow";
import Contact from "./Components/Contact/Contact";


const App =()=>{
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Follow/>
      <Contact/>
    </div>
  )

}
export default App