import './App.css';
import About from './IntroPage/About';
import Education from './IntroPage/Education';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Skill from './IntroPage/Skill';
import Contact from './IntroPage/Contact';
import Projects from './IntroPage/Projects';
import HireMe from './IntroPage/landing page/HireMe';
function App() {
  return (
    <div className="App">
     {/* <HireMe/> */}
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<HireMe/>} />
     <Route path="/About" element={<About />} />
     <Route path="/Resume" element={<Education />} />
     <Route path="/Skill" element={<Skill />} />
     <Route path="/Projects" element={<Projects />} />
     <Route path="/Contact" element={<Contact />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}
 
export default App;
