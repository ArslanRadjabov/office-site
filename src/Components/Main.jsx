import  Home  from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Plans from "./Plans/Plans";
import Projects from "./Projects.js/Projects";
import Services from "./Services/Services";
import Tools from "./Tools/Tools";
import Footer from "./Footer/Footer";

function Main() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/plans" element={<Plans />}></Route>
          <Route path="/tools" element={<Tools />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer/>
      </main>
    </div>
  );
}

export default Main;
