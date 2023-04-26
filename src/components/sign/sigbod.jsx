import React from 'react';
import  { useState } from 'react'
import { Link } from 'react-router-dom'
import eye from '../../assets/eye.svg';
import flowerlady from '../../assets/flowerlady.svg';





const Sigbod =()=> {
  
  
  return (
    <div className='flex justify-center '>
       <div>
       
          <h3 className='text-[36px] font-semibold '>Welcome to SendEasy</h3>
          <p className='text-base font-normal mb-[41px;]'>Create an account or <Link to="/Login"><span className='text-[#138ecb]'>log in</span></Link></p>
          <form>
          <div className=''>
              <label htmlFor="signup-email" className="text-base font-bold text-left">
              Email
              </label>
              <br />
              <input
                type="text"
                id="signup-email"
                name="username"
                className="border-2 p-2 w-[400px]"
                // value={formValues.username}
                // onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="signup-username" className="text-base font-bold ">
                Username
              </label>
              <br />
              <input
                type="text"
                id="signup-username"
                name="username"
                className="border-2 p-2 w-[400px]"
                // value={formValues.username}
                // onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="signup-password" className="text-base font-bold pt-20">
                <div className='flex gap-64'>
                  <span>Password</span>
                  <span className="text-[#138ECB] flex">
                  <img src={eye} alt=""  />
                    Show
                  </span>
                </div>
                
              </label>
              <br />
              <input
                type="password"
                id="signup-password"
                name="password"
                className="border-2 p-2 w-[400px]"
                // value={formValues.password}
                // onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="checkbox"
                name="checkbox"
                id="promotions"
                className="mr-[12px]"
                // value={formValues.checkbox}
                // onChange={handleCheck}
              />
              <label htmlFor="promotions" className="text-[14px] font-normal mt-32">
                I don’t want to receive <span className='text-[#138ECB]'>promotional emails</span> from
                SendEasy.
              </label>
            </div>
            <p className="text-14px font-normal w-[500px] mt-4">
              By creating an account, you agree to our <span className='text-[#138ECB]'>Terms</span> and have read and
              acknowledge the <span className='text-[#138ECB] '>Global Privacy Statement.</span>
            </p>
            <button className='bg-[#1E2772] text-[#fff] py-3 rounded-md w-1/2 md:w-1/4 mt-4'>Sign Up</button>
            
          </form>
       </div>
       <div className='bg-[#fb8500] w-[50%] relative'>
          <img src={flowerlady} alt="" />
       </div>
      
    </div>
  )
}

export default Sigbod