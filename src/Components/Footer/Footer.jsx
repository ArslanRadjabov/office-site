import "./footer.scss";
import { BsInstagram } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';


function Footer() {
  return (
    // Footer section
    <footer id="footer">
      <div className="footer d-flex">
        <div>
        <p>Developed with love by Parallax © 2022</p>
        <p>Terms & ConditionPrivacy Policy</p>

        <div className="d-flex socials gap-3">
            <a className="socials-icon" href="#"><BsInstagram/></a>
            <a className="socials-icon" href="https://t.me/Personal24_uz"><FaTelegramPlane/></a>
            <a className="socials-icon" href="tel:+998900460025"><BsFillTelephoneFill/></a>
        </div>

        </div>
        <div className="footer-developer">
          <h5>Developers</h5>
          <a className="https://t.me/arslonradjabov" href="">Arslonbek Radjabov</a>
          <a className="https://t.me/ibyvtnq" href="">Abdunozir Abduvaliyev</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
