import React, { useState } from 'react'
import '../styles/UnderNav.scss'
import '../styles/TaskItem.scss'
import MoreContext from './moreContext'
const UnderNav = () => {

    const [openContext, setOpenContext] = useState(false)
    const [moreContext, setMoreContext] = useState(false)
    const OpenContextProfile = () => {
        setOpenContext(!openContext)
    }

  return (
    <div className='container-fluid underNav'>


        <div className='additional__information'>

            {/* 1 */}
            <div className='additional__descr'>РАБОТА С ЗАДАЧАМИ</div>

            {/* 2 */}
            <div className='date__time'>
                <div className='date'>Пт</div>
                <div className='time'>16:50</div>
            </div>
            {/* 3 */}
            <div className='weather'>
                <img src="/imgs/weather.svg" alt="weather" />
                <div className='weather-text'>-8°</div>
            </div>
        </div>

    <div className='add__task__panel'>

            <MoreContext moreContext={moreContext}/>

            <img src="/imgs/black-more.svg" className='black-more' alt="more" onClick={() => setMoreContext(!moreContext)}/>

            <img src="/imgs/faq.svg" className='question' alt="?" />

            <div className='btn__container'>
                <button className='btn_add' onClick={OpenContextProfile}>ДОБАВИТЬ</button>
                <div className={openContext === false ? 'board__false' : 'add__board'}>
                    <div className='item__board'>Доска</div>
                    <div className='item__board'>Отчёт</div>
                    <div className='item__board'>Разделы</div>
                    <div className='item__board'>Задачи</div>
                    <div className='item__board'>Карта</div>
                    <div className='item__board'>История</div>
                    <div className='item__board'>Сценарии</div>
                </div>
            </div>

    </div>

    </div>
  )
}

export default UnderNav