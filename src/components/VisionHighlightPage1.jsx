import React from 'react'
import { VisionHighImg, VisionV1, VisionV2 } from '../utils';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { VisionProImg } from '../utils';
import gsap from 'gsap';

const VisionHighlightPage1 = () => {

    useGSAP(() => {
        // gsap.to('#para',  {
        //   y: 20, // End at the original position
        //   opacity: 1,
        //   scrollTrigger: {
        //     trigger: '#page1',
        //     start: '200% top', // Start the animation when the top of #page1 is at the bottom of the viewport
        //     end: 'bottom center', // End the animation when the top of #page1 is at the top of the viewport
        //     scroller: '#main',
            
         
        //     scrub: true // Smooth animation linked to scroll position
        //   }
          
        // });
    
    },[]);    

  return (
    <section className='items-center h-[200%] ' id='main'>
    <div className='w-full relative overflow-hidden h-screen' id='page1'>
      <h1 id='para' className='text-5xl text-white font-bold y-0 top-36 ml-[20%] absolute text-center z-10'>
        Apple Vision Pro seamlessly blends digital<br /> content with your physical space.
        <br /><br />
        So you can work, watch, relive memories and<br /> connect in ways never before possible.
        <br /><br />
        The era of spatial computing is here.
      </h1>
      <video src={VisionV1} autoPlay muted loop  className='cover -z-0 visionvid' />
    </div>
    </section>
  )
}

export default VisionHighlightPage1