import React from 'react'
import img02 from '../assets/img/img-02.png'

const How = () => {
  return (
    <div className='py-10'>
          <div className='container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2'>
            <div>
              <img src={img02} alt="" />
            </div>
            <div>
              <h3 className='text-[36px] mt-5 text-[#4D4D4D] md:mt-0 font-semibold'>How to design your site footer like<br/> we did</h3>
              <p className='text-[14px] text-[#717171] my-5'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
              <a href="#" className='inline-flex justify-center items-center py-3 px-8 mt-5 bg-[#4CAF4F] text-white rounded-md'>Learn More</a>
            </div>
          </div>
    </div>
  )
}

export default How