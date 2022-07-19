import "./About.scss";
import AboutUs from "./AboutUs/AboutUs";
import Team from "./Team/Team";

function About() {
  return (
    <section id="about">
      <div className="about_title ">
       <h1 className='project__title'>BIZ HAQIMIZDA QISQACHA</h1> 
      </div>
      <AboutUs />
      <Team />
    </section>
  );
}

export default About;
