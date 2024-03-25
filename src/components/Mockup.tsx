import React from 'react';
import MockupImg from '../../public/mockuper.png';


const Mockup = () => {
  return (
    <img src={MockupImg.src} alt="" style={{ width: '100%', height: 'auto' }} className='gi' />
  );
};

export default Mockup;