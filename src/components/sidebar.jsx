
import React, { useState } from 'react'
import '../styles/side.scss'
import DayItem from './dayItem'
const SideBar = () => {

    const [openContext, setOpenContext] = useState(false)
    const [helpContext, setHelpContext] = useState(false)
    const [myBusiness, setMyBusiness] = useState(false);
    const [dayItems, setDayItems] = useState([
        {top__left__text: 'Назначить встречу', case_fr: 'Создание логотипа', ready__status: true, case__status__text: 'В работе', lead__time: '16.01.22 16:00'},
        {top__left__text: 'Проверить бриф', case_fr: 'Корпоративный Ksoil', ready__status: false, case__status__text: 'Ожидает', lead__time: '16.01.22 16:00'},
    ])

    const [dayItems2, setDayItems2] = useState([
        {top__left__text: 'Создание логотипа', case_fr: 'Корпоративный Ksoil', ready__status: false, case__status__text: 'Ожидает', lead__time: '22.01.22 12:00'},
    ])
  return (
    <>
<div className={helpContext === false ? 'model__help__context__false' : 'model__help__context'} onClick={() => setHelpContext(false)}>

    <div className={helpContext === false ? 'help__context__false' : 'help__context'}>
        <div className='help__top__context'>
            <div className='users__help'>Поддержка пользователя</div>
            <div className='close__container'>
                <img src="/imgs/close.svg" className='close' alt="close" onClick={() => setHelpContext(false)} />
            </div>

        </div>

        <div className='have__answer'>
            <div className='answer__item'>
                <p className='find__answer'>Найдите ответ на свой вопрос</p>
            </div>
            <div className='answer__item'>
                <img src="/imgs/blue-question.svg" width={24} height={24} alt="get answer" />
                <div className='answer__text'>Перейти в Центр Помощи</div>
            </div>
            <div className='answer__item'>
                <img src="/imgs/play-default.svg" width={24} height={24} alt="get answer" />
                <div className='answer__text'>Посмотреть обучающее видео</div>
            </div>
            <div className='answer__item3'>
                <img src="/imgs/compass.svg" width={24} height={24} alt="get answer" />
                <div className='answer__text'>Интерактивное обучение</div>
            </div>
        </div>
        <div className='have__answer'>
            <div className='answer__item'>
                <p className='find__answer'>Задайте нам вопрос</p>
            </div>
            <div className='answer__item'>
                <img src="/imgs/chat.svg" width={24} height={24} alt="get answer" />
                <div className='answer__text'>Написать в чат</div>
            </div>
            <div className='answer__item'>
                <img src="/imgs/send-email.svg" width={24} height={24} alt="get answer" />
                <div className='answer__text'>Написать на электронную почту</div>
            </div>
            <div className='answer__item3'>
                <img src="/imgs/compass.svg" width={24} height={24} alt="get answer" />
                <div className='answer__text'>Оставить запрос в поддержку</div>
            </div>
        </div>
        <div className='social__network__container'>
            <img src="/imgs/vk.svg" className='social__network' alt="ВКонтакте" />
            <img src="/imgs/inst.svg" className='social__network' alt="instagram " />
            <img src="/imgs/teleg.svg" className='social__network' alt="telegram" />
            <img src="/imgs/yout.svg" className='social__network' alt="youtube" />
        </div>
    </div>

</div>



    <div className='side__container'>
        {/* userContext */}
        <div className={openContext === false ? 'context__false' : 'user__context'}>
            <div className='top__context'>

                <div className='left__top__context'>
                    <div className='user__name'>Владимир</div>
                    <div className='job__title'>Дизайнер</div>
                </div>
                
                <div className='user__status'>
                    <img src="/imgs/user-status.svg" alt="user status" />
                </div>
            </div>

            <div className='context__content'>

                    <div className='time'>
                        <div className='time__text'>00:00:00</div>
                        <img src="/imgs/play-btn.svg" className='play-btn' alt="play" />
                    </div>
                    <div className='day__week'>
                        <div className='day__text'>Пт</div>
                        <div className='time__text'>16:50</div>
                    </div>

            </div>

            <div className='my__profile'>
                <div className='profile'>
                    <img src="/imgs/user-profile.svg" alt="profile icon" />
                    <div className='profile__text'>Мой профиль</div>
                </div>
            </div>

            <div className='my__profile'>
                <div className='exit__profile'>
                    <img src="/imgs/exit-profile.svg" alt="exit profile" />
                    <div className='profile__text'>Выйти из системы</div>
                </div>
            </div>

        </div>
        {/* userContext */}
        <div className='side__items'>
            <div className='items'>
                <div className='user__container' onClick={() => setOpenContext(!openContext)}>
                    <img src="/imgs/user-img.svg" className='user-img' alt="user" />
                </div>

                <div className='container container__business'>
                    <img src="/imgs/edit-tasks.svg" alt="edit" onClick={() => setMyBusiness(!myBusiness)}/>

                <div className={myBusiness === false ? 'my__business__false' : 'my__business'}>
                    <div className='top__my__business'>
                        <div className='my__business__top'>
                            <div className='business__text'>Мои дела</div>
                            <img src="/imgs/close.svg" alt="close" onClick={() => setMyBusiness(false)} />
                        </div>
                        <div className='business__tabs'>
                            <div className='business__text'>Все дела</div>
                            <div className='business__text'>События</div>
                            <div className='business__text'>Задачи</div>
                        </div>
                    </div>

                    <div className='search__container'>
                        <div className='search__item'>
                            <img src="/imgs/search.svg" alt="search" />
                            <input type="text" className='search__inp' placeholder='Поиск и фильтр'/>
                        </div>
                    </div>

                    <div className='main__business__content'>
                        <div className='tasks__day'>
                            <div className='day__text'>Сегодня</div>
                            <div className='day__line'></div>
                        </div>

                       {dayItems.map((item) => 
                            <DayItem top__left__text={item.top__left__text} case_fr={item.case_fr} ready__status={item.ready__status} case__status__text={item.case__status__text} lead__time={item.lead__time}/>
                       )}
                        <div className='tasks__day'>
                            <div className='day__text'>Завтра</div>
                            <div className='day__line'></div>
                        </div>

                        {dayItems2.map((item) => 
                            <DayItem top__left__text={item.top__left__text} case_fr={item.case_fr} ready__status={item.ready__status} case__status__text={item.case__status__text} lead__time={item.lead__time}/>
                       )}



                    </div>
                </div>

                </div>

                <div className='container'>
                    <img src="/imgs/messages.svg" alt="messages" />
                </div>

                <div className='container'>
                    <img src="/imgs/notification.svg" alt="notification" />
                </div>

                
                <div className='container'>
                    <img src="/imgs/lead time.svg" alt="lead time" />
                </div>
                
                <div className='container'>
                    <img src="/imgs/documentation.svg" alt="documentation" />
                </div>

                <div className='container'>
                    <img src="/imgs/setings.svg" alt="setings" />
                </div>
            </div>

                <div className='help__user__container'>
                    <img src="/imgs/help-user.svg" onClick={() => setHelpContext(true)} alt="help" />
                </div>
        </div>

    </div>
    </>
  )
}

export default SideBar