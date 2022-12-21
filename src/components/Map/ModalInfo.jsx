// import React, { useEffect } from 'react';
import Button from '../../ui/Button'
import './modalInfo.scss'

function ModalInfo({modal}) {

  // const clear = useEffect(() => {
  //   modal()
  // },[modal])

  return (  
    <div className='modal'>
      <div className='modal__title'>Заказ размещен</div>
      <div className='modal__sub'>Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</div>
      <div className='btn'>
        <Button onClick={() => modal()}>Отменить заказ</Button>
      </div>
    </div>
  );
}

export default ModalInfo