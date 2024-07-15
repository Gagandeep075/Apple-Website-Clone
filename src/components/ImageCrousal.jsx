import React, { useEffect, useRef, useState } from 'react';
import { hightlightsSlides } from '../constants';
import { pauseImg, playImg, replayImg, ipadFirstLarge } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ImageCrousal = () => {
    const imageSpanRef = useRef([]);
    const imageDivRef = useRef([]);
    const [count, setCount] = useState(0);
    const [scount, setSCount] = useState(0);

    useGSAP(() => {
        gsap.to('#slider', {
            transform: `translateX(${-100 * 1}%)`,
            delay: 3,
            duration: 2,
            ease: 'power2.inOut'
        });
        gsap.to('#slider', {
            transform: `translateX(${-100 * 2}%)`,
            delay: 10,
            duration: 2,
            ease: 'power2.inOut'
        });
        gsap.to('#slider', {
            transform: `translateX(${-100 * 3}%)`,
            delay: 15,
            duration: 2,
            ease: 'power2.inOut'
        });
    });

    useEffect(() => {
        const countInterval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount >= 99) {
                    clearInterval(countInterval);
                    return prevCount;
                }
                return prevCount + 1;
            });
        }, 30);

        return () => clearInterval(countInterval);
    }, []);

    useEffect(() => {
        const scountInterval = setInterval(() => {
            setSCount(prevSCount => {
                if (prevSCount >= 99) {
                    clearInterval(scountInterval);
                    return prevSCount;
                }
                return prevSCount + 1;
            });
        }, 55);

        return () => clearInterval(scountInterval);
    }, []);

    const span = imageSpanRef.current;
    useEffect(() => {
      

        gsap.to(imageDivRef.current[0], {
            width: window.innerWidth < 760
                ? '10vw'
                : window.innerWidth < 1200
                    ? '10vw'
                    : '4vw'
        });
        gsap.to(imageDivRef.current[1], {
            width: window.innerWidth < 760
                ? '10vw'
                : window.innerWidth < 1200
                    ? '10vw'
                    : '4vw',
            delay: 3
        });
        gsap.to(imageDivRef.current[2], {
            width: window.innerWidth < 760
                ? '10vw'
                : window.innerWidth < 1200
                    ? '10vw'
                    : '4vw',
            delay: 10
        });
        gsap.to(imageDivRef.current[3], {
            width: window.innerWidth < 760
                ? '10vw'
                : window.innerWidth < 1200
                    ? '10vw'
                    : '4vw',
            delay: 15
        });

        gsap.to(span[0], {
            width: `${count}%`,
            backgroundColor: 'white'
        });
        
        // if (count === 99) {
        //     console.log('this is done');
        //     // gsap.to(span[0], {
        //     //     width: 0,
               
        //     // });
        //     gsap.to(imageDivRef.current[0], {
        //         width: '12px',
               
        //     });
        // }
        console.log('it is happening')
    }, [count]);

    useEffect(()=>{gsap.to(span[1], {
        width: `${scount}%`,
        delay: 3,
        backgroundColor: 'white'
    });
    gsap.to(span[2], {
        width: `${scount}%`,
        delay: 10,
        backgroundColor: 'white'
    });
    gsap.to(span[3], {
        width: `${scount}%`,
        delay: 15,
        backgroundColor: 'white'
    });
},[scount])

    useEffect(() => {

        if (count === 99) {
            console.log('it should only run once only');
            // gsap.to(imageSpanRef.current[0], {
            //     width: 0,
            //     delay: 1
            // });
            gsap.to(imageDivRef.current[0], {
                width: '12px',
                
            });
        }

        console.log('it should run once')
    }, [count]); 

    useEffect(() => {

        if (scount === 99) {
            console.log('it should only run once only');
            // gsap.to(imageSpanRef.current[0], {
            //     width: 0,
            //     delay: 1
            // });
            gsap.to(imageDivRef.current[1], {
                width: '12px',
                delay:4
                
                
            });
            gsap.to(imageDivRef.current[2], {
                width: '12px',
                delay:9
                
            });gsap.to(imageDivRef.current[3], {
                width: '12px',
                delay: 15
                
            });
        }

        console.log('it should run once')
    }, [scount]); 


    return (
        <>
            <div className='flex items-center'>
                {hightlightsSlides.map((list, i) => (
                    <div key={list.id} id='slider' className='sm:pr-20 pr-10'>
                        <div className='video-carousel_container'>
                            <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                                <img src={list.Image} />
                            </div>
                            <div className='absolute top-12 left-[5%] z-10'>
                                {list.ImageText.map((text) => (
                                    <p key={text} className='md:text-2xl text-xl font-medium'>
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='relative flex-center mt-10'>
                <div className='flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
                    {hightlightsSlides.map((_, i) => (
                        <span key={i}
                            ref={(el) => (imageDivRef.current[i] = el)}
                            className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'>
                            <span className='absolute h-full w-full rounded-full'
                                ref={(el) => (imageSpanRef.current[i] = el)} />
                        </span>
                    ))}
                </div>
                <button className='control-btn'>
                    {/* <img src={isLastVideo ? replayImg :
                        !isPlaying ? playImg : pauseImg}
                        alt={isLastVideo ? 'replay' :
                            !isPlaying ? 'play' : 'pause'}
                        onClick={isLastVideo
                            ? () => handleProcess('video-reset')
                            : !isPlaying
                                ? () => handleProcess('play')
                                : () => handleProcess('pause')
                        }
                    /> */}
                </button>
            </div>
        </>
    );
};

export default ImageCrousal;
