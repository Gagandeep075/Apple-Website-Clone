import React, { useEffect, useRef } from 'react';
import { VisionHighImg, VisionV1, VisionV2 } from '../utils';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { VisionProImg } from '../utils';
import gsap from 'gsap';
import VisionHighlightPage1 from './VisionHighlightPage1';

gsap.registerPlugin(ScrollTrigger);

const VisionHighlights = () => {
  useGSAP(() => {
    // gsap.fromTo('#para', {
    //   y: '100%', // Start from below the view
    //   opacity: 0
    // }, {
    //   y: '0%', // End at the original position
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: '#page1',
    //     start: 'top 20%', // Start the animation when the top of #page1 is at the bottom of the viewport
    //     end: 'bottom 45%', // End the animation when the top of #page1 is at the top of the viewport
    //     scroller: '#main',
        
     
    //     scrub: true // Smooth animation linked to scroll position
    //   }
      
    // });

    // gsap.fromTo('#para2', {
    //   y: '100%', // Start from below the view
    //   opacity: 0
    // }, {
    //   y: '0%', // End at the original position
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: '#page2',
      
    //     start: 'top 20%', // Start the animation when the top of #page1 is at the bottom of the viewport
    //     end: 'top center', // End the animation when the top of #page1 is at the top of the viewport
    //     scroller: '#main',
        
    //     scrub: true // Smooth animation linked to scroll position
    //   }
    // });
   

  }, []);





  return (
    <section className='items-center h-[200%] overflow-hidden no-scrollbar ' id='main'>

      <VisionHighlightPage1 />
      {/* <div className='w-full relative h-screen' id='page1'>
        <h1 id='para' className='text-5xl text-white font-bold top-[15%] ml-[20%] absolute text-center z-10'>
          Apple Vision Pro seamlessly blends digital<br /> content with your physical space.
          <br /><br />
          So you can work, watch, relive memories and<br /> connect in ways never before possible.
          <br /><br />
          The era of spatial computing is here.
        </h1>
        <video src={VisionV1} autoPlay muted loop  className='cover -z-0 visionvid' />
      </div> */}


      <div className='w-full h-full flex flex-col item-center justify-center bg-white'>
        
      <img src={VisionProImg} height={300} width={300} className='z-10 mt-10 mb-10 m-auto' />
     
      
      <img src={VisionHighImg} className='z-0 m-auto w-[70%]' />

      <div className='z-10  items-center rounded-full border-black border-4 m-auto hover:bg-black w-[15%] transition-colors duration-300 '>
        <p className='text-black text-l font-semibold m-auto ml-1 p-5 hover:text-white transition-colors duration-300 '> +&nbsp;&nbsp;  Take a Closer look</p>
      </div>
      
    </div>


    <div className='w-full flex flex-col relative h-screen' id='page2'>
      
        <h1 id='para2' className='text-7xl text-white font-bold top-[30%] ml-[20%] absolute text-center z-10'>
         
        <span className='text-4xl text-white font-bold'> Apps</span>
        <br />
          Free your desktop.
          <br />
         And your apps will follow.
         
        </h1>
        <video src={VisionV2} autoPlay muted loop  className='cover -z-0' />
      </div>
      

      <div className='bg-white w-full h-full  flex flex-row justify-around items-center'>
        <div className='w-[50%] ml-[20%]'>
        <h1 className='text-black text-3xl font-bold w-[50%]'>Your app live in you space</h1>
        </div>
        <div className='w-[50%] mr-[10%]'>
        <p className='text-gray text-xl font-bold '>
        With Apple Vision Pro, you have an infinite canvas that transforms how you use the apps you love. Arrange apps anywhere and scale them to the perfect size, making the workspace of your dreams a reality — all while staying present in the world around you. Browse the web in Safari, create a to‑do list in Notes, chat in Messages, and seamlessly move between them with a glance. You can even bring your Mac workflows into Apple Vision Pro wirelessly with Mac Virtual Display
        </p>

        
      <div className='z-10 bg-orange-500 items-center rounded-full  mt-20 hover:bg-black w-[55%] transition-colors duration-300 '>
        <p className='text-white text-xl font-semibold m-auto ml-1 p-5 hover:text-white transition-colors duration-300 '> +&nbsp;&nbsp;  Learn more about apps</p>
      </div>
        </div>
      </div>
    
      
      
     
    </section>
  );
}

export default VisionHighlights;
