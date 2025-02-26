import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Demo = () => {
  return (
    <div className='bg-[#F5F7FA] py-10 flex justify-center text-center'>
      <div>
        <h3 className='text-[#263238] text-[64px] font-semibold leading-[1.2]'>Pellentesque suscipit<br/> fringilla libero eu.</h3>
        <a className='inline-flex justify-center items-center py-3 px-8 mt-5 bg-[#4CAF4F] text-white rounded-md' href="#">Get a Demo <HiOutlineArrowNarrowRight className='ml-2' /></a>
      </div>
    </div>
  )
}

export default Demo