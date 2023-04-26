import React from 'react'
import forward from '../../assets/forward.svg';

function Select() {
  return (
    <div className='pl-16 pr-16'>
      <h3 className='text-[#023047] font-bold text-lg'>Account Set Up</h3>
      <div className='flex gap-4 font-normal text-[#D0BAB8] text-base'>
        <div className='flex gap-2 font-bold text-[#023047] '>
            <p>Plan</p>
            <img src={forward} alt="" />
        </div>
        <div className='flex gap-2 '>
            <p>Profile</p>
            <img src={forward} alt="" />
        </div>
        <div className='flex gap-2 '>
            <p>Address</p>
            <img src={forward} alt="" />
        </div>
       <div className='flex gap-2'>
          <p>Contacts</p>
          <img src={forward} alt="" />
       </div>
       <div className='flex gap-2'>
          <p>Customize</p>
          <img src={forward} alt="" />
       </div>
      </div>
      <hr />
    </div>
  )
}

export default Select