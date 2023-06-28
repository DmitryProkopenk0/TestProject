import React, { useState } from 'react'
import '../styles/moreContext.scss'
const MoreContext = ({moreContext}) => {
    

  return (
<div className='more__context'>


    <div className={moreContext === false ? 'more__false' : 'more__board'}>
        <div className='items__board'>
            <div className='item__board'>
                <img src="/imgs/edit-pen.svg" alt="create" />
                <div className='create__text'>Редактировать</div>
            </div>
            <div className='item__board'>
                <img src="/imgs/blue-refresh.svg" alt="edit" />
                <div className='create__text'>Пересчитать</div>
            </div>
            <div className='item__board'>
                <img src="/imgs/remove-trash.svg" alt="remove" />
                <div className='create__text'>Удалить</div>
            </div>
        </div>
        
        <div className='tune__container'>
            <img src="/imgs/tune.svg" alt="tune" />
            <div className='tune__text'>Настроить доски</div>
        </div>


    </div>

</div>
  )
}

export default MoreContext