import React from 'react'
import circle from '../../assets/circle.svg';

function Card() {
  return (
    <div className='flex justify-center gap-12 mt-16'>
        <div className='border border-gray-300 w-[246px] px-4 py-8'>
            <div className='flex gap-20'>
                <h3 className='font-bold text-[24px]'>Premium</h3>
                <img src={circle} alt="" />
            </div>
            <p className='text-[#6C7B83] w-[230px] text-sm'>
                Advanced features for pros who need more customization.
            </p>
            <p className='text-[#6C7B83] text-sm font-normal text-center pt-20'>You’ll pay</p>
            <h4 className='text-[64px] text-center'><span className='relative top-[-24px] text-[24px] text-[#000000]'>$</span>299</h4>
            <p className='text-[#6C7B83] text-[14px] text-center p-4'>a month</p>
            <p className='text-[#6C7B83] text-[14px] text-center'>with 10,000 contacts</p>
        </div>
        <div className='border border-gray-300 w-[246px] px-4 py-8'>
            <div className='flex gap-20'>
                <h3 className='font-bold text-[24px]'>Standard</h3>
                <img src={circle} alt="" />
            </div>
            <p className='text-[#6C7B83] w-[234px] text-sm'>
            Better insights for growing business that want more customers..
            </p>
            <p className='text-[#6C7B83] text-sm font-normal text-center pt-20'>You’ll pay</p>
            <h4 className='text-[64px] text-center'><span className='relative top-[-24px] text-[24px] text-[#000000]'>$</span>17</h4>
            <p className='text-[#6C7B83] text-[14px] text-center p-4'>a month</p>
            <p className='text-[#6C7B83] text-[14px] text-center'>with 500 contatcs</p>
        </div>
        <div className='border border-gray-300 w-[246px] px-4 py-8'>
            <div className='flex gap-16'>
                <h3 className='font-bold text-[24px]'>Essentials</h3>
                <img src={circle} alt="" />
            </div>
            <p className='text-[#6C7B83] w-[200px] text-sm'>
            Must-have features for email senders who want added support.
            </p> 
            <p className='text-[#6C7B83] text-sm font-normal text-center pt-20'>You’ll pay</p>
            <h4 className='text-[64px] text-center'><span className='relative top-[-24px] text-[24px] text-[#000000]'>$</span>11</h4>
            <p className='text-[#6C7B83] text-[14px] text-center p-4'>a month</p>
            <p className='text-[#6C7B83] text-[14px] text-center'>with 500 contatcs</p>
        </div>
        <div className='border border-gray-300 w-[246px] px-4 py-8'>
            <div className='flex gap-28'>
                <h3 className='font-bold text-[24px]'>Free</h3>
                <img src={circle} alt="" />
            </div>
            <p className='text-[#6C7B83] w-[200px] text-sm'>
            All the basics for businesses that are just getting started.
            </p>
            <p className='text-[#6C7B83] text-sm font-normal text-center pt-20'>You’ll pay</p>
            <h4 className='text-[64px] text-center'><span className='relative top-[-24px] text-[24px] text-[#000000]'>$</span>0</h4>
            <p className='text-[#6C7B83] text-[14px] text-center p-4'>a month</p>
            <p className='text-[#6C7B83] text-[14px] text-center'>2,000 contatcs maximum</p>
        </div>
    </div>
  )
}

export default Card