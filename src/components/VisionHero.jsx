import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo, largeIpad, VisionVid, appleImg, VisionHeroV, VisionProImg} from '../utils'
import { useState } from 'react'
import { useEffect } from 'react'

const VisionHero = () => {
  
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo: heroVideo)

    const handleVideoSrcSet = () => {
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo)
        }else{
            setVideoSrc(heroVideo)
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', handleVideoSrcSet);

        return() => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    })
    useGSAP(()=>{
       
        gsap.to('#cta',{opacity:1, y:-130, delay: 1})
    }, [])


  return (
    <section className="w-full h-full nav-height items-center  bg-white relative">
        
        <div className=" w-full  flex-center flex-col">
        <div className="w-[43%] mb-0 flex-center flex-col">
         
           
                <video className='pointer-events-none '  autoPlay  muted playsInline={true} key={videoSrc}>
                    <source src={VisionHeroV} type='video/mp4'/>
                </video>
            
        </div>

      

        </div>

        <div id="cta"
        className='flex flex-col items-center opacity-0
        translate-y-20'>
            <img src={VisionProImg} height={300} width={300} />
           
            <p className='font-bold mt-3 text-center text-gray-500 text-2xl'>Pre-order starting 6.28 at 5:00 a.m. PT.
           <br/> Available starting 7.12</p>
        </div>
    </section>
  )
}

export default VisionHero