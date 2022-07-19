// import scrollreveal from "scrollreveal";
import "./HomeAbout.scss";

function HomeAbout() {
  // scrollreveal().reveal(".home_cards-li1", {
  //   delay: 1000,
  //   distance: "150%",
  //   origin: "left",
  // });
  // scrollreveal().reveal(".home_cards-li2", {
  //   delay: 1000,
  //   distance: "150%",
  //   origin: "bottom",
  // });
  // scrollreveal().reveal(".home_cards-li3", {
  //   delay: 1000,
  //   distance: "150%",
  //   origin: "right",
  // });
  return (
    <div className="home_cards flex align-center justify-center">
      <ul className="home_cards-ul flex align-center">
        <li className="home_cards-li flex align-center justify-center flex-column">
          <h3>Xizmatlar va Ko'nikmalar</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <button className="button-black">More info</button>
        </li>
        <li className="home_cards-li flex align-center justify-center flex-column">
          <h3>Avfzalliklarimiz va foydaliligimiz</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <button className="button-black">More info</button>
        </li>
        <li className="home_cards-li home_cards-li3 flex align-center justify-center flex-column">
          <h3>Sertifikatlangan ishchilar</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <button className="button-black">More info</button>
        </li>
      </ul>
    </div>
  );
}

export default HomeAbout;
