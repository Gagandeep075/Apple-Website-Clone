import React from 'react'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { exploreVideo, ipadVideo } from '../utils';
import { explore1Img } from '../utils';
import { explore2Img } from '../utils';
import { ipadRotatevid } from '../utils';
import { animateWithGsap } from '../utils/animations';

const IpadFeatures = () => {

    
    const videoRef = useRef();

    useGSAP(() => {

        gsap.to('#exploreVideo', {
            
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
                },
                onComplete: () => {
                    videoRef.current.play();
                }
        })    
        gsap.to('#exploreVideo2', {
            
            scrollTrigger: {
                trigger: '#exploreVideo2',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
                },
                onComplete: () => {
                    videoRef.current.play();
                }
        })   
        

        animateWithGsap('#features_title', {y:0, opacity:1})
        animateWithGsap('.g_grow', {scale: 1, opacity: 1, ease: 'power1'},
            {scrub: 5.5}
        );
        animateWithGsap('.g_text',{
            y:0, opacity: 1 , ease: 'power2.inOut', duration: 1
        });
        gsap.to('#mmtext', {
            zIndex: 10,
            
            ease: 'power2.inOut',
             duration: 2.8
        })
    }, [])


  return (
    <section className='h-full common-padding bg-black
    relative overflow-hidden'>
        <div className='screen-max-widt'> 
        <div className='mb-12 w-full'>
        <h1 id="features_title" 
        className='section-heading'>
            Explore the full story.
        </h1>
        </div>
        
        <div className='flex flex-col justify-center
        items-center overflow-hidden w-full'>
        <div className='mt-32 mb-24 pl-24 justify-center'>
        <h2 className='text-5xl lg:text-7xl
        font-semibold text-center '>
           Thrill.Sleeker.
        </h2>
        <p className='feature-text g_text text-3xl mt-5'>
                    The all-new iPad Pro packs astonishing power into an 
                    unbelivable thin, light and portable design. Push the limits of what's 
                    possible on iPad with a superportable 11-inch model and an expansive 13-inch model that is {' '}
                    
                    <span className='text-white'>
                    the thinnest product Apple has ever created.
                    </span>,
                    
                    </p>
       
        </div>

        <div className='flex-center flex-col mb-30 sm:px-10'>
        <div className='relative h-[150vh] w-full flex items-center'>
        <video 
            playsInline 
            id='exploreVideo2'
            className='w-full h-full object-cover object-center z-10' 
            preload='none' 
            autoPlay 
            muted 
            ref={videoRef}
            style={{ position: 'relative', top: 0, left: 0 }}
        >
            <source src={ipadRotatevid} type='video/mp4'/>
        </video>


            <h1 className='text-3xl lg:text-5xl absolute
        font-semibold mr-0 -z-10 '
        id='mmtext'
        style={{left: 300}}
         
         > 5.5 mm <br/> <span className='text-gray text-xl'>thin and light design</span>
         </h1>
        </div>
        </div>

        <h2 className='text-5xl lg:text-7xl
        font-semibold text-center mt-50'>
           The world's most <br/> advanced display.
        </h2>



     
        <div className='flex-center flex-col mt-10 sm:px-10'>
        <div className='relative h-[100vh] w-full flex items-center'>
        <video 
            playsInline 
            id='exploreVideo'
            className='w-full h-full object-cover object-center z-10' 
            preload='none' 
            autoPlay 
            muted 
            ref={videoRef}
            style={{ position: 'relative', top: 0, left: 0 }}
        >
            <source src={ipadVideo} type='video/mp4'/>
        </video>


            
        </div>
        </div>


        
        
        
           
        
        
            

                

          
        </div>
        </div>

    </section>

  )
}

export default IpadFeatures