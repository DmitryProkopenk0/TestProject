import { Chart } from 'react-chartjs-2'
import {Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ArcElement} from 'chart.js'
import React, { useState } from 'react'
import '../../styles/TaskItem.scss'
const TaskItem = () => {


    const [peoples, setPeoples] = useState([
        {name: 'Михаил', telephone: '+7 978 000 00 00', email: '', ava: '/imgs/a.svg'},
        {name: 'Илья', telephone: '+7 978 000 00 00', email: 'manager@temp.ru', ava: '/imgs/a.svg'},
        {name: 'Мария', telephone: '+7 978 000 00 00', email: 'pr@temp.ru', ava: '/imgs/ac.svg'},
        {name: 'Снежана', telephone: '+7 978 000 00 00', email: '', ava: '/imgs/ac.svg'},
        {name: 'Виталий', telephone: '+7 978 000 00 00', email: 'director@temp.ru', ava: '/imgs/a.svg'},
        {name: 'Илья', telephone: '+7 978 000 00 00', email: 'manager@temp.ru', ava: '/imgs/a.svg'},
        {name: 'Виталий', telephone: '+7 978 000 00 00', email: 'director@temp.ru', ava: '/imgs/a.svg'},
        {name: 'Мария', telephone: '+7 978 000 00 00', email: 'pr@temp.ru', ava: '/imgs/ac.svg'},
        
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
    <div className='main__container3'>
        <div className='head__content'>

            <div className='tasks__left'>
                <div className='distribution__tasks'>Контакты</div>
                <div className='some__tasks'>
                    <div className='tasks__text'>Контакты / </div>
                    <div className='tasks__text'>Фильтр не выбран </div>
                </div>
            </div>

            <img src="/imgs/black-more.svg" className='black-more' alt="more" />
        </div>


        <div className='user__content'>
            {peoples.map((people) => 
            <div className='user__item'>
                <div className='user__item__left'>
                    <dir className='user__name'>{people.name}</dir>

                    <div className='user__information'>
                        <div className='telephone__inf'>
                            <img src="/imgs/telephone.svg" width={20} height={20} alt="telephone" />
                            <p className='telephone__text'>{people.telephone}</p>
                        </div>
                        <div className='email__inf'>
                            <img src="/imgs/email.svg" alt="email" />
                            <p className='email__text'>{people.email === '' ? 'Не указано' : people.email}</p>
                        </div>
                    </div>

                </div>

                <div className='ava__container'>
                    <img src={people.ava} alt="ava" />
                </div>

            </div>
            )}

        </div>

        <div className='footer__task'>
            <div className='col__contacts'>
                <p className='lead__time' style={{paddingRight: 17}}>Контактов {peoples.length}</p>
                <p className='lead__time'>на 15 фев 11:26</p>
            </div>
            <div className='footer__btns'>
                <img src="/imgs/refresh.svg" className='refresh' alt="refresh" />
                <img src="/imgs/increase.svg" className='increase' alt="increase" />
            </div>
        </div>
    </div>
  )
}

export default TaskItem