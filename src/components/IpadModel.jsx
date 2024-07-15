import React, { useState } from 'react';
import { s1A, s1B, s2A, s3A, s3B, s4A } from '../utils';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const IpadModel = () => {
    const [count, setCount] = useState(1);

    const imageControl = () => {
        gsap.to('.slider', {
            transform: `translateX(${-100 * count}%)`,
            duration: 1,
            zoom: 1,
            ease: 'power2.inOut'
        });

        setCount(prevCount => (prevCount < 3 ? prevCount + 1.2 : 0));
    };

    useGSAP(()=>{
        gsap.to('#heading', {
            y:0, opacity:1
        })
    }, [])

    return (
        <section className='common-padding'>
            <div className='screen-max-width'>
                <h1 id='heading' className='section-heading '>
                    Take a closer look
                </h1>
                <div className='flex flex-wrap items-center mt-5'>
                    <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden flex flex-row relative'>
                        <img src={s1A} className='slider' />
                        <img src={s1B} className='slider' />
                        <img src={s3A} className='slider' />
                        <img src={s3B} className='slider' />
                        <img  src={s2A} className='slider w-200' />
                        
                        <img src={s4A} className='slider' />
                    </div>
                    <button onClick={imageControl}>Touch me</button>
                </div>
            </div>
        </section>
    );
};

export default IpadModel;
