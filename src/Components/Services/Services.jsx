import React,{useState} from 'react'
import BasicModal from './modal'
import object from './object'
import './service.scss'
function Services() {


return (<>
  <div className='service'>

    <h1 className='project__title'>Xizmatlar</h1>

    <div className='container'>
      <ul className='service__list'>
        {object.map((item)=>{
        return (
        <li key={item.id} className='service-list__item d-flex'>
          <div className='service__img'>
            <img className='service-img-item' src={item.job_img} alt="rasm" />
          </div>
          <div className='service__box-desc'>
            <h3 className='service__title'>{item.title__job}</h3>
            <h4 className='service__soat'>{item.soat} soat</h4>
            <h4 className='service__narxi'>{item.tolov} so'm</h4>
            <BasicModal itemhug={item}/>
          </div>
        </li>
        )
        })}
      </ul>

    


     </div>
  </div>
</>
)
}

export default Services