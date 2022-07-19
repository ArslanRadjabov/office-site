import React from 'react'
import './project.scss'
import rasm1 from './images/tozalov.jpg'
import rasm2 from './images/yer.jpg'
import rasm3 from './images/yuklash.jpg'
import rasm4 from './images/posle.jpg'


function Projects() {
  return (
    <>
    <div className='container'>
            <h1 className='project__title'>Bajarilgan ishlar</h1>    
    
            <ul className='project__list d-flex'>
                <li className='project__item col-xs-12 col-md-6'>
                   <div className='project__img-div'>
                   <img className='project__item-img' src={rasm1} alt="" />
                   </div>
                   <h3 className='project__item-title'>Tozalov ishlari</h3>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id inventore voluptatem et dolores, voluptas at. Repudiandae consequuntur ex facilis doloribus temporibus voluptatum ipsa, cupiditate autem quas vel inventore harum at!</p>
                </li>
                <li className='project__item col-xs-12 col-md-6'>
                   <div className='project__img-div'>
                   <img className='project__item-img' src={rasm2} alt="" />
                   </div>
                   <h3 className='project__item-title'>Yer ishlari</h3>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id inventore voluptatem et dolores, voluptas at. Repudiandae consequuntur ex facilis doloribus temporibus voluptatum ipsa, cupiditate autem quas vel inventore harum at!</p>
                </li>
                <li className='project__item col-xs-12 col-md-6'>
                   <div className='project__img-div'>
                   <img className='project__item-img' src={rasm4} alt="" />
                   </div>
                   <h3 className='project__item-title'>Posle remont Uborka</h3>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id inventore voluptatem et dolores, voluptas at. Repudiandae consequuntur ex facilis doloribus temporibus voluptatum ipsa, cupiditate autem quas vel inventore harum at!</p>
                </li>
                <li className='project__item col-xs-12 col-md-6'>
                   <div className='project__img-div'>
                   <img className='project__item-img' src={rasm3} alt="" />
                   </div>
                   <h3 className='project__item-title'>Yuk tashish ishlari</h3>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id inventore voluptatem et dolores, voluptas at. Repudiandae consequuntur ex facilis doloribus temporibus voluptatum ipsa, cupiditate autem quas vel inventore harum at!</p>
                </li>
            </ul>
    
    </div>
    </>
  )
}

export default Projects
