import "./Hero.scss";

import { Link } from "react-router-dom";
function Hero() {
  return (
    <section>
      <div className="hero_img">
        <div className="hero_title-card">
          <h5>O'zbekistonda yagona sertifikatlangan ishchilar</h5>
          <h2>PERSONAL24</h2>
          <button className="btn-consult button-white"><Link className="link--konsultatsiya" to={"/about"}>Bepul konsultatsiya</Link></button>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;
