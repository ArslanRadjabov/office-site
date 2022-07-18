import React from 'react'
import './project.scss'

function Projects() {
  return (
    <>
    <div className='container'>
            <h1 className='project__title'>Bajarilgan ishlar</h1>    
    
            <ul className='project__list d-flex'>
                <li className='project__item col-xs-12 col-md-6'>
                   <div className='project__img-div'>
                   <img className='project__item-img' src="https://picsum.photos/id/537/400/200" alt="" />
                   </div>
                   <h3 className='project__item-title'>Tozalov ishlari</h3>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id inventore voluptatem et dolores, voluptas at. Repudiandae consequuntur ex facilis doloribus temporibus voluptatum ipsa, cupiditate autem quas vel inventore harum at!</p>
                </li>
                <li className='project__item col-xs-12 col-md-6'>
                   <div className='project__img-div'>
                   <img className='project__item-img' src="https://picsum.photos/id/47/400/200" alt="" />
                   </div>
                   <h3 className='project__item-title'>Tozalov ishlari</h3>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id inventore voluptatem et dolores, voluptas at. Repudiandae consequuntur ex facilis doloribus temporibus voluptatum ipsa, cupiditate autem quas vel inventore harum at!</p>
                </li>
                <li className='project__item col-xs-12 col-md-6'>
                   <div className='project__img-div'>
                   <img className='project__item-img' src="https://picsum.photos/id/537/400/200" alt="" />
                   </div>
                   <h3 className='project__item-title'>Tozalov ishlari</h3>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id inventore voluptatem et dolores, voluptas at. Repudiandae consequuntur ex facilis doloribus temporibus voluptatum ipsa, cupiditate autem quas vel inventore harum at!</p>
                </li>
                <li className='project__item col-xs-12 col-md-6'>
                   <div className='project__img-div'>
                   <img className='project__item-img' src="https://picsum.photos/id/47/400/200" alt="" />
                   </div>
                   <h3 className='project__item-title'>Tozalov ishlari</h3>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id inventore voluptatem et dolores, voluptas at. Repudiandae consequuntur ex facilis doloribus temporibus voluptatum ipsa, cupiditate autem quas vel inventore harum at!</p>
                </li>
            </ul>
    
    </div>
    </>
  )
}

export default Projects
