import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo, largeIpad} from '../utils'
import { useState } from 'react'
import { useEffect } from 'react'
const HeroIpad = () => {

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
        gsap.to('#hero',{opacity: 1,scale: 1.5,duration:1.5, delay:3})
        gsap.to('#cta',{opacity:1, y:-50,duration:1.5,  delay: 3.5})
    }, [])


  return (
    <section className="w-full nav-height  bg-black relative">
        
         
        <div className="h-5/6 w-full flex-center flex-col">
         
        <p id="hero" className="hero-title pt-20 z-10 "><span className='text-white'>iPad Pro</span><br/> <span className='rainbow-text' > Thinpossible </span></p>
      
            <div className='md:w-10/12 w-5/12'>
                <video className='pointer-events-none -z-10 ipvid'  autoPlay muted playsInline={true} key={videoSrc}>
                    <source src={largeIpad} type='video/mp4'/>
                </video>
            </div>
        </div>

        <div id="cta"
        className='flex flex-col items-center opacity-0
        translate-y-20'>
            <a href='#hightlights' className='btn'>Buy</a>
            <p className='font-normal text-xl'>From $199/month or $999</p>
        </div>
    </section>
  )
}

export default HeroIpad