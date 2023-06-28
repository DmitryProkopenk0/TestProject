    import { Chart } from 'react-chartjs-2'
    import {Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ArcElement} from 'chart.js'
    import React, { useState } from 'react'
    import '../../styles/TaskItem.scss'
import MoreContext from '../moreContext'
    const TaskItem = () => {
    
        const [openContext, setOpenContext] = useState(false)

        const OpenContextProfile = () => {
            setOpenContext(!openContext)
        }


        const [refresh, setRefresh] = useState(false);
        const [increase, setIncrease] = useState(false);

        
        const [moreContext, setMoreContext] = useState(false)

        const OpenMoreContext = () => {
            setMoreContext(!moreContext)
        }
        
        const [peoples, setPeoples] = useState([
            {name: 'Новый лид', value: '1', color: '#00BCD4'},
            {name: 'Взяли на работу', value: '2', color: '#3A9EFF'},
            {name: 'Квалифицирован ', value: '1', color: '#673AB7'},
            {name: 'Бриф отправлен', value: '3', color: '#FFB300'},
            {name: 'Бриф согласован', value: '1', color: '#00BCD4'},
            {name: 'Договор/счет выставлен', value: '1', color: '#FFB300'},
            {name: 'Предоплата получена', value: '1', color: '#FF3031'},
        ])
    
        const [helpContext, setHelpContext] = useState(false)
        const [helpContext2, setHelpContext2] = useState(false)


        const [calendar_left2, setCalendarLeft] = useState([
            {day_week: 'Пн', numbers: [
                {number: 27, color: 'CFD8DC', background: 'white'}, 
                {number: 3,  color: '516173', background: 'white'}, 
                {number: 10, color: '516173', background: 'ECF6FF'}, 
                {number: 17, color: '516173', background: 'white'}, 
                {number: 24, color: '516173', background: 'white'}, 
            ]},
            {day_week: 'Вт', numbers: [
                {number: 28, color: 'CFD8DC', background: 'white'}, 
                {number: 4,  color: '516173', background: 'white'}, 
                {number: 11, color: '516173', background: 'ECF6FF'}, 
                {number: 18, color: '516173', background: 'white'}, 
                {number: 25, color: '516173', background: 'white'}, 
            ]},
            {day_week: 'Ср', numbers: [
                {number: 29, color: 'CFD8DC', background: 'white'}, 
                {number: 5,  color: '516173', background: 'white'}, 
                {number: 12, color: '516173', background: 'ECF6FF'}, 
                {number: 19, color: '516173', background: 'white'}, 
                {number: 26, color: '516173', background: 'white'}, 
            ]},
            {day_week: 'Чт', numbers: [
                {number: 30, color: 'CFD8DC', background: 'white'}, 
                {number: 6,  color: '516173', background: 'white'}, 
                {number: 13, color: '516173', background: 'ECF6FF'}, 
                {number: 20, color: '516173', background: 'white'}, 
                {number: 27, color: '516173', background: 'white'}, 
            ]},
            {day_week: 'Пт', numbers: [
                {number: 31, color: 'CFD8DC', background: 'white'}, 
                {number: 7,  color: '516173', background: 'white'}, 
                {number: 14, color: '516173', background: 'ECF6FF'}, 
                {number: 21, color: '516173', background: 'white'}, 
                {number: 28, color: '516173', background: 'white'}, 
            ]},
            {day_week: 'Сб', numbers: [
                {number: 1,  color: '516173', background: 'white'}, 
                {number: 8,  color: 'white',  background: '0085F0'}, 
                {number: 15, color: 'white',  background: '0085F0'}, 
                {number: 22, color: '516173', background: 'white'}, 
                {number: 29, color: '516173', background: 'white'}, 
            ]},
            {day_week: 'Вс', numbers: [
                {number: 2,  color: '516173', background: 'white'}, 
                {number: 9,  color: '516173',  background: 'ECF6FF'}, 
                {number: 16, color: '516173',  background: 'white'}, 
                {number: 23, color: '516173', background: 'white'}, 
                {number: 30, color: '516173', background: 'white'}, 
            ]},
        ]) 
        
        
        const [calendar_right2, setCalendarRight] = useState([
            {day_week: 'Пн', numbers: [
                {number: 31, color: 'CFD8DC', background: 'white'}, 
                {number: 7,  color: '516173', background: 'white'}, 
                {number: 14, color: '516173', background: 'white'}, 
                {number: 21, color: '516173', background: 'white'}, 
                {number: 28, color: '516173', background: 'white'}, 
            ]},
            {day_week: 'Вт', numbers: [
                {number: 1, color: '516173', background: 'white'}, 
                {number: 8,  color: '516173', background: 'white'}, 
                {number: 15, color: '516173', background: 'white'}, 
                {number: 22, color: '516173', background: 'white'}, 
                {number: 29, color: '516173', background: 'white'}, 
            ]},
            {day_week: 'Ср', numbers: [
                {number: 2, color: '516173', background: 'white'}, 
                {number: 9,  color: '516173', background: 'white'}, 
                {number: 16, color: '516173', background: 'white'}, 
                {number: 23, color: '516173', background: 'white'}, 
                {number: 30, color: '516173', background: 'white'}, 
            ]},
            {day_week: 'Чт', numbers: [
                {number: 3, color: '516173', background: 'white'}, 
                {number: 10, color: '516173', background: 'white'}, 
                {number: 17, color: '516173', background: 'white'}, 
                {number: 24, color: '516173', background: 'white'}, 
                {number: 31, color: '516173', background: 'white'}, 
            ]},
            {day_week: 'Пт', numbers: [
                {number: 4, color: '516173', background: 'white'}, 
                {number: 11,  color: '516173', background: 'white'}, 
                {number: 18, color: '516173', background: 'white'}, 
                {number: 25, color: '516173', background: 'white'}, 
                {number: 1, color: 'CFD8DC', background: 'white'}, 
            ]},
            {day_week: 'Сб', numbers: [
                {number: 5,  color: '516173', background: 'white'}, 
                {number: 12,  color: '516173',  background: 'white'}, 
                {number: 19, color: '516173',  background: 'white'}, 
                {number: 26, color: '516173', background: 'white'}, 
                {number: 2, color: 'CFD8DC', background: 'white'}, 
            ]},
            {day_week: 'Вс', numbers: [
                {number: 6,  color: '516173', background: 'white'}, 
                {number: 13,  color: '516173', background: 'white'}, 
                {number: 20, color: '516173', background: 'white'}, 
                {number: 27, color: '516173', background: 'white'}, 
                {number: 3, color: 'CFD8DC', background: 'white'}, 
            ]},
        ]) 
    ChartJs.register(
        CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ArcElement
    )
        const charData = {
    
            labels: peoples.map((people) => people.name),
            datasets: [{
                label: 'Sales',
                backgroundColor: peoples.map((peoples) => peoples.color),
                borderColor: 'white',
                
                data : peoples.map((people) => people.value)
            },
    
        ]
        }
    
      return (

        <>

<div className={helpContext === false ? 'model__help__context__false' : 'model__help__context'} onClick={() => setHelpContext(false)}>

<div className={helpContext === false ? 'calendar__container__false' : 'calendar__container'}>
    <div className='top__calendar'>
        <div className='left__top__calendar'>

            <div className='term' onClick={() => setHelpContext(false) + setHelpContext2(true)}>
                <img src="/imgs/term.svg" alt="term" />
                <div className={helpContext2 === false ? 'term__text__false' : 'term__text'}>Срок</div>
            </div>

            <div className='start__finish' onClick={() => setHelpContext2(false) + setHelpContext(true)}>
                <img src="/imgs/start-finish.svg" alt="start-finish" />
                <div className={helpContext2 === false ? 'start__finish__text' : 'start__finish__text__false'}>Старт-Финиш</div>
            </div>
        </div>
        <img src="/imgs/close-calendar.svg" alt="close-calendar" className='close__calendar' />
    </div>

    <div className='panel__months'>
        <div className='first__panel'>
            <img src="/imgs/left.svg" alt="left" className='left__calendar'/>
            <div className='month__text'>Январь 2022</div>
        </div>
        <div className='first__panel'>
            <div className='month__text'>Февраль 2022</div>
            <img src="/imgs/right.svg" alt="right" className='left__calendar' />
        </div>
    </div>
    



<div className='main__calendar__content'>
    <div className='main__calendar__content__left'>
            {calendar_left2.map((el) => 
            <div className='first__string'>
                <div className='grid__calendar__item'>{el.day_week}</div>
                {el.numbers.map((item) => 
                    <div className='grid__calendar__item' style={item.color === 'white' ? {color: `${item.color}`, backgroundColor: `#${item.background}`} : {color: `#${item.color}`, backgroundColor: `#${item.background}`}}>{item.number}</div>
                )}
            </div>
            )}
    </div>

    <div className='main__calendar__content__left'>
            {calendar_right2.map((el) => 
            <div className='first__string'>
                <div className='grid__calendar__item'>{el.day_week}</div>
                {el.numbers.map((item) => 
                    <div className='grid__calendar__item' style={item.color === 'white' ? {color: `${item.color}`, backgroundColor: `#${item.background}`} : {color: `#${item.color}`, backgroundColor: `#${item.background}`}}>{item.number}</div>
                )}
            </div>
            )}
    </div>
</div>


<div className='start__finish__time'>
    <img src="/imgs/full-close.svg" alt="close" />
    <p className='start__text'>Сб</p>
    <div className='start__time'>8 Янв</div>
    <img src="/imgs/long-right.svg" alt="to" />
    <div className='start__time'>15 Янв</div>
    <div className='full__time'>5 дней</div>
</div>


<div className='done__clear'>
    <button className='btn done__btn'>Применить</button>
    <button className='btn clear__btn'>Сбросить</button>
</div>

</div>
</div>



<div className={helpContext2 === false ? 'model__help__context__false' : 'model__help__context'} onClick={() => setHelpContext2(false)}>

<div className={helpContext2 === false ? 'calendar__container__false' : 'calendar__container'}>
    <div className='top__calendar'>
        <div className='left__top__calendar'>

            <div className='term' onClick={() => setHelpContext(false) + setHelpContext2(true)}>
                <img src="/imgs/term.svg" alt="term" />
                <div className='term__text'>Срок</div>
            </div>

            <div className='start__finish' onClick={() => setHelpContext2(false) + setHelpContext(true)}>
                <img src="/imgs/start-finish.svg" alt="start-finish" />
                <div className={helpContext2 === true ? 'start__finish__text__false' : 'start__finish__text'}>Старт-Финиш</div>
            </div>
        </div>
        <img src="/imgs/close-calendar.svg" alt="close-calendar" className='close__calendar' />
    </div>

    <div className='panel__months'>
        <div className='first__panel'>
            <img src="/imgs/left.svg" alt="left" className='left__calendar'/>
            <div className='month__text'>Январь 2022</div>
        </div>
        <div className='first__panel'>
            <div className='month__text'>Февраль 2022</div>
            <img src="/imgs/right.svg" alt="right" className='left__calendar' />
        </div>
    </div>
    



<div className='main__calendar__content'>
    <div className='main__calendar__content__left'>
            {calendar_left2.map((el) => 
            <div className='first__string'>
                <div className='grid__calendar__item'>{el.day_week}</div>
                {el.numbers.map((item) => 
                    <div className='grid__calendar__item' style={item.color === 'white' ? {color: `${item.color}`, backgroundColor: `#${item.background}`} : {color: `#${item.color}`, backgroundColor: `#${item.background}`}}>{item.number}</div>
                )}
            </div>
            )}
    </div>

    <div className='main__calendar__content__left'>
            {calendar_right2.map((el) => 
            <div className='first__string'>
                <div className='grid__calendar__item'>{el.day_week}</div>
                {el.numbers.map((item) => 
                    <div className='grid__calendar__item' style={item.color === 'white' ? {color: `${item.color}`, backgroundColor: `#${item.background}`, borderRadius: 50} : {color: `#${item.color}`, backgroundColor: `#${item.background}`, borderRadius: 50}}>{item.number}</div>
                )}
            </div>
            )}
    </div>
</div>




<div className='done__clear'>
    <button className='btn done__btn'>Применить</button>
    <button className='btn clear__btn'>Сбросить</button>
</div>

</div>
</div>
        <div className='main__container2'>
            <div className='head__content'>
    
                <div className='tasks__left'>
                    <div className='distribution__tasks'>Воронка сделок</div>
                    <div className='some__tasks'>
                        <div className='tasks__text'>Сделки / </div>
                        <div className='time__context'>

                        <div className={openContext === true ? 'time__selection__context' : 'false__time__selection__context'}>
                            <div className='item__selection'>Неделя</div>
                            <div className='item__selection'>Месяц</div>
                            <div className='item__selection'>Квартал</div>
                        </div>

                        <div className='times__container'>
                            <div className='tasks__time' onClick={OpenContextProfile}>Неделя 08.01.22</div>
                            <div className='tasks__time2'>15.01.22</div>
                        </div>
                        </div>
                    </div>
                </div>


                <MoreContext moreContext={moreContext}/>

                <img src="/imgs/black-more.svg" className='black-more' onClick={OpenMoreContext} alt="more"/>

    
            </div>
    
    
            <div className='task__content'>
                <Chart className='diagram' type='doughnut' data={charData}/>
            </div>
    
            <div className='footer__task'>
                <p className='lead__time'>на 15 фев 11:26</p>
                <div className='footer__btns'>
                <div className={refresh === false ? 'refresh__modal__false' : 'refresh__modal'}>Обновить данные</div>
                <div className={increase === false ? 'increase__modal__false' : 'increase__modal'}>Растянуть данные</div>
                <img src="/imgs/refresh.svg" className='refresh' alt="refresh" onClick={() => setRefresh(!refresh)}/>
                <img src="/imgs/increase.svg" className='increase' alt="increase" onClick={() => setIncrease(!increase)}/>
            </div>
            </div>
        </div>
        </>
      )
    }
    
    export default TaskItem