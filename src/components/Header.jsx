import React from 'react'
import HeaderImg from '../assets/img/header-img.png'


const Header = () => {
  return (
    <div className='bg-[#F5F7FA] h-auto md:h-[600px] flex items-center'>
      <div className='container mx-auto max-w-[1320px] p-10 flex flex-col md:flex-row md:justify-between items-center md:p-0'>
        <div>
          <h1 className='text-[64px] font-semibold text-[#4D4D4D] leading-[1]'>Lessons and insights <br /> <span className='text-[#4CAF4F]'>from 8 years</span></h1>
          <p className='text-[#717171] mt-5'>Where to grow your business as a photographer: site or social media?</p>
          <a href="#" className='inline-flex justify-center items-center py-3 px-8 mt-10 bg-[#4CAF4F] text-white rounded-md'>Register</a>
        </div>
        <div>
          <img src={HeaderImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header