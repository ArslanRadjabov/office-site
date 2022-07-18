import React from "react";
import './tools.scss'

function Tools() {
  return (
    <div className='talab'>
       <h1 className='project__title'>Talab va Takliflar</h1>    

       <div className='container'>
       <div className='talab__taklif'>
         <form>
         <textarea placeholder="Shu yerga talab va takliflaringizni qoldiring biz masullarga jonatamiz"  className='text-area' name="talab" id="1" cols="80" rows="10">
          </textarea>
          <div className='talab__btn'>
          <button className='btn-submit-form button-black' type='submit'>Jo'natish</button>
          </div>
         </form>
       </div>
       </div>
    </div>
  );
}

export default Tools;
