import React from 'react'
import Logo from '../assets/aloha.png';
const Footer = () => {
  return (
    <div className='bg-primaryGreen p-4'>
         <div>
        <img src={Logo} alt="" style={{ width: '50px', height: '25px', cursor: 'pointer' }} />
        </div>
    </div>
  )
}
export default Footer