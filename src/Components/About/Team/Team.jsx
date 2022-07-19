import "./Team.scss";
import member1 from "./member.webp";

import abdurahmon from './abdurahmon.jpg'
import kamoldin from './rasm2.jpg'
import abror from './ABROR.jpg'
import jahon from './jahon.jpg'

function Team() {
  return (
    <div className="about_team-container flex align-center justify-center flex-column">
      <div className="about_team-title flex align-center justify-center flex-column">
        <h2>BIZNING JAMOA</h2>
        <p>Jamoa tanlash va kasbga bo'lgan malakani oshirib borish bizning maqsadimiz </p>
      </div>
      <div className="container">
        <div className="about_team-about flex align-center justify-center">
        <ul className="flex align-center justify-center team-members">
          <li>
            <div className="about_team-img">
              <img src={abdurahmon} alt="" />
            </div>
            <div className="abaut_team-text">
              <h3>Abdurahmon</h3>
              <h4>Personal24 asoschisi va <br /> bosh direktori</h4>
              
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
              </p>
            </div>
          </li>
          <li>
            <div className="about_team-img">
              <img src={kamoldin} alt="" />
            </div>
            <div className="abaut_team-text">
              <h3>Kamoldin</h3>
              <h4>Operator | Menedjer</h4>
              
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click 
              </p>
            </div>
          </li>
          <li>
            <div className="about_team-img">
              <img src={abror} alt="" />
            </div>
            <div className="abaut_team-text">
              <h3>Abror</h3>
              <h4>Ijtimoiy tarmoqlar menedjeri</h4>
              
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me
              </p>
            </div>
          </li>
          <li>
            <div className="about_team-img">
              <img src={jahon} alt="" />
            </div>
            <div className="abaut_team-text">
              <h3>Jahon</h3>
              <h4>Yordamchi Operator</h4>
              
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy.
              </p>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Team;
