import React from 'react'
import  '../styles/UI-components/btns/btn_add.scss'
const BtnAdd = ({value}) => {
  return (
    <button className='btn_add'>
      {value}
    </button>
  )
}

export default BtnAdd