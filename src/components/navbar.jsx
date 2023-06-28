import React, { useState } from 'react'
import '../styles/Header.scss'
import BtnPlus from '../UI/btn_plus'
const Navbar = () => {

  const [moreContext, setMoreContext] = useState(false)

  const OpenMoreContext = () => {
      setMoreContext(!moreContext)
  }


  return (
    <header className='container-fluid'>
        <div className='container__log'>
            <img src="/imgs/log-img.svg" alt="log-img" />
            <div className='log__text'>TProjects</div>
        </div>
        <BtnPlus/>
        <div>
            <ul className='nav__links'>
                <li className='nav__link'>Рабочий стол</li>
                <li className='nav__link'>Сделки</li>
                <li className='nav__link'>Задачи</li>
                <li className='nav__link'>Проекты</li>
                <li className='nav__link'>Контакты</li>
                <li className='nav__link'>Компании</li>
            </ul>
        </div>

        
        <div className='more__context'>


        <div className={moreContext === false ? 'more__false' : 'more__board'}>
            <div className='items__board'>
                <div className='item__board'>
                    <div className='create__text'>Календарь</div>
                </div>
                <div className='item__board'>
                    <div className='create__text'>Услуги</div>
                </div>
                <div className='item__board'>
                    <div className='create__text'>Финансы</div>
                </div>
                <div className='item__board'>
                    <div className='create__text'>Документы</div>
                </div>
                <div className='item__board'>
                    <div className='create__text'>Сотрудники</div>
                </div>
                <div className='item__board'>
                    <div className='create__text'>Медиафайлы</div>
                </div>
            </div>
            
            <div className='tune__container'>
                <img src="/imgs/tune.svg" alt="tune" />
                <div className='tune__text'>Настроить меню</div>
            </div>


        </div>

        <img src="/imgs/more.svg" className='more-btn' onClick={OpenMoreContext} alt="more" />
        </div>

    </header>
  )
}

export default Navbar