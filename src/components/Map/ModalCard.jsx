import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button'
import './modalInfo.scss'

function ModalCard() {

  // const clear = useEffect(() => {
  //   modal()
  // },[modal])

  return (  
    <div className='modal'>
      <div className='modal__title'>Привяжите карту</div>
      <div className='modal__sub'>Перейдите в профиль</div>
      <div className='btn'>
        <Link to='/profile'>Перейти в профиль</Link>
      </div>
    </div>
  );
}

export default ModalCard