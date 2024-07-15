import React from 'react'
import { VisionV3, Vision_pic1, Vision_pic2, Vision_pic3 } from '../utils'

const VisionProPicHighlight = () => {
  return (
    <section className='w-full flex flex-col items-center justify-between h-full bg-white'>
      <div className='w-full h-full mt-25 flex flex-row bg-white'>
        <img src={Vision_pic1} width={650} className='m-auto' />
        <img src={Vision_pic2} width={650} className='m-auto' />
      </div>

      <div className='w-full bg-white mt-30 p-20'>
        <video src={VisionV3} autoPlay type='mp4' loop muted width="100%" />
      </div>

 <div>
        <h1 className='text-gray w-[40%] font-semibold text-xl m-auto'>
          A Singular piece of <span className='text-black'>three-dimensionally formed laminated glass</span> acts as an optical surface
          for the cameras and sensors that view the world. it flows seamlessly into a <span className='text-black'>
          custom aluminum alloy frame</span> that gently curves to wrap around your face while serving as an attachement point for the <span className='text-black'>Light Seal.</span>
        </h1>
      </div>

      <div className='relative  p-20'>
        <img src={Vision_pic3} className='w-full' />

        <div className='absolute top-[75%] left-0 right-0 z-10 bg-orange-500 items-center rounded-full mt-20 hover:bg-black w-[30%] transition-colors duration-300 m-auto'>
          <p className='text-white text-xl font-semibold text-center p-5 hover:text-white transition-colors duration-300'>
            +&nbsp;&nbsp; Learn more about design
          </p>
        </div>
      
      </div>
    </section>
  )
}

export default VisionProPicHighlight
