import React from "react";
import StickyHeadTable from "./PriceTable";

import './plans.scss'

function Plans() {
    return ( 
    <div className='Plans'>
        <h1 className='project__title'>Narxlash</h1>    
       <div className="plans__desc_box">
       <h4>Quyida siz uchun bozor narxlarini tahlil qilishdan kelib chiqib belgilangan narxlar</h4>
        <p className="plans__desc">Bizdagi barcha xizmatlar o'z ko'lamiga qarab belgilanadi va siz aziz mijoz uchun operatorlarimiz tomonidan hisoblab beriladi.</p>
        <h5>E'tiborli bo'ling buyerda faqat 1 soatlik ishlar ko'rsatilgan <br /> ko'proq soatlik ishlar bu narx bilan belgilanmaydi (arzonroq va qulaylashtirib beriladi)</h5>
       </div>
       <div className="container">
       <StickyHeadTable/>
       </div>
    </div> 
    );
}

export default Plans;