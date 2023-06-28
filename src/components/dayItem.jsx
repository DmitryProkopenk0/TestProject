import React from 'react'
import '../styles/side.scss'
const DayItem = ({case__status__text, lead__time, ready__status, top__left__text, case_fr}) => {
  return (
<div className={case__status__text === 'В работе' ? 'day__item day__item__true' : 'day__item day__item__false'}>
    <div className='left__day__item'>
        <div className='top__left'>
            <img src={case__status__text === 'В работе' ? '/imgs/alarm.svg' :"/imgs/ready.svg"} alt="ready" />
            <div className='top__left__text'>{top__left__text}</div>
        </div>
        <div className={case__status__text === 'В работе' ? 'case' : 'case__false'}>{case_fr}</div>
    </div>

    <div className='right__day__item'>
        <div className='top__right'>
            <img src={ready__status === true ? '/imgs/case-status.svg' : '/imgs/ready-status.svg'} alt="status" />
            <div className={case__status__text === 'В работе' ? 'case__status__text case__status__text__true' : 'case__status__text case__status__text__false'}>{case__status__text}</div>
        </div>
        <div className='lead__time'>{lead__time}</div>
    </div>
</div>
  )
}

export default DayItem