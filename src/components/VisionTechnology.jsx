import React from 'react'
import { VisionV2, VisionV4, VisionV1 } from '../utils'

const VisionTechnology = () => {
  return (
    <section className='items-center h-[200%] ' id='main'>
    <div className='w-full relative overflow-hidden h-screen' id='page1'>
      <h1 id='para' className='text-4xl w-[30%] text-white font-bold y-0 top-36 mt-20 ml-[60%] absolute text-center z-10'>
      Our most advanced Spatial Audio system ever.
        <p className='text-gray text-xl'>Dual-driver audio pods positioned next to each ear deliver personalized sound while letting you hear what’s around you. <span className='text-white'>Spatial Audio</span> makes sounds feel like they’re coming from your surroundings. Audio ray tracing analyzes your room’s acoustic properties to adapt and match sound to your space. And if you want to use headphones with Apple Vision Pro, AirPods Pro (2nd generation) with USB‑C offer the perfect experience, featuring Lossless Audio with ultra-low latency enabled by the H2 chip in both devices.</p>
      </h1>
      <video src={VisionV4} autoPlay muted loop  className='cover -z-0 visionvid' />
    </div>
    </section>
  )
}

export default VisionTechnology