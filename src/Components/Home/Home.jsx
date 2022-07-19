import Goal from "./Goal/Goal";
import Hero from "./Hero/Hero";
import "./Home.scss";
import HomeAbout from "./HomeAbout/HomeAbout";

function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <Goal />
    </div>
  );
}

export default Home;
