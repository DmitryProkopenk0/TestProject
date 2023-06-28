import React from 'react'
import BtnAdd from '../UI/btn_add'
import '../styles/subnav.scss'
const SubNav = () => {
  return (
    <div className='subnav'>
        <button className='btn job__tasks'>РАБОТА С ЗАДАЧАМИ</button>
        <button className='btn bills__payments'>СЧЕТА И ПЛАТЕЖИ</button>
        <button className='btn bills__payments'>РАБОТА С ЗАДАЧАМИ</button>
    </div>
  )
}

export default SubNav