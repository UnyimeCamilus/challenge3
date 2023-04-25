import React from 'react'
import eye from '../../assets/eye.svg';
import flowerlady from '../../assets/flowerlady.svg';

function Login() {
  return (
    <div className='flex justify-center'> 
    <div>

        <h3>Login</h3>
        <p>Need a SendNow account? Create an account</p>
        <form action="">
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

        </form>
    </div>
        <div className='bg-[#fb8500] w-[45%] relative'>
          <img src={flowerlady} alt="" />
       </div>
    </div>
  )
}

export default Login