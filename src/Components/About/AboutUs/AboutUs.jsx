import "./AboutUs.scss";
import img from "./team.webp";
function AboutUs() {
return (
<div className="aboutUs flex align-center justify-between">
  <div className="aboutUs_text">
    <p className="dec-haqimizda">
      <h2>Kunlik Xizmatlar markazi</h2>
      HAR XIL TURDAGI KUNLIK ISHLAR:

      - UY, OFIS, ISHLAB CHIQARISH VA BOSHQALARNI TOZALASH ISHLARI;

      - TA'MIRDAN KEYINGI MUSURLARNI, HOVLILARDAGI MUSURLARNI VA BOSHQA YUKLARNI TASHISH, HAMDA YUKLAB BERISH ISHLARI;

      - YUK MASHINALARIGA YUKLARNI ORTISH, TUSHURIB VA TASHISH ISHLARI;

      - KICHIK HAJMLI QURILISH ISHLARIGA USTALAR;

      - HAR XIL KO'RINISHDAGI QAZLASH ISHLARI O'RA, TRANSHEYA, YER TO'LA, HOVUZ VA H.K.;

      - QURILISHDAN KEYINGI ISHLAR (PANJARA, ESHIK-DERAZA, BOSTIRMALAR, ZINALAR VA H.K.).

      AFZALLIKLARIMIZ:

      - TEZ YETIB BORAMIZ (CHUNKI 100 LAB ISHCHILARIMIZ HAMMA JOYDA BOR);

      - ISHNI SIFATLI QILAMIZ (CHUNKI HAR BIR ISHCHINI TEKSHIRIB OLAMIZ);

      - QULAY NARX BELGILAYMIZ (CHUNKI MARDIKOR BOZOR VA BOSHQA BOZORLARNI DOIM TAHLIL QILAMIZ);

      - YO'L PULI BERMAYSIZ (CHUNKI BIZ SIZNING YONINGGIZDAMIZ😊).

    </p>
  </div>
  <div className="AboutUs_img">
    <iframe width="1536" height="722" src="https://www.youtube.com/embed/Qh8DQei_es8"
      title="PERSONAL24 KUNLIK XIZMATLAR MARKAZI |  90 046 00 25" frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen></iframe>
  </div>
</div>
);
}

export default AboutUs;